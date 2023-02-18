import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Query,
  Put,
  Delete,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { CreateWizardDTO, FilterDTO } from './wizards.dto';
import { WizardsService } from './wizards.service';

@Controller('wizards')
export class WizardsController {
  constructor(private wizardsService: WizardsService) {}

  @Post('/')
  async addWizard(@Body() CreateWizard: CreateWizardDTO) {
    const wizardExists = await this.wizardsService.getWizardByNickname(
      CreateWizard.nickname,
    );
    if (wizardExists) throw new ConflictException('user already exists');
    const wizard = await this.wizardsService.createWizard(CreateWizard);
    return wizard;
  }

  @Get('/')
  async getAllWizards(@Query() filter: FilterDTO) {
    if (Object.keys(filter).length) {
      const filteredWizzard = await this.wizardsService.getFilteredWizzards(
        filter,
      );
      return filteredWizzard;
    }
    const wizzards = await this.wizardsService.getAllWizards();
    if (!wizzards) throw new NotFoundException('wizzards not found');
    return wizzards;
  }

  @Get('/:id')
  async getWizzard(@Param('id') id: string) {
    const wizzard = await this.wizardsService.getWizardById(id);
    if (!wizzard) throw new NotFoundException('wizard not found');
    return wizzard;
  }

  @Put('/:id')
  async updateWizzard(
    @Param('id') id: string,
    @Body() createWizzard: CreateWizardDTO,
  ) {
    const updated = await this.wizardsService.updateWizard(id, createWizzard);
    if (!updated) throw new NotFoundException('update not founcd');
    return updated;
  }

  @Delete('/:id')
  async deleteWizard(@Param('id') id: string) {
    const deleted = await this.wizardsService.deleteWizard(id);
    if (!deleted) throw new NotFoundException('Wizard not found');
    return deleted;
  }
}
