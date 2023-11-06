import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateMusicDto } from "./dto/create-music.dto";

@Injectable()
export class MusicRepository {
    constructor(private readonly prisma: PrismaService) { }

    async createMusician(data: CreateMusicDto) {
        return await this.prisma.music.create({
            data: {
                member: data.member,
                music_category: data.music_category,
                shift: data.shift,
            },
        });
    }

    async getAllMusician() {
        return await this.prisma.music.findMany();
    }

    async findMusicianByName(member: string) {
        return await this.prisma.music.findFirst({
            where: {
                member,
            },
        });
    }

    async removeMusician(id: number) {
        return await this.prisma.music.delete({
            where: {
                id,
            },
        });
    }
}