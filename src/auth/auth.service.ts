import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import 'dotenv/config';
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  async auth() {
    // const user = await this.validateUser(email, password);
    return {
      access_token: this.jwtService.sign(
        { nome: 'Guilherme' },
        {
          secret: process.env.KEY_SECRET_JWT as string,
          expiresIn: '24h',
        },
      ),
    };
  }
}
