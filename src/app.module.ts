import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConnectionService } from './connection/connection.service';
import { ConnectionModule } from './connection/connection.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ConnectionModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConnectionService],
})
export class AppModule {}
