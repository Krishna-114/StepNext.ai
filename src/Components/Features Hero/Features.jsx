import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section className="max-w-7xl mx-auto py-28 px-8">

      <div className="text-center mb-16">

        <h2 className="text-5xl font-bold text-white">
          Everything You Need
        </h2>

        <p className="text-slate-400 mt-5 text-lg">
          Stop switching between websites.
          Everything is available inside StepNext.ai.
        </p>

      </div>

      <div className="grid grid-cols-3 gap-8">

        <FeatureCard
         
          title="Roadmaps"
          description="Follow structured learning paths for every technology."
        />

        <FeatureCard
         
          title="Resources"
          description="Access carefully curated articles, videos and documentation."
        />

        <FeatureCard
          
          title="DSA Tracker"
          description="Track your coding consistency and solve problems daily."
        />

        <FeatureCard
        
          title="Projects"
          description="Build industry-level projects to strengthen your portfolio."
        />

        <FeatureCard
          
          title="AI Mentor"
          description="Ask questions anytime and receive instant guidance."
        />

        <FeatureCard
        
          title="Progress Analytics"
          description="Visualize your learning journey with weekly progress."
        />

      </div>

    </section>
  );
}

export default Features;