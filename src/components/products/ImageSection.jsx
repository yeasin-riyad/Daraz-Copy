"use client";
import Image from "next/image";
import React, { useState } from "react";

const ImageSection = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [error, setError] = useState(false);


  const handleImageError = () => {
    setError(true);
  };

  return (
    <div className="flex justify-between max-h-[500px] gap-3">
      {/* Thumbnail images */}
      <div className="flex flex-col">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="ProductImage"
            height={200}
            width={200}
            className={`bg-gray-200 mb-1 rounded-sm ${
              currentImage === image ? "opacity-100" : "opacity-60"
            } hover:cursor-pointer`}
            onClick={() => {
              setCurrentImage(image);
              setError(false); // Reset error when switching images
            }}
            onError={handleImageError}
          />
        ))}
      </div>

      {/* Main display image */}
      <div className="flex items-center justify-center w-full bg-gray-100">
        {!error ? (
          <Image
            src={currentImage}
            alt="productImage"
            width={500}
            height={500}
            className="object-cover"
            onError={handleImageError}
            priority
          />
        ) : (
          <div className="text-center text-gray-500">
            Image failed to load.
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageSection;
