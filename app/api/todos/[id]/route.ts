import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  const todoItem = await prisma.todo.findUnique({
    where: {
      id: id,
    },
  });
  return NextResponse.json(todoItem, { status: 200 });
}
