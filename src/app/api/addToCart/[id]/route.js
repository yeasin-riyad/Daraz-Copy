import { NextResponse } from "next/server";
import { addCartCollection } from "@/components/database/db";

export async function POST(req, { params }) {
  const productId = parseInt((await params).id);
  const { userId, product, action } = await req.json();

  try {
    // Check if the cart item for this user and product already exists
    const existingCartItem = await addCartCollection.findOne({
      userId,
      "product.id": productId,
    });

    if (existingCartItem) {
      if (action === "decrement") {
        // Decrease quantity and price
        if (existingCartItem.quantity > 1) {
          await addCartCollection.updateOne(
            { userId, "product.id": productId },
            { 
              $inc: { quantity: -1, totalPrice: -product.price }
            }
          );
          return NextResponse.json({ message: "Quantity decreased" }, { status: 200 });
        } else {
          // Remove item if quantity is 1 and decrement is requested
          await addCartCollection.deleteOne({ userId, "product.id": productId });
          return NextResponse.json({ message: "Item removed from cart" }, { status: 200 });
        }
      }

      // Increment quantity and price if item already exists in cart
      await addCartCollection.updateOne(
        { userId, "product.id": productId },
        { 
          $inc: { quantity: 1, totalPrice: product.price }
        }
      );
    } else {
      // If item doesn't exist, add a new item to the cart
      await addCartCollection.insertOne({
        userId,
        product: { ...product, id: productId },
        quantity: 1,
        totalPrice:product.price
      });
    }

    // Retrieve the updated cart items for the user
    const updatedCartItems = await addCartCollection.find({ userId }).toArray();

    return NextResponse.json(
      {
        message: existingCartItem
          ? "Product quantity updated in cart"
          : "Product added to cart successfully",
        updatedCartItems,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error adding/updating cart item:", error);
    return NextResponse.json(
      { message: "Error adding/updating cart item", error },
      { status: 500 }
    );
  }
}
