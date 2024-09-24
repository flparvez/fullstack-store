import React from 'react'
import CheckoutPage from './OrderPlace'
import { auth } from '@/auth'
const PlaceOrder = async () => {
  const session = await auth()
  const user = session?.user;
  return (
    <div>
      <CheckoutPage  user={user}/>
    </div>
  )
}

export default PlaceOrder
