import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ScaleService } from './scale.service';
import { CreateScaleDto } from './dto/create-scale.dto';
import { UpdateScaleDto } from './dto/update-scale.dto';

@Controller('scale')
export class ScaleController {
  constructor(private readonly scaleService: ScaleService) { }

  @Post(':name')
  create(@Param('name') name: string, @Body() createScaleDto: CreateScaleDto) {
    return this.scaleService.create(createScaleDto, name);
  }

  @Get()
  findAll() {
    return this.scaleService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.scaleService.findOne(name);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateScaleDto: UpdateScaleDto) {
    return this.scaleService.update(id, updateScaleDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.scaleService.remove(id);
  }
}
