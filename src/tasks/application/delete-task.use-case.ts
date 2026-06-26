import { Inject, NotFoundException } from "@nestjs/common";
import * as taskRepositoryInterface from "../domain/task.repository.interface";

export class DeleteTaskUseCase {
    constructor(
        @Inject(taskRepositoryInterface.ITaskRepositoryToken)
        private readonly taskRepository: taskRepositoryInterface.ITaskRepository
    ){}

    async execute(id: number): Promise<void>{
        const deleted = await this.taskRepository.delete(id);
        if(!deleted)
            throw new NotFoundException('La tarea ${id} no existe');
    }
}