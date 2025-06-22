"use client";
import Link from "next/link";
import courseData from "../data/data.json";
import { BackgroundGradient } from "./ui/background-gradient";
import { Button } from "./ui/moving-border";

interface Course {
  key: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-transparent">
      <div>
        <div className="text-center">
          {/* <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            OUR FEATURED 
          </h2> */}
          <p className="mt-2 text-3xl leading-8 text-teal-600 font-extrabold tracking-tight text-white sm:text-4xl from-neutral-50 to-neutral-400 text-transparent bg-clip-text bg-gradient-to-b">
            OUR FEATURED
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.key} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default FeaturedCourses;