import { addCartCollection } from "@/components/database/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const email = (await params).id;
    try{
        const cartItems=await addCartCollection.find({userId:email}).toArray()
        if (cartItems.length === 0) {
            return NextResponse.json(
              { message: "No items found in the cart for this user" },
              { status: 404 }
            );
          }
      
          return NextResponse.json(cartItems, { status: 200 });

    }catch(err){
        return NextResponse.json(
            { message: "Failed to fetch cart items", error: error.message },
            { status: 500 }
          );

    }
  }