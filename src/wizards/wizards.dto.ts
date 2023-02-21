import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';
import { IsObjectId } from 'class-validator-mongo-object-id';
import { ApiProperty } from '@nestjs/swagger';

export class CreateWizardDTO {
  // Validates name field
  @ApiProperty({
    description: 'firstname of the witch',
  })
  @IsString()
  @IsNotEmpty()
  public firstname: string;

  @ApiProperty({
    description: 'lastname of the witch',
  })
  @IsString()
  @IsNotEmpty()
  public lastname: string;

  //validates location
  @ApiProperty({
    description: 'location of the witch',
  })
  @IsString()
  @IsNotEmpty()
  public location: string;

  // Validates for an integer
  @ApiProperty({
    description: 'age of the witch',
  })
  @IsNumber()
  public age: number;

  //validates location
  @ApiProperty({
    description: 'num of the witch',
  })
  @IsString()
  @IsNotEmpty()
  public nickname: string;
}

export class FilterDTO {
  // Validates name field
  @ApiProperty({
    description: 'search by either firstname or lastname',
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public search: string;

  // Validates page number field
  @ApiProperty({
    description: 'Query page number',
    required: true,
    default: '1',
  })
  @IsString()
  @IsNotEmpty()
  public pageNumber: string;

  // Validates page number field
  @ApiProperty({
    description: 'Number of documents to be limited',
    required: true,
    default: '1',
  })
  @IsString()
  @IsNotEmpty()
  public limit: string;
}

export class AssignDTO {
  @IsObjectId({ message: 'Invalid mongoose ID' })
  @IsString()
  @IsNotEmpty()
  public spell: string;
}
