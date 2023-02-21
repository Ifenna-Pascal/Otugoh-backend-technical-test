import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
export type WizardDocument = Wizard & Document;

@Schema()
export class Wizard {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Spell', required: false })
  spell: string;

  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  location: string;

  @Prop()
  nickname: string;

  @Prop()
  age: number;
}

export const WizardSchema = SchemaFactory.createForClass(Wizard);
