import { ChangeEvent, useState, KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';  

export default function TerminalPage() {
  const [currentDirectory, setCurrentDirectory] = useState("C:\\Users\\Portfolio");
  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  
  const navLink = [
    {id: 1, path: '/about', dir: 'AboutMe'},
    {id: 2, path: '/projects', dir: 'Project'},
    {id:3, path:'/tech', dir:'Tech'}
  ];

  const navigate = useNavigate();  
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  const changeDir = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (inputValue.startsWith('code ') || inputValue === 'code.') {
        const matchedLink = navLink.find(link => link.dir.toLowerCase() === currentDirectory.split('\\').pop()?.toLowerCase());
        if (matchedLink) {
          navigate(matchedLink.path); 
          setHistory(prevHistory => [...prevHistory, `C:\\Users\\Portfolio> ${inputValue}`]);
        } else {
          console.log("Current directory is not a valid navLink:", currentDirectory);
        }
      }
      if(inputValue==="exit"){
        localStorage.removeItem("username");
        navigate('/');
      }
      const newHistory = [...history];
      if (inputValue.startsWith('cd ')) {
        const dir = inputValue.substring(3).trim();
        if (dir === '..') {
          const currentDirs = currentDirectory.split('\\');
          if (currentDirs.length > 1) {
            const newDirectory = currentDirs.slice(0, -1).join('\\');
            setCurrentDirectory(newDirectory);
            newHistory.pop();
            setHistory(newHistory);
          }
        } else if (dir) {
          const foundLink = navLink.find(link => link.dir.toLowerCase() === dir.toLowerCase());
          if (foundLink) {
            setCurrentDirectory(`${currentDirectory}\\${dir}`); 
          } else {
            console.log("Directory not found in navLink:", dir);  
          }
        }
      } else {
        console.log("Command not recognized:", inputValue);  
      }

      if (inputValue !== 'cd..') {
        setHistory(prevHistory => [...prevHistory, `C:\\Users\\Portfolio> ${inputValue}`]);
      }

      setInputValue("");  
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-1 sm:p-6 overflow-hidden fixed inset-0 -mt-14 sm:-mt-0">
    <div className="w-full max-w-4xl sm:w-[90vw] bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gray-800 p-2 flex items-center space-x-1">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
  
      <div className="p-4 font-mono text-sm text-gray-300 overflow-auto h-[calc(100%-2rem)] terminal-scroll-container">
        <p className="text-green-400">vite v4.0.0 dev server running at:</p>
        <p className="text-green-400">&gt; Local:  http://localhost:3000/</p>
        <p className="text-green-400">&gt; Network:  http://192.168.1.100:3000/</p>
  
        {/* Display terminal history */}
        {history.map((line, index) => (
          <p key={index} className="text-green-400">{line}</p>
        ))}
  
        <div className="text-green-400">
          <p className="">{currentDirectory}&gt;</p>
          <div className="w-full">
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              onKeyDown={changeDir}
              className="bg-transparent border-none outline-none text-gray-300 w-full font-mono text-sm pr-4"
              placeholder="Type command here"
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}
