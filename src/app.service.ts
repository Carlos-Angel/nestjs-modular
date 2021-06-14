import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    private config: ConfigService,
    @Inject('TASKS') private tasks: any[],
  ) {}
  getHello(): string {
    // console.log('tasks:', this.tasks);
    return `api key: ${this.config.get('API_KEY')}`;
  }
}
