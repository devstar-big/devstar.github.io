"use client";

import { useEffect, useState } from "react";
import TodoList from "@/components/TodoList";

export default function Home() {
      const [darkmode,setDarkmode] = useState<boolean>(false);
      useEffect(() => {
          const saved = localStorage.getItem("theme");
          if (saved) {
            setDarkmode(saved === "dark");
          } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setDarkmode(prefersDark);
          }
        }, []);
  useEffect(()=>{
      const root = window.document.documentElement;
      if(darkmode){
        root.classList.add("dark");
        localStorage.setItem("theme","dark");
      }else{
        root.classList.remove("dark");
        localStorage.setItem("theme","light");
      }
      console.log(darkmode);
      
    },[darkmode])
  return (
    <main className="min-h-screen dark:bg-gray-100 flex items-center justify-center">
      <TodoList darkmode = {darkmode} toggleDarkMode = {()=>setDarkmode(!darkmode)}/>
    </main>
  );
}
