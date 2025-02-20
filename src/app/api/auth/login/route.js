import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request) {
    const { email, password } = await request.json();

    const user = await prisma.user.findUnique({
        where: {
            email: email
        }   
    })
    console.log(user.password);
    if(!user) {
        return NextResponse.error(new Error('Invalid credentials'), { status: 401 });
    }

    if(user.password !== password) {
        return NextResponse.error(new Error('Invalid credentials'), { status: 401 });
    }

    return NextResponse.json({ message: 'Login successful' });
}