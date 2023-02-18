import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ElixirsDocument = Elixirs & Document;

@Schema()
export class Elixirs {
  @Prop()
  name: string;
}

export const ElixirsSchema = SchemaFactory.createForClass(Elixirs);
