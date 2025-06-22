import Link from "next/link";
import { Spotlight } from "./ui/spotlight";
import { Button } from "./ui/moving-border";
import { Particles } from "@/components/magicui/particles";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="relative overflow-hidden md:h-[400px] w-full h-[100px] md:h-[400px] md:h-auto">
        <Particles className="h-[100px] md:h-auto" />
      </div>

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />


      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Capture Every <ContainerTextFlip /> With Us
        </h1>
        <br />
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Whether you&apos;re looking for professional photography, stunning videography, or expert video editing, our studio turns your vision into art. From events to personal projects, let us help you tell your story — frame by frame, cut by cut.
        </p>
        <br />
        <div className="mt-4">
          <Link href={"https://www.youtube.com/@rkstudioaatroli3858/videos"} target="_blank">
            <Button
              borderRadius="1.75rem"
              className="bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M616-242q-27 1-51.5 1.5t-43.5.5h-41q-71 0-133-2-53-2-104.5-5.5T168-257q-26-7-45-26t-26-45q-6-23-9.5-56T82-447q-2-36-2-73t2-73q2-30 5.5-63t9.5-56q7-26 26-45t45-26q23-6 74.5-9.5T347-798q62-2 133-2t133 2q53 2 104.5 5.5T792-783q26 7 45 26t26 45q6 23 9.5 56t5.5 63q2 36 2 73v17q-19-8-39-12.5t-41-4.5q-83 0-141.5 58.5T600-320q0 21 4 40.5t12 37.5ZM400-400l208-120-208-120v240Zm360 200v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" /></svg><span>  </span>   Channle
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;