import { PrismaService } from "@/prisma/prisma.service";
import { Task } from "@/tasks/domain/task.entity";
import { ITaskRepository } from "@/tasks/domain/task.repository.interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TaskRepositoryPrismaImpl implements ITaskRepository {

    constructor(private readonly prisma: PrismaService) { }

    async create(task: Task): Promise<Task> {
        const { id, ...data } = task;
        const created = await this.prisma.task.create({
            data: data
        });

        return new Task(
            created.id,
            created.title,
            created.description,
            created.status as Task['status'],
            created.createdAt
        );
    }

    async findAll(): Promise<Task[]> {
        const records = await this.prisma.task.findMany({
            orderBy: { createdAt: 'desc' }
        });

        //! git commit -m "Migración del repositorio a prisma"

        return records.map(r => new Task(
            r.id,
            r.title,
            r.description,
            r.status as Task['status'],
            r.createdAt
        ));
    }

    async findById(id: number): Promise<Task | null> {
        const record = await this.prisma.task.findUnique({
            where: { id }
        });

        if (!record) return null;

        return new Task(
            record.id,
            record.title,
            record.description,
            record.status as Task['status'],
            record.createdAt
        );
    }

    async update(task: Task): Promise<Task> {
        const updated = await this.prisma.task.update({
            where: { id: task.id ?? undefined },
            data: {
                title: task.title,
                description: task.description,
                status: task.status,
            }
        });

        return new Task(
            updated.id,
            updated.title,
            updated.description,
            updated.status as Task['status'],
            updated.createdAt
        );
    }

    async delete(id: number): Promise<boolean> {
        try {
            await this.prisma.task.delete({ where: { id } });
            return true;
        } catch (error) {
            return false;
        }
    }
}
//! npm i --save class-validator class-transformer

//! git add .
//! git commit -m "add: Configuración de los casos de uso para tareas"
//! git push