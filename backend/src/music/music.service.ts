import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMusicDto } from './dto/create-music.dto';
import { MusicRepository } from './music.repository';
import { Music } from './entities/music.entity';

@Injectable()
export class MusicService {
  constructor(
    private readonly musicRepository: MusicRepository
  ) { }

  async create(createMusicDto: CreateMusicDto) {
    const newMusician = new Music(createMusicDto.member, createMusicDto.music_category, createMusicDto.shift);
    return await this.musicRepository.createMusician(newMusician);
  }

  async findAll() {
    return await this.musicRepository.getAllMusician();
  }

  async findOne(member: string) {
    const musician = await this.musicRepository.findMusicianByName(member);
    if (!musician) throw new NotFoundException('Member not found!');

    return musician;
  }

  async remove(id: number) {
    return await this.musicRepository.removeMusician(id);
  }
}
