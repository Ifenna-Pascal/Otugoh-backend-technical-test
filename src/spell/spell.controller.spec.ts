import { Test, TestingModule } from '@nestjs/testing';
import { SpellController } from './spell.controller';

describe('SpellController', () => {
  let controller: SpellController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpellController],
    }).compile();

    controller = module.get<SpellController>(SpellController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
