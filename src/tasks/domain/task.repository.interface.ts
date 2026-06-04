//! Dealer (contrarador del repositorio)
import {Task} from './task.entity';

export interface ITaskRepository{
    create(): Promise<Task>;
    findAll(): Promise<Task[]>;
    findById(id: string): Promise<Task | null>;
}

// Token para la inyeccion de dependencias 
export const ITaskRepositoryToken = Symbol ('ITaskRepository');