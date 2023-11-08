import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateScaleDto } from './dto/create-scale.dto';
import { UpdateScaleDto } from './dto/update-scale.dto';
import { Scale } from './entities/scale.entity';
import { ScalesRepository } from './scale.repository';
import { MusicService } from 'src/music/music.service';

@Injectable()
export class ScaleService {
  constructor(
    private readonly scalesRepository: ScalesRepository,
    private readonly musicService: MusicService,
  ) { }

  async create(createScaleDto: CreateScaleDto, name: string) {
    const music = await this.musicService.findOne(name);
    if (!music) throw new NotFoundException("Music member not found!");
    const newScale = new Scale(createScaleDto.date, createScaleDto.type, music.id);
    return this.scalesRepository.createMusicScale(newScale);
  }

  async findAll() {
    return await this.scalesRepository.getAllScales();
  }

  async findOne(name: string) {
    const music = await this.musicService.findOne(name);
    if (!music) throw new NotFoundException("Music member not found!");
    return await this.scalesRepository.findScalesByMusicId(music.id);
  }

  async update(id: number, updateScaleDto: UpdateScaleDto) {
    return `This action updates a #${id} scale`;
  }

  async remove(id: number) {
    return await this.scalesRepository.removeScale(id);
  }
}
