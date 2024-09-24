"use client"

import { useDispatch } from 'react-redux';
import { addItem } from '@/store/cartSlice';

import Image from 'next/image';
const ProductPage =({product}) => {


  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({
      product: product._id,
      slug: product.slug,
      title: product.name,
      price: product.price,
      quantity: 1,
      image: product.images,  
    }));
    alert('Product added to cart!');
  };
  if (!product) return <div>Loading...</div>
 
  return (
   
    <div className="container mx-auto p-4">
 
    {/* Product Info Section */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           {/* Product Image */}
           <div className="relative">
        <Image width={300} height={300}
          src={product.images}
          alt="Product Image"
          className="w-full min-h-min md:h-[70%] sm:h-full h-80 object-cover rounded-md"
        />
      </div>
    

      {/* Product Details */}
      <div className="flex flex-col justify-between">
        <div>
          {/* Product Title */}
          <h1 className="sm:text-3xl text-2xl font-bold mb-4">{product.name}</h1>

          {/* Product Price */}
          <p className="text-xl sm:text-2xl text-green-600 font-semibold mb-4">৳{product.price}</p>

          {/* Product Stock */}
          <p className="text-md text-gray-700 mb-4">Stock:{product.stock}</p>

          {/* Product Category */}
          <p className="text-md text-gray-500 mb-6">Category: <span className="font-bold">{product.category}</span></p>

          {/* Product Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-md">{product.tags}</span>
            <span className="px-3 py-1 bg-green-200 text-green-800 rounded-md">Tag 2</span>
            <span className="px-3 py-1 bg-red-200 text-red-800 rounded-md">Tag 3</span>
          </div>
     {/* Product Video (YouTube Embed) */}
     <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Product Video</h2>
            <div className="aspect-w-16 aspect-h-9">
            <iframe
  className="w-full lg:h-80 md:h-96 h-56 rounded-md"
  src={`https://www.youtube.com/embed/${product.video}?controls=0&showinfo=0&modestbranding=1&rel=0&autohide=1`}
  title="Product Video"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  frameBorder="0"
></iframe>

            </div>
          </div>

          {/* Product Description */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Product Description</h2>
            <div
      className="prose"
      dangerouslySetInnerHTML={{ __html: product.description }}
    />
          </div>

     
        </div>

        {/* Sticky Add to Cart Button */}
        <div className="sticky bottom-0 bg-white p-2 border-t border-gray-400">
          <button onClick={handleAddToCart} className="w-full  py-2 sm:py-4 bg-orange-600 text-white rounded-md hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductPage