"use client";

import { useState } from "react";

export default function ContactPage() {
  const [success, setSuccess] = useState(false);

  return (
    <main className="relative min-h-screen bg-gray-950 text-gray-100 pt-32 pb-24">
      <div className="absolute top-0 right-1/4 w-[850px] h-[550px] bg-indigo-500/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 relative z-10">
        
        {/* Info Box */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
          <div>
            <div className="text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-3">
              Request System Specs Blueprint
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
              Let's build.
            </h1>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Experiencing continuous system resource bottlenecks, legacy structural gridlock, or coordinating zero-trust migrations? Lay out your target timeline constraints below to connect directly with our engineering team.
            </p>
          </div>

          <div className="space-y-6 border-t border-gray-900 pt-10">
            <div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Enterprise Cryptographic Mailbox</div>
              <div className="text-sm text-gray-300 font-mono mt-1">inquiries@velora-technologies.com</div>
            </div>
            <div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Secure Node Operations HQ</div>
              <div className="text-sm text-gray-300 mt-1">Suite 920, Sand Hill Route Core, California</div>
            </div>
          </div>
        </div>

        {/* Input Interface Wrapper */}
        <div className="lg:col-span-7">
          <div className="bg-gray-900/20 border border-gray-900 rounded-3xl p-6 sm:p-10 backdrop-blur-xl">
            {success ? (
              <div className="text-center py-16 animate-in fade-in duration-300">
                <div className="w-12 h-12 bg-indigo-500/10 text-indigo-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-indigo-500/20 text-lg">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-white">System Record Generated</h3>
                <p className="text-xs text-gray-400 mt-2 max-w-xs mx-auto leading-relaxed">
                  Your project scope matrices have been securely filed into our priority queue pipeline. Our team will follow up within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSuccess(true); }} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-400">Identify Operator Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g., Sarah Jenkins" 
                      className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-gray-200 focus:outline-hidden focus:border-indigo-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-400">Corporate Endpoint Email</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="s.jenkins@enterprise.com" 
                      className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-gray-200 focus:outline-hidden focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-400">Primary System Engineering Focus</label>
                  <select className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-xs text-gray-400 focus:outline-hidden focus:border-indigo-500 transition-colors">
                    <option>Elastic Cloud Architecture Tuning</option>
                    <option>Zero-Trust Security Matrix Configuration</option>
                    <option>Private LLM Execution & Process Pipeline Optimization</option>
                    <option>Custom Industrial ERP Platform Build</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-400">Structural Scope Overview & Constraints</label>
                  <textarea 
                    rows={4} 
                    required 
                    placeholder="Provide notes on existing software dependencies, cloud providers, traffic metrics, or specific database target scales..." 
                    className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-gray-200 focus:outline-hidden focus:border-indigo-500 transition-colors resize-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-11 rounded-xl bg-white text-xs font-bold text-gray-950 hover:bg-gray-100 transition-all cursor-pointer"
                >
                  Transmit Blueprint Request
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </main>
  );
}