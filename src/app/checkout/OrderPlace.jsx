"use client"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../store/cartSlice';
import {useAddOrderMutation} from '../../store/services/CheckOutApi'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { toast } from 'sonner';



const CheckoutPage = ({user}) => {
// const [FullPay, setFullPay] = useState();
// const [Partialpay, setPartialpay] = useState();
const router = useRouter()


const [addOrder] = useAddOrderMutation()


  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  

    const [paymentDetails, setPaymentDetails] = useState({
      cname: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      transaction: '',
      paymentType:"",
      ordertrack:"",
     
    });

    const [isProcessing, setIsProcessing] = useState(false);

    const handleCardInput = (e) => {
      const { name, value } = e.target;
      setPaymentDetails({
        ...paymentDetails,
        [name]: value
      });
    };
  
   
    const dhakaO = paymentDetails.ShippingType === 'dhakao'? 120 : null
  const dhaka = paymentDetails.ShippingType === 'dhaka'? 60 : null



    const ndata = {
      userci:user?.id,
      name:paymentDetails.cname,
      email:paymentDetails.email,
      phone:paymentDetails.phone,
      address:paymentDetails.address,
      city:paymentDetails.city,
      items: cart.items,
       total: cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0),

      transaction:paymentDetails.transaction,
      
      paymentType:paymentDetails.paymentType
    }

   
 
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await addOrder(ndata).unwrap();
         // Clear the cart
         setIsProcessing(false)
      dispatch(clearCart());
      toast.success('Order placed successfully!');
       router.push('/profile')
      } catch (err) {

     toast.error('Failed to place the order: ');
        console.error('Failed to save the order: ', err);
      }
    };



  if (cart.items.length === 0) return <h2>Your Cart is Empty</h2>


 
  // const partailP = dhaka? ndata.total+dhaka - 200 : dhakaO? ndata.total+dhakaO -200: null
  // const FullP = dhaka? ndata.total+dhaka : dhakaO? ndata.total+dhakaO : null
  // setFullPay(FullP)
  // setPartialpay(partailP)
  return (
    <div>
 
      <form className="bg-white rounded-lg shadow-md p-6" onSubmit={handleSubmit}>
      <h2 className='text-xl sm:text-2xl font-bold text-center '>অর্ডারটি কনফার্ম করতে ফর্মটি সম্পুর্ণ পুরণ করে নিচের Place Order বাটনে ক্লিক করুন।</h2>
      <div className="mb-4">
        <label htmlFor="CustomerName" className="block text-sm font-medium text-gray-700">আপনার নাম <span className='text-red-600'>*</span></label>
        <input
          type="text"
          id="CustomerName"
          name="cname"
          value={paymentDetails.cname}
          onChange={handleCardInput}
          placeholder="আপনার নাম লিখুন"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>

 
       {/* Phone */}
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">মোবাইল নাম্বার <span className='text-red-600'>*</span></label>
        <input
          type="number"
          id="phone"
          name="phone"
          value={paymentDetails.phone}
          onChange={handleCardInput}
          placeholder="মোবাইল নাম্বার "
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
  {/* address */}
      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">সম্পূর্ণ ঠিকানা <span className='text-red-600'>*</span></label>
        <input
          type="text"
          id="address"
          name="address"
          value={paymentDetails.address}
          onChange={handleCardInput}
          placeholder="সম্পূর্ণ ঠিকানা"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>

  {/* city */}
      <div className="mb-4">
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City <span className='text-red-600'>*</span></label>
        <input
          type="text"
          id="city"
          name="city"
          value={paymentDetails.city}
          onChange={handleCardInput}
          placeholder="জেলা"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>


{/* delivery charge */}
<div>
      <h2 className="text-xl font-semibold mt-3 mb-4 text-center">items</h2>
      <div className="flex flex-col">
        {cart.items.map((item) => (
          <div key={item.product} className="flex items-center justify-center mb-4">
            <Image width={100} height={100} src={item.image} alt={item.title} className="w-18 h-18 mr-4" />
            <div>
              <h3 className="text-sm sm:text-xl font-medium">{item.title}</h3>
              <p className="text-black text-sm">
                {item.quantity} x ৳{item.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      
  <div className="mb-4 flex justify-center">
          <label className="block text-sm font-medium py-8 px-4 text-gray-700">Shipping <span className='text-red-600'>*</span></label>
          <div className="flex items-center">
            <input 
              type="radio"
              id="fullPayment"
              name="ShippingType"
              
             value="dhaka"
              checked={paymentDetails.ShippingType === 'dhaka'}
              onChange={handleCardInput}
              className="mr-2 px-4 py-2 border rounded-md bg-gray-200 "
            />
 <label htmlFor="partialPayment">ঢাকার ভেতরে</label>

 
            <input
              type="radio"
              id="partialPayment"
              name="ShippingType"
              value="dhakao"
              checked={paymentDetails.ShippingType === 'dhakao'}
              onChange={handleCardInput}
              className="ml-4 mr-2 px-4 py-2 border rounded-md bg-gray-200 "
            />


            <label htmlFor="partialPayment">ঢাকার বাহিরে</label>
          </div>
        </div>

        {/* Partial Amount */}
        {paymentDetails.ShippingType === 'dhakao' && (
          <div className="mb-4">
       
            <h2 className='block  text-center font-bold sm:text-2xl text-xl  text-gray-700'>Delivery Charge ৳120 </h2>

          </div>
        )}



     {paymentDetails.ShippingType === 'dhaka' && (
          <div className="mb-4">
      
            <h2 className='block  text-center font-bold sm:text-2xl text-xl  text-gray-700'>Delivery Charge ৳60 </h2>
           
          </div>
        
        )}
      </div>
      </div>
    

  {/* Payment Type */}
  <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Payment Type <span className='text-red-600'>*</span></label>
          <div className="flex items-center">
            <input 
              type="radio"
              id="fullPayment"
              name="paymentType"
              value="full"
              defaultChecked
              checked={paymentDetails.paymentType === 'full'}
              onChange={handleCardInput}
              className="mr-2"
            />
            <label htmlFor="fullPayment" className="mr-4">Full Payment</label>
            <input
              type="radio"
              id="partialPayment"
              name="paymentType"
              value="partial"
              checked={paymentDetails.paymentType === 'partial'}
              onChange={handleCardInput}
              className="mr-2"
            />
            <label htmlFor="partialPayment">Partial Payment</label>
          </div>
        </div>

        {/* Partial Amount */}
        {paymentDetails.paymentType === 'partial' && (
          <div className="mb-4">
            <label htmlFor="partialAmount" className="block text-sm font-medium text-gray-700">Partial Amount </label>
            <h2 className='block  text-center font-bold sm:text-2xl text-xl  text-gray-700'>Pay ৳200 online & ৳ {dhaka? ndata.total+dhaka - 200: ndata.total+dhakaO - 200} with Cash on Delivery.</h2>

            
          </div>
        )}
     {paymentDetails.paymentType === 'full' && (
          <div className="mb-4">
            <label htmlFor="partialAmount" className="block text-sm font-medium text-gray-700">Full Amount</label>
            <h2 className='block  text-center font-bold sm:text-2xl text-xl  text-gray-700'> Pay Full Payment ৳ {dhaka? ndata.total+dhaka: ndata.total+dhakaO}</h2>
           
          </div>
        )}
<h2 className='block  text-center font-bold sm:text-2xl text-xl  text-gray-700 border'>Bkash(personal): 01608257876</h2>
<br />
        {/* Transaction ID */}
        <div className="mb-4">
          <label htmlFor="transaction" className="block text-sm font-medium text-gray-700">Transaction ID <span className='text-red-600'>*</span></label>
          <input
            type="text"
            id="transaction"
            name="transaction"
            value={paymentDetails.transaction}
            onChange={handleCardInput}
            placeholder="Enter Transaction ID"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

  {/* ordertrack ID */}
        {/* <div className="mb-4 ">
          <label htmlFor="ordertrack" className="block text-sm font-medium text-gray-700">ordertrack Link</label>
          <input
            type="text"
            id="ordertrack"
            name="ordertrack"
            value={paymentDetails.ordertrack}
            onChange={handleCardInput}
            placeholder="optional"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            
          />
        </div> */}


      <button
        type="submit"
        className={`w-full bg-indigo-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={isProcessing}
      >
        {isProcessing ? 'Processing...' : 'Place Order'}
      </button>
    </form>
      
    </div>
  );
  }

export default CheckoutPage;
