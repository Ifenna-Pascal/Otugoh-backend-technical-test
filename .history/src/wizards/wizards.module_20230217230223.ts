import { Module } from '@nestjs/common';
import { WizardsController } from './wizards.controller';
import { WizardsService } from './wizards.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WizardSchema } from './wizard.schema';

@Module({})
export class WizardsModule {}
