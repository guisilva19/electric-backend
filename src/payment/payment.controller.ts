import { Controller, Post, Req, Res } from '@nestjs/common';
import { PaymentsService } from './payment.service';
import { Response } from 'express';
import Stripe from 'stripe';

@Controller('payments')
export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {}

  // @Post('create-payment')
  // async createPaymentIntent() {
  //   return this.paymentsService.createPaymentIntent();
  // }

  // @Post('confirm-payment')
  // async confirmPayment(
  //   @Body() body: { paymentIntentId: string; paymentMethodId: string },
  // ) {
  //   const { paymentIntentId, paymentMethodId } = body;
  //   const paymentIntent = await this.paymentsService.confirmPaymentIntent(
  //     paymentIntentId,
  //     paymentMethodId,
  //   );
  //   return paymentIntent;
  // }

  @Post('create-payment-link')
  async createPaymentLink() {
    const paymentLink = await this.paymentsService.createPaymentLink();
    return { url: paymentLink.url };
  }

  @Post('webhook')
  async handleStripeWebhook(@Req() req: Request, @Res() res: Response) {
    const sig = req.headers['stripe-signature'];
    const rawBody = req['rawBody']; // Use o rawBody capturado no middleware

    let event: Stripe.Event;

    try {
      event = this.paymentsService.constructEvent(rawBody, sig);
    } catch (err) {
      console.log(`⚠️ Webhook signature verification failed.`, err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event based on its type
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session;
        // Aqui você pode processar o pagamento e atualizar o status
        console.log(`Pagamento concluído: ${session.id}`);
        break;
      // Outros eventos que você pode querer processar
      default:
        console.log(`Evento desconhecido: ${event.type}`);
    }

    // Retorne uma resposta para o Stripe
    res.json({ received: true });
  }
}
