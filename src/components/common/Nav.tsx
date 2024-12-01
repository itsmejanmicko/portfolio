import React, { useState, useEffect } from "react";
import { Wifi, Battery, Sun,Moon } from "lucide-react"; 


export default function Nav(){
    const [time, setTime] = useState("00:00");
    const [isDarkMode, setIsDarkMode] = useState(false);
  

    useEffect(() => {
      const updateClock = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        setTime(`${hours}:${minutes}`);
      };
      updateClock();
      const interval = setInterval(updateClock, 1000);
      return () => clearInterval(interval);
    }, []);
    useEffect(() => {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        setIsDarkMode(storedTheme === "dark");
      } else {
        setIsDarkMode(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
      }
    }, []);
  
    useEffect(() => {
      if (isDarkMode) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }, [isDarkMode]);
  
  return (
    <div className="font-sans w-full bg-gray-900 text-gray-100 flex items-center justify-between px-4 py-1 fixed top-0 shadow-lg backdrop-blur-md z-50">
      {/* Left Section */}
      <div className="flex space-x-6">
        <span className="cursor-pointer hover:text-gray-400">Jan-Micko</span>
      </div>

      {/* Center Section */}
      <div className="text-sm font-medium">{time}</div>

      {/* Right Section */}
      <div className="flex space-x-4 items-center">
        <Wifi className="h-5 w-5 text-gray-300 hover:text-gray-100 cursor-pointer" />
        <Battery className="h-5 w-5 text-gray-300 hover:text-gray-100 cursor-pointer" />
        {/* Settings Button */}
        <button
          className="p-2 rounded-full text-gray-300 hover:text-gray-100"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </div>
    </div>
  );
};


