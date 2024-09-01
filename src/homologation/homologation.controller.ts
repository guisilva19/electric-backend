import { ApiTags } from '@nestjs/swagger';
import { HomologationService } from './homologation.service';
import { Body, Controller, Post } from '@nestjs/common';
import { HomologationDTO } from './homologation.dto';

@ApiTags('Homologação')
@Controller('homologation')
export class HomologationController {
  constructor(private readonly homologationService: HomologationService) {}

  @Post()
  async createHomologation(@Body() homologation) {
    return await this.homologationService.createHomologation(homologation);
  }
}
