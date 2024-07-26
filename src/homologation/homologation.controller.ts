import { HomologationService } from './homologation.service';
import { Body, Controller, Post  } from '@nestjs/common';

@Controller('homologation')
export class HomologationController {
  constructor(private readonly homologationService: HomologationService) {}

  @Post()
  async createHomologation(@Body() homologation) {
    // const token = request.headers.authorization.split(' ')[1];
    return await this.homologationService.createHomologation(homologation);
  }
}
