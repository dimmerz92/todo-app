import prisma from "./client";
import { todos } from "./todos";

async function main() {
  for (let todo of todos) {
    await prisma.todo.create({
      data: todo,
    });
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
