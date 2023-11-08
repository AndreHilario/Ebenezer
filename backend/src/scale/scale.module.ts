import { Module, forwardRef } from '@nestjs/common';
import { ScaleService } from './scale.service';
import { ScaleController } from './scale.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ScalesRepository } from './scale.repository';
import { MusicModule } from 'src/music/music.module';

@Module({
  exports: [ScaleService],
  controllers: [ScaleController],
  providers: [ScaleService, ScalesRepository],
  imports: [PrismaModule, forwardRef(() => MusicModule)],
})
export class ScaleModule { }
