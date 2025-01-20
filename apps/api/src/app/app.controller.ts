import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HealthResponse } from '@ugram/shared-types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(): HealthResponse {
    return this.appService.getData();
  }
}
