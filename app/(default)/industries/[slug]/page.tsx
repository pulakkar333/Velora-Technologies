"use client";

import { notFound, useParams } from "next/navigation";
import Link from "next/link";

const INDUSTRIES_STORE: Record<string, { sector: string; title: string; summary: string; vectors: string[] }> = {
  fintech: {
    sector: "Financial Technologies",
    title: "High-Throughput Ledger Engineering & Compliant Banking Grids",
    summary: "Building secure, low-latency transaction software infrastructure optimized for large-scale operations, featuring transparent event auditing layers.",
    vectors: ["Sub-millisecond Transaction Resolution Frameworks", "Double-Entry Immutable Transaction Ledger Logs", "Real-Time Fraud Pattern Identification Hooks"]
  },
  healthcare: {
    sector: "Medical Informatics",
    title: "HIPAA Compliant Health Informatics & Patient Security Planes",
    summary: "Engineered to safeguard records lifecycle pathways, utilizing robust column-level cryptographic schemas and access logs.",
    vectors: ["End-to-End Encrypted Patient Data Registries", "Interoperable HL7 / FHIR Format Routing Nodes", "Granular Practitioner Security Verification Access"]
  },
  logistics: {
    sector: "Supply Chain Solutions",
    title: "Real-Time Telematics Aggregation & Fleet Routing Networks",
    summary: "Connecting global industrial edge devices with high-performance coordination software to keep active delivery flows optimized.",
    vectors: ["Distributed Telematics Processing Pipelines", "Dynamic Asset Location Mapping Routers", "Automated Warehouse Operations Orchestration Layers"]
  }
};

export default function IndustriesPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const currentIndustry = INDUSTRIES_STORE[slug];

  if (!currentIndustry) notFound();

  return (
    <main className="relative min-h-screen bg-gray-950 text-gray-100 pt-32 pb-24">
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-indigo-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-medium text-gray-500 hover:text-white mb-10 transition-colors">
          ← Return to System Node Core
        </Link>

        <div className="text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-3">
          {currentIndustry.sector}
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-8 max-w-4xl leading-tight">
          {currentIndustry.title}
        </h1>
        
        <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-3xl mb-16 border-b border-gray-900 pb-12">
          {currentIndustry.summary}
        </p>
     
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
            Operational Systems Focus
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {currentIndustry.vectors.map((item, index) => (
              <div key={index} className="bg-gray-900/30 border border-gray-900 p-5 rounded-2xl">
                <div className="text-xs text-indigo-400 font-mono mb-3">Vector_0{index + 1}</div>
                <span className="text-sm text-gray-200 font-medium leading-relaxed block">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}