import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { createTodoSchema } from "../../validationSchemas";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createTodoSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  const newTodo = await prisma.todo.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(newTodo, { status: 201 });
}
