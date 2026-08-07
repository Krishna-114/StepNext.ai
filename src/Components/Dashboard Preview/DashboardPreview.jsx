function DashboardPreview(){
    return(
        <>
        <div className="flex flex-col justify-center gap-4">
            <h1 className="text-2xl font-bold text-center">Dashboard Preview</h1>
 
            <div className="flex flex-col justify-center px-9 py-7 bg-slate-900 border border-slate-700 items-center rounded-xl gap-8">
            <div className="font-bold text-xl">
           Welcome back, Krishna 👋
            </div>

            <div>
                <ul> Menu : 
                    <li>🗺️ Roadmaps</li>
                    <li>📚 Resources</li>
                    <li>💻 DSA</li>
                    <li>🚀 Projects</li>
                    <li>🤖 AI Mentor</li>    
                </ul>
            </div>

            <div className="flex justify-center gap-6">
            <div>
                    Roadmaps - ✅ 6/12 Completed
            </div>

             <div>
                   DSA          -           🔥 148 Day Streak
            </div>

             <div>
                    🚀 Projects      -     2 Live Projects

            </div>

             <div>
                    🤖 AI Mentor      -    Ask Anything...

            </div>

             <div>
                    📚 Resources     -     248 Saved
            </div>

            </div>

            <div> 
            <h1>Progress Bar</h1>
            
            ███████████░░░░ 72%
        </div>

        </div>






        </div>
        </>
    )
}

export default DashboardPreview