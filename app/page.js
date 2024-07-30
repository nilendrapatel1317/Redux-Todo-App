import Addtodo from "@/components/Addtodo";
import Todolist from "@/components/Todolist";
import React from "react";

const page = () => {
  return (
    <div >
      <div className="text-center my-5 text-3xl font-bold border-b pb-5 border-black">
        <h1>Redux ToDo App</h1>
      </div>
      <div className="flex flex-col items-center pt-5 gap-10">
        <Addtodo />
        <Todolist />
      </div>
    </div>
  );
};

export default page;
