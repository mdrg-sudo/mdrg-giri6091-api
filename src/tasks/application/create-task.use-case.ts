import { Task } from "../domain/task.entity";
import type { ITaskRepository } from "../domain/task.repository.interface";
import { ITaskRepositoryToken } from "../domain/task.repository.interface";

// Capa de aplicacion(caso de uso)
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class CreateTaskUseCase{
    constructor(
        @Inject(ITaskRepositoryToken)
        private readonly taskRepository: ITaskRepository,
    ){}

    async execute(title: string, description: string): Promise<Task>{
     const crypto = await import("crypto"); //Genera el ID
        const task = new Task(
            crypto.randomUUID(),
            title,
            description,
            "PENDING",
            new Date(),
        );
        
    return await this.taskRepository.create(task);
    }

}