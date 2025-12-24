import { PiggyBank, BookOpen, Target, ArrowRight } from "lucide-react";

const features = [
  {
    icon: PiggyBank,
    title: "Smart Savings Tips",
    description: "Learn proven strategies to save more money every month. From emergency funds to long-term goals, we cover it all.",
    cta: "Start Saving",
    popular: false,
  },
  {
    icon: BookOpen,
    title: "Financial Education",
    description: "Easy-to-understand guides on budgeting, investing basics, and building wealth. No jargon, just practical knowledge.",
    cta: "Learn More",
    popular: true,
  },
  {
    icon: Target,
    title: "Goal Planning",
    description: "Set achievable financial goals and track your progress. Whether buying a home or retiring early, we help you plan.",
    cta: "Set Goals",
    popular: false,
  },
];

export const FeaturesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose SavingsYogi
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide unbiased, practical financial guidance to help you build better money habits and secure your future.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`relative group rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:shadow-xl ${
                feature.popular
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card border border-border hover:border-accent/30"
              }`}
            >
              {/* Popular Badge */}
              {feature.popular && (
                <span className="absolute -top-3 right-6 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </span>
              )}

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  feature.popular
                    ? "bg-primary-foreground/10"
                    : "bg-primary/10"
                }`}
              >
                <feature.icon
                  className={`w-6 h-6 ${
                    feature.popular ? "text-accent" : "text-primary"
                  }`}
                />
              </div>

              {/* Content */}
              <h3
                className={`text-xl font-bold mb-3 ${
                  feature.popular ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-6 ${
                  feature.popular
                    ? "text-primary-foreground/70"
                    : "text-muted-foreground"
                }`}
              >
                {feature.description}
              </p>

              {/* CTA */}
              <a
                href="#"
                className={`inline-flex items-center gap-2 text-sm font-semibold group/link ${
                  feature.popular
                    ? "text-accent hover:text-accent/80"
                    : "text-accent hover:text-primary"
                }`}
              >
                {feature.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
