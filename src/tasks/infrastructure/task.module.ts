import { Module } from '@nestjs/common'; // ← quitar Delete
import { CreateTaskUseCase } from '../application/create-task.use-case';
import { TasksController } from './controlers/task.controller'; // ← TasksController con "s"
import { ITaskRepositoryToken } from '../domain/task.repository.interface';
import { GetTaskByIdUseCase } from '../application/get-task-by-id.use-case';
import { UpdateTaskUseCase } from '../application/update-task.use-case';
import { DeleteTaskUseCase } from '../application/delete-task.use-case';
import { TaskRepositoryPrismaImpl } from './persistence/task.repository.prisma.impl';

@Module({
  controllers: [TasksController], // ← TasksController con "s"
  providers: [
    CreateTaskUseCase,
    GetTaskByIdUseCase,
    UpdateTaskUseCase,
    DeleteTaskUseCase,
    {
      provide: ITaskRepositoryToken,
      useClass: TaskRepositoryPrismaImpl,
    },
  ],
  exports: [CreateTaskUseCase],
})
export class TaskModule {}