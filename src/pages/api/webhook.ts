import firebaseAccountCredentials from '@/../configs/serviceAccountCredentials.json'
import admin from 'firebase-admin'
import { buffer } from 'micro'
import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

const serviceAccount = firebaseAccountCredentials as admin.ServiceAccount

const app = !admin.app.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app()

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2020-08-27',
  maxNetworkRetries: 2,
  timeout: 5 * 1000,
})

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || ''

const fulfillOrder = async (session: Stripe.Checkout.Session) => {
  return app
    .firestore()
    .collection('users')
    .doc(session.metadata?.email || '')
    .collection('orders')
    .doc(session.id)
    .set({
      amount: session?.amount_total || 0 / 100,
      amount_shipping: session.total_details?.amount_shipping || 0 / 100,
      images: JSON.parse(session.metadata?.images || ''),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`Order ${session.id} has been added to the DB`)
    })
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void | NextApiResponse> => {
  if (req.method === 'POST') {
    const requestBuffer = await buffer(req)
    const payload = requestBuffer.toString()
    const sig = req.headers['stripe-signature'] || ''

    let event: Stripe.Event
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret)
    } catch (error) {
      return res.status(400).send(`Webhook error: ${error.message}`)
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session

      return fulfillOrder(session)
        .then(() => res.status(200))
        .catch((error) =>
          res.status(400).send(`Webhook Error: ${error.message}`)
        )
    }
  }
  return res.status(405)
}

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
}
