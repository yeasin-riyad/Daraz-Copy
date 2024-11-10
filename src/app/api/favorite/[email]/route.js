import { favoriteCollection } from "@/components/database/db";

export async function GET(req,{params}) {
    const email = (await params).email;

    try{
        const result =await favoriteCollection.find({user:email}).toArray()
        return new Response(JSON.stringify(result, { status: 200 }));

    }catch(err){
        return new Response(JSON.stringify({ message: 'IFailed to fetch data.' }), { status: 400 });

    }
    
}