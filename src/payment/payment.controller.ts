import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { PaymentsService } from './payment.service';

@Controller('payments')
export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {}

  // @Post('create-payment-link')
  // async createPaymentLink() {
  //   const paymentLink = await this.paymentsService.createPaymentLink();
  //   return { url: paymentLink.url };
  // }

  @Post('webhook')
  async handleStripeWebhook(@Req() req: Request) {
    const rawBody = req.body;

    return this.paymentsService.validatePayment(rawBody);
  }
}
