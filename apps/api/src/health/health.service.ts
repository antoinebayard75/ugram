import { Injectable } from '@nestjs/common';
import { HealthResponse } from '@shared-types';

@Injectable()
export class HealthService {
  get(): HealthResponse {
    return { message: 'Up' };
  }
}
