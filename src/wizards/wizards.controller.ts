import { Body, Controller, Post } from '@nestjs/common';
import { CreateWizardDTO } from './wizards.dto';
import { WizardsService } from './wizards.service';

@Controller('wizards')
export class WizardsController {
  constructor(private wizardsService: WizardsService) {}

  @Post('/')
  async addWizard(@Body() CreateWizardDTO: CreateWizardDTO) {
    const wizard = await this.wizardsService.createWizard(CreateWizardDTO);
    return wizard;
  }
}
