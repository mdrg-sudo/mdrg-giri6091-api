import { Global, Module } from "@nestjs/common";
import { Prisma } from "@prisma/client/extension";
import { PrismaService } from "./prisma.service";

@Global()
@Module({
    providers: [PrismaService],
    exports: [PrismaService]
})

export class PrismaModule{}

