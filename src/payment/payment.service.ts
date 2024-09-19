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

  async createPaymentIntent() {
    return await this.stripe.paymentIntents.create({
      amount: 29900,
      currency: 'brl',
    });
  }

  async confirmPaymentIntent(paymentIntentId: string, paymentMethodId: string) {
    return await this.stripe.paymentIntents.confirm(paymentIntentId, {
      payment_method: paymentMethodId,
    });
  }
}
