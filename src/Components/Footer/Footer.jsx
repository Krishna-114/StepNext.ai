function Footer() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16 border-t border-slate-700">

      <div className="grid grid-cols-4 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-white">
            StepNext.ai
          </h2>

          <p className="text-slate-400 mt-4">
            Your AI-powered Career Operating System.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <p className="text-slate-400">Home</p>
          <p className="text-slate-400">About</p>
          <p className="text-slate-400">Login</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Resources
          </h3>

          <p className="text-slate-400">Roadmaps</p>
          <p className="text-slate-400">DSA</p>
          <p className="text-slate-400">Projects</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Social
          </h3>

          <p className="text-slate-400">GitHub</p>
          <p className="text-slate-400">X</p>
          <p className="text-slate-400">LinkedIn</p>
        </div>

      </div>

      <div className="border-t border-slate-700 mt-12 pt-6 text-center">

        <p className="text-slate-500">
          © 2026 StepNext.ai. All rights reserved.
        </p>

      </div>

    </section>
  );
}

export default Footer;