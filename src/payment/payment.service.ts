import { Injectable } from '@nestjs/common';
import { ConnectionService } from 'src/connection/connection.service';
import Stripe from 'stripe';

@Injectable()
export class PaymentsService {
  private stripe: Stripe;

  constructor(private readonly db: ConnectionService) {
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

  async createPaymentLink(id: string): Promise<Stripe.PaymentLink> {
    const price = await this.stripe.prices.create({
      unit_amount: 29900,
      currency: 'brl',
      nickname: 'EP Engenharia',
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
      metadata: {
        homologation_id: id,
      },
    });

    return paymentLink;
  }

  async validatePayment(body) {
    const payment = JSON.parse(body);

    const id = payment.data.object.metadata.homologation_id;
    const eventType = payment.type;

    if (eventType === 'checkout.session.completed') {
      await this.db.homologation.update({
        where: {
          id: id,
        },
        data: {
          status_payment: true,
        },
      });
    }

    return {};
  }
}
