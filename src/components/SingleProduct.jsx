import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaEye, FaHeart, FaShoppingCart } from 'react-icons/fa'
import ProductPrice from './ProductPrice'
import AddToCartButton from './AddToCartButton'
import { useMyCartItemsQuery } from './redux/productSlice'
import { useSession } from 'next-auth/react'
import toast from 'react-hot-toast'

const SingleProduct = ({ product }) => {
    const { data: session } = useSession();
    const { data: cartData, refetch } = useMyCartItemsQuery(session?.user?.email);
    const item = cartData?.find((SingleProduct) => SingleProduct.product.id == product.id);

    return (
        <div className="group flex flex-col border-2 border-gray-300 bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
            
            {/* Product Image Link */}
            <Link href={{
                pathname: `/products/${product?.id}`,
                query: { id: product?.id }
            }}>
                <div className="relative w-full h-48 cursor-pointer">
                    <Image
                        src={product.thumbnail}
                        alt={product.title}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-t-lg border-b-2 border-gray-300"
                        priority
                    />
                </div>
            </Link>

            {/* Hover Icons - Outside the Link */}
            <div className="absolute inset-0 flex items-start justify-end p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="flex flex-col space-y-2 text-gray-500 pointer-events-auto">
                    <button onClick={()=>toast.success("item added successfully")}
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

            {/* Product Details */}
            <div className="flex flex-col justify-between p-4 mt-4 flex-grow">
                <div>
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.title}</h3>
                    <p className="text-gray-500 text-sm mb-2">{product.category}</p>
                    <ProductPrice price={item ? item?.totalPrice : product?.price} discountPe={product.discountPercentage} />
                    <p className="text-sm text-gray-500 mb-1">
                        Rating: {product.rating}
                    </p>
                    <p className="text-sm text-gray-500 mb-2">
                        Stock: {product.stock}
                    </p>
                </div>

                {/* Add to Cart Button */}
                <AddToCartButton product={product} stock={product?.stock} />
            </div>
        </div>
    );
};

export default SingleProduct;
