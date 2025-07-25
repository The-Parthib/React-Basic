import { useEffect, useState } from "react";
import { TodoContextProvider } from "../../context";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]); // todo: as it is an object
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  // fetch data
  useEffect(() => {
    const todosData = localStorage.getItem("todos");
    if (todosData && todosData !== "undefined") {
      try {
        const todos = JSON.parse(todosData);
        if (todos && todos.length > 0) {
          setTodos(todos);
        }
      } catch (error) {
        console.error("Error parsing todos from localStorage:", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}
    >
      <div className="bg-[#172a46] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
};

export default TodoApp;
