"use client";

import Link from "next/link";

export default function AboutPage() {
  const corporateValues = [
    {
      index: "01",
      heading: "Architectural Precision",
      text: "We avoid short-term patches. We configure immutable, distributed framework foundations engineered to protect your long-term data custody cycles.",
    },
    {
      index: "02",
      heading: "Mission-Critical Scaling",
      text: "Regulated industry sectors demand strict operational uptimes. Our platform methodologies sustain uninterrupted processing under highly parallelized loads.",
    },
    {
      index: "03",
      heading: "Radical Transparency",
      text: "From model optimization matrices to edge cluster transitions, we provide raw source oversight, clear data lineage, and dedicated team visibility.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-gray-950 text-gray-100 overflow-hidden pt-32 pb-24">
      {/* Dynamic Visual Gradient Flare */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[450px] bg-gradient-to-b from-indigo-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Segment */}
        <div className="max-w-3xl mb-24">
          <div className="text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-3">
            Corporate Matrix & Heritage
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            We engineer software that scales as fast as your ambition.
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Velora Technologies is an elite software engineering collective. We
            build high-throughput enterprise infrastructure, automated resource
            management planes, and clean multi-cloud topologies optimized for
            complex technical demands.
          </p>
        </div>

        {/* Mission & Vision Framework Block */}
        <div className="grid md:grid-cols-2 gap-12 mb-28 border-y border-gray-900 py-16">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-3">
              <span className="w-1.5 h-6 bg-indigo-500 rounded-full" />
              Our Core Mission
            </h2>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              To equip highly regulated global institutions with resilient
              custom digital architectures that completely dismantle
              technological debt, maximize infrastructure automated bandwidth,
              and safeguard corporate transactional velocity.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-3">
              <span className="w-1.5 h-6 bg-indigo-500 rounded-full" />
              Our Core Vision
            </h2>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              To define the definitive baseline for high-performance computing
              design, engineering clean digital products where performance
              monitoring, security parameters, and modular integrity are
              sustained natively.
            </p>
          </div>
        </div>

        {/* Core Pillars Segment */}
        <div className="mb-28">
          <div className="text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-12 text-center md:text-left">
            Our Operational Pillars
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateValues.map((value, idx) => (
              <div
                key={idx}
                className="bg-gray-900/30 border border-gray-900 rounded-2xl p-6 backdrop-blur-md hover:border-gray-800 transition-colors duration-200"
              >
                <div className="text-2xl font-mono font-bold text-indigo-500/40 mb-4">
                  {value.index}
                </div>
                <h3 className="text-base font-bold text-gray-200 mb-2">
                  {value.heading}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive CTA Banner */}
        <div className="rounded-3xl border border-gray-900 bg-gradient-to-r from-gray-950 via-gray-900/40 to-gray-950 p-8 md:p-14 text-center relative overflow-hidden">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Have a project tracking high complexity?
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto mb-8">
            Connect directly with an engineering principal to blueprint an
            automated, immutable route path today.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-6 text-sm font-semibold text-gray-950 transition-all hover:bg-gray-100 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
          >
            Initiate Architecture Audit
          </Link>
        </div>
      </div>
    </main>
  );
}
