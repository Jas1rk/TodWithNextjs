import { Todo } from "@/types/todo";

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <div className="flex items-center justify-between bg-transparent text-white border border-[#F9A825] p-3 rounded-md shadow-md mt-2">
      <div className="flex flex-col">
        <p
          className={`text-lg ${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
        >
          Register NO: {todo.register_no}
        </p>
        <p
          className={`text-lg ${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
        >
          Name: {todo.name}
        </p>
        <p
          className={`text-lg ${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
        >
          Total Mark: {todo.total_mark}
        </p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onToggle(todo.id)}
          className={`p-2 rounded-full w-8 h-8 justify-center items-center flex text-base ${
            todo.completed ? "bg-green-500 text-white" : "bg-gray-300"
          }`}
        >
          ✔
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="bg-red-600
           text-white p-2 rounded-full w-8 h-8 flex justify-center items-center text-base hover:bg-red-600"
        >
          ✖
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
