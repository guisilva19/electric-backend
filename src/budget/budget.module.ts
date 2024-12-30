import { Module } from '@nestjs/common';
import { BudgetController } from './budget.controller';
import { BudgetService } from './budget.service';
import { ConnectionService } from 'src/connection/connection.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [BudgetController],
  providers: [BudgetService, ConnectionService, JwtService],
})
export class BudgetModule {}
