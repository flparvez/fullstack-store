import React from 'react'
import CheckoutPage from './OrderPlace'
import { auth } from '@/auth'
const PlaceOrder = async () => {
  const session = await auth()
  const user = session?.user;
  if(!session?.user) redirect('/auth/login')
 
  return (
    <div>
      <CheckoutPage  user={user}/>
    </div>
  )
}

export default PlaceOrder
