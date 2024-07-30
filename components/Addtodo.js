"use client";
import { addTodo, updateTodo } from "@/reduxStore/Reducers/todoReducer";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Addtodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  const [username, setUsername] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const todoToEdit = todos.find((todo) => todo.isEdit);
    if (todoToEdit) {
      setUsername(todoToEdit.text);
      setEditId(todoToEdit.id);
    } else {
      setUsername("");
      setEditId(null);
    }
  }, [todos]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (username.trim().length > 0) {
      if (editId) {
        dispatch(updateTodo({ id: editId, text: username.trim() }));
      } else {
        dispatch(addTodo({ text: username.trim() }));
      }
      setUsername("");
      setEditId(null);
    }
  };

  return (
    <div className="space-x-4">
      <form onSubmit={submitHandler} className="space-x-3 sm:space-x-5">
        <input
          type="text"
          className="border p-2 border-black rounded-md sm:w-[80vh]"
          placeholder="Write todo"
          name="todo"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button className={`${editId ? "bg-green-500" : "bg-blue-500"} text-white p-2 rounded-md`} type="submit">
          {editId ? "Update Todo" : "Add Todo"}
        </button>
      </form>
    </div>
  );
};

export default Addtodo;
