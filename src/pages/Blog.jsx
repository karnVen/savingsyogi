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
        excerpt,
        "name": author->name
      }`)
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-[#003366] flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow pt-20 px-4 container mx-auto mb-1 ">
        <div className="text-center mb-10 ">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Smart Money <br />
            <span className="text-[#FFB300]">For Smart People</span>
          </h1>
          <p className="text-blue-200 mt-3 text-sm md:text-base max-w-md mx-auto">
            Swipe through expert tips to grow your wealth.
          </p>
        </div>
        
        {loading ? (
          <div className="text-center py-20 text-white">Loading posts...</div>
        ) : (
          /* 👇 CHANGED LINE: Added 'max-w-4xl mx-auto' and removed 'lg:grid-cols-3' */
          // <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link 
                to={`/blog/${post.slug.current}`} 
                key={post.slug.current}
                 className="group bg-blue-50 border border-blue-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="h-56 overflow-hidden relative">
                  {post.mainImage ? (
                    <img
                      src={urlFor(post.mainImage).width(500).height(300).url()}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                      No Image
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3 space-x-2">
                    <span>•</span>
                    <span>{post.name || 'Admin'}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  {/* Read More Link */}
                  <span className="inline-flex items-center text-[#2563eb] font-semibold mt-2 group-hover:underline">
                    Read Full Article →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Blog;