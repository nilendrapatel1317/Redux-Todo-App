"use client";
import { isEditTodo, removeTodo } from "@/reduxStore/Reducers/todoReducer";
import { Delete, DeleteIcon, Pencil, PencilIcon, Trash } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Todolist = () => {
  const dispatch = useDispatch();
  const todolistdata = useSelector((state) => state.todo);

  return (
    <div className=" todolist w-full sm:w-4/6 space-y-3 pb-10 ">
      {[...todolistdata].reverse().map((data) => {
        return (
          <div
            key={data.id}
            className=" p-3 bg-blue-100 flex flex-col sm:flex-row justify-between gap-3 sm:gap-0"
          >
            <div className="sm:w-5/6 ">
              <p className="text-center sm:text-start text-lg">{data.text}</p>
            </div>
            <div className="space-x-5 flex justify-center ">
              <button
                onClick={() =>
                  dispatch(isEditTodo({ id: data.id, isEdit: true }))
                }
                className="bg-yellow-500 text-white p-2 rounded-md "
              >
                <PencilIcon />
              </button>
              <button
                onClick={(e) => dispatch(removeTodo({ id: data.id }))}
                className="bg-red-500 text-white p-2 rounded-md "
              >
                <Trash />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todolist;
