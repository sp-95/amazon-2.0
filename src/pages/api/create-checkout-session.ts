import type { NextApiRequest, NextApiResponse } from 'next'
import ICartItem from '@/@types/cartItem'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2020-08-27',
  maxNetworkRetries: 2,
  timeout: 5 * 1000,
})

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === 'POST') {
    const { items, email }: { items: ICartItem[]; email: string } = req.body

    const transformedItems = items.map((item) => ({
      description: item.description,
      quantity: item.quantity,
      price_data: {
        currency: 'usd',
        unit_amount: item.price * 100,
        product_data: {
          name: item.title,
          images: [item.image],
        },
      },
    }))

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      shipping_rates: ['shr_1J8SCOSDGGeDr0e0AyM9Lpyv'],
      shipping_address_collection: {
        allowed_countries: ['GB', 'US', 'CA'],
      },
      line_items: transformedItems,
      mode: 'payment',
      success_url: `${process.env.HOST}/success`,
      cancel_url: `${process.env.HOST}/checkout`,
      metadata: {
        email,
        images: JSON.stringify(items.map((item) => item.image)),
      },
    })

    res.status(200).json({ id: session.id })
  }
}
