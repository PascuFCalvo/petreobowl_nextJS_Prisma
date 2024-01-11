import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    const posicional = await prisma.posicionales.create({
      data: data,
    });
    return new NextResponse(JSON.stringify(posicional), {
      headers: { "Content-Type": "application/json" },
      status: 201,
    });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
}
