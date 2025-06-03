// import { cn } from "@/lib/utils";
// import { Marquee } from "@/components/magicui/marquee";

// const reviews = [
//   {
//     name: "Vijay odedra",
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


// const firstRow = reviews.slice(0, reviews.length / 2);
// const secondRow = reviews.slice(reviews.length / 2);

// const ReviewCard = ({
//   img,
//   name,
//   username,
//   body,
// }: {
//   img: string;
//   name: string;
//   username: string;
//   body: string;
// }) => {
//   return (
//     <figure
//       className={cn(
//         "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
//         // light styles
//         "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
//         // dark styles
//         "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
//       )}
//     >
//       <div className="flex flex-row items-center gap-2">
//         <img className="rounded-full" width="32" height="32" alt="" src={img} />
//         <div className="flex flex-col">
//           <figcaption className="text-sm font-medium dark:text-white">
//             {name}
//           </figcaption>
//           <p className="text-xs font-medium dark:text-white/40">{username}</p>
//         </div>
//       </div>
//       <blockquote className="mt-2 text-sm">{body}</blockquote>
//     </figure>
//   );
// };

// export function MarqueeDemo() {
//   return (
//     <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
//       <Marquee pauseOnHover className="[--duration:20s]">
//         {firstRow.map((review) => (
//           <ReviewCard key={review.username} {...review} />
//         ))}
//       </Marquee>
//       <Marquee reverse pauseOnHover className="[--duration:20s]">
//         {secondRow.map((review) => (
//           <ReviewCard key={review.username} {...review} />
//         ))}
//       </Marquee>
//       <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
//       <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
//     </div>
//   );
// }




/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-fit sm:w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
