import { Injectable } from '@nestjs/common';
import { Task } from '@/tasks/domain/task.entity';
import { ITaskRepository } from '@/tasks/domain/task.repository.interface';

@Injectable()
export class TaskRepositoryImpl implements ITaskRepository {
    update(task: Task): Promise<Task> {
        throw new Error('Method not implemented.');
    }
    delete(id: string): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    private tasks: Task[] = [];

    async create( task: Task): Promise<Task> {
        this.tasks.push(task);
        return task;
    }

    async findAll(): Promise<Task[]> {
        return this.tasks;
         
    }
    async findById(id: string): Promise<Task | null> {
        return this.tasks.find(task => task.id === id) || null;
         
    }

}

//! npm i --save class-validator class-transformer