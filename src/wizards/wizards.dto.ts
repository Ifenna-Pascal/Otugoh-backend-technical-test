import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';
import { IsObjectId } from 'class-validator-mongo-object-id';

export class CreateWizardDTO {
  // Validates name field
  @IsString()
  @IsNotEmpty()
  public firstname: string;

  @IsString()
  @IsNotEmpty()
  public lastname: string;

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
  public nickname: string;
}

export class FilterDTO {
  // Validates name field
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public search: string;
}

export class AssignDTO {
  @IsObjectId({ message: 'Invalid mongoose ID' })
  @IsString()
  @IsNotEmpty()
  public spell: string;
}
