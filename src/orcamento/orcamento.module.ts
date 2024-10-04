import { Module } from '@nestjs/common';
import { OrcamentoController } from './orcamento.controller';
import { OrcamentoService } from './orcamento.service';
import { ConnectionService } from 'src/connection/connection.service';

@Module({
  controllers: [OrcamentoController],
  providers: [OrcamentoService, ConnectionService],
})
export class OrcamentoModule {}
