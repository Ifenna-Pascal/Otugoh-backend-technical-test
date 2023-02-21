import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEnum, IsString, IsOptional } from 'class-validator';
import { Difficulty_Level } from './elixirs.schema';

export class CreateElixirsDTO {
  // Validates name field
  @ApiProperty({
    description: 'Elixir Name',
  })
  @IsString()
  @IsNotEmpty()
  public name: string;

  @ApiProperty({
    description: 'Elixir Name',
    enum: Difficulty_Level,
    example: [
      Difficulty_Level.Easy,
      Difficulty_Level.Medium,
      Difficulty_Level.Hard,
    ],
  })
  @IsString()
  @IsNotEmpty()
  @IsEnum(Difficulty_Level)
  public difficulty: Difficulty_Level;
}

export class FilterElixirs {
  @ApiProperty({
    description: 'Search by name or difficulty of Elixirs',
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public search: string;
}
