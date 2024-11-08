import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { Casas } from './casas.model';
import { CasasService } from './casas.service';

@Controller('casas')
export class CasasController {
  constructor(private readonly casasService: CasasService) {}

  @Post()
  create(@Body() casas: Casas): Promise<Casas> {
    console.log('payload controller...', casas)
    return this.casasService.create(casas);
  }

  @Get()
  findAll(): Promise<Casas[]> {
    return this.casasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Casas> {
    return this.casasService.findOne(id);
  }

  @Get('imagem/:id')
  findImage(@Param('id') id: string): Promise<Casas> {
    return this.casasService.findImage(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() casas: Casas): Promise<Casas> {
    return this.casasService.update(id, casas);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Casas> {
    return this.casasService.remove(id);
  }
}
