import { Module } from '@nestjs/common';
import { OrcamentoController } from './orcamento.controller';
import { OrcamentoService } from './orcamento.service';
import { ConnectionService } from 'src/connection/connection.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [OrcamentoController],
  providers: [OrcamentoService, ConnectionService, JwtService],
})
export class OrcamentoModule {}
