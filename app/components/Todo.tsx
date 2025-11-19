"use client";

import { FaTrash } from "react-icons/fa";
import { useRouter } from "next/router";
import { useState, useTransition, ChangeEvent, MouseEvent } from "react";
useState;
import Link from "next/link";

export default function Todo(todo: Todo) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);

  const isMutating = isFetching || isPending;

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setIsFetching(true);

    const res = await fetch(`http://127.0.0.1:3500/todos/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...todo,
        completed: !todo.completed,
      }),
    });

    await res.json();
  };

  return <div>Todo</div>;
}
