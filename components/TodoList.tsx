"use client";

import { JSX, useEffect, useRef, useState } from "react";
interface Task {
    text:string,
    completed:boolean
}
interface TodoListProps{
  darkmode:boolean,
  toggleDarkMode:()=>void
}
const TodoList: React.FC<TodoListProps> = ({ darkmode, toggleDarkMode }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const newTask = useRef<HTMLInputElement>(null);
    const [showCompleted,setShowCompleted] = useState<boolean>(false);
    useEffect(()=>{
      const value = localStorage.getItem("todo");
      if(value !== null)
        setTasks(JSON.parse(value))
    },[]);
    useEffect(()=>{
      localStorage.setItem("todo",JSON.stringify(tasks));
    },[tasks])
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
            className={`flex justify-between items-center my-2 p-2 rounded-lg border transition-colors ${
              task.completed
                ? "bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700"
                : "bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
              }`}          >
            <input type="checkbox" 
              onChange={() => toggleTask(task)}
              checked={task.completed}
            ></input>
            <span
              onClick={() => toggleTask(task)}
              className={`cursor-pointer ${
                task.completed
                  ? "line-through text-gray-500 dark:text-gray-400"
                  : "text-gray-800 dark:text-gray-100"
              }`}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task)}
              className="text-red-500 hover:text-red-700 dark:hover:text-red-400"
            >
              ✖
            </button>
          </li>
        ))
    }

    const clearAll = () =>{
      setTasks([]);
    }

    return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 shadow-xl rounded-2xl transition-colors duration-300">
      <div className="flex justify-between items-center mb-4">
        <h1 className="ttext-2xl font-bold mb-4 text-center text-gray-800 dark:text-gray-100">📝 To-Do List ({
            countOFTasks()
          })</h1>
          <button
          onClick={toggleDarkMode}
          className="text-sm px-3 py-1 rounded-lg border border-gray-400 dark:border-gray-500 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkmode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="flex-grow border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring focus:ring-blue-400"
          placeholder="Add a task..."
          ref = {newTask}
        />
        <button
          onClick={addTask}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
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
            <span className="text-gray-500 dark:text-gray-400">show completed?</span>
          </li>
                  {
          showCompleted?showCompletedTask(true):null
        }
      </ul>
      {tasks.length > 0 && (
        <button
          onClick={clearAll}
          className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition-colors"
        >
          Clear All
        </button>
      )}
    </div>
  );
}
export default TodoList;