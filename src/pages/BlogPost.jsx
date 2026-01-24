import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import { client, urlFor } from "../sanityClient";
import Navbar from "@/components/home/Navigation";
import { Footer } from "@/components/Footer";
import Preloader from "@/components/home/Preloder";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post" && slug.current == $slug][0]{
          title,
          mainImage,
          publishedAt,
          "name": author->name,
          body
        }`,
        { slug }
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, [slug]);

  if (!post) return <Preloader />;

  return (
    // 1. Background: Deep Blue to match the app theme
    <div className="min-h-screen bg-[#003366] flex flex-col font-sans">
      <Navbar />

      <article className="flex-grow pt-24 md:pt-10">
        {/* Header Section */}
        <div className="container mx-auto px-4 max-w-4xl text-center mb-8 md:mb-12">
          
          {/* Category Tag */}
          

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-4 text-blue-200 text-sm font-medium">
            <div className="flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="text-[#FFB300] mr-2">✎</span>
              <span>{post.name || 'Admin'}</span>
            </div>
            <div className="flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="text-[#FFB300] mr-2">📅</span>
              <time>{new Date(post.publishedAt).toLocaleDateString()}</time>
            </div>
          </div>
        </div>

        {/* Featured Image - Full width on mobile, rounded on desktop */}
        {post.mainImage && (
          <div className="w-full max-w-5xl mx-auto md:px-4 mb-0 md:mb-[-4rem] relative z-10">
            <img
              src={urlFor(post.mainImage).width(1200).height(600).url()}
              alt={post.title}
              className="w-full h-auto md:rounded-2xl shadow-2xl object-cover aspect-video"
            />
          </div>
        )}

        {/* The Content Container */}
        {/* Mobile: Rounded Top only. Desktop: Fully Rounded box */}
        <div className="bg-white w-full md:max-w-4xl mx-auto rounded-t-3xl md:rounded-3xl shadow-2xl relative z-0 pt-8 md:pt-20 pb-16 px-6 md:px-12 mt-[-1.5rem] md:mt-0">
          
          <div className="prose prose-lg prose-blue mx-auto max-w-none prose-img:rounded-xl prose-headings:text-[#003366] prose-a:text-blue-600 hover:prose-a:text-blue-800">
            <PortableText 
              value={post.body} 
              components={{
                types: {
                  image: ({ value }) => (
                    <img 
                      src={urlFor(value).url()} 
                      className="w-full rounded-xl my-8 shadow-md" 
                      alt="Blog visual"
                    />
                  ),
                },
                // Custom styles for text elements
                block: {
                  h2: ({children}) => <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4">{children}</h2>,
                  h3: ({children}) => <h3 className="text-xl md:text-2xl font-bold mt-6 mb-3">{children}</h3>,
                  normal: ({children}) => <p className="mb-4 text-gray-700 leading-relaxed text-base md:text-lg">{children}</p>,
                }
              }}
            />
          </div>

          {/* Back Button */}
          <div className="text-center mt-12 pt-8 border-t border-gray-100">
            <Link 
              to="/blog"
              className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-700 font-bold py-3 px-8 rounded-full hover:bg-[#FFB300] hover:text-[#003366] transition-all duration-300 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to All Posts
            </Link>
          </div>
        </div>
      </article>

      {/* Spacer to separate content from footer visually */}
      <div className="h-12 bg-[#003366] md:bg-transparent"></div>

      <Footer />
    </div>
  );
};

export default BlogPost;