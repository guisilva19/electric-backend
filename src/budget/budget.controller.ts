import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetDTO } from './budget.dto';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt.guard';


@ApiTags('Orçameto')
@Controller('orcamento')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

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
    return this.budgetService.listAll(page, status);
  }

  @Post()
  async newBudget(@Body() body: BudgetDTO) {
    return this.budgetService.create(body);
  }

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('access-token')
    @Patch(':id')
    async updateBudget(@Param('id') id: string, @Body() body: any) {
      return await this.budgetService.update(id, body);
    }
}
