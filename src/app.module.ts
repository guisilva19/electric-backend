import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConnectionService } from './connection/connection.service';
import { ConnectionModule } from './connection/connection.module';
import { HomologationModule } from './homologation/homologation.module';
import { ConfigModule } from '@nestjs/config';
import { DocumentsModule } from './documents/documents.module';
import { PaymentsModule } from './payment/payment.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    AuthModule,
    ConnectionModule,
    HomologationModule,
    DocumentsModule,
    PaymentsModule,
  ],
  controllers: [],
  providers: [ConnectionService],
})
export class AppModule {}
