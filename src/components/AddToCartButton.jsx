"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useAddToCartMutation } from "./redux/productSlice";
import toast from "react-hot-toast";
import { useState } from "react";

const AddToCartButton = ({ stock, product }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [addToCart] = useAddToCartMutation();
  const [quantity, setQuantity] = useState(0);
  console.log(quantity)

  const handleAddToCart = async () => {
    if (stock > 0) {
      if (!session) {
        router.push("/signin");
      } else {
        try {
          const res = await addToCart({
            id: product.id,
            data: { userId: session.user.email, product },
          }).unwrap();
          
          // Show success message
          toast.success(res?.message);

          // Calculate the total quantity for this product in the cart
          const totalQuantity = res?.cartItems?.reduce((acc, item) => {
            return  acc + item.quantity ;
          }, 0);

          setQuantity(totalQuantity || 0);
        } catch (error) {
          toast.error("Error adding item to cart: " + error?.message);
        }
      }
    }
  };

  return (
    <div
      className={`w-full p-2 rounded-xl border-2 border-orange-500 text-gray-500 hover:text-white ${
        stock > 0 ? "hover:bg-orange-500 cursor-pointer" : "opacity-50 cursor-not-allowed"
      }`}
    >
      <button
        className="w-full"
        disabled={stock === 0}
        onClick={handleAddToCart}
      >
        {stock > 0 ? "Add to Cart" : "Out of Stock"}
      </button>
      {quantity > 0 && <p>Quantity in cart: {quantity}</p>}
    </div>
  );
};

export default AddToCartButton;
