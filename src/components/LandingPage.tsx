import { useEffect, useState } from "react";

export default function LandingPage() {
  const data: string | null = localStorage.getItem('username');
  const [index, setIndex] = useState(0);
  const [displayedName, setDisplayedName] = useState("");
  const username = data ? data.charAt(0).toUpperCase() + data.slice(1) : "";
  const [isDeleting, setIsDeleting] = useState(false);

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
    <main className="h-screen w-full flex items-center justify-center sm:relative fixed bg-gray-900 text-gray-100 m-0 p-0">
    <div className="flex flex-col items-center justify-center w-96">
      <video
        className="w-full h-full object-cover rounded-lg"
        autoPlay
        loop
        muted
        playsInline
        src="https://res.cloudinary.com/dgw5chjkw/video/upload/v1733068497/oh0w0jkworkhrmchumpk.mp4"
      />
      <label className="text-center text-2xl font-poppins font-bold">Ohayoo, {displayedName}</label>
    </div>
  </main>
  
  );
}
