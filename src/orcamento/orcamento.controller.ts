import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { OrcamentoService } from './orcamento.service';
import { OrcamentoDTO } from './orcamento.dto';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt.guard';


@ApiTags('Orçameto')
@Controller('orcamento')
export class OrcamentoController {
  constructor(private readonly orcamentoService: OrcamentoService) {}

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
  @Get()
  async listAll(@Query('page') page: number = 1, @Query('status') status: number = 0) {
    return this.orcamentoService.listAll(page, status);
  }

  @Post()
  async newBudget(@Body() body: OrcamentoDTO) {
    return this.orcamentoService.create(body);
  }
}
