import { Body, Controller, Post } from '@nestjs/common';
import { OrcamentoService } from './orcamento.service';
import { OrcamentoDTO } from './orcamento.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Orçameto')
@Controller('orcamento')
export class OrcamentoController {
  constructor(private readonly orcamentoService: OrcamentoService) {}

  @Post()
  async newBudget(@Body() body: OrcamentoDTO) {
    return this.orcamentoService.create(body);
  }
}
