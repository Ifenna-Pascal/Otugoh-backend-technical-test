import { Module } from '@nestjs/common';
import { WizardsController } from './wizards.controller';
import { WizardsService } from './wizards.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({})
export class WizardsModule {}
