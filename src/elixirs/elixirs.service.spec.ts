import { Test, TestingModule } from '@nestjs/testing';
import { ElixirsService } from './elixirs.service';

describe('ElixirsService', () => {
  let service: ElixirsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ElixirsService],
    }).compile();

    service = module.get<ElixirsService>(ElixirsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
