import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { HomologationService } from './homologation.service';
import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { HomologationDTO } from './homologation.dto';

@Controller('homologation')
export class HomologationController {
  constructor(private readonly homologationService: HomologationService) {}

  // @UseGuards(JwtAuthGuard)
  @Post()
  async createHomologation(@Body() homologation) {
    // const token = request.headers.authorization.split(' ')[1];

    
    return await this.homologationService.createHomologation(homologation)
  }
}
