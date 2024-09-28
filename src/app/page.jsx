"use client"
import CategorySlides from '@/components/CategorySlide'
import Footer from '@/components/Footer'
import SwiperSlides from '@/components/SwiperSlide'
import { useGetProductsQuery } from '@/store/services/prodcutApi'

import ProductList from '@/components/ProductList'

import React from 'react'


const Home = () => {
  
  const {data} = useGetProductsQuery()
  const products = data?.products;
  const productsSlider = data?.products?.slice(0, 10);

if (!products) return <h2>Loading...</h2>
  return (
    <div>
  
      <div className='p-2'>
      <h2 className="text-3xl font-bold text-center mb-8">
            Feature Products
          </h2>
 
 {/* Featured Products And Category With Link */}
   <div className="">
  {
  productsSlider && productsSlider.length > 0
            ? 
                <SwiperSlides
                
                  products= {productsSlider}
                  
                />
              
            : null
            }
            </div>
           
              </div>
              {/* Category Slider With Link */}
              <div className=''>
              <div className='flex justify-center mb-8'>
              <button className='py-3 px-6 mt-14 text-white bg-blue-500  rounded-md'> Category Slider</button>
  
    </div>
             

          <CategorySlides  />
    </div>

    {/* Product List Product Category Button */}
 
      <div className='flex justify-center'>
        <button className='py-3 px-6 mt-14 text-white bg-blue-600 rounded-md'>View All Product</button>
  
    </div>
  

    {/* Product List Responsive Design */}
 
        <div >
          
        
          
        <ProductList  products={products} />
      
        </div>
  
      

    
    <Footer/>
    </div>
  )
}

export default Home
