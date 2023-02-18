import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SpellController } from './spell.controller';
import { SpellSchema } from './spell.schema';
import { SpellService } from './spell.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Spell', schema: SpellSchema }]),
  ],
  exports: [SpellService],
  controllers: [SpellController],
  providers: [SpellService],
})
export class SpellModule {}
