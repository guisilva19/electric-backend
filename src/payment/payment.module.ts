import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PaymentsService } from './payment.service';
import { PaymentsController } from './payment.controller';
import * as bodyParser from 'body-parser';
import { ConnectionService } from 'src/connection/connection.service';

@Module({
  imports: [],
  providers: [PaymentsService, ConnectionService],
  controllers: [PaymentsController],
})
export class PaymentsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(bodyParser.raw({ type: 'application/json' }))
      .forRoutes('payments/webhook'); // Middleware only for the webhook route
  }
}
