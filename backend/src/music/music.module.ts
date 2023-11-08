import { Module, forwardRef } from '@nestjs/common';
import { MusicService } from './music.service';
import { MusicController } from './music.controller';
import { MusicRepository } from './music.repository';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ScaleModule } from 'src/scale/scale.module';

@Module({
  exports: [MusicService],
  controllers: [MusicController],
  providers: [MusicService, MusicRepository],
  imports: [PrismaModule, forwardRef(() => ScaleModule)]
})
export class MusicModule { }
