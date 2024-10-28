import React from 'react'
import Orders from './OrderList'
import { auth } from '@/auth';
const OrderPage =async () => {
  const session = await auth()
const user = session?.user

  return (
    <div>
 
      <Orders user={user}  />
    </div>
  )
}

export default OrderPage
