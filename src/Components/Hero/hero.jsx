// here we will create Hero Section.
function HeroSection(){
    return(
        <>
        <div className="flex flex-col items-center text-center justify-center px-6 py-20 mt-24 ">
            {/* There are total 4 Section in Hero */}

            {/* section 1 : Badge */}
            <div >
                🚀 AI Powered Career Platform
            </div>

            {/* section 2 : Heading */}
            <div className="text-3xl font-bold max-w-4xl">
                Everything You Need to Become a Better Software Engineer.
            </div>  

               {/* section 3 : Description */}

            <div className="text-slate-400 text-lg mt-6 max-w-2xl">
               One AI-powered workspace that brings Roadmaps, Resources, DSA, Projects and Progress Tracking together — so you can stop switching between websites and start building your career.
            </div>

            {/* section 4 : Buttons */}

            <div className="flex gap-5 mt-10">
                <button className="bg-purple-600 hover:bg-purple-700  hover:scale-105 transition-all duration-300 text-white px-3 py-1 rounded-2xl ">
                    Create Account
                </button>

                <button className="bg-purple-600 hover:bg-purple-700 hover:scale-105 transition-all duration-300 text-white px-3 py-1 rounded-2xl">
                    Watch Demo
                </button>
            </div>

        </div>
        </>
    )
}

export default HeroSection;