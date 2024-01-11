import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const id = parseInt(params.id);
  console.log(id);
  try {
    const posicional = await prisma.posicionales.findFirst({
      where: {
        id: id,
      },
    });
    if (!posicional) {
      return new NextResponse(`jugador con id ${id} no encontrado`, {
        status: 404,
      });
    }
    return NextResponse.json(posicional);
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const id = parseInt(params.id);
  try {
    const posicional = await prisma.posicionales.delete({
      where: {
        id: id,
      },
    });
    if (!posicional) {
      return new NextResponse(`jugador con id ${id} no encontrado`, {
        status: 404,
      });
    }
    return NextResponse.json({ message: posicional }, { status: 200 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const id = parseInt(params.id);
  const data = await request.json();
  try {
  const posicional = await prisma.posicionales.update({
      where: {
        id: id,
      },
      data: data,
    });
    if (!posicional) {
      return new NextResponse(`jugador con id ${id} no encontrado`, {
        status: 404,
      });
    }
    return NextResponse.json(posicional, { status: 200 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
}
