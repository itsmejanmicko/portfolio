import { useEffect, useState } from "react";

export default function LandingPage() {
  const data: string | null = localStorage.getItem('username');
  const [index, setIndex] = useState(0);
  const [displayedName, setDisplayedName] = useState("");
  const username = data ? data.charAt(0).toUpperCase() + data.slice(1) : "";
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLoading, setIsloading] = useState(true);
  const handleCanPlay = () => {
    setIsloading(false); 
  };
  useEffect(() => {
    let timer:number;

    if (username) {
      if (!isDeleting && index < username.length) {
        
        timer = setTimeout(() => {
          setDisplayedName((prev) => prev + username[index]);
          setIndex((prev) => prev + 1);
        }, 500);
      } else if (isDeleting && index > 0) {

        timer = setTimeout(() => {
          setDisplayedName((prev) => prev.slice(0, -1));
          setIndex((prev) => prev - 1);
        }, 500); 
      } else if (index === username.length) {
    
        setIsDeleting(true);
        timer = setTimeout(() => {}, 1000); 
      } else if (index === 0 && isDeleting) {
      
        setIsDeleting(false);
      }
    }

    return () => clearTimeout(timer);
  }, [index, isDeleting, username]);
  return (
    <main className="h-screen flex items-center justify-center relative">
    <div className="flex flex-col items-center justify-center w-96">
      {isLoading && (
        <div className="absolute w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50 z-10">
          <img src="" alt="Loading..." />
        </div>
      )}
      <video
        className="w-full h-full object-cover rounded-lg"
        autoPlay
        loop
        muted
        playsInline
        onCanPlay={handleCanPlay} 
        src="../../public/bunny hi-vmake.mp4"
      />
     {isLoading ? (
       <p>Hang on there......</p>
     ):(
      <label className="text-center text-2xl font-poppins font-bold">Ohayoo, {displayedName}</label>
     )}
    </div>
  </main>
  );
}
