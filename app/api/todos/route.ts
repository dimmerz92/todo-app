import { NextRequest, NextResponse } from "next/server";
import { createTodoSchema } from "../../validationSchemas";
import { auth } from "@clerk/nextjs";
import prisma from "@/prisma/client";

export async function POST(request: NextRequest) {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ message: "Unauthorised" }, { status: 401 });
  }

  const body = await request.json();
  const validation = createTodoSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 404 });
  }

  const newTodo = await prisma.todo.create({
    data: {
      userId: userId,
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(newTodo, { status: 201 });
}

export async function GET() {
  const { userId } = auth();

  if (!userId) {
    return NextResponse.json({ message: "Unauthorised" }, { status: 401 });
  }

  try {
    const todoList = await prisma.todo.findMany({ where: { userId: userId } });
    return NextResponse.json(todoList, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 404 });
  }
}
