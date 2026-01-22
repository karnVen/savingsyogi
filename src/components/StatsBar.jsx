// import { Users, BookOpen, Star, Heart } from "lucide-react";

// const stats = [
//   {
//     icon: Users,
//     value: "50K+",
//     label: "ACTIVE READERS",
//   },
//   {
//     icon: BookOpen,
//     value: "200+",
//     label: "ARTICLES PUBLISHED",
//   },
//   {
//     icon: Star,
//     value: "4.9",
//     label: "USER RATING",
//   },
//   {
//     icon: Heart,
//     value: "100%",
//     label: "FREE CONTENT",
//   },
// ];

// export const StatsBar = () => {
//   return (
//     <section className="bg-card py-6 sm:py-8 lg:py-12 border-y border-border">
//       <div className="mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-4">
//           {stats.map((stat, index) => (
//             <div
//               key={stat.label}
//               className="flex flex-col items-center text-center group"
//             >
//               <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
//                 <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent hidden lg:block" />
//                 <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
//                   {stat.value}
//                 </span>
//               </div>
//               <span className="text-[10px] sm:text-xs font-medium text-muted-foreground tracking-wider px-1">
//                 {stat.label}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };


import { useEffect, useState } from "react";
import { Users, BookOpen, Star, Heart } from "lucide-react";
import { client } from "@/sanityClient"; // Make sure this path is correct

export const StatsBar = () => {
  // 1. Create a state to hold the real count
  const [articleCount, setArticleCount] = useState("0+");

  // 2. Fetch the count when the component loads
  useEffect(() => {
    client
      .fetch(`count(*[_type == "post"])`) // The magic query
      .then((count) => {
        // Optional: Append '+' if you want to keep the style, e.g., "12+"
        setArticleCount(`${count}+`); 
      })
      .catch((err) => console.error("Stats fetch failed:", err));
  }, []);

  // 3. Define stats inside the component to use the state
  const stats = [
    {
      icon: Users,
      value: "50K+",
      label: "ACTIVE READERS",
    },
    {
      icon: BookOpen,
      value: articleCount, // 👈 NOW DYNAMIC!
      label: "ARTICLES PUBLISHED",
    },
    {
      icon: Star,
      value: "4.9",
      label: "USER RATING",
    },
    {
      icon: Heart,
      value: "100%",
      label: "FREE CONTENT",
    },
  ];

  return (
    <section className="bg-card py-6 sm:py-8 lg:py-12 border-y border-border">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center group"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent hidden lg:block" />
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {stat.value}
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-medium text-muted-foreground tracking-wider px-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
