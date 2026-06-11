import {Module} from '@nestjs/common';
import { CreateTaskUseCase } from '../application/create-task.use-case';
import { TaskRepositoryImpl } from './persistence/task.repository.impl';
import { TaskController } from './controlers/task.controller';
import { ITaskRepositoryToken } from '../domain/task.repository.interface';

@Module({
    controllers: [ TaskController ],
    providers: [
        CreateTaskUseCase,
        {
            provide: ITaskRepositoryToken,
            useClass: TaskRepositoryImpl     // Cambiar si la DB cambia, por ejemplo, a MongoDB o PostgreSQL
        }
    ],
    exports: [ CreateTaskUseCase ]
})

export class TaskModule {}