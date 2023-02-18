import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateWizardDTO, FilterDTO } from './wizards.dto';
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
    const { firstname, lastname } = filter;
    console.log(filter);
    const filteredWizzard = await this.WizardModel.find({
      $or: [
        {
          firstname: { $regex: 'klen' },
        },
        { lastname: { $regex: 'manuel' } },
      ],
    });
    return filteredWizzard;
  }

  async getWizardByNickname(nickname: string): Promise<Wizard> {
    const wizard = await this.WizardModel.findOne({ nickname: nickname });
    return wizard;
  }

  async getAllWizards(): Promise<Wizard[]> {
    return await this.WizardModel.find().exec();
  }

  async getWizardById(id: string): Promise<Wizard> {
    return await this.WizardModel.findById(id).exec();
  }

  async updateWizard(id: string, wizardDTO: CreateWizardDTO): Promise<Wizard> {
    return await this.WizardModel.findByIdAndUpdate(id, wizardDTO).exec();
  }

  async deleteWizard(id: string): Promise<Wizard> {
    return await this.WizardModel.findByIdAndDelete(id).exec();
  }
}
