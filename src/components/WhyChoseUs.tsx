
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { Particles } from "./magicui/particles";

const musicSchoolContent =
  [
  {
    "title": "Your Vision, Our Lens: A Personalized Visual Experience",
    "description": "Embark on a creative journey that's uniquely yours. Our personalized editing and shooting services are tailored to your vision, style, and story—whether it's a wedding, event, or promotional project. With expert guidance and dedication, we bring your moments to life with cinematic precision and emotional depth.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/5.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    "title": "Frame by Frame: Telling Your Story with Heart",
    "description": "Every frame tells a part of your story. Our custom approach ensures your photos and videos reflect your personality and dreams. Whether you're walking down the aisle or building your brand, we turn your vision into beautifully crafted content with heart and meaning.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/7.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    "title": "Beyond the Lens: Custom Edits that Reflect You",
    "description": "Your story deserves more than a template. From concept to final cut, our collaborative process focuses on your unique aesthetic and goals. Experience the difference of intentional storytelling combined with technical mastery—designed just for you.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/2.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    "title": "Real-Time Feedback & Creative Collaboration",
    "description": "Dive into an interactive editing and production experience where feedback is instant, and your ideas shape the final product. Just like co-directing your own film, this process enhances the outcome and ensures your satisfaction at every step.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/3.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    "title": "Cutting-Edge Production Tools & Techniques",
    "description": "We stay ahead of the curve by using the latest in editing software, camera technology, and creative workflows—ensuring your content is crisp, engaging, and future-ready. Say goodbye to outdated visuals and hello to next-level storytelling.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/1.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    "title": "Limitless Creative Possibilities",
    "description": "With our vast resource library, flexible editing styles, and adaptive shooting techniques, the possibilities are endless. We ensure every project continues to evolve and elevate your story with every frame.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/5.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  }
]


function WhyChooseUs() {
  return (
    <div className="w-full relative overflow-hidden h-[500px] ">
      <StickyScroll content={musicSchoolContent} />
              <Particles />
    </div>
  )
}

export default WhyChooseUs