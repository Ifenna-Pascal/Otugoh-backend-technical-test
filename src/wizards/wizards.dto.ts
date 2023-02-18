import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateWizardDTO {
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
  public nicknameame: string;
}
