import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ElixirsDocument = Elixirs & Document;

export enum Difficulty_Level {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

@Schema()
export class Elixirs {
  @Prop()
  name: string;

  @Prop({
    type: String,
    enum: Difficulty_Level,
    default: Difficulty_Level.Easy,
  })
  difficulty: Difficulty_Level;
}

export const ElixirsSchema = SchemaFactory.createForClass(Elixirs);
