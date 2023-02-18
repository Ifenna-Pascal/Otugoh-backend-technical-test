import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateSpellDTO, FilterSpell } from './spell.dto';
import { Spell, SpellDocument } from './spell.schema';

@Injectable()
export class SpellService {
  constructor(
    @InjectModel(Spell.name)
    private readonly SpellModel: Model<SpellDocument>,
  ) {}

  async createSpell(newSpellDTO: CreateSpellDTO): Promise<Spell> {
    const newSpell = await this.SpellModel.create(newSpellDTO);
    return newSpell;
  }

  async getFilteredSpells(filter: FilterSpell): Promise<Spell | Spell[]> {
    const { name } = filter;
    const filteredSpell = await this.SpellModel.find({
      name: { $regex: name, $options: 'i' },
    });
    return filteredSpell;
  }

  async getSpellByName(name: string): Promise<Spell> {
    const Spell = await this.SpellModel.findOne({ name: name });
    return Spell;
  }

  async getAllSpells(): Promise<Spell[]> {
    return await this.SpellModel.find().exec();
  }

  async getSpellById(id: string): Promise<Spell> {
    return await this.SpellModel.findById(id).exec();
  }

  async updateSpell(id: string, SpellDTO: CreateSpellDTO): Promise<Spell> {
    return await this.SpellModel.findByIdAndUpdate(id, SpellDTO).exec();
  }

  async deleteSpell(id: string): Promise<Spell> {
    return await this.SpellModel.findByIdAndDelete(id).exec();
  }
}
