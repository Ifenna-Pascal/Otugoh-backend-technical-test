import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

export type SpellDocument = Spell & Document;

@Schema()
export class Spell {
  //   @Prop({ type: SchemaTypes.ObjectId, ref: 'Wizard' })
  //   wizard: string;

  @Prop()
  name: string;
}

export const SpellSchema = SchemaFactory.createForClass(Spell);
