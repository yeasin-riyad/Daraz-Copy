import React from 'react'

const AddToCartButton = ({stock}) => {
  return (
    <div
                className={`w-full p-2 rounded-xl border-2 border-orange-500 text-gray-500 hover:text-white ${
                  stock > 0
                    ? "hover:bg-orange-500 cursor-pointer"
                    : "opacity-50 cursor-not-allowed"
                }`}
              >
                <button
                  className="w-full"
                  disabled={stock === 0}
                  onClick={() => {
                    if (stock > 0) {
                      // Add to cart logic
                    }
                  }}
                >
                  {stock > 0 ? "Add to Cart" : "Out of Stock"}
                </button>
              </div>
  )
}

export default AddToCartButton