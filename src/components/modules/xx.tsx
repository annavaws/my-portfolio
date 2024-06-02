// import { useState, useEffect, useRef } from "react";
// import { poppins } from "@/styles/fonts";

// export default function xx() {
//   const title = "SOFTWARE - ENGINEER";
//   const characters = title.split("");
//   const name = "ANNAVA WISHA SIKOKO";
//   const characters_name = name.split("");

//   const [offsetTitle, setOffsetTitle] = useState(0);
//   const [offsetName, setOffsetName] = useState(0);
//   const titleRef = useRef(null);
//   const nameRef = useRef(null);

//   useEffect(() => {
//     const titleWidth = titleRef.current.offsetWidth;
//     const nameWidth = nameRef.current.offsetWidth;

//     const titleInterval = setInterval(() => {
//       setOffsetTitle((prevOffsetTitle) => {
//         if (prevOffsetTitle <= -titleWidth) {
//           return nameWidth;
//         }
//         return prevOffsetTitle - 1;
//       });
//     }, 20);

//     const nameInterval = setInterval(() => {
//       setOffsetName((prevOffsetName) => {
//         if (prevOffsetName >= nameWidth) {
//           return -titleWidth;
//         }
//         return prevOffsetName + 1;
//       });
//     }, 20);

//     return () => {
//       clearInterval(titleInterval);
//       clearInterval(nameInterval);
//     };
//   }, []);

//   return (
//     <div className="text-white bg-black min-h-screen flex justify-center items-center">
//       <div className="flex flex-col w-full h-full">
//         <div
//           className={`select-none flex-row flex gap-2 font-bold text-[160px] text-gray-500 ${poppins.className}`}
//           style={{ marginLeft: offsetTitle }}
//           ref={titleRef}
//         >
//           {characters.map((char, index) => (
//             <div key={index} className="hover:text-white">
//               {char}
//             </div>
//           ))}
//         </div>

//         <div
//           className={`select-none flex-row flex gap-2 font-bold text-[160px] text-gray-500 ${poppins.className}`}
//           style={{ marginLeft: offsetName }}
//           ref={nameRef}
//         >
//           {characters_name.map((char, index) => (
//             <div key={index} className="hover:text-white">
//               {char}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
