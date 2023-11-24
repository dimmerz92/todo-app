"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { TodoItem } from "../types/TodoItem";
import { IoPencilOutline, IoTrashBin } from "react-icons/io5";

const TodoItems = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      const response = await axios.get("/api/todos");
      setTodos(await response.data);
    };
    getTodos();
  }, []);

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="border rounded-lg shadow-md p-2 aspect-video relative"
        >
          <div className="grow">
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </div>
          <div className="inline-flex absolute bottom-2 right-2">
            <IoPencilOutline style={{ color: "blue", fontSize: "1.5em" }} />
            <IoTrashBin style={{ color: "red", fontSize: "1.5em" }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoItems;
