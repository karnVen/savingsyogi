import { Users, BookOpen, Star, Heart } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50K+",
    label: "ACTIVE READERS",
  },
  {
    icon: BookOpen,
    value: "200+",
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

export const StatsBar = () => {
  return (
    <section className="bg-card py-8 lg:py-12 border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center group"
            >
              <div className="flex items-center gap-3 mb-2">
                <stat.icon className="w-5 h-5 text-accent hidden lg:block" />
                <span className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {stat.value}
                </span>
              </div>
              <span className="text-xs font-medium text-muted-foreground tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

