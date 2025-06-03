// import { Globe } from "@/components/magicui/globe";

// function GlobeDemo() {
//   return (
    
//     <div className="h-[30rem] w-full dark:bg-black dark:bg-dot-white/[0.15] relative flex flex-col items-center justify-center overflow-hidden">
//           <h2 className="text-3xl font-bold text-center mb-8 z-10">Voices of success</h2>
//           <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
//             <div className="w-full max-w-6xl">
//               <Globe />
//             </div>
//           </div>
//         </div>
//   );
// }
// export default GlobeDemo;


import { Globe } from "@/components/magicui/globe";

function GlobeDemo() {
  return (
    <div className="h-auto md:h-[40rem] w-full dark:bg-black dark:bg-dot-white/[0.15] relative flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-12 relative z-10">

        <div className="w-full md:w-1/2 text-center md:text-left p-4">
          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            1000+ Happy Customers<br />Across the Globe
          </h1>
        </div>

        <div className="w-full md:w-1/2 aspect-square relative">
          <div className="w-full h-full overflow-hidden">
            <Globe />
          </div>
        </div>

      </div>
    </div>
  );
}

export default GlobeDemo;
