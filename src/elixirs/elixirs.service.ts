import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateElixirsDTO, FilterElixirs } from './elixirs.dto';
import { Elixirs, ElixirsDocument } from './elixirs.schema';

@Injectable()
export class ElixirsService {
  constructor(
    @InjectModel(Elixirs.name)
    private readonly ElixirsModel: Model<ElixirsDocument>,
  ) {}

  async createElixirs(newElixirsDTO: CreateElixirsDTO): Promise<Elixirs> {
    const newElixirs = await this.ElixirsModel.create(newElixirsDTO);
    return newElixirs;
  }

  async getFilteredElixirss(
    filter: FilterElixirs,
  ): Promise<Elixirs | Elixirs[]> {
    const { search } = filter;
    const filteredElixirs = await this.ElixirsModel.find({
      $or: [
        {
          name: { $regex: search, $options: 'i' },
        },
        { difficulty: { $regex: search, $options: 'i' } },
      ],
    });
    return filteredElixirs;
  }

  async getElixirsByName(name: string): Promise<Elixirs> {
    const Elixirs = await this.ElixirsModel.findOne({ name: name });
    return Elixirs;
  }

  async getAllElixirss(): Promise<Elixirs[]> {
    return await this.ElixirsModel.find().exec();
  }

  async getElixirsById(id: string): Promise<Elixirs> {
    return await this.ElixirsModel.findById(id).exec();
  }

  async updateElixirs(
    id: string,
    ElixirsDTO: CreateElixirsDTO,
  ): Promise<Elixirs> {
    return await this.ElixirsModel.findByIdAndUpdate(id, ElixirsDTO).exec();
  }

  async deleteElixirs(id: string): Promise<Elixirs> {
    return await this.ElixirsModel.findByIdAndDelete(id).exec();
  }
}
