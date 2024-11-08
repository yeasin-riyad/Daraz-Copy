import { NextResponse } from "next/server";
import { addCartCollection } from "@/components/database/db";

export async function POST(req, { params }) {
  const productId = parseInt((await params).id);
  const { userId, product,action } = await req.json();

  try {
    // Check if the cart item for this user and product already exists
    const existingCartItem = await addCartCollection.findOne({
      userId,
      "product.id": productId,
    });

    if (existingCartItem) {
      // Decrement Quantity..........
      if (action === "decrement") {
        // Code to decrease quantity in the cart
        // Example:
          await addCartCollection.updateOne(
          { userId, "product.id": productId },
          { $inc: { quantity: -1 } }
        );
        
        return NextResponse.json({ message: "Quantity decreased" }, { status: 200 });
      }


      // Increment quantity if item already exists in cart
      await addCartCollection.updateOne(
        { userId, "product.id": productId },
        { $inc: { quantity: 1 } }
      );
    } else {
      // If item doesn't exist, add a new item to the cart
      await addCartCollection.insertOne({
        userId,
        product: { ...product, id: productId },
        quantity: 1,
      });
    }

    // Retrieve the updated cart items for the user
    const updatedCartItems = await addCartCollection.find({ userId }).toArray();

    return NextResponse.json(
      {
        message: existingCartItem
          ? "Product quantity updated in cart"
          : "Product added to cart successfully",
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
