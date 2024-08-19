import { Injectable } from '@nestjs/common';
import { ConnectionService } from 'src/connection/connection.service';
import { HomologationDTO } from './homologation.dto';

@Injectable()
export class HomologationService {
  constructor(private readonly db: ConnectionService) {}

  async createHomologation(homologation: HomologationDTO) {
    return await this.db.homologation.create({
      data: homologation,
    });
  }
}
