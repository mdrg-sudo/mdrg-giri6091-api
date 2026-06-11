import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/infrastructure/task.module';

@Module({
  imports: [
    TaskModule
  ]
})
export class AppModule {}
