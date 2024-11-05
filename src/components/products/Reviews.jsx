import React from 'react'
import { MdStar, MdStarBorder } from 'react-icons/md'

const Reviews = ({ reviews }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Customer Reviews</h2>
      
      {reviews.map((review, index) => (
        <div
          key={index}
          className="bg-gray-50 rounded-lg p-4 mb-4 shadow-sm"
        >
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-sm font-semibold text-gray-700">
                {review.reviewerName}
              </p>
              <p className="text-xs text-gray-500">
                {review.reviewerEmail}
              </p>
            </div>
            <p className="text-xs text-gray-400">
              {new Date(review.date).toLocaleDateString()}
            </p>
          </div>
          
          <div className="flex items-center mb-3">
            {[...Array(5)].map((_, i) => 
              i <= review.rating ? (
                <MdStar key={i} className="text-yellow-500" />
              ) : (
                <MdStarBorder key={i} className="text-yellow-500" />
              )
            )}
          </div>

          <p className="text-gray-700 text-sm">{review.comment}</p>
        </div>
      ))}
    </div>
  )
}

export default Reviews
