import { Task } from "../domain/task.entity";
import type { ITaskRepository } from "../domain/task.repository.interface";
import { ITaskRepositoryToken } from "../domain/task.repository.interface";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class CreateTaskUseCase {
    constructor(
        @Inject(ITaskRepositoryToken)
        private readonly taskRepository: ITaskRepository,
    ) {}

    async execute(title: string, description: string): Promise<Task> {
        const task = new Task(
            null,          // 👈 Prisma genera el id automáticamente
            title,
            description,
            "PENDING",
            new Date(),
        );
        return await this.taskRepository.create(task);
    }
}