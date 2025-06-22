'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
  {
    id: 1,
    name: 'Raju Keshwala',
    designation: 'Team Lead & CEO',
    image:
      '/raju.jpg',
  },
  {
    id: 2,
    name: 'Dilip Keshwala',
    designation: 'Video Editor',
    image:
      '/dilip.jpg',
  },
  {
    id: 3,
    name: 'Rakesh Keshwala',
    designation: 'Camera Operator',
    image:
      '/Rakesh.jpg',
  },
  
  {
    id: 4,
    name: 'Vinay Keshwala',
    designation: 'Web Developer',
    image: '/vinay.png'
  }
];

function Instructors() {
  return (
    <div className="relative  w-full overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-[20rem]">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-12">Meet Our Team</h2>
        <p className="text-base md:text-lg text-white text-center mb-8">Behind Every Great Shot is an Incredible Team</p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  )
}

export default Instructors