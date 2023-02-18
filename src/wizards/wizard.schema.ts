import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WizardDocument = Wizard & Document;

@Schema()
export class Wizard {
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
