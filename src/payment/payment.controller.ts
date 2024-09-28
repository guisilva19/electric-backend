import { Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import Stripe from 'stripe';
import { PaymentsService } from './payment.service';

@Controller('payments')
export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {}

  @Post('create-payment-link')
  async createPaymentLink() {
    const paymentLink = await this.paymentsService.createPaymentLink();
    return { url: paymentLink.url };
  }

  @Post('webhook')
  async handleStripeWebhook(@Req() req: Request, @Res() res: Response) {
    const sig = req.headers['stripe-signature'];
    const rawBody = req.body; // O corpo da requisição agora é o raw body (Buffer)

    let event: Stripe.Event;

    try {
      event = this.paymentsService.constructEvent(rawBody, sig); // Passe o corpo bruto aqui
    } catch (err) {
      console.log(`⚠️ Webhook signature verification failed.`, err.message);
      return res.status(400).send(`${rawBody}| Webhook Error: ${err.message}`);
    }

    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session;
        console.log(`Pagamento concluído: ${session.id}`);
        break;
      default:
        console.log(`Evento desconhecido: ${event.type}`);
    }

    return res.json({ received: true });
  }
}
