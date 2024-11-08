"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useAddToCartMutation, useMyCartItemsQuery } from "./redux/productSlice";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";

const AddToCartButton = ({ stock, product }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [addToCart] = useAddToCartMutation();
  const { data, refetch } = useMyCartItemsQuery(session?.user?.email);
  const [quantity, setQuantity] = useState(0);

  // Initialize quantity based on the fetched cart data
  useEffect(() => {
    if (data) {
      const productInCart = data.find(item => item.product.id === product.id);
      setQuantity(productInCart ? productInCart.quantity : 0);
    }
  }, [data, product.id]);

  // Handle Add to Cart or increase quantity
  const handleAddToCart = async () => {
    if (!session) {
      router.push("/signin");
    } else {
      try {
        if (quantity < stock) {
          const res = await addToCart({
            id: product.id,
            data: { userId: session.user.email, product },
          }).unwrap();
          toast.success(res?.message || "Item added to cart");
          await refetch(); // Refetch the cart data to update quantity
        } else {
          toast.error("No more stock available.");
        }
      } catch (error) {
        toast.error("Error adding item to cart: " + error?.message);
      }
    }
  };

  // Handle decrementing quantity
  const handleDecrement = async () => {
    if (quantity > 1) {
      try {
        const res = await addToCart({
          id: product.id,
          data: { userId: session.user.email, product, action: "decrement" },
        }).unwrap();
        toast.success("Quantity decreased");
        await refetch(); // Refetch the cart data to update quantity
      } catch (error) {
        toast.error("Error decreasing item quantity: " + error?.message);
      }
    } else if (quantity === 1) {
      toast.error("Cannot decrease quantity below 1");
    }
  };

  return (
    <div
      className={`w-full p-2 rounded-xl border-2 border-orange-500 text-gray-500 hover:text-white ${
        stock > 0 ? "hover:bg-orange-500 cursor-pointer" : "opacity-50 cursor-not-allowed"
      }`}
    >
      {stock > 0 ? (
        quantity > 0 ? (
          <div className="flex justify-between items-center">
            <button
              onClick={handleDecrement}
              className="bg-orange-500 text-white px-3 py-1 rounded-lg hover:bg-orange-600 transition"
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={handleAddToCart}
              className="bg-orange-500 text-white px-3 py-1 rounded-lg hover:bg-orange-600 transition"
            >
              +
            </button>
          </div>
        ) : (
          <button
            className="w-full bg-orange-500 text-white px-3 py-1 rounded-lg hover:bg-orange-600 transition"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        )
      ) : (
        <span>Out of Stock</span>
      )}
    </div>
  );
};

export default AddToCartButton;
