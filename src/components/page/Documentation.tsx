import Docs from "../common/Docs";

export default function Documentation() {
  return (
    <main className="bg-gray-900 text-gray-100 min-h-screen p-2 mt-12 sm:mt-0"> 
      <div className="min-h-screen bp-14 md:p-12 flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-mono font-bold leading-tight">
              Let's explore my<br />Portfolio
            </h1>

            <p className="text-lg max-w-xl">
              As a backend developer, my focus has always been on creating robust and efficient systems. However, I understand the importance of user experience and design, which is why this portfolio design is inspired by the clean and functional UI of macOS. It aims to combine simplicity with efficiency, reflecting my approach to both development and design. While creating front-end designs may not be my primary expertise, I strive to ensure that the interface complements the backend work seamlessly.
            </p>      
          </div>

          {/* Right Column - Illustration */}
          <div className="relative">
            <div className="relative w-full aspect-square">
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-4 h-4 text-lime-400 z-10">+</div>
              <div className="absolute bottom-0 left-1/4 w-4 h-4 text-lime-400 z-10">+</div>

              {/* Main illustration frames */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Back window frame */}
                <div className="absolute top-0 right-0 w-4/5 h-4/5 border-2 border-black rounded-lg bg-white z-0">
                  <div className="h-6 bg-white border-b-2 border-black flex items-center px-2 space-x-1">
                    <div className="w-3 h-3 rounded-full bg-red-500 z-20"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 z-20"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 z-20"></div>
                  </div>
                  <div className="absolute inset-0 w-full h-full">
                    <video 
                      className="w-full h-full object-cover rounded-lg"
                      autoPlay
                      loop
                      muted
                      playsInline
                      src="https://res.cloudinary.com/dgw5chjkw/video/upload/v1733068440/wqunly3ptoamntonrsch.mp4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Docs />
    </main>
  );
}
