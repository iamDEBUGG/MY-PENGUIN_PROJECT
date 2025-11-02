import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

const HeartfeltLetter = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 md:p-16 shadow-romantic border-none bg-gradient-to-br from-card via-card to-muted/20 animate-fade-in">
            <div className="text-center mb-12">
              <Heart className="w-16 h-16 mx-auto mb-6 text-primary" fill="currentColor" />
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                From My Heart to Yours
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-1 first-letter:float-left">
                I know things have been difficult, and I understand if you need space. But I couldn't let 
                another day pass without telling you how much you mean to me. This isn't about trying to 
                change your mind—it's about making sure you know the truth.
              </p>

              <p>
                You are the most incredible person I've ever known. Your kindness, your strength, the way 
                you see the world—everything about you amazes me. When we were together, I felt like I had 
                found my home, my best friend, and my greatest adventure all in one person.
              </p>

              <p>
                I know I wasn't perfect. I made mistakes, and I wish I could go back and do things differently. 
                But what I never want you to doubt is how deeply I care about you, how much I've grown from 
                knowing you, and how grateful I am for every moment we shared.
              </p>

              <p className="italic text-primary font-medium text-xl text-center py-6">
                "The best love is the kind that awakens the soul and makes us reach for more, that plants a 
                fire in our hearts and brings peace to our minds."
              </p>

              <p>
                That's what you did for me. You awakened something beautiful in my heart, and even now, that 
                feeling remains. If there's any chance for us to find our way back to each other, I want you 
                to know that I'm here, and I'm willing to work on whatever it takes.
              </p>

              <p className="font-medium text-center text-xl pt-8 text-primary">
                But most importantly, I want you to be happy. Whether that's with me or without me, your 
                happiness will always matter to me.
              </p>

              <div className="pt-8 text-center">
                <p className="text-muted-foreground">With all my love,</p>
                <p className="text-2xl font-semibold text-primary mt-2">Always yours</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeartfeltLetter;
