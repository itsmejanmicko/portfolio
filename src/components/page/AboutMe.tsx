import TerminalNav from "../Terminalpage/TerminalNav";
import me from '../../../public/me.jpg';
import { Pizza, Code, BookOpen, Gamepad2, Wrench } from "lucide-react";

export default function AboutMe() {
  return (
    <div id="about" className="min-h-screen flex  bg-gray-900 text-gray-100">
      <TerminalNav />
      <div className="max-w-4xl mx-auto px-4 py-20 mb-10">
        <h1 className="text-4xl font-bold text-blue-400 mb-8">About Me</h1>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <img
            className="rounded-lg object-cover"
            src={me}
            alt="Profile picture"
            width={300}
            height={300}
          />
          <div>
            <h2 className="text-2xl font-semibold mb-4">John Mikko I. Mejia</h2>
            <p className="text-xl text-gray-500 mb-6">Nodejs Developer</p>
            <p className="text-gray-400">
              "I'm a backend developer who loves coding, reading books, and occasionally stressing over why 'it works on my machine' 😂. When I'm not debugging the mysteries of the universe, you’ll find me buried in a book or overthinking API responses like they hold the secret to life."
            </p>
          </div>
        </div>

        {/* Icons Section */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Eating */}
          <div className="flex flex-col items-center group relative">
            <Pizza className="text-yellow-500 w-8 h-8 mb-2" />
            <p className="text-gray-500 text-sm">Eating</p>
            <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-700 text-white text-xs rounded-md px-2 py-1 transition-opacity">
              "Food is life 🍕"
            </span>
          </div>
          
          {/* Coding */}
          <div className="flex flex-col items-center group relative">
            <Code className="text-blue-500 w-8 h-8 mb-2" />
            <p className="text-gray-500 text-sm">Coding</p>
            <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-700 text-white text-xs rounded-md px-2 py-1 transition-opacity">
              "Turning coffee into code ☕"
            </span>
          </div>
          
          {/* Reading */}
          <div className="flex flex-col items-center group relative">
            <BookOpen className="text-green-500 w-8 h-8 mb-2" />
            <p className="text-gray-500 text-sm">Reading</p>
            <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-700 text-white text-xs rounded-md px-2 py-1 transition-opacity">
              "Books are magic ✨"
            </span>
          </div>
          
          {/* Gaming */}
          <div className="flex flex-col items-center group relative">
            <Gamepad2 className="text-purple-500 w-8 h-8 mb-2" />
            <p className="text-gray-500 text-sm">Gaming</p>
            <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-700 text-white text-xs rounded-md px-2 py-1 transition-opacity">
              "One more level! 🎮"
            </span>
          </div>
          
          {/* Fixing Machines */}
          <div className="flex flex-col items-center group relative">
            <Wrench className="text-red-500 w-8 h-8 mb-2" />
            <p className="text-gray-500 text-sm">Fixing Machines</p>
            <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-700 text-white text-xs rounded-md px-2 py-1 transition-opacity">
              "Tinkering like a pro 🛠️"
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
