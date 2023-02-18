import { Module } from '@nestjs/common';
import { WizardsController } from './wizards.controller';
import { WizardsService } from './wizards.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WizardSchema } from './wizard.schema';
import { SpellModule } from 'src/spell/spell.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Wizard', schema: WizardSchema }]),
    SpellModule,
  ],
  controllers: [WizardsController],
  providers: [WizardsService],
})
export class WizardsModule {}
