import { Module } from '@nestjs/common';
import { HomologationService } from './homologation.service';
import { HomologationController } from './homologation.controller';
import { JwtService } from '@nestjs/jwt';
import { ConnectionService } from 'src/connection/connection.service';

@Module({
  controllers: [HomologationController],
  providers: [HomologationService, JwtService, ConnectionService],
})
export class HomologationModule {}
