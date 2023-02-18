import { Test, TestingModule } from '@nestjs/testing';
import { ElixirsController } from './elixirs.controller';

describe('ElixirsController', () => {
  let controller: ElixirsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ElixirsController],
    }).compile();

    controller = module.get<ElixirsController>(ElixirsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
