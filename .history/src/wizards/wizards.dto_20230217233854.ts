export class CreateWizard {
  @IsString()
  @IsNotEmpty()
  public name: string;
}
