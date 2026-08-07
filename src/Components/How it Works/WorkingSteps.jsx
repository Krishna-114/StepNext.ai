// here we will write content we want to see in Steps .

import StepsCard from "./StepsCard";

function WorkingSteps(){
    return(
        <>
        <section className="max-w-7xl mx-auto py-28 px-8">
        <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white">
          Steps to Use this Website
        </h2>
        </div>

        <div className="grid grid-cols-3 gap-8">
            <StepsCard 
            no="1️⃣"
            title="Create Your Account"
            description="Sign up and personalize your learning journey."
            />

            <StepsCard 
            no="2️⃣"
            title="Choose Your Goal"
            description="Select your target role and technology stack.

            Examples:

            Frontend Developer
            Backend Developer
            Full Stack Developer
            AI Engineer"
            />

            <StepsCard 
            no="3️⃣"
            title="Learn, Build & Track"
            description="Follow roadmaps, solve DSA, build projects, and track your progress."
            />

            <StepsCard 
            no="4️⃣"
            title="Grow with AI Mentor"
            description="Get AI guidance, personalized suggestions, and stay interview-ready."
            />

        </div>

        </section>
        </>
    )
}

export default WorkingSteps;