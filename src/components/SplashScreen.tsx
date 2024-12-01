import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SplashScreen() {
  const [spinner, setSpinner] = useState('/');
  const [progress, setProgress] = useState(0);
  const spinnerChars = ['/', '-', '\\', '|'];
  const navigate = useNavigate();
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSpinner(prev => spinnerChars[(spinnerChars.indexOf(prev) + 1) % spinnerChars.length]);

      if (progress < 100) {
        setProgress(prev => prev + 5); 
      }
    }, 100); 

   
    if (progress === 100) {
      clearInterval(intervalId);
      navigate('/landingpage')
    }

    return () => clearInterval(intervalId); 
  }, [spinner, progress]);
 
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-screen max-w-4xl h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gray-800 p-2 flex items-center space-x-1">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        {/* Terminal-like content */}
        <div className="bg-black text-green-500 p-6 font-mono text-lg h-full flex flex-col justify-center items-center">
          <div className="mb-4 text-center">
            <span>{spinner}</span> Installing...
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-4">
            <div
              className="bg-green-500 h-full rounded-full transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-sm mt-2">{progress}%</div>
        </div>
      </div>
    </div>
  );
}
