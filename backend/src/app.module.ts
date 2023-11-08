import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MusicModule } from './music/music.module';
import { ScaleModule } from './scale/scale.module';

@Module({
  imports: [PrismaModule, MusicModule, ScaleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
