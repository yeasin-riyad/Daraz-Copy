import { productsCollection } from "@/components/database/db";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const result = await productsCollection.find().toArray();
        return NextResponse.json( result[0],{status: 200 });
    } catch (error) {
        console.error("Error fetching Products:", error);
        return NextResponse.json({ message: "Failed to fetch products", error: error.message }, { status: 500 });
    }
}
