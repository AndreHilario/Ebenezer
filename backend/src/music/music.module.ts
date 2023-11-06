import { Module } from '@nestjs/common';
import { MusicService } from './music.service';
import { MusicController } from './music.controller';
import { MusicRepository } from './music.repository';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [MusicController],
  providers: [MusicService, MusicRepository],
  imports: [PrismaModule]
})
export class MusicModule { }
