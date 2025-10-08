"use client";

import { Leckerli_One } from "next/font/google";
import { JSX, useRef, useState } from "react";
interface Task {
    text:string,
    completed:boolean
}

export default function TodoList(){
    const [tasks, setTasks] = useState<Task[]>([]);
    const newTask = useRef<HTMLInputElement>(null);
    const [showCompleted,setShowCompleted] = useState<boolean>(false);

    const addTask = async()=>{
        let input = newTask.current;
        if(!input || input.value.trim() === "") return;
        if(!tasks.find(t=>t.text === input.value))
          await setTasks((prev)=>[...prev,{text:input.value,completed:false}]);
        input.value = "";
    }

    const toggleTask = (data:Task) =>{
        setTasks(prev=>prev.map(t=>t.text === data.text ? {...t, completed : !t.completed }:t));
    }
    const countOFTasks = ():number=>{
      return tasks.filter(t=>t.completed!==true).length;
    }
    const deleteTask = (data:Task) =>{
        setTasks(tasks.filter(t => t.text !== data.text ));
    }
    const showCompletedTask = (complete:boolean):JSX.Element[]=>{
      return tasks.filter(t=>t.completed === complete).map((task, index) => (
          <li
            key={index}
            className="flex justify-between bg-gray-100 px-3 py-2 mb-2 rounded-lg"
          >
            <input type="checkbox" 
              onChange={() => toggleTask(task)}
              checked={task.completed}
            ></input>
            <span
              onClick={() => toggleTask(task)}
              className={`cursor-pointer ${
                task.completed ? "line-through text-gray-400 " : ""
              }`}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task)}
              className="text-red-500 hover:text-red-700"
            >
              ✖
            </button>
          </li>
        ))
    }

    return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold text-center mb-4">📝 To-Do List ({
          countOFTasks()
        })</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="flex-grow border rounded-lg px-3 py-2"
          placeholder="Add a task..."
          ref = {newTask}
        />
        <button
          onClick={addTask}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Add
        </button>
      </div>

      <ul>
        {
          showCompletedTask(false)
        }
          <li
            
            className="flex justify-center px-3 py-2 mb-2 rounded-lg"
          >
            <input type="checkbox" 
            className="mr-3"
              onChange={() => setShowCompleted(c=>!c)}
              checked={showCompleted}
            ></input>
            <span>show completed?</span>
          </li>
                  {
          showCompleted?showCompletedTask(true):null
        }
      </ul>
    </div>
  );
}
