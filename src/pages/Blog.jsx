

// import { useEffect, useState } from "react";
// import { client, urlFor } from "../sanityClient"; // Import your new config
// import Navbar from "@/components/home/Navigation";
// import { Footer } from "@/components/Footer";

// const Blog = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     // This is the "Query" - it asks for all posts and their authors
//     client
//       .fetch(`*[_type == "post"]{
//         title,
//         slug,
//         mainImage,
//         publishedAt,
//         "name": author->name
//       }`)
//       .then((data) => setPosts(data))
//       .catch(console.error);
//   }, []);

//   return (
//     <div className="min-h-screen pt-24 px-4 container mx-auto">
//       <Navbar />
//       <h1 className="text-4xl font-bold mb-10 text-center">Latest Savings Tips</h1>

//       <div className="grid md:grid-cols-3 gap-8">
//         {posts.map((post) => (
//           <div key={post.slug.current} className="border rounded-xl overflow-hidden shadow-lg">
//             {post.mainImage && (
//               <img
//                 src={urlFor(post.mainImage).width(400).url()}
//                 alt={post.title}
//                 className="w-full h-48 object-cover"
//               />
//             )}
//             <div className="p-6">
//               <h2 className="text-xl font-bold mb-2">{post.title}</h2>
//               <p className="text-gray-500 text-sm">By {post.name}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Blog;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client, urlFor } from "../sanityClient";
import Navbar from "@/components/home/Navigation";
import { Footer } from "@/components/Footer";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(`*[_type == "post"] | order(publishedAt desc) {
        title,
        slug,
        mainImage,
        publishedAt,
        "name": author->name
      }`)
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    // 1. BRAND BACKGROUND: Deep Blue #003366
    <div className="min-h-screen bg-[#003366] flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-24 px-4 pb-20 sm:px-6">
        
        {/* Mobile-First Header */}
        <div className="text-center mb-10 mt-4">
          <span className="inline-block bg-[#FFB300] text-[#003366] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            SavingsYogi Updates
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Smart Money <br />
            <span className="text-[#FFB300]">For Smart People</span>
          </h1>
          <p className="text-blue-200 mt-3 text-sm md:text-base max-w-md mx-auto">
            Swipe through expert tips to grow your wealth.
          </p>
        </div>

        {/* Loading Spinner (White for visibility) */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-10 w-10 border-4 border-white border-t-transparent"></div>
          </div>
        ) : (
          /* 2. MOBILE CARD STACK */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto max-w-6xl">
            {posts.map((post) => (
              <div
                key={post.slug?.current}
                // Card: White background pops against the blue page
                className="bg-white rounded-2xl overflow-hidden shadow-xl transform transition hover:scale-[1.02] active:scale-95 duration-200"
              >
                {/* Image Area - Aspect Ratio 16:9 for mobile */}
                <div className="relative h-48 sm:h-56 bg-gray-200">
                  {post.mainImage ? (
                    <img
                      src={urlFor(post.mainImage).width(600).height(350).url()}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                      No Image
                    </div>
                  )}
                  
                  {/* Category Tag (Floating) */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#003366] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide">
                      Finance
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 flex flex-col h-full">
                  {/* Date & Author Row */}
                  <div className="flex items-center justify-between text-gray-500 text-xs mb-3 font-medium">
                     <span className="text-[#FFB300] font-bold">
                       {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Just Now'}
                     </span>
                     <span>{post.name || 'Admin'}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-[#003366] leading-snug mb-2 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Fake "Read More" Button (Visual cue for touch users) */}
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center text-[#003366] font-bold text-sm">
                    Read Article 
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Blog;