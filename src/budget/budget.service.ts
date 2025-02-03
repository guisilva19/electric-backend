import { Injectable } from '@nestjs/common';
import { ConnectionService } from 'src/connection/connection.service';
import { BudgetDTO } from './budget.dto';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

@Injectable()
export class BudgetService {
  constructor(private readonly db: ConnectionService) {}

  async create(body: BudgetDTO) {
    await this.db.orcamento.create({
      data: body,
    });

    await resend.emails.send({
      from: 'Electric Power <epengenharia@thegenius.tech>',
      to: process.env.EMAIL_RECEIVED_BUDGET,
      subject: 'Novo orçamento solicitado',
      react: `Você recebeu uma nova solicitação de orçamento de ${body.nome}`,
    });
  }

  async update(id: string, { status }: { status: boolean }) {
    return await this.db.orcamento.update({
      where: {
        id: id,
      },
      data: {
        status,
      },
    });
  }

  async listAll(page: number = 1, status: number = 0) {
    const pageSize = 10;

    const skip = (page - 1) * pageSize;
    const take = pageSize;

    // Definir a condição de filtro baseado no status
    const statusFilter =
      Number(status) === 1
        ? { status: false }
        : Number(status) === 2
          ? { status: true }
          : {};

    const [items, total] = await Promise.all([
      this.db.orcamento.findMany({
        skip,
        take,
        where: statusFilter,
        select: {
          id: true,
          nome: true,
          email: true,
          cidade: true,
          telefone: true,
          endereco: true,
          local: true,
          status: true,
          valor_da_conta_de_luz: true,
          criado_em: true,
          atualizado_em: true,
        },
      }),
      this.db.orcamento.count({
        where: statusFilter,
      }),
    ]);

    return {
      items,
      total,
      page: Number(page),
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    };
  }
}
