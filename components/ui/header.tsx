"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  // Prevent background scrolling when full-screen mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const toggleMobileAccordion = (menu: string) => {
    setMobileAccordion(mobileAccordion === menu ? null : menu);
  };

  return (
    <header className="relative z-50 w-full border-b border-gray-900 bg-gray-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Left Side: Branding & Desktop Nav */}
          <div className="flex items-center gap-10">
            {/* REMOVED the outer <Link href="/"> wrapper from here */}
            <Logo />

            {/* Desktop Mega Navigation Container */}
            <nav
              className="hidden lg:flex items-center gap-2 text-sm font-medium text-gray-400"
              onMouseLeave={() => setActiveMenu(null)}
            >
              {/* Capabilities Link */}
              <div className="static">
                <button
                  onMouseEnter={() => setActiveMenu("capabilities")}
                  className={`flex items-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 cursor-pointer hover:text-white ${
                    activeMenu === "capabilities"
                      ? "bg-gray-900 text-white"
                      : ""
                  }`}
                >
                  Capabilities
                  <svg
                    className={`w-3 h-3 opacity-60 transition-transform duration-200 ${activeMenu === "capabilities" ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* --- FULL WIDTH MEGA DROPDOWN PANEL (CAPABILITIES) --- */}
                {activeMenu === "capabilities" && (
                  <div className="absolute left-0 right-0 top-full w-full border-b border-gray-900 bg-gray-950 px-4 py-8 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-4 gap-6">
                      {/* Left Sidebar Category Summary */}
                      <div className="col-span-1 pr-6 border-r border-gray-900">
                        <div className="text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-2">
                          Our Tech Expertise
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed">
                          Engineered to scale. Custom blueprints built using
                          bleeding-edge infrastructure paradigms to keep you
                          optimized ahead of production cycles.
                        </p>
                      </div>

                      {/* Right Sub-links Interactive Layout Columns */}
                      <div className="col-span-3 grid grid-cols-2 gap-x-6 gap-y-2">
                        <Link
                          href="/services/cloud"
                          className="group rounded-xl p-3 hover:bg-gray-900/40 transition-all border border-transparent hover:border-gray-900"
                        >
                          <div className="text-sm font-semibold text-gray-200 group-hover:text-indigo-400 transition-colors">
                            Cloud Engineering
                          </div>
                          <p className="text-xs text-gray-500 mt-1 leading-normal">
                            AWS, Azure & GCP secure modern cloud migrations and
                            cloud-native architecture topologies.
                          </p>
                        </Link>

                        <Link
                          href="/services/cyber"
                          className="group rounded-xl p-3 hover:bg-gray-900/40 transition-all border border-transparent hover:border-gray-900"
                        >
                          <div className="text-sm font-semibold text-gray-200 group-hover:text-indigo-400 transition-colors">
                            Cyber Resilience
                          </div>
                          <p className="text-xs text-gray-500 mt-1 leading-normal">
                            Zero-trust operational perimeters, dynamic
                            firewalls, compliance management, and endpoint
                            protection.
                          </p>
                        </Link>

                        <Link
                          href="/services/ai"
                          className="group rounded-xl p-3 hover:bg-gray-900/40 transition-all border border-transparent hover:border-gray-900"
                        >
                          <div className="text-sm font-semibold text-gray-200 group-hover:text-indigo-400 transition-colors">
                            AI & Automation
                          </div>
                          <p className="text-xs text-gray-500 mt-1 leading-normal">
                            Bespoke enterprise fine-tuned LLM execution
                            environments and robotic process optimization
                            pipelines.
                          </p>
                        </Link>

                        <Link
                          href="/services/devops"
                          className="group rounded-xl p-3 hover:bg-gray-900/40 transition-all border border-transparent hover:border-gray-900"
                        >
                          <div className="text-sm font-semibold text-gray-200 group-hover:text-indigo-400 transition-colors">
                            DevOps & CI/CD
                          </div>
                          <p className="text-xs text-gray-500 mt-1 leading-normal">
                            Continuous delivery optimizations,
                            configuration-as-code management, and scalable
                            Kubernetes clustering.
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Industries Link */}
              <div className="static">
                <button
                  onMouseEnter={() => setActiveMenu("industries")}
                  className={`flex items-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 cursor-pointer hover:text-white ${
                    activeMenu === "industries" ? "bg-gray-900 text-white" : ""
                  }`}
                >
                  Industries
                  <svg
                    className={`w-3 h-3 opacity-60 transition-transform duration-200 ${activeMenu === "industries" ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* --- FULL WIDTH MEGA DROPDOWN PANEL (INDUSTRIES) --- */}
                {activeMenu === "industries" && (
                  <div className="absolute left-0 right-0 top-full w-full border-b border-gray-900 bg-gray-950 px-4 py-8 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-4 gap-6">
                      <div className="col-span-1 pr-6 border-r border-gray-900">
                        <div className="text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-2">
                          Sectors We Serve
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed">
                          Domain specialization meets technical architecture.
                          Tailored digital models serving regulated industries
                          global scale.
                        </p>
                      </div>

                      <div className="col-span-3 grid grid-cols-3 gap-4">
                        <Link
                          href="/industries/fintech"
                          className="group rounded-xl p-3 hover:bg-gray-900/40 transition-all border border-transparent hover:border-gray-900"
                        >
                          <div className="text-sm font-semibold text-gray-200 group-hover:text-indigo-400 transition-colors">
                            Fintech & Banking
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            High-frequency throughput ledger structures and
                            ledger asset auditing.
                          </p>
                        </Link>

                        <Link
                          href="/industries/healthcare"
                          className="group rounded-xl p-3 hover:bg-gray-900/40 transition-all border border-transparent hover:border-gray-900"
                        >
                          <div className="text-sm font-semibold text-gray-200 group-hover:text-indigo-400 transition-colors">
                            Healthcare IT
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            HIPAA compliant e-health records configurations and
                            clinical data access management.
                          </p>
                        </Link>

                        <Link
                          href="/industries/logistics"
                          className="group rounded-xl p-3 hover:bg-gray-900/40 transition-all border border-transparent hover:border-gray-900"
                        >
                          <div className="text-sm font-semibold text-gray-200 group-hover:text-indigo-400 transition-colors">
                            Logistics & Supply Chain
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            Real-time telematics aggregation systems and edge
                            device node fleet controls.
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/insights"
                className="px-3 py-2 rounded-xl hover:text-white transition-colors duration-200"
              >
                Insights
              </Link>
              <Link
                href="/careers"
                className="px-3 py-2 rounded-xl hover:text-white transition-colors duration-200 flex items-center gap-1.5"
              >
                Careers
                <span className="text-[10px] bg-indigo-500/10 text-indigo-400 font-semibold px-2 py-0.5 rounded-full border border-indigo-500/20">
                  We're hiring
                </span>
              </Link>
            </nav>
          </div>

          {/* Right Side: Action Buttons & Mobile Burger */}
          <div className="flex items-center gap-5">
            <Link
              href="/client-portal"
              className="hidden md:inline-block text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
            >
              Client Hub
            </Link>

            <Link
              href="/contact"
              className="hidden sm:inline-flex h-10 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-gray-950 shadow-md transition-all duration-200 hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98]"
            >
              Let's Build Together
            </Link>

            {/* Mobile Burger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex lg:hidden items-center justify-center p-2 rounded-xl text-gray-400 hover:text-white hover:bg-gray-900/60 focus:outline-hidden transition-colors z-50 cursor-pointer"
              aria-label="Toggle Navigation Drawer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Overlay Full-Screen Drawer */}
          {mobileMenuOpen && (
            <div className="fixed inset-x-0 top-20 bottom-0 z-40 lg:hidden w-full bg-gray-950 border-t border-gray-900 p-6 shadow-2xl flex flex-col gap-4 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200">
              {/* Mobile Accordion: Capabilities */}
              <div className="border-b border-gray-900 pb-3">
                <button
                  onClick={() => toggleMobileAccordion("capabilities")}
                  className="flex items-center justify-between w-full py-2 text-base font-semibold text-gray-200"
                >
                  Capabilities
                  <svg
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${mobileAccordion === "capabilities" ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {mobileAccordion === "capabilities" && (
                  <div className="mt-2 ml-2 flex flex-col gap-3 pl-3 border-l border-gray-900">
                    <Link
                      href="/services/cloud"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Cloud Engineering
                    </Link>
                    <Link
                      href="/services/cyber"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Cyber Resilience
                    </Link>
                    <Link
                      href="/services/ai"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      AI & Automation
                    </Link>
                    <Link
                      href="/services/devops"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      DevOps & CI/CD
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Accordion: Industries */}
              <div className="border-b border-gray-900 pb-3">
                <button
                  onClick={() => toggleMobileAccordion("industries")}
                  className="flex items-center justify-between w-full py-2 text-base font-semibold text-gray-200"
                >
                  Industries
                  <svg
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${mobileAccordion === "industries" ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {mobileAccordion === "industries" && (
                  <div className="mt-2 ml-2 flex flex-col gap-3 pl-3 border-l border-gray-900">
                    <Link
                      href="/industries/fintech"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Fintech & Banking
                    </Link>
                    <Link
                      href="/industries/healthcare"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Healthcare IT
                    </Link>
                    <Link
                      href="/industries/logistics"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Logistics & Supply Chain
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/insights"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-base font-semibold text-gray-200 border-b border-gray-900"
              >
                Insights
              </Link>

              <Link
                href="/careers"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-base font-semibold text-gray-200 flex items-center justify-between border-b border-gray-900"
              >
                <span>Careers</span>
                <span className="text-[10px] bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded-full border border-indigo-500/20">
                  Hiring
                </span>
              </Link>

              {/* Mobile Small-Screen Interactive Drawer Actions */}
              <div className="flex flex-col gap-3 mt-auto pt-6">
                <Link
                  href="/client-portal"
                  onClick={() => setMobileMenuOpen(false)}
                  className="md:hidden block text-center py-3 text-sm font-medium text-gray-300 border border-gray-900 rounded-xl bg-gray-950"
                >
                  Client Hub
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center py-3.5 rounded-xl bg-white text-sm font-bold text-gray-950 hover:bg-gray-100"
                >
                  Let's Build Together
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
