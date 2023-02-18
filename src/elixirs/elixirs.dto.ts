import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateElixirsDTO {
  // Validates name field
  @IsString()
  @IsNotEmpty()
  public name: string;
}

export class FilterElixirs {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public name: string;
}
