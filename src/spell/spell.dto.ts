import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateSpellDTO {
  // Validates name field
  @IsString()
  @IsNotEmpty()
  public name: string;
}

export class FilterSpell {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public name: string;
}
