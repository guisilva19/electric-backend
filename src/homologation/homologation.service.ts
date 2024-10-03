import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConnectionService } from 'src/connection/connection.service';
import { HomologationDTO } from './homologation.dto';
import { PaymentsService } from 'src/payment/payment.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class HomologationService {
  constructor(
    private readonly db: ConnectionService,
    private readonly paymentsService: PaymentsService,
    private readonly jwtService: JwtService,
  ) {}

  async createHomologation(homologation: HomologationDTO) {
    const createHomologation = await this.db.homologation.create({
      data: {
        ...homologation,
      },
    });

    const { url } = await this.paymentsService.createPaymentLink(
      createHomologation?.id,
    );

    return this.db.homologation.update({
      where: {
        id: createHomologation.id,
      },
      data: {
        link_payment: url,
      },
      select: {
        email: true,
        link_payment: true,
        status_payment: true,
        telefone: true,
        id: true,
      },
    });
  }

  async list(id: string, token: string) {
    const decoded = this.jwtService.decode(token);
    if (!decoded || typeof decoded !== 'object' || !decoded.id) {
      throw new UnauthorizedException('Token inválido ou ausente');
    }

    return this.db.homologation.findUnique({
      where: {
        id: id,
      },
      select: {
        documentos: true,
        ampliacao: true,
        cabo_do_padrao: true,
        carga_instalada: true,
        disjuntor_do_padrao: true,
        email: true,
        contas_receber_credito: true,
        distancia_entre_inversor_e_distribuicao: true,
        link_payment: true,
        modelo_do_inversor_homologado: true,
        modelo_do_inversor_inserido: true,
        modelo_do_modulo_homologado: true,
        nome: true,
        modelo_do_modulo_inserido: true,
        numero_conta_contrato: true,
        outras_conta_recebera_credito: true,
        quantidade_inversores_homologados: true,
        quantidade_inversores_inseridos: true,
        quantidade_medidores: true,
        quantidade_modulos_homologados: true,
        quantidade_modulos_inseridos: true,
        status_payment: true,
        telefone: true,
        tensao_de_fornecimento: true,
        tipo_de_ligacao: true,
        total_de_inversores: true,
        total_de_modulos: true,
        transformador: true,
        id: true,
      },
    });
  }

  async listAll(token: string) {
    const decoded = this.jwtService.decode(token);
    if (!decoded || typeof decoded !== 'object' || !decoded.id) {
      throw new UnauthorizedException('Token inválido ou ausente');
    }

    return this.db.homologation.findMany({
      select: {
        documentos: true,
        ampliacao: true,
        cabo_do_padrao: true,
        carga_instalada: true,
        disjuntor_do_padrao: true,
        email: true,
        contas_receber_credito: true,
        distancia_entre_inversor_e_distribuicao: true,
        link_payment: true,
        modelo_do_inversor_homologado: true,
        modelo_do_inversor_inserido: true,
        modelo_do_modulo_homologado: true,
        nome: true,
        modelo_do_modulo_inserido: true,
        numero_conta_contrato: true,
        outras_conta_recebera_credito: true,
        quantidade_inversores_homologados: true,
        quantidade_inversores_inseridos: true,
        quantidade_medidores: true,
        quantidade_modulos_homologados: true,
        quantidade_modulos_inseridos: true,
        status_payment: true,
        telefone: true,
        tensao_de_fornecimento: true,
        tipo_de_ligacao: true,
        total_de_inversores: true,
        total_de_modulos: true,
        transformador: true,
        id: true,
      },
    });
  }

  async listAllPaid(token: string) {
    const decoded = this.jwtService.decode(token);
    if (!decoded || typeof decoded !== 'object' || !decoded.id) {
      throw new UnauthorizedException('Token inválido ou ausente');
    }

    return this.db.homologation.findMany({
      where: {
        status_payment: true,
      },
      select: {
        documentos: true,
        ampliacao: true,
        cabo_do_padrao: true,
        carga_instalada: true,
        disjuntor_do_padrao: true,
        email: true,
        contas_receber_credito: true,
        distancia_entre_inversor_e_distribuicao: true,
        link_payment: true,
        modelo_do_inversor_homologado: true,
        modelo_do_inversor_inserido: true,
        modelo_do_modulo_homologado: true,
        nome: true,
        modelo_do_modulo_inserido: true,
        numero_conta_contrato: true,
        outras_conta_recebera_credito: true,
        quantidade_inversores_homologados: true,
        quantidade_inversores_inseridos: true,
        quantidade_medidores: true,
        quantidade_modulos_homologados: true,
        quantidade_modulos_inseridos: true,
        status_payment: true,
        telefone: true,
        tensao_de_fornecimento: true,
        tipo_de_ligacao: true,
        total_de_inversores: true,
        total_de_modulos: true,
        transformador: true,
        id: true,
      },
    });
  }

  async listAllNoPaid(token: string) {
    const decoded = this.jwtService.decode(token);
    if (!decoded || typeof decoded !== 'object' || !decoded.id) {
      throw new UnauthorizedException('Token inválido ou ausente');
    }

    return this.db.homologation.findMany({
      where: {
        status_payment: true,
      },
      select: {
        documentos: true,
        ampliacao: true,
        cabo_do_padrao: true,
        carga_instalada: true,
        disjuntor_do_padrao: true,
        email: true,
        contas_receber_credito: true,
        distancia_entre_inversor_e_distribuicao: true,
        link_payment: true,
        modelo_do_inversor_homologado: true,
        modelo_do_inversor_inserido: true,
        modelo_do_modulo_homologado: true,
        nome: true,
        modelo_do_modulo_inserido: true,
        numero_conta_contrato: true,
        outras_conta_recebera_credito: true,
        quantidade_inversores_homologados: true,
        quantidade_inversores_inseridos: true,
        quantidade_medidores: true,
        quantidade_modulos_homologados: true,
        quantidade_modulos_inseridos: true,
        status_payment: true,
        telefone: true,
        tensao_de_fornecimento: true,
        tipo_de_ligacao: true,
        total_de_inversores: true,
        total_de_modulos: true,
        transformador: true,
        id: true,
      },
    });
  }
}
