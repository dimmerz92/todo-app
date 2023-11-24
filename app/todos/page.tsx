import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import TodoItems from "../components/TodoItems";

const TodosPage = async () => {
  return (
    <div className="flex flex-col space-y-6">
      <div>
        <Button>
          <Link href="/todos/new">New Item</Link>
        </Button>
      </div>
      <TodoItems />
    </div>
  );
};

export default TodosPage;
