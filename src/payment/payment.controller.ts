import { Body, Controller, Post } from '@nestjs/common';
import { PaymentsService } from './payment.service';

@Controller('payments')
export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {}

  @Post('create-payment')
  async createPaymentIntent() {
    return this.paymentsService.createPaymentIntent();
  }

  @Post('confirm-payment')
  async confirmPayment(
    @Body() body: { paymentIntentId: string; paymentMethodId: string },
  ) {
    const { paymentIntentId, paymentMethodId } = body;
    const paymentIntent = await this.paymentsService.confirmPaymentIntent(
      paymentIntentId,
      paymentMethodId,
    );
    return paymentIntent;
  }
}
