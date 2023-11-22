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
import Loading from "@/app/components/Loading";

type TodoForm = z.infer<typeof createTodoSchema>;

const NewTodoPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoForm>({
    resolver: zodResolver(createTodoSchema),
  });
  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true);
      await axios.post("/api/todos", data);
      router.push("/todos");
    } catch (error) {
      setLoading(false);
      setError("An unexpected error occurred");
    }
  });

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className="space-y-3" onSubmit={onSubmit}>
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
        <Button disabled={isLoading}>Submit {isLoading && <Loading />}</Button>
      </form>
    </div>
  );
};

export default NewTodoPage;
