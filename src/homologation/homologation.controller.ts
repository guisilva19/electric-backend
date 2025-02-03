import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { HomologationService } from './homologation.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
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
  async listHomologation(@Param('id') id: string) {
    return await this.homologationService.list(id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Get(':id')
  async updateHomologation(@Param('id') id: string, @Body() body: any) {
    return await this.homologationService.update(id, body);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Número da página (opcional, padrão 1)',
  })
  @ApiQuery({
    name: 'status',
    required: false,
    type: Number,
    description: 'Número do status (opcional, padrão 0)',
  })
  @Get('')
  async listAll(
    @Query('page') page: number = 1,
    @Query('status') status: number = 0,
  ) {
    return await this.homologationService.listAll(page, status);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Get('/paid')
  async listAllPaid() {
    return await this.homologationService.listAllPaid();
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Get('/nopaid')
  async listAllNoPaid(@Req() request) {
    const token = request.headers.authorization.split(' ')[1];
    return await this.homologationService.listAllNoPaid(token);
  }
}
