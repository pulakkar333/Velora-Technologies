"use client";

import { notFound, useParams } from "next/navigation";
import Link from "next/link";

const SERVICES_STORE: Record<
  string,
  { label: string; name: string; details: string; deliverables: string[] }
> = {
  cloud: {
    label: "Cloud Architecture Systems",
    name: "Cloud Engineering & Elastic Multi-Region Topology",
    details:
      "We build declarative, multi-region container ecosystems across AWS, GCP, and Azure configurations. Eliminate system compute overhead using auto-scaling limits designed to withstand traffic shifts.",
    deliverables: [
      "Infrastructure Code Definitions via Terraform",
      "Automated Multi-Region Cold Failover Routing",
      "Serverless Edge Caching Layer Architectures",
      "Real-time Gateway Optimization Protocols",
    ],
  },
  cyber: {
    label: "SecDevOps Frameworks",
    name: "Zero-Trust Structural Security & Asset Protection",
    details:
      "Enforce strict runtime isolation parameters. We build granular identity access paths, unified telemetry tracking configurations, and secure validation gates to keep systems fully compliant with data custody regulations.",
    deliverables: [
      "Mutual TLS Cryptographic Microsegmentation",
      "Dynamic Identity-Based Access Policies",
      "Proactive System Attack Surface Profiling",
      "SOC2 Type II Audit Log Aggregation Engines",
    ],
  },
  ai: {
    label: "Machine Intelligence Nodes",
    name: "Enterprise LLM Tailoring & Model Data Pipelines",
    details:
      "Deploy secure computational intelligence nodes inside your application context. Extract insights from legacy document databases without exposing data to external training vectors.",
    deliverables: [
      "Private Vector Database Context Injection Maps",
      "Sub-second Automation Evaluation Loops",
      "High-Performance Data Ingestion Architecture",
      "Isolated On-Premise Execution Frameworks",
    ],
  },
  devops: {
    label: "Infrastructure Lifecycle Automation",
    name: "High-Velocity CI/CD Orchestration Engines",
    details:
      "Accelerate software delivery lifecycles without risking active system stability. We build clean, declarative delivery pipelines featuring automated fallback logic and verification steps.",
    deliverables: [
      "Declarative Build Definitions and Container Automation",
      "Orchestrated Kubernetes Infrastructure Presets",
      "Blue-Green Safe Release Deployment Paths",
      "Continuous Dependency Vulnerability Safeguards",
    ],
  },
};

export default function ServicesPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const currentService = SERVICES_STORE[slug];

  if (!currentService) notFound();

  return (
    <main className="relative min-h-screen bg-gray-950 text-gray-100 pt-32 pb-24">
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-indigo-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-medium text-gray-500 hover:text-white mb-10 transition-colors"
        >
          ← Return to System Node Core
        </Link>

        <div className="text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-3">
          {currentService.label}
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-8 max-w-4xl leading-tight">
          {currentService.name}
        </h1>

        <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-3xl mb-16 border-b border-gray-900 pb-12">
          {currentService.details}
        </p>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
            System Architecture Components
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {currentService.deliverables.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-gray-900/20 border border-gray-900 p-5 rounded-2xl"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                <span className="text-sm text-gray-300 leading-normal">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
