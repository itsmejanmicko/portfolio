import { HelpCircle } from "lucide-react";
import UseTerminal from "../reducers/UseTerminal";
import SplashScreen from "./SplashScreen"; // Assuming you have this component available
import { useState } from "react";
import Help from "./common/Help";

export default function Terminal() {
  const {
    username,
    handleUsernameChange,
    handleUsernameKeyPress,
    isUsernameEntered,
    inputText,
    handleInputChange,
    handleServerKeyPress,
    showSplash,
  } = UseTerminal();
  const [isOpen, setIsOpen] = useState(false);

  function handleHelp() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <main className="bg-gray-800 overflow-hidden h-screen fixed w-full">
      {isOpen ? <Help isOpen={isOpen} closeModal={closeModal} /> : null}
      <div className=" z-10 flex items-end justify-end p-2">
        <button onClick={handleHelp}>
          <HelpCircle className="w-8 h-6 text-white" />
        </button>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-gray-800 inset-0 p-2">
        {showSplash ? (
          <SplashScreen />
        ) : (
          <section className="p-2">
            <div className="w-ful max-w-4xl h-[60vh] bg-gray-700 rounded-lg shadow-lg overflow-hidden fixed inset-0 m-auto">
              <div className="bg-gray-700 p-2 flex items-center space-x-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <div className="p-4 font-mono text-sm text-gray-300 h-full overflow-hidden">
                <p className="text-green-400">C:\Users\Portfolio&gt; npm install</p>
                <p className="text-yellow-300">added 1 package, and audited 123 packages in 3s</p>
                <p className="text-blue-300">23 packages are looking for funding</p>
                <p className="text-blue-300">run `npm fund` for details</p>
                <p className="text-green-400">found 0 vulnerabilities</p>
                <p className="text-green-400">C:\Users\Portfolio&gt; npm run dev</p>
                <p className="text-cyan-300">&gt; vite-app@0.1.0 dev</p>
                <p className="text-cyan-300">&gt; vite</p>
                <p className="text-white">- ready started server on http://localhost:5173</p>
                <p className="text-gray-400">● Compiled successfully!</p>
                <p className="text-gray-400">● Vite server running...</p>

                {/* User Input: Username */}
                <div className="text-green-400 mt-4">
                  <p className="mb-2">
                    C:\Users\Portfolio\Server&gt;
                    <div className="w-full">
                      <input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        onKeyDown={handleUsernameKeyPress} // Handle Enter press on username input
                        className="bg-transparent border-none outline-none text-gray-300 w-full font-mono text-sm pr-4"
                        placeholder="Enter your username"
                        autoFocus
                      />
                    </div>
                  </p>
                </div>

                {/* If username entered, show command input */}
                {isUsernameEntered && (
                  <div className="text-green-400 mt-4">
                    <p className="mb-2">
                      C:\Users\Portfolio\Server&gt;
                      <div className="w-full">
                        <input
                          type="text"
                          value={inputText}
                          onChange={handleInputChange}
                          onKeyDown={handleServerKeyPress} // Handle Enter press on input for starting server
                          className="bg-transparent border-none outline-none text-gray-300 w-full font-mono text-sm pr-4"
                          placeholder="Start a server"
                          autoFocus
                        />
                      </div>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}