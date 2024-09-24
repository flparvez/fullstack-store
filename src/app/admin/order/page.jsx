"use client";
import React, { useEffect, useState } from 'react';
import { useGetOrdersQuery } from '../../../store/services/CheckOutApi'; 

import OrderList from '@/components/admin/OrderList'
import Link from 'next/link';

const Orders = () => {
  const { data, isLoading, isError } = useGetOrdersQuery(); 

  const [orderData, setOrderData] = useState([]);
// console.log(data?.orders)
  useEffect(() => {
    if (data) {
      setOrderData(data?.orders);
    }
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading orders.</p>;

  return (

 
    <div className="container mx-auto p-4">
      <div className='flex'>
      <h2 className='py-4'> <Link href='/admin'>Admin</Link> </h2>
      <br />
      <br />
      <h2> <Link href='/admin'>Category</Link> </h2>
      </div>

    <h1 className="text-2xl font-semibold mb-4">Admin Panel - Orders</h1>
    <div className="sm:container mx-auto sm:px-4 py-8 px-2">
    <h1 className="text-4xl font-bold text-center mb-8">My Orders</h1>
   <OrderList  orderData={orderData}  />
  </div>
  </div>
    
  
    
  )
}

export default Orders
