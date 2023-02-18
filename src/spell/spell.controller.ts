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
import { CreateSpellDTO, FilterSpell } from './spell.dto';
import { SpellService } from './spell.service';

@Controller('spell')
export class SpellController {
  constructor(private SpellsService: SpellService) {}

  @Post('/')
  async addSpell(@Body() CreateSpell: CreateSpellDTO) {
    const SpellExists = await this.SpellsService.getSpellByName(
      CreateSpell.name,
    );
    if (SpellExists) throw new ConflictException('spell already exists');
    const Spell = await this.SpellsService.createSpell(CreateSpell);
    return Spell;
  }

  @Get('/')
  async getAllSpells(@Query() filter: FilterSpell) {
    if (Object.keys(filter).length) {
      const filteredSpell = await this.SpellsService.getFilteredSpells(filter);
      return filteredSpell;
    }
    const Spells = await this.SpellsService.getAllSpells();
    if (!Spells) throw new NotFoundException('Spells not found');
    return Spells;
  }

  @Get('/:id')
  async getSpell(@Param('id') id: string) {
    const Spell = await this.SpellsService.getSpellById(id);
    if (!Spell) throw new NotFoundException('Spell not found');
    return Spell;
  }

  @Put('/:id')
  async updateSpell(
    @Param('id') id: string,
    @Body() createSpell: CreateSpellDTO,
  ) {
    const updated = await this.SpellsService.updateSpell(id, createSpell);
    if (!updated) throw new NotFoundException('update not founcd');
    return updated;
  }

  @Delete('/:id')
  async deleteSpell(@Param('id') id: string) {
    const deleted = await this.SpellsService.deleteSpell(id);
    if (!deleted) throw new NotFoundException('Spell not found');
    return deleted;
  }
}
