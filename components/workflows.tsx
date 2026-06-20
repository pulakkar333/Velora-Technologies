import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  const workflowCards = [
    {
      img: WorflowImg01,
      phase: "Phase.01",
      badgeBg: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
      label: "01 . Blueprint",
      title: "Built-in Architecting",
      desc: "Consolidate user definitions, relational wireframes, and logic blueprints within a unified node canvas before writing source code.",
    },
    {
      img: WorflowImg02,
      phase: "Phase.02",
      badgeBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
      label: "02 . Deploy",
      title: "Instant Global Scaling",
      desc: "Push logic steps straight to cluster infrastructure configurations. Handshake API layers securely with automated staging servers.",
    },
    {
      img: WorflowImg03,
      phase: "Phase.03",
      badgeBg: "bg-purple-500/10 border-purple-500/20 text-purple-400",
      label: "03 . Optimize",
      title: "Tailored Automation",
      desc: "Listen to user engagement behaviors. Hook performance events right back into production triggers to isolate logic bottlenecks.",
    },
    {
      img: WorflowImg01,
      phase: "Phase.04",
      badgeBg: "bg-amber-500/10 border-amber-500/20 text-amber-400",
      label: "04 . Monitor",
      title: "Telemetry Tracking",
      desc: "Observe real-time error traces and core vital diagnostics directly through aggregated stream pipelines.",
    },
    {
      img: WorflowImg02,
      phase: "Phase.05",
      badgeBg: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
      label: "05 . Sync",
      title: "Collaborative Review",
      desc: "Merge ongoing patch streams into deployment staging sandboxes seamlessly with automated verification protocols.",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="mx-auto w-full px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
            <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-xs font-semibold uppercase tracking-wider">
              Tailored Workflows
            </span>
          </div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-5xl tracking-tight">
            Map your product journey
          </h2>
          <p className="text-lg text-indigo-200/65 max-w-2xl mx-auto">
            A fluid development lifecycle built to ship faster. Review technical
            milestones seamlessly as they cycle through.
          </p>
        </div>

        {/* Outer Marquee Track Wrapper Container */}
        <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,transparent_5%,#000_20%,#000_80%,transparent_95%,transparent)]">
          {/* Spotlight Wrapper */}
          <Spotlight className="flex flex-row gap-6 py-4 whitespace-nowrap min-w-full no-wrap">
            {/* Loop Segment 1: Driving Track (Removed hover pause) */}
            <div className="flex flex-row gap-6 shrink-0 min-w-full justify-around animate-marquee-reverse">
              {workflowCards.map((card, idx) => (
                <div
                  key={`track-1-${idx}`}
                  className="group/card relative flex flex-col w-[340px] shrink-0 overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
                >
                  <div className="relative z-20 flex flex-col h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 whitespace-normal">
                    <div className="relative overflow-hidden bg-gray-900/40 border-b border-gray-900 flex items-center justify-center p-4">
                      <Image
                        className="rounded-lg transition-transform duration-500 group-hover/card:scale-[1.02]"
                        src={card.img}
                        width={320}
                        height={200}
                        alt={card.title}
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="mb-3 flex items-center justify-between">
                        <span
                          className={`btn-sm relative rounded-full px-2.5 py-0.5 text-xs font-medium border ${card.badgeBg}`}
                        >
                          {card.label}
                        </span>
                        <span className="text-[10px] font-mono text-gray-600">
                          {card.phase}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-gray-200 mb-1">
                        {card.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-indigo-200/65">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Loop Segment 2: Mirrored Clone Array (Removed hover pause) */}
            <div
              className="flex flex-row gap-6 shrink-0 min-w-full justify-around animate-marquee-reverse"
              aria-hidden="true"
            >
              {workflowCards.map((card, idx) => (
                <div
                  key={`track-2-${idx}`}
                  className="group/card relative flex flex-col w-[340px] shrink-0 overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
                >
                  <div className="relative z-20 flex flex-col h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 whitespace-normal">
                    <div className="relative overflow-hidden bg-gray-900/40 border-b border-gray-900 flex items-center justify-center p-4">
                      <Image
                        className="rounded-lg transition-transform duration-500 group-hover/card:scale-[1.02]"
                        src={card.img}
                        width={320}
                        height={200}
                        alt={card.title}
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="mb-3 flex items-center justify-between">
                        <span
                          className={`btn-sm relative rounded-full px-2.5 py-0.5 text-xs font-medium border ${card.badgeBg}`}
                        >
                          {card.label}
                        </span>
                        <span className="text-[10px] font-mono text-gray-600">
                          {card.phase}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-gray-200 mb-1">
                        {card.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-indigo-200/65">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
