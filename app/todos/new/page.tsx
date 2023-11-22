"use client";
import { Button, Callout, TextArea, TextField, Text } from "@radix-ui/themes";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import axios from "axios";
import { createTodoSchema } from "@/app/validationSchemas";
import { ErrorMessage } from "@/app/components/ErrorMessage";

type TodoForm = z.infer<typeof createTodoSchema>;

const NewTodoPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoForm>({
    resolver: zodResolver(createTodoSchema),
  });
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
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <TextArea
          placeholder="Add any details about your task..."
          {...register("description")}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default NewTodoPage;
