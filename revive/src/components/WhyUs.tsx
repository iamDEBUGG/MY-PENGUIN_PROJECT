import { Heart, Smile, Star, Sun } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "The Connection We Share",
    description: "We understand each other in ways words can't describe. Our connection goes beyond the surface—it's deep, real, and irreplaceable.",
  },
  {
    icon: Smile,
    title: "You Make Me Better",
    description: "With you, I'm the best version of myself. You inspire me, challenge me, and support me in ways no one else ever has.",
  },
  {
    icon: Star,
    title: "The Dreams We Built",
    description: "Together, we created a vision of the future filled with love, laughter, and endless possibilities. Those dreams still live in my heart.",
  },
  {
    icon: Sun,
    title: "You Bring Light to My Life",
    description: "Even on the darkest days, thinking of you brings warmth and hope. Your presence is the sunshine that brightens everything.",
  },
];

const WhyUs = () => {
  return (
    <section className="py-24 bg-gradient-soft relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why We Belong Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Some things are just meant to be, and we are one of them
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-romantic animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6 relative">
                <div className="w-16 h-16 rounded-full bg-gradient-romantic flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <reason.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
