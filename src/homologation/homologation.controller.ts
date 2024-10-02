import { ApiTags } from '@nestjs/swagger';
import { HomologationService } from './homologation.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { HomologationDTO } from './homologation.dto';

@ApiTags('Homologação')
@Controller('homologation')
export class HomologationController {
  constructor(private readonly homologationService: HomologationService) {}

  @Post()
  async createHomologation(@Body() homologation: HomologationDTO) {
    return await this.homologationService.createHomologation(homologation);
  }

  @Get(':id')
  async listHomologation(@Param('id') id: string) {
    return await this.homologationService.list(id);
  }

  @Get()
  async listAllHomologations() {
    return await this.homologationService.listAll();
  }
}
