import prisma from "@/prisma/client";
import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ message: "Unauthorised" });
  }

  try {
    const id = Number(params.id);
    const todoItem = await prisma.todo.findUnique({
      where: {
        id: id,
        userId: userId,
      },
    });
    return NextResponse.json(todoItem, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 404 });
  }
}
