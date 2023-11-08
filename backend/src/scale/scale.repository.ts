import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateScaleDto } from "./dto/create-scale.dto";

@Injectable()
export class ScalesRepository {
    constructor(private readonly prisma: PrismaService) { }

    async createMusicScale(data: CreateScaleDto) {
        return await this.prisma.scale.create({
            data: {
                date: new Date(data.date),
                type: data.type,
                musicId: data.musicId
            },
        });
    }

    async getAllScales() {
        return await this.prisma.scale.findMany();
    }

    async findScalesByMusicId(musicId: number) {
        return await this.prisma.scale.findMany({
            where: {
                musicId,
            },
        });
    }

    async removeScale(id: number) {
        return await this.prisma.music.delete({
            where: {
                id,
            },
        });
    }
}