import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';
import { HealthResponse } from '@ugram/shared-types';

@Controller('health')
export class HealthController {
  constructor(
    private readonly healthService: HealthService
  ) {}

  @Get('')
  get(): HealthResponse {
    return this.healthService.get();
  }
}
