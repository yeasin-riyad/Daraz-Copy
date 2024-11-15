"use client";
import { useSession } from 'next-auth/react';
import { useMyCartItemsQuery } from './redux/productSlice';
import { FaHome } from 'react-icons/fa';
import Image from 'next/image';
import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Loader from './Loader';

const Cart = () => {
    const { data: session } = useSession();
    const { data: cartItems,isLoading } = useMyCartItemsQuery(session?.user?.email);
    const router = useRouter();

    const navigateHome = () => {
        router.push('/');
    };

    // Calculate total price
    const totalPrice = useMemo(() => {
        return cartItems?.reduce((acc, item) => acc + item.totalPrice, 0) || 0;
    }, [cartItems]);
    if(isLoading) return <Loader/>

    return (
        <div className="w-full max-w-3xl mx-auto mt-10 px-4 py-6 bg-white rounded-lg shadow-lg relative">
            <h2 className="text-2xl font-semibold text-center mb-6">
                {cartItems?.length > 0 ? 'Your Cart' : 'Cart is Empty'}
            </h2>

            {/* Cart Items List */}
            {cartItems?.length > 0 ? (
                <div className="space-y-6">
                    {cartItems.map((item) => (
                        <div
                            key={item.product.id}
                            className="flex items-center justify-between bg-gray-100 p-4 rounded-md shadow-sm"
                        >
                            <Image
                                src={item.product.thumbnail}
                                width={60}
                                height={60}
                                alt={item.product.brand}
                                className="object-cover rounded-md"
                            />
                            <div className="ml-4 flex-grow">
                                <h3 className="font-semibold text-lg">{item.product.brand}</h3>
                                <p className="text-gray-700">${item.totalPrice.toFixed(2)}</p>
                            </div>
                            <span className="text-sm text-gray-600">
                                Qty: {item.quantity}
                            </span>
                        </div>
                    ))}

                    {/* Total Price */}
                    <div className="mt-8 border-t pt-4 flex justify-between items-center">
                        <h3 className="text-xl font-semibold">Total Price:</h3>
                        <p className="text-2xl font-bold text-orange-500">${totalPrice.toFixed(2)}</p>
                    </div>
                </div>
            ) : (
                <div className="text-center p-8">
                    <p className="text-gray-500 text-lg mb-4">Your cart is empty!</p>
                    <button
                        onClick={navigateHome}
                        className="mt-4 inline-flex items-center bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition duration-300"
                    >
                        <FaHome className="mr-2" />
                        Go to Homepage
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;
