import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removetodo } from "../features/todoslices";

function Todo() {
  const todos = useSelector((state) => state.todos);  //useSelector  is used to read the data from store
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">
          Todo List
        </h2>
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg border"
            >
              <span>{todo.text}</span>
              <button
                onClick={() => dispatch(removetodo(todo.id))}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
