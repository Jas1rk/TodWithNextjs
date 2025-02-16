"use client";
import { Todo } from "@/types/todo";
import { useState } from "react";
import { toast } from "sonner";

type AddTodoProps = {
  addTodo: (register_no: string, name: string, total_mark: number) => void;
};

const AddTodo = ({ addTodo }: AddTodoProps) => {
  const [formData, setFormData] = useState<Todo>({
    register_no: "",
    name: "",
    total_mark: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("the data", formData);
    if (!formData.register_no || !formData.name || formData.total_mark === "") {
      return toast.error("Please fill fields");
    }
    addTodo(formData.register_no, formData.name, Number(formData.total_mark));
    setFormData({ register_no: "", name: "", total_mark: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 bg-transparent p-4 rounded-lg shadow-md"
    >
      <input
        type="text"
        placeholder="Register No"
        name="register_no"
        value={formData.register_no}
        onChange={handleChange}
        className="border p-2 rounded outline-none text-[#F9A825] bg-[#1E1E1E] border-none focus:ring-1 focus:ring-[#F9A825]"
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 rounded outline-none text-[#F9A825] bg-[#1E1E1E] border-none focus:ring-1 focus:ring-[#F9A825]"
      />
      <input
        type="number"
        name="total_mark"
        placeholder="Total Mark"
        value={formData.total_mark}
        onChange={handleChange}
        className="border p-2 rounded outline-none text-[#F9A825] bg-[#1E1E1E] border-none focus:ring-1 focus:ring-[#F9A825]"
        min="1"
      />
      <button
        type="submit"
        className="bg-[#F9A825] text-white p-2 rounded hover:bg-[#a7711a] ease-in-out duration-500"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
