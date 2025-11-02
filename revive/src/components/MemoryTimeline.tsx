import { Calendar, Heart, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";

const memories = [
  {
    icon: Sparkles,
    title: "The Way You Look at Me",
    description: "Your eyes tell a story that words could never capture. In them, I see our past, our present, and all the beautiful tomorrows we'll share together.",
    image: memory1,
  },
  {
    icon: Heart,
    title: "Our Perfect Moments",
    description: "Every selfie, every laugh, every silly moment we capture together becomes a treasure. These are the memories that make my heart skip a beat.",
    image: memory2,
  },
  {
    icon: Calendar,
    title: "Connected Hearts",
    description: "When our hands touch, when we create that perfect heart shape together, I'm reminded that we're two souls meant to be one. Forever intertwined.",
    image: memory3,
  },
];

const MemoryTimeline = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Journey Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every memory with you is a treasure I hold close to my heart
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {memories.map((memory, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-romantic transition-all duration-500 animate-fade-in border-none bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 p-8`}>
                <div className="md:w-1/2 flex flex-col justify-center space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-full bg-gradient-romantic">
                      <memory.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">{memory.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {memory.description}
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="relative overflow-hidden rounded-xl shadow-soft group">
                    <img
                      src={memory.image}
                      alt={memory.title}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoryTimeline;
