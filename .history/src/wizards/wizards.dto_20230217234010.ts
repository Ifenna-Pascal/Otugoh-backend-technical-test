import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateWizard {
  // Validates name field
  @IsString()
  @IsNotEmpty()
  public name: string;

  //
}
