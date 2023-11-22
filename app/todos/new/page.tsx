"use client";
import { Button, Callout, TextArea, TextField } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import axios from "axios";

interface TodoForm {
  title: string;
  description: string;
}

const NewTodoPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<TodoForm>();
  const [error, setError] = useState("");

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/todos", data);
            router.push("/todos");
          } catch (error) {
            setError("An unexpected error occurred");
          }
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
    </div>
  );
};

export default NewTodoPage;
