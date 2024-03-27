"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    // console.log(title)
    // console.log(desc)
    setTitle("");
    setDesc("");
    console.log(mainTask);
  };

  let deletehandler = (i)=>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }
  let renderTask = <h2>No Task available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between">
        <div className="flex items-center justify-between m-5 w-2/3">
          <h5 className="text-2xl font-semibold">{t.title}</h5>
          <h6 className="text-xl font-semibold">{t.desc}</h6>
        </div>
        <button className="bg-red-500 rounded-md p-3" onClick={deletehandler}>Delete</button>
        </li>
      );
    });
  }

  return (
    <>
      <div className="bg-black text-white p-5 text-5xl font-bold text-center">
        Personal Todo List app in React
      </div>
      <form className="flex flex-col" onSubmit={submitHandler}>
        <div className="flex w-full">
          <input
            type="text"
            placeholder="Enter title Task Here"
            className="border-zinc-800 border-4 m-3 px-4 py-2 rounded-2xl w-1/2"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              // console.log(e.target.value)
            }}
          />
          <input
            type="text"
            placeholder="Enter Descrption Task Here"
            className="border-zinc-800 border-4 m-3 px-4 py-2 rounded-2xl w-1/2"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
              // console.log(e.target.value)
            }}
          />
        </div>
        <button className="bg-black text-white font-bold text-l p-3 rounded-xl mb-10">
          add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
