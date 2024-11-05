"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaShoppingCart, FaEye, FaHeart } from "react-icons/fa";
import Container from "./header/Container";
import { fetchData } from "./helpers";
import Link from "next/link";
import ProductPrice from "./ProductPrice";
import AddToCartButton from "./AddToCartButton";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mt-3">
        {products.map((product) => (
          <div
            key={product.id}
            className=" flex flex-col border-2 border-gray-300 bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105  "
          >
            {/* Product Image */}
            <Link href={{
              pathname:`/products/${product.id}`,
              query:{id:product?.id}
            }}>

            <div className="relative w-full h-48">
           
              <Image
                src={product.thumbnail}
                alt={product.title}
                layout="fill"
                objectFit="contain"
                className="rounded-t-lg border-b-2 border-gray-300 "
                priority
              />
             
             

              {/* Hover Icons */}
              <div className="absolute inset-0 flex items-start justify-end p-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="flex flex-col space-y-2 text-gray-500">
                  <button
                    className="p-2 bg-gray-200 rounded-full hover:bg-orange-500 hover:text-white"
                    title="Add to Cart"
                  >
                    <FaShoppingCart size={20} />
                  </button>
                  <button
                    className="p-2 bg-gray-200 rounded-full hover:bg-orange-500 hover:text-white"
                    title="View Product"
                  >
                    <FaEye size={20} />
                  </button>
                  <button
                    className="p-2 bg-gray-200 rounded-full hover:bg-orange-500 hover:text-white"
                    title="Add to Favorites"
                  >
                    <FaHeart size={20} />
                  </button>
                </div>
              </div>
            </div>
            </Link>

            {/* Product Details */}
            <div className="flex flex-col justify-between p-4 mt-4 flex-grow">
              <div>
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{product.category}</p>
              <ProductPrice price={product?.price} discountPe={product.discountPercentage}/>
                <p className="text-sm text-gray-500 mb-1">
                  Rating: {product.rating}
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  Stock: {product.stock}
                </p>
              </div>

              {/* Add to Cart Button */}
              <AddToCartButton stock={product?.stock}/>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ProductList;
