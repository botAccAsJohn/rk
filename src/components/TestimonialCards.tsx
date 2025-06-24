'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const comments = [
  {
    quote: 'Ha moj ha',
    name: 'vijayodedra9015',
    title: 'Viewer',
  },
  {
    quote: 'Ha moj ha',
    name: 'ManojShikotra',
    title: 'Viewer',
  },
  {
    quote: 'Kem rove 6e ?',
    name: 'sonalchavda1399',
    title: 'Viewer',
  },
  {
    quote: 'Suche kai kaber npdi please aspln',
    name: 'harshasolanki7803',
    title: 'Viewer',
  },
  {
    quote: 'Nice',
    name: 'sonalchavda1399',
    title: 'Viewer',
  },
  {
    quote: 'Su che kai khaber na padi',
    name: 'varshajoshi4855',
    title: 'Viewer',
  },
  {
    quote: 'Su che kai khbr na pdi?',
    name: 'D.D.Padhiyar712',
    title: 'Viewer',
  },
  {
    quote: 'Congratulations both of you 👍👍',
    name: 'krishnajethva5180',
    title: 'Viewer',
  },
  {
    quote: 'સા પાઈસા સાલા 💖🌹🌹🌹🌹🙏',
    name: 'ramkhima3288',
    title: 'Viewer',
  },
  {
    quote: 'Ohoo bhai💥💥',
    name: 'ajitjadeja5050',
    title: 'Viewer',
  },
  {
    quote: '🔥',
    name: 'p_vinay_gaming3744',
    title: 'Viewer',
  },
  {
    quote: 'વાહ જીવન કાકા અને પ્રિતમ કાકા અને તેમના નાના ભાઈ રામ કાકા ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️🌹🌹',
    name: 'mr.keshvala11',
    title: 'Viewer',
  }
];


function MusicSchoolTestimonials() {
  return (
    <div className="h-[30rem] w-full dark:bg-black dark:bg-dot-white/[0.15] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-8 z-10">Voices of success</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={comments}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  )
}

export default MusicSchoolTestimonials