import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, ParseIntPipe } from '@nestjs/common';
import { MusicService } from './music.service';
import { CreateMusicDto } from './dto/create-music.dto';

@Controller('music')
export class MusicController {
  constructor(private readonly musicService: MusicService) { }

  @Post()
  create(@Body() createMusicDto: CreateMusicDto) {
    return this.musicService.create(createMusicDto);
  }

  @Get()
  findAll() {
    return this.musicService.findAll();
  }

  @Get(':member')
  findOne(@Param('member') member: string) {
    if (typeof member === 'string') {
      return this.musicService.findOne(member);
    } else {
      throw new BadRequestException('Bad request! Try again!');
    }
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.musicService.remove(id);
  }
}
