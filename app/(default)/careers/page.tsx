"use client";

export default function CareersPage() {
  const positionsList = [
    {
      title: "Senior Distributed Platforms Engineer",
      team: "Core Platform Group",
      node: "Remote Node (US / EU)",
      commitment: "Full-Time Core Spec"
    },
    {
      title: "Staff Security Infrastructure Architect",
      team: "SecOps Integrity Network",
      node: "Hybrid Core Office Node",
      commitment: "Full-Time Core Spec"
    },
    {
      title: "AI Automation Execution Developer",
      team: "Cognitive Automation Group",
      node: "Remote Node Global",
      commitment: "Contract Core Spec"
    }
  ];

  return (
    <main className="relative min-h-screen bg-gray-950 text-gray-100 pt-32 pb-24">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[450px] bg-indigo-600/5 blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-2xl mb-20">
          <div className="inline-flex items-center gap-1.5 text-[10px] bg-indigo-500/10 text-indigo-400 font-semibold px-3 py-1 rounded-full border border-indigo-500/20 uppercase tracking-widest mb-4">
            Active Core Recruitment
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Help us build code that withstands extreme scaling pressures.
          </h1>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            At Velora Technologies, we don't apply surface-level fixes. We assemble dedicated systems teams to solve foundational complexity. If you're passionate about elegant code architecture, clean patterns, and optimizing performance, apply to our global network.
          </p>
        </div>

        <div>
          <div className="text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-6">
            Open Architectural Node Openings
          </div>
          
          <div className="flex flex-col gap-3">
            {positionsList.map((position, index) => (
              <div 
                key={index}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gray-900/30 border border-gray-900 rounded-2xl p-6 hover:bg-gray-900/50 hover:border-gray-800 transition-all duration-200 cursor-pointer"
              >
                <div>
                  <h3 className="text-base font-bold text-gray-200 group-hover:text-white transition-colors">
                    {position.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 mt-2">
                    <span>{position.team}</span>
                    <span className="text-gray-800">•</span>
                    <span>{position.node}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 self-end sm:self-auto">
                  <span className="text-[11px] font-mono text-indigo-400 bg-indigo-500/5 border border-indigo-500/10 px-3 py-1 rounded-lg">
                    {position.commitment}
                  </span>
                  <span className="text-sm text-gray-500 group-hover:text-white transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}