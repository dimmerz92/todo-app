"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewTodoPage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Add new tasks..." />
      </TextField.Root>
      <TextArea placeholder="Add any details about your task..." />
      <Button>Submit</Button>
    </div>
  );
};

export default NewTodoPage;
