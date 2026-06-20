"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  const toggleMobileAccordion = (menu: string) => {
    setMobileAccordion(mobileAccordion === menu ? null : menu);
  };

  return (
    <header className="relative z-40 mt-4 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-16 items-center justify-between gap-4 rounded-2xl bg-gray-900/80 backdrop-blur-md px-4 sm:px-6 border border-gray-800 shadow-2xl">
          
          {/* Left Side: Branding & Desktop Nav */}
          <div className="flex items-center gap-8">
            <Logo />
            
            {/* Desktop Mega Navigation */}
            <nav className="hidden lg:flex items-center gap-1.5 text-sm font-medium text-gray-400">
              {/* Capabilities Link */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveMenu("capabilities")}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className={`flex items-center gap-1 px-3 py-2 rounded-xl transition-all cursor-pointer hover:text-white ${activeMenu === "capabilities" ? "bg-gray-800 text-white" : ""}`}>
                  Capabilities
                  <svg className={`w-3 h-3 opacity-60 transition-transform ${activeMenu === "capabilities" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Mega Dropdown Panel */}
                {activeMenu === "capabilities" && (
                  <div className="absolute top-full left-0 mt-2 w-[520px] rounded-2xl bg-gray-950 border border-gray-800/80 p-5 shadow-2xl grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="col-span-2 text-xs font-semibold tracking-wider text-indigo-400 uppercase pb-1 border-b border-gray-900">
                      Our Tech Expertise
                    </div>
                    <Link href="/services/cloud" className="group rounded-xl p-2 hover:bg-gray-900/50 transition-all">
                      <div className="text-sm font-medium text-gray-200 group-hover:text-white">Cloud Engineering</div>
                      <p className="text-xs text-gray-500 mt-0.5">AWS/Azure migration & architecture</p>
                    </Link>
                    <Link href="/services/cyber" className="group rounded-xl p-2 hover:bg-gray-900/50 transition-all">
                      <div className="text-sm font-medium text-gray-200 group-hover:text-white">Cyber Resilience</div>
                      <p className="text-xs text-gray-500 mt-0.5">Zero-trust security & compliance</p>
                    </Link>
                    <Link href="/services/ai" className="group rounded-xl p-2 hover:bg-gray-900/50 transition-all">
                      <div className="text-sm font-medium text-gray-200 group-hover:text-white">AI & Automation</div>
                      <p className="text-xs text-gray-500 mt-0.5">Custom LLMs & workflow efficiency</p>
                    </Link>
                    <Link href="/services/devops" className="group rounded-xl p-2 hover:bg-gray-900/50 transition-all">
                      <div className="text-sm font-medium text-gray-200 group-hover:text-white">DevOps & CI/CD</div>
                      <p className="text-xs text-gray-500 mt-0.5">Continuous delivery & k8s pipelines</p>
                    </Link>
                  </div>
                )}
              </div>

              {/* Industries Link */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveMenu("industries")}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className={`flex items-center gap-1 px-3 py-2 rounded-xl transition-all cursor-pointer hover:text-white ${activeMenu === "industries" ? "bg-gray-800 text-white" : ""}`}>
                  Industries
                  <svg className={`w-3 h-3 opacity-60 transition-transform ${activeMenu === "industries" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {activeMenu === "industries" && (
                  <div className="absolute top-full left-0 mt-2 w-[240px] rounded-2xl bg-gray-950 border border-gray-800/80 p-2 shadow-2xl flex flex-col gap-0.5">
                    <Link href="/industries/fintech" className="px-3 py-2 rounded-xl hover:bg-gray-900 text-gray-300 hover:text-white text-sm">Fintech & Banking</Link>
                    <Link href="/industries/healthcare" className="px-3 py-2 rounded-xl hover:bg-gray-900 text-gray-300 hover:text-white text-sm">Healthcare IT (HIPAA)</Link>
                    <Link href="/industries/logistics" className="px-3 py-2 rounded-xl hover:bg-gray-900 text-gray-300 hover:text-white text-sm">Logistics & Supply Chain</Link>
                  </div>
                )}
              </div>

              <Link href="/insights" className="px-3 py-2 rounded-xl hover:text-white transition-colors">Insights</Link>
              <Link href="/careers" className="px-3 py-2 rounded-xl hover:text-white transition-colors flex items-center gap-1.5">
                Careers 
                <span className="text-[10px] bg-indigo-500/20 text-indigo-400 font-semibold px-1.5 py-0.5 rounded-full">We're hiring</span>
              </Link>
            </nav>
          </div>

          {/* Right Side: Action Buttons & Mobile Burger */}
          <div className="flex items-center gap-4">
            <Link 
              href="/client-portal" 
              className="hidden sm:inline-block text-xs font-medium text-gray-400 hover:text-white transition-colors"
            >
              Client Hub
            </Link>
            
            <Link
              href="/contact"
              className="hidden sm:inline-flex h-9 items-center justify-center rounded-xl bg-white px-4 text-xs font-semibold text-gray-950 transition-colors hover:bg-gray-200"
            >
              Let's Build Together
            </Link>

            {/* Mobile Burger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex lg:hidden items-center justify-center p-2 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none cursor-pointer transition-colors z-50"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Overlay Dropdown Drawer */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 lg:hidden rounded-2xl bg-gray-950 border border-gray-800 p-4 shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
              
              {/* Mobile Capabilities Accordion */}
              <div className="border-b border-gray-900 pb-2">
                <button 
                  onClick={() => toggleMobileAccordion("capabilities")}
                  className="flex items-center justify-between w-full py-2 text-sm font-semibold text-gray-300 hover:text-white"
                >
                  Capabilities
                  <svg className={`w-4 h-4 text-gray-500 transition-transform ${mobileAccordion === "capabilities" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {mobileAccordion === "capabilities" && (
                  <div className="mt-1 ml-2 flex flex-col gap-2 pl-2 border-l border-gray-800">
                    <Link href="/services/cloud" onClick={() => setMobileMenuOpen(false)} className="py-1 text-xs text-gray-400 hover:text-white">Cloud Engineering</Link>
                    <Link href="/services/cyber" onClick={() => setMobileMenuOpen(false)} className="py-1 text-xs text-gray-400 hover:text-white">Cyber Resilience</Link>
                    <Link href="/services/ai" onClick={() => setMobileMenuOpen(false)} className="py-1 text-xs text-gray-400 hover:text-white">AI & Automation</Link>
                    <Link href="/services/devops" onClick={() => setMobileMenuOpen(false)} className="py-1 text-xs text-gray-400 hover:text-white">DevOps & CI/CD</Link>
                  </div>
                )}
              </div>

              {/* Mobile Industries Accordion */}
              <div className="border-b border-gray-900 pb-2">
                <button 
                  onClick={() => toggleMobileAccordion("industries")}
                  className="flex items-center justify-between w-full py-2 text-sm font-semibold text-gray-300 hover:text-white"
                >
                  Industries
                  <svg className={`w-4 h-4 text-gray-500 transition-transform ${mobileAccordion === "industries" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {mobileAccordion === "industries" && (
                  <div className="mt-1 ml-2 flex flex-col gap-2 pl-2 border-l border-gray-800">
                    <Link href="/industries/fintech" onClick={() => setMobileMenuOpen(false)} className="py-1 text-xs text-gray-400 hover:text-white">Fintech & Banking</Link>
                    <Link href="/industries/healthcare" onClick={() => setMobileMenuOpen(false)} className="py-1 text-xs text-gray-400 hover:text-white">Healthcare IT</Link>
                    <Link href="/industries/logistics" onClick={() => setMobileMenuOpen(false)} className="py-1 text-xs text-gray-400 hover:text-white">Logistics & Supply Chain</Link>
                  </div>
                )}
              </div>

              {/* Standard Mobile Links */}
              <Link href="/insights" onClick={() => setMobileMenuOpen(false)} className="py-1 text-sm font-semibold text-gray-300 hover:text-white border-b border-gray-900 pb-2">
                Insights
              </Link>
              
              <Link href="/careers" onClick={() => setMobileMenuOpen(false)} className="py-1 text-sm font-semibold text-gray-300 hover:text-white flex items-center justify-between border-b border-gray-900 pb-2">
                Careers
                <span className="text-[9px] bg-indigo-500/20 text-indigo-400 font-semibold px-2 py-0.5 rounded-full">Hiring</span>
              </Link>

              {/* Mobile Small-Screen CTAs */}
              <div className="flex flex-col gap-2 mt-2 pt-1">
                <Link href="/client-portal" onClick={() => setMobileMenuOpen(false)} className="sm:hidden block text-center py-2 text-xs font-medium text-gray-400 hover:text-white border border-gray-800 rounded-xl">
                  Client Hub
                </Link>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-center py-2.5 rounded-xl bg-white text-xs font-bold text-gray-950 hover:bg-gray-200">
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