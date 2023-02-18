import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SpellDocument = Spell & Document;

@Schema()
export class Spell {
  @Prop()
  name: string;
}

export const SpellSchema = SchemaFactory.createForClass(Spell);
