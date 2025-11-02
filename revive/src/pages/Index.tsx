import Hero from "@/components/Hero";
import MemoryTimeline from "@/components/MemoryTimeline";
import WhyUs from "@/components/WhyUs";
import HeartfeltLetter from "@/components/HeartfeltLetter";
import FutureHope from "@/components/FutureHope";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <MemoryTimeline />
      <WhyUs />
      <HeartfeltLetter />
      <FutureHope />
    </div>
  );
};

export default Index;
