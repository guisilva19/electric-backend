import { Injectable } from '@nestjs/common';
import { ConnectionService } from 'src/connection/connection.service';
import { HomologationDTO } from './homologation.dto';
import { PaymentsService } from 'src/payment/payment.service';

@Injectable()
export class HomologationService {
  constructor(
    private readonly db: ConnectionService,
    private readonly paymentsService: PaymentsService,
  ) {}

  async createHomologation(homologation: HomologationDTO) {
    const createUser = await this.db.homologation.create({
      data: {
        ...homologation,
      },
    });

    const { url } = await this.paymentsService.createPaymentLink(
      createUser?.id,
    );

    return this.db.homologation.update({
      where: {
        id: createUser.id,
      },
      data: {
        link_payment: url,
      },
    });
  }

  async list(id: string) {
    return this.db.homologation.findUnique({
      where: {
        id: id,
      },
      select: {
        documentos: true,
      },
    });
  }

  async listAll() {
    return this.db.homologation.findMany({
      select: {
        documentos: true,
      },
    });
  }
}
