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
}
