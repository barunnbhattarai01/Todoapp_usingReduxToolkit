 //dispatch store the value using reducer into store
import React from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../features/todoslices";

function Addtodo() {
  const [username, setusername] = React.useState("");
  const dispatch = useDispatch();

  const info = (e) => {
    e.preventDefault();
    dispatch(addtodo(username)); //dispatch send the user input to store using addtodo reducer
    setusername("");
  };

  return (
    <div className="">
      <form
        onSubmit={info}
        className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200"
      >
        <div className="flex flex-col gap-4 p-8 rounded-2xl shadow-lg bg-white w-96 border border-gray-300">
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Task</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Enter your Task"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
}

export default Addtodo;
