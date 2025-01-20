import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from './health.controller';
import { HealthService } from './health.service';

describe('HealthController', () => {
  let controller: HealthController;
  let healthService: HealthService;

  beforeEach(async () => {
    const mockHealthService = {
      get: jest.fn(() => ({ message: 'Up' })),
    }

    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [
        {
          provide: HealthService,
          useValue: mockHealthService,
        }
      ]
    }).compile();

    controller = module.get<HealthController>(HealthController);
    healthService = module.get<HealthService>(HealthService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return the value of the service', () => {
    jest.spyOn(healthService, 'get').mockReturnValue({ message: 'Up' });

    const result = controller.get();

    expect(result).toEqual({ message: 'Up' });
    expect(healthService.get).toHaveBeenCalledTimes(1);
  });
});
