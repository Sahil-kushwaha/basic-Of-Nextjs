import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
function HeroSection(){

    return(
        <div className="h-auto md:h-[40rem] w-full  rounded-md flex flex-col justify-center
         items-center py-10 md:py-0 overflow-hidden"
          >   
              <Spotlight className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
              />
              <div className="p-4 relative z-10 w-full text-center   ">
                   <h1 className="mt-20 md:mt-0 text-6xl md:text-7xl font-bold bg-clip-text 
                      text-transparent  bg-gradient-to-b from-neutral-100 to-neutral-500 "
                     >Learn, Play, and Shine</h1>
                   <p className="mt-4 font-normal text-base md:text-lg
                    text-neutral-300 max-w-lg mx-auto"
                    >Dive into our comprehensie music courses and 
                      transform your musicat journey today, Whether 
                      you're a beginner or lokking to refine yur skills, 
                      join us to unlock your true potential.
                   </p>
              </div>
              <div className= "py-5">
                   <Link href={"/courses"}><Button>Explore Courses</Button></Link>
              </div>
        </div>
    )
}

export default HeroSection;