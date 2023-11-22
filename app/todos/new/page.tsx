"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import React from "react";
import axios from "axios";

interface TodoForm {
  title: string;
  description: string;
}

const NewTodoPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<TodoForm>();

  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/todos", data);
        router.push("/todos");
      })}
    >
      <TextField.Root>
        <TextField.Input
          placeholder="Add new tasks..."
          {...register("title")}
        />
      </TextField.Root>
      <TextArea
        placeholder="Add any details about your task..."
        {...register("description")}
      />
      <Button>Submit</Button>
    </form>
  );
};

export default NewTodoPage;
