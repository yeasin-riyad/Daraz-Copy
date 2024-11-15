// lib/db.js
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = `mongodb+srv://${process.env.NEXT_PUBLIC_USER_NAME}:${process.env.NEXT_PUBLIC_PASSWORD}@cluster0.gx2sshg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


await client.connect();
//  console.log("Connected to MongoDB and created collections in the 'Daraz' database!");

const db = client.db("Daraz");
export const productsCollection =db.collection("Products");
export const usersCollection = db.collection("Users");
export const addCartCollection = db.collection("AddCart");
export const  favoriteCollection = db.collection("Favorite");

