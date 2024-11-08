import { productsCollection } from "@/components/database/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const id = params?.id; // Extract the id from the request parameters
  try {
    // Find the document containing the products array
    const document = await productsCollection.findOne({}); // Find one document

    if (!document) {
      return NextResponse.json({ message: "No products found" }, { status: 404 });
    }

    // Filter the products array for the specific id
    const product =await document.products.find(product => product.id === parseInt(id));

    if (!product) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ product }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to fetch product" }, { status: 500 });
  }
}
