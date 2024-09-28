import { Module } from '@nestjs/common';
import { HomologationService } from './homologation.service';
import { HomologationController } from './homologation.controller';
import { JwtService } from '@nestjs/jwt';
import { ConnectionService } from 'src/connection/connection.service';
import { PaymentsService } from 'src/payment/payment.service';

@Module({
  controllers: [HomologationController],
  providers: [HomologationService, JwtService, ConnectionService, PaymentsService],
})
export class HomologationModule {}
