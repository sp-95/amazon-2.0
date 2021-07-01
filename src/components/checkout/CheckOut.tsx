import { selectSelectedItems } from '@/slices/cartSlice'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
import { useSession } from 'next-auth/client'
import React from 'react'
import { useSelector } from 'react-redux'
import {
  sendDangerNotification,
  sendWarningNotification,
} from '../notifications/Notification'
import Subtotal from './Subtotal'

const stripePromise = loadStripe(process.env.stripe_public_key || '')

function CheckOut(): React.ReactElement {
  const selectedItems = useSelector(selectSelectedItems)
  const [session] = useSession()

  const handleCheckout = async () => {
    if (!selectedItems.length)
      sendWarningNotification(
        'Atleast one item must be selected before proceeding to checkout'
      )
    else if (session) {
      const stripe = await stripePromise

      const checkoutSession = await axios.post('/api/create-checkout-session', {
        items: selectedItems,
        email: session.user?.email || '',
      })

      const result = await stripe?.redirectToCheckout({
        sessionId: checkoutSession.data.id,
      })

      if (result?.error)
        sendDangerNotification(result.error.message || 'Payment failed')
    }
  }

  return (
    <div className="flex flex-col sm:w-72">
      <Subtotal />

      <button
        role="link"
        type="button"
        className="mt-2 mb-4 amazon-button-2"
        onClick={handleCheckout}
      >
        Proceed to checkout
      </button>
    </div>
  )
}

export default CheckOut
