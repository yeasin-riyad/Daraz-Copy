import { favoriteCollection } from "@/components/database/db";

export async function POST(req) {
    try {
        // Parse and store the JSON data from the request
        const {user,product} = await req.json();
        // console.log(user,product)
        const existingFavoriteItem=await favoriteCollection.findOne({user,'product.id':product.id});
        if(existingFavoriteItem){
           await favoriteCollection.deleteOne({user,'product.id':product.id})
           return new Response(JSON.stringify({ message: 'Remove From Favorite Item', }), { status: 200 });


        }
        await favoriteCollection.insertOne({user,product})
        
       

        // You can also return a response if needed
        return new Response(JSON.stringify({ message: 'Added To Favorite Item', }), { status: 200 });
    } catch (error) {
        console.error("Error parsing JSON:", error);
        return new Response(JSON.stringify({ message: 'Invalid JSON format' }), { status: 400 });
    }
}


