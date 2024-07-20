import { BadRequestException, Injectable } from '@nestjs/common';
import { ConnectionService } from 'src/connection/connection.service';
import { UserDTO } from './users.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly db: ConnectionService) {}

  async findAll() {
    return await this.db.user.findMany();
  }

  async register(user: UserDTO) {
    console.log('USER BODY', user);
    const userAlreadyRegistered = await this.db.user.findFirst({
      where: {
        email: user.email,
      },
    });

    if (userAlreadyRegistered) {
      throw new BadRequestException();
    }

    const userCreated = await this.db.user.create({
      data: {
        ...user,
        password: bcrypt.hashSync(user.password, 10),
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    return userCreated;
  }

  async findByEmail(email: string) {
    return await this.db.user.findFirst({
      where: {
        email: email,
      },
    });
  }
}
