import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { HomologationService } from './homologation.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { HomologationDTO } from './homologation.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';

@ApiTags('Homologação')
@Controller('homologation')
export class HomologationController {
  constructor(private readonly homologationService: HomologationService) {}

  @Post()
  async createHomologation(@Body() homologation: HomologationDTO) {
    return await this.homologationService.createHomologation(homologation);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Get(':id')
  async listHomologation(@Req() request, @Param('id') id: string) {
    const token = request.headers.authorization.split(' ')[1];
    return await this.homologationService.list(id, token);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Get('')
  async listAll(@Req() request) {
    const token = request.headers.authorization.split(' ')[1];
    return await this.homologationService.listAll(token);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Get('/paid')
  async listAllPaid(@Req() request) {
    const token = request.headers.authorization.split(' ')[1];
    return await this.homologationService.listAllPaid(token);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Get('/nopaid')
  async listAllNoPaid(@Req() request) {
    const token = request.headers.authorization.split(' ')[1];
    return await this.homologationService.listAllNoPaid(token);
  }
}
