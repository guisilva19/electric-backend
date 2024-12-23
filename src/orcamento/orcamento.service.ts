import { Injectable } from '@nestjs/common';
import { ConnectionService } from 'src/connection/connection.service';
import { OrcamentoDTO } from './orcamento.dto';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

@Injectable()
export class OrcamentoService {
  constructor(private readonly db: ConnectionService) {}

  async create(body: OrcamentoDTO) {
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

  async listAll(page: number = 1) {
    const pageSize = 10;

    const skip = (page - 1) * pageSize;
    const take = pageSize;

    const [items, total] = await Promise.all([
      this.db.orcamento.findMany({
        skip,
        take,
        select: {
          id: true,
          nome: true,
          email: true,
          cidade: true,
          telefone: true,
          endereco: true,
          local: true,
          valor_da_conta_de_luz: true,
          created_at: true,
          updated_at: true,
        },
      }),
      this.db.orcamento.count(),
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
