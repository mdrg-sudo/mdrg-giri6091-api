import { Controller, Get, Post, Body, Inject } from "@nestjs/common";
import { CreateTaskUseCase } from "@/tasks/application/create-task.use-case";
import type { ITaskRepository } from "@/tasks/domain/task.repository.interface";
import { ITaskRepositoryToken } from "@/tasks/domain/task.repository.interface";

@Controller("tasks")
export class TaskController {
  constructor(
    private readonly createTaskUseCase: CreateTaskUseCase,
    @Inject(ITaskRepositoryToken) private readonly taskRepository: ITaskRepository,
  ) {}

  @Get()
  async findAll() {
    return this.taskRepository.findAll();
  }

  @Post()
  async create(@Body() body: { title: string; description: string }) {
    return this.createTaskUseCase.execute(body.title, body.description);
  }
}