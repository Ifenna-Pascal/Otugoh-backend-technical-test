import { Module } from '@nestjs/common';
import { SpellService } from './spell.service';

@Module({
  providers: [SpellService],
})
export class SpellModule {}
