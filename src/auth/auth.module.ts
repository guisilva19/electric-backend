import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { ConnectionService } from 'src/connection/connection.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtService, UsersService, ConnectionService],
})
export class AuthModule {}
