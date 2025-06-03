'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

// const reviews = [
//   {
//     name: "Vijay Yodedra",
//     username: "@vijayyodedra9015",
//     body: "Ha moj ha",
//     img: "https://avatar.vercel.sh/vijay",
//   },
//   {
//     name: "Manoj Shikotra",
//     username: "@ManojShikotra",
//     body: "Ha moj ha",
//     img: "https://avatar.vercel.sh/manoj",
//   },
//   {
//     name: "Sonal Chavda",
//     username: "@sonalchavda1399",
//     body: "Kem rove 6e?",
//     img: "https://avatar.vercel.sh/sonal",
//   },
//   {
//     name: "Harsha Solanki",
//     username: "@harshasolanki7803",
//     body: "Suche kai kaber npdi please aspln",
//     img: "https://avatar.vercel.sh/harsha",
//   },
//   {
//     name: "Sonal Chavda",
//     username: "@sonalchavda1399",
//     body: "Nice",
//     img: "https://avatar.vercel.sh/sonal2",
//   },
//   {
//     name: "Varsha Joshi",
//     username: "@varshajoshi4855",
//     body: "Su che kai khaber na padi",
//     img: "https://avatar.vercel.sh/varsha",
//   },
//   {
//     name: "D.D. Padhiyar",
//     username: "@D.D.Padhiyar712",
//     body: "Su che kai khbr na pdi?",
//     img: "https://avatar.vercel.sh/ddpadhiyar",
//   },
//   {
//     name: "Mr. Keshvala",
//     username: "@mr.keshvala11",
//     body: "વાહ જીવન કાકા અને પિતલ કાકા અને તેના નાના ભાઈ રામ કાકા ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️🌹🌹",
//     img: "https://avatar.vercel.sh/keshvala",
//   },
//   {
//     name: "Krishna Jethva",
//     username: "@krishnajethva5180",
//     body: "Congratulations both of you 👍👍",
//     img: "https://avatar.vercel.sh/krishna",
//   },
//   {
//     name: "Ram Khima",
//     username: "@ramkhima3288",
//     body: "દા ભાઈ દા 🌺🌹🌹🌹🌹🙏",
//     img: "https://avatar.vercel.sh/ramkhima",
//   },
//   {
//     name: "Ajit Jadeja",
//     username: "@ajitjadeja5050",
//     body: "Ohoo bhai 💥💥",
//     img: "https://avatar.vercel.sh/ajit",
//   },
//   {
//     name: "Vinay",
//     username: "@p_vinay_gaming3744",
//     body: "🔥",
//     img: "https://avatar.vercel.sh/vinay",
//   },
// ];
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