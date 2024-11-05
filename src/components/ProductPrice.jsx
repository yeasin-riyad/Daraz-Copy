import React from 'react'

const ProductPrice = ({price,discountPercentage}) => {
  return (
    <div className="font-semibold text-xl text-themeColor mb-2">
    ${price.toFixed(2)}{" "}
    {discountPercentage > 0 && (
      <span className="text-gray-400 text-sm">
        -{discountPercentage}%
      </span>
    )}
  </div>
  )
}

export default ProductPrice