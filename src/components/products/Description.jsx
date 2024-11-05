"use client"
import React from 'react'
import ProductPrice from '../ProductPrice'
import { MdStar, MdStarHalf, MdStarBorder } from "react-icons/md"
import { FaRegEye } from "react-icons/fa"
import AddToCartButton from '../AddToCartButton'
import { paymentImage } from '@/assets/assets'
import Image from 'next/image'

const Description = ({ product }) => {
  // For Full Star Count
  const fullStars = Math.floor(product?.rating)
  const hasHalfStar = product?.rating % 1 !== 0
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto">
      <h1 className="text-2xl font-semibold text-gray-800 mb-3">{product?.title}</h1>
      
      <div className="flex items-center justify-between mb-4">
        <ProductPrice price={product?.price} discountPercentage={product?.discountPercentage} />
        <div className="flex items-center gap-1">
          {/* Stars */}
          {Array.from({ length: fullStars }).map((_, index) => (
            <MdStar className="text-yellow-500" key={`full-${index}`} />
          ))}
          {hasHalfStar && <MdStarHalf className="text-yellow-500" key="half" />}
          {Array.from({ length: emptyStars }).map((_, index) => (
            <MdStarBorder className="text-gray-300" key={`empty-${index}`} />
          ))}
          <div className="text-gray-600 text-sm ml-2">
            ({product?.rating.toFixed(1)} reviews)
          </div>
        </div>
      </div>

      <p className="flex items-center text-gray-600 text-sm mb-2">
        <FaRegEye className="mr-2 text-blue-500" />
        <span className="font-semibold text-gray-800">250+</span> people are viewing this right now
      </p>

      <div className="flex items-center text-green-600 font-semibold text-sm mb-4">
        You're saving <span className="text-green-700 mx-1">${(product?.discountPercentage / 100 * product?.price).toFixed(2)}</span> on this purchase!
      </div>

      <p className="text-gray-700  mb-4">{product?.description}</p>
      <p className="text-gray-800 font-bold mb-4">{product?.warrantyInformation}</p>

      <div className="text-gray-700 font-medium text-sm mb-2">
        <span className="text-gray-800">Brand:</span> {product?.brand}
      </div>
      
      <div className="text-gray-700 font-medium text-sm mb-4">
        <span className="text-gray-800">Category:</span> {product?.category}
      </div>

      <div className="flex items-center gap-2 mb-4">
        <p className="text-gray-700 font-medium text-sm">Tags:</p>
        {product?.tags?.map((tag, index) => (
          <p key={index} className="text-blue-500 text-sm bg-blue-100 rounded-full px-2 py-1">{tag}</p>
        ))}
      </div>

      <AddToCartButton stock={product?.stock} />
      <div className='flex flex-col items-center justify-center gap-2 p-2  bg-gray-300 mt-5 rounded-md'>
      <Image className="mt-4 mx-auto opacity-75" src={paymentImage} alt="Payment Options" />
      <p>Guaranteed Same And Secure Checkout</p>

      </div>

    </div>
  )
}

export default Description
