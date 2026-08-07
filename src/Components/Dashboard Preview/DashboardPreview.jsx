function DashboardPreview() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">

      <h2 className="text-4xl font-bold text-center mb-14">
        Dashboard Preview
      </h2>

      <div className="bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden">

        <div className="grid grid-cols-4 min-h-[500px]">

          {/* Sidebar */}

          <div className="border-r border-slate-700 p-6">

            <h3 className="text-xl font-bold mb-8">
              StepNext.ai
            </h3>

            <div className="space-y-6 text-slate-300">

              <p>🗺️ Roadmaps</p>

              <p>📚 Resources</p>

              <p>💻 DSA Tracker</p>

              <p>🚀 Projects</p>

              <p>🤖 AI Mentor</p>

              <p>⚙️ Settings</p>

            </div>

          </div>

          {/* Main Content */}

          <div className="col-span-3 p-8">

            <h2 className="text-3xl font-bold">
              Welcome back, Krishna 👋
            </h2>

            <p className="text-slate-400 mt-3">
              Continue your learning journey.
            </p>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-6 mt-10">

              <div className="bg-slate-800 rounded-2xl p-6">
                <h3 className="text-slate-400">
                  Roadmaps
                </h3>

                <p className="text-3xl font-bold mt-3">
                  6 / 12
                </p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6">
                <h3 className="text-slate-400">
                  DSA Streak
                </h3>

                <p className="text-3xl font-bold mt-3">
                  148🔥
                </p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6">
                <h3 className="text-slate-400">
                  Projects
                </h3>

                <p className="text-3xl font-bold mt-3">
                  2
                </p>
              </div>

            </div>

            {/* Progress */}

            <div className="bg-slate-800 rounded-2xl p-6 mt-8">

              <h3 className="text-xl font-bold mb-5">
                Weekly Progress
              </h3>

              <div className="w-full h-3 bg-slate-700 rounded-full">

                <div className="w-3/4 h-full bg-purple-600 rounded-full">

                </div>

              </div>

              <p className="text-slate-400 mt-4">
                72% Completed this week
              </p>

            </div>

            {/* AI Mentor */}

            <div className="bg-slate-800 rounded-2xl p-6 mt-8">

              <h3 className="text-xl font-bold">
                AI Mentor
              </h3>

              <p className="text-slate-400 mt-3">
                What would you like to learn today?
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default DashboardPreview;