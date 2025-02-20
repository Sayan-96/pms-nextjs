import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function POST(req) {
  const { email, password } = await req.json();
  
  console.log(email, password);

  const res = await prisma.user.create({
    data: {
      email: email,
      password: password
    }
  })
  return NextResponse.json({ message: "User created" });
}