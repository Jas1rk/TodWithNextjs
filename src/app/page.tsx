"use client";

import AddTodo from "@/components/AddTodo";
import { toast, Toaster } from "sonner";
import { Todo } from "@/types/todo";
import { v4 as uuidv4 } from "uuid";
import TodoList from "@/components/TodoList";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (register_no: string, name: string, total_mark: number) => {
    const isExist = todos.some((todo) => todo.register_no === register_no);
    if (isExist) return toast.warning("This register number is already exist");
    const newTodo: Todo = {
      id: uuidv4(),
      register_no,
      name,
      total_mark,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    toast.success("Item Added");
  };

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Toaster position="top-center" richColors />
      <div className="max-w-lg mx-auto mt-10 p-5 bg-[#1E1E1E] rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4 text-white">
          Todo List
        </h1>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </div>
    </>
  );
}
