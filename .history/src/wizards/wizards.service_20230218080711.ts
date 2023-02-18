import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateWizardDTO } from './wizards.dto';
import { Wizard, WizardDocument } from './wizard.schema';

@Injectable()
export class WizardsService {
  constructor(
    @InjectModel('Wizard') private readonly WizardModel: Model<WizardDocument>,
  ) {}

  async createWizard(newWizardDTO: )

}
