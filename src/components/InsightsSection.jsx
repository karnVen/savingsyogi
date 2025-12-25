import { ArrowRight, Clock } from "lucide-react";
import insightsHero from "@/assets/insights-hero.jpg";
import insightsIra from "@/assets/insights-ira.jpg";
import insightsDiversify from "@/assets/insights-diversify.jpg";
import insightsCrypto from "@/assets/insights-crypto.jpg";

const featuredArticle = {
  image: insightsHero,
  category: "MONEY HABITS",
  readTime: "5 min read",
  title: "Building an Emergency Fund: Your Complete Guide",
  excerpt: "Learn how to build a solid financial safety net. We break down the steps to save 3-6 months of expenses without feeling overwhelmed.",
};

const sideArticles = [
  {
    image: insightsIra,
    category: "SAVINGS",
    title: "High-Yield Savings Accounts Explained",
    excerpt: "Compare the best options for growing your money.",
  },
  {
    image: insightsDiversify,
    category: "BUDGETING",
    title: "The 50/30/20 Budget Rule Simplified",
    excerpt: "A simple framework for managing your income.",
  },
  {
    image: insightsCrypto,
    category: "INVESTING",
    title: "Beginner's Guide to Index Funds",
    excerpt: "Start investing with minimal risk and effort.",
  },
];

export const InsightsSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Latest Articles
            </h2>
            <p className="text-muted-foreground">
              Expert tips and guides for smarter money management.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-accent font-semibold mt-4 sm:mt-0 hover:text-primary transition-colors group"
          >
            View all articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          <article className="group">
            <div className="relative overflow-hidden rounded-2xl mb-4">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4">
                <span className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1.5 rounded-full">
                  FEATURED
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
              <span className="font-medium text-accent">{featuredArticle.category}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {featuredArticle.readTime}
              </span>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {featuredArticle.title}
            </h3>
            <p className="text-muted-foreground">
              {featuredArticle.excerpt}
            </p>
          </article>

          {/* Side Articles */}
          <div className="space-y-6">
            {sideArticles.map((article, index) => (
              <article
                key={article.title}
                className="flex gap-4 group cursor-pointer"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-24 h-24 lg:w-32 lg:h-24 object-cover rounded-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="flex flex-col justify-center">
                  <span className="text-xs font-medium text-muted-foreground mb-1">
                    {article.category}
                  </span>
                  <h4 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                    {article.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

