import { Test, TestingModule } from '@nestjs/testing';
import { WizardsService } from './wizards.service';

describe('WizardsService', () => {
  let service: WizardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WizardsService],
    }).compile();

    service = module.get<WizardsService>(WizardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
