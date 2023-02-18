import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AssignDTO, CreateWizardDTO, FilterDTO } from './wizards.dto';
import { Wizard, WizardDocument } from './wizard.schema';

@Injectable()
export class WizardsService {
  constructor(
    @InjectModel(Wizard.name)
    private readonly WizardModel: Model<WizardDocument>,
  ) {}

  async createWizard(newWizardDTO: CreateWizardDTO): Promise<Wizard> {
    const newWizard = await this.WizardModel.create(newWizardDTO);
    return newWizard;
  }

  async getFilteredWizzards(filter: FilterDTO): Promise<Wizard[] | Wizard> {
    const { search } = filter;
    const filteredWizzard = await this.WizardModel.find({
      $or: [
        {
          firstname: { $regex: search, $options: 'i' },
        },
        { lastname: { $regex: search, $options: 'i' } },
      ],
    }).populate('spell');
    return filteredWizzard;
  }

  async getWizardByNickname(nickname: string): Promise<Wizard> {
    const wizard = await this.WizardModel.findOne({ nickname: nickname });
    return wizard;
  }

  async getAllWizards(): Promise<Wizard[]> {
    return await this.WizardModel.find().populate('spell').exec();
  }

  async getWizardById(id: string): Promise<Wizard> {
    return await (await this.WizardModel.findById(id))
      .populated('spell')
      .exec();
  }

  async updateWizard(id: string, wizardDTO: CreateWizardDTO): Promise<Wizard> {
    return await this.WizardModel.findByIdAndUpdate(id, wizardDTO).exec();
  }

  async deleteWizard(id: string): Promise<Wizard> {
    return await this.WizardModel.findByIdAndDelete(id).exec();
  }

  async asignSpellToWizzard(id: string, AssignDTO: AssignDTO): Promise<Wizard> {
    const { spell } = AssignDTO;
    return await this.WizardModel.findByIdAndUpdate(
      { _id: id },
      { spell: spell },
      { new: true },
    );
  }
}
