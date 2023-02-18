import { Controller } from '@nestjs/common';
import { WizardsService } from './wizards.service';

@Controller('wizards')
export class WizardsController {
  constructor(private wizardsService: WizardsService) {}
}
