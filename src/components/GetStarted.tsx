// import UseStarted from '../reducers/UseStarted';
// import rabbit from './../../public/rab.png';

// export default function GetStarted() {
//     const {username, setUsername, handleStart} = UseStarted();

//   return (
//     <main className="h-screen flex items-center justify-center md:block">
//       <section className="flex items-center justify-center">
//         <div className="relative">
//           <img src={rabbit} alt="rabbit" className="w-full h-auto" />
//          <form onSubmit={handleStart}>
//          <input
//             type="text"
//             value={username}
//              onChange={(e)=>setUsername(e.target.value)}
//             placeholder="Enter your username"            className="absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%]
//                        border border-gray-300 bg-white text-gray-700 p-3 rounded-lg text-center
//                        shadow-lg focus:outline-none focus:ring-1 focus:ring-black focus:border-black
//                        placeholder-gray-400 text-sm sm:text-base"
//           />
//           <button
//           type='submit'
//             className="absolute top-[110%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 
//                        px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md 
//                        hover:bg-gray-800 hover:shadow-lg focus:outline-none focus:ring-2 
//                        focus:ring-gray-400 focus:ring-offset-2 transition"
//           >
//             Continue
//           </button>
//          </form>
//         </div>
//       </section>
//     </main>
//   );
// }
