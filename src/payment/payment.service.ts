import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';

@Injectable()
export class PaymentsService {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2024-06-20',
    });
  }

  // async createPaymentIntent() {
  //   return await this.stripe.paymentIntents.create({
  //     amount: 29900,
  //     currency: 'brl',
  //   });
  // }

  // async confirmPaymentIntent(paymentIntentId: string, paymentMethodId: string) {
  //   return await this.stripe.paymentIntents.confirm(paymentIntentId, {
  //     payment_method: paymentMethodId,
  //   });
  // }

  async createPaymentLink(): Promise<Stripe.PaymentLink> {
    const price = await this.stripe.prices.create({
      unit_amount: 29900,
      currency: 'usd',
      product_data: {
        name: 'Homologação',
      },
    });

    const paymentLink = await this.stripe.paymentLinks.create({
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
    });

    return paymentLink;
  }

  constructEvent(payload: Buffer, sig: string | string[]): Stripe.Event {
    const endpointSecret = 'we_1Q461eIEg91PAPSRldAEEENZ'; // O segredo do webhook que você configurou no Stripe

    return this.stripe.webhooks.constructEvent(payload, sig, endpointSecret);
  }
}
