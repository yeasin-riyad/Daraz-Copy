"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaShoppingCart, FaEye, FaHeart } from "react-icons/fa";
import Container from "./header/Container";
import { fetchData } from "./helpers";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const endpoint = "https://dummyjson.com/products";
      const data = await fetchData(endpoint);
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mt-3  ">
        {products.map((product) => (
          <div
          key={product.id}
          className="relative flex flex-col border-2  border-gray-300 bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
        >
          {/* Product Image */}
          <div className="relative w-full h-48  scale-110">
            <Image
              src={product.thumbnail}
              alt={product.title}
              layout="fill"
              objectFit="contain"
              className="rounded-t-lg border-b-2  border-gray-300"
              priority
            />
          </div>
        
          {/* Product Details */}
          <div className="flex flex-col justify-between p-4 mt-4 flex-grow">
            <div>
              <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
              <p className="text-gray-500 text-sm mb-2">{product.category}</p>
              <p className="font-semibold text-xl text-themeColor mb-2">
                ${product.price.toFixed(2)}{" "}
                {product.discountPercentage > 0 && (
                  <span className="text-gray-400 text-sm">-{product.discountPercentage}%</span>
                )}
              </p>
              <p className="text-sm text-gray-500 mb-1">Rating: {product.rating}</p>
              <p className="text-sm text-gray-500 mb-2">Stock: {product.stock}</p>
            </div>
        
            {/* Add to Cart Button */}
            <div
              className={`relative w-full p-2 rounded-xl border-2 border-orange-500 text-gray-500 hover:text-white ${
                product.stock > 0
                  ? "hover:bg-orange-500 cursor-pointer "
                  : "opacity-50 cursor-not-allowed"
              }`}
            >
              <button
                className="w-full "
                disabled={product.stock === 0}
                onClick={() => {
                  if (product.stock > 0) {
                    // Add to cart logic
                  }
                }}
              >
                {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
              </button>
            </div>
          </div>
        </div>
        
        ))}
      </div>
    </Container>
  );
};

export default ProductList;
