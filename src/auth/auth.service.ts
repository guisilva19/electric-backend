import { Injectable } from '@nestjs/common';
import { jwtConstants } from './auth.constants';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  async auth() {
    // const user = await this.validateUser(email, password);
    return {
      access_token: this.jwtService.sign(
        { nome: 'Guilherme' },
        {
          secret: jwtConstants.secret,
          expiresIn: '24h',
        },
      ),
    };
  }
}
