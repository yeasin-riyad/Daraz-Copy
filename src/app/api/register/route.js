import { usersCollection } from '@/components/database/db';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { name, email, password } = await req.json();

  try {
      
    const existingUser = await usersCollection.findOne({ email });

    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    await usersCollection.insertOne({ name, email, password });
    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error registering user', error }, { status: 500 });
  }
}
