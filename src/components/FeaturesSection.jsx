import { PiggyBank, BookOpen, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: PiggyBank,
    title: "Smart Savings  ",
    description:
      "Learn proven strategies to save more money every month. From emergency funds to long-term goals, we cover it all.",
    cta: "Start Saving",
    popular: false,
  },
  {
    icon: BookOpen,
    title: "Financial Education",
    description:
      "Easy-to-understand guides on budgeting, investing basics, and building wealth. No jargon, just practical knowledge.",
    ata: "Learn More",
    popular: true,
  },
  {
    icon: Target,
    title: "Goal Planning",
    description:
      "Set achievable financial goals and track your progress. Whether buying a home or retiring early, we help you plan.",
    mta: "Set Goals",
    popular: false,
  },
];

export const FeaturesSection = () => {
  return (
    <section
      id="services"
      className="py-12 sm:py-16 md:py-20 lg:py-28 bg-background"
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-1xl lg:text-2xl font-bold text-foreground mb-3 sm:mb-4">
            Why Choose SavingsYogi
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            We provide unbiased, practical financial guidance to help you build
            better money habits and secure your future.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`relative group rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 transition-all duration-300 hover:shadow-xl ${
                feature.popular
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card border border-border hover:border-accent/30"
              }`}
            >
              {/* Popular Badge */}
              {feature.popular && (
                <span className="absolute -top-2 sm:-top-3 right-4 sm:right-6 bg-accent text-accent-foreground text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-full">
                  POPULAR
                </span>
              )}

              {/* Icon */}
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-6 ${
                  feature.popular ? "bg-primary-foreground/10" : "bg-primary/10"
                }`}
              >
                <feature.icon
                  className={`w-5 h-5 sm:w-6 sm:h-6 ${
                    feature.popular ? "text-accent" : "text-primary"
                  }`}
                />
              </div>

              {/* Content */}
              <h3
                className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 ${
                  feature.popular
                    ? "text-primary-foreground"
                    : "text-foreground"
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-4 sm:mb-6 ${
                  feature.popular
                    ? "text-primary-foreground/70"
                    : "text-muted-foreground"
                }`}
              >
                {feature.description}
              </p>

              {/* CTA */}
             <Link
  to="/asdf"
  onClick={() => {
    setTimeout(() => {
      document.getElementById("hero")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  }}
  className={`inline-flex items-center gap-2 text-sm font-semibold ${
    feature.popular
      ? "text-accent hover:text-accent/80"
      : "text-accent hover:text-primary"
  }`}
>
  {feature.cta}
</Link>


              <Link
                to="/financial-education"
                className={`inline-flex items-center gap-2 text-sm font-semibold ${
                  feature.popular
                    ? "text-accent hover:text-accent/80"
                    : "text-accent hover:text-primary"
                }`}
              >
                {feature.ata}
              </Link>


              <Link
                to="/Planning"
                className={`inline-flex items-center gap-2 text-sm font-semibold ${
                  feature.popular
                    ? "text-accent hover:text-accent/80"
                    : "text-accent hover:text-primary"
                }`}
              >
                {feature.mta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
