import { Controller } from '@nestjs/common';

@Controller('wizards')
export class WizardsController {
  constructor(private wizardsService: WizardService);
}
