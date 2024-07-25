import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConnectionService } from './connection/connection.service';
import { ConnectionModule } from './connection/connection.module';
import { HomologationModule } from './homologation/homologation.module';

@Module({
  imports: [UsersModule, AuthModule, ConnectionModule, HomologationModule],
  controllers: [],
  providers: [ConnectionService],
})
export class AppModule {}
