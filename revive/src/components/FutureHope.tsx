import { Sunrise } from "lucide-react";

const FutureHope = () => {
  return (
    <section className="py-24 bg-gradient-romantic relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Sunrise className="w-20 h-20 mx-auto mb-8 text-white animate-pulse" strokeWidth={1.5} />
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
            A New Beginning Awaits
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            I believe in second chances. I believe in us. Every sunset brings the promise of a new sunrise, 
            and I hope that one day, we can watch that sunrise together again.
          </p>

          <div className="space-y-4 text-lg text-white/80">
            <p>The door to my heart will always be open for you.</p>
            <p>Take all the time you need. I'll be here, hoping, believing, and loving you.</p>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-2xl font-medium text-white mb-4">
              "Love is not about how many days, months, or years you've been together."
            </p>
            <p className="text-xl text-white/90">
              "It's about how much you love each other every single day."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureHope;
