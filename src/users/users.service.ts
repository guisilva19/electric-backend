import { Injectable } from '@nestjs/common';
import { ConnectionService } from 'src/connection/connection.service';

@Injectable()
export class UsersService {
  constructor(private readonly db: ConnectionService) {}

  async findAll() {
    return await this.db.user.findMany();
  }
}
