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

  //validates location
  @IsString()
  @IsNotEmpty()
  public location: string;

  // Validates for an integer
  @IsNumber()
  public age: number;

  //validates location
  @IsString()
  @IsNotEmpty()
  public location: string;
}
