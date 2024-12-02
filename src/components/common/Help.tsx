import { Code, Play , UserPen, X } from "lucide-react";


export default function Help({isOpen, closeModal}: {isOpen: boolean, closeModal: () => void}) {
    const steps = [
        {
          icon: <UserPen className="w-6 h-6 text-blue-500" />,
          title: "Create a username in the terminal and press Enter",
          description: "Note that this username is not stored anywhere and is only used for demonstration purposes."
        },
        {
          icon: <Code className="w-6 h-6 text-green-500" />,
          title: "What is this?",
          description: "Its a simple terminal emulator that demonstrates the use of a terminal in node.js."
        },
        {
          icon: <Play  className="w-6 h-6 text-purple-500" />,
          title: "How to run?",
          description: "Once you've entered a username, you can start a server by typing `npm run start or npm start` and pressing Enter."
        }
      ]
  return (
   <main>
    {isOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold">How to access main page?</h2>
          <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4 mt-4 space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0">{step.icon}</div>
              <div>
                <h3 className="font-medium">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )}
   </main>
  )
}
