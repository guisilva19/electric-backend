import { Injectable } from '@nestjs/common';
import { ConnectionService } from 'src/connection/connection.service';

@Injectable()
export class HomologationService {
  constructor(private readonly db: ConnectionService) {}

  async createHomologation(homologation) {
    return await this.db.homologation.create({
      data: {
        ampliacao: true,
        modelo_do_inversor_homologado: homologation,
      },
    });
  }
}
