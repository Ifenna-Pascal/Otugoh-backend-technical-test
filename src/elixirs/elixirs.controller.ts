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
import { CreateElixirsDTO, FilterElixirs } from './elixirs.dto';
import { ElixirsService } from './elixirs.service';

@Controller('elixir')
export class ElixirsController {
  constructor(private ElixirsService: ElixirsService) {}

  @Post('/')
  async addSpell(@Body() CreateElixir: CreateElixirsDTO) {
    const SpellExists = await this.ElixirsService.getElixirsByName(
      CreateElixir.name,
    );
    if (SpellExists) throw new ConflictException('Elixirs already exists');
    const Elixirs = await this.ElixirsService.createElixirs(CreateElixir);
    return Elixirs;
  }

  @Get('/')
  async getAllElixirs(@Query() filter: FilterElixirs) {
    if (Object.keys(filter).length) {
      const filteredElixirs = await this.ElixirsService.getFilteredElixirss(
        filter,
      );
      return filteredElixirs;
    }
    const Elixirs = await this.ElixirsService.getAllElixirss();
    if (!Elixirs) throw new NotFoundException('Elixirs not found');
    return Elixirs;
  }

  @Get('/:id')
  async getSpell(@Param('id') id: string) {
    const Elixirs = await this.ElixirsService.getElixirsById(id);
    if (!Elixirs) throw new NotFoundException('Elixirsnot found');
    return Elixirs;
  }

  @Put('/:id')
  async updateSpell(
    @Param('id') id: string,
    @Body() createElixirs: CreateElixirsDTO,
  ) {
    const updated = await this.ElixirsService.updateElixirs(id, createElixirs);
    if (!updated) throw new NotFoundException('update not founcd');
    return updated;
  }

  @Delete('/:id')
  async deleteSpell(@Param('id') id: string) {
    const deleted = await this.ElixirsService.deleteElixirs(id);
    if (!deleted) throw new NotFoundException('Elixirsnot found');
    return deleted;
  }
}
