import { Test, TestingModule } from '@nestjs/testing';
import { InvertersController } from './inverters.controller';
import { InvertersService } from './inverters.service';

describe('InvertersController', () => {
  let controller: InvertersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvertersController],
      providers: [InvertersService],
    }).compile();

    controller = module.get<InvertersController>(InvertersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
