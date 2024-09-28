import { Body, Controller, Post } from '@nestjs/common';
import { PaymentsService } from './payment.service';
import {} from 'stripe';

@Controller('payments')
export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {}

  @Post('create-payment-link')
  async createPaymentLink() {
    const paymentLink = await this.paymentsService.createPaymentLink();
    return { url: paymentLink.url };
  }

  @Post('webhook')
  async handleStripeWebhook(@Body() body) {
    // const rawBody = req.body;

    return this.paymentsService.validatePayment(body);
  }
}
