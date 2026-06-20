"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function HeroHome() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Fallback to ensure autoplay kicks off reliably on mobile/safari
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay caught or prevented by browser settings:", error);
      });
    }
  }, []);

  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24">
      {/* Mesh grid background line effect */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Dynamic Responsive Split Grid */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 md:py-12">
          
          {/* Left Block: Deep Technical Copy (7 Columns wide on Desktop) */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Live Infrastructure Status Alert */}
            <div 
              className="mb-5 inline-flex items-center gap-2 self-start rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 text-xs font-medium text-emerald-400"
              data-aos="fade-right"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Q3 Dev Cohort Open • Production Ready
            </div>

            <h1 
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl/tight font-nacelle"
              data-aos="fade-right"
              data-aos-delay={100}
            >
              We build software that scales as fast as{" "}
              <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                your ambition.
              </span>
            </h1>

            <p 
              className="mt-6 text-base text-gray-400 sm:text-lg max-w-xl"
              data-aos="fade-right"
              data-aos-delay={200}
            >
              Velora Technologies designs custom ERPs, high-performance web applications, 
              and robust mobile ecosystems optimized for complex workflows and enterprise scale.
            </p>

            {/* Micro-Form / Action Block */}
            <div 
              className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full max-w-md"
              data-aos="fade-right"
              data-aos-delay={300}
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex justify-center items-center h-11 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-sm font-semibold text-white transition-all shadow-md whitespace-nowrap"
              >
                Launch Your Project
              </Link>
              <Link
                href="/portfolio"
                className="w-full sm:w-auto inline-flex justify-center items-center h-11 px-5 rounded-xl bg-gray-900 border border-gray-800 text-sm font-semibold text-gray-300 hover:text-white hover:bg-gray-800 transition-all whitespace-nowrap"
              >
                View Case Studies
              </Link>
            </div>
          </div>

          {/* Right Block: Pure UI Autoplay Video Wrapper (5 Columns wide on Desktop) */}
          <div 
            className="lg:col-span-5 w-full"
            data-aos="fade-left"
            data-aos-delay={200}
          >
            <div className="relative w-full rounded-2xl border border-gray-800 bg-gray-950 p-2 shadow-2xl before:absolute before:-inset-px before:rounded-[inherit] before:bg-linear-to-b before:from-gray-800/50 before:to-transparent before:-z-10">
              
              {/* Decorative Window Chrome Headers to resemble software */}
              <div className="flex items-center justify-between px-3 pb-2 border-b border-gray-900 mb-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-800" />
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-800" />
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-800" />
                </div>
                <div className="text-[10px] text-gray-600 font-mono">Velora Technologies</div>
                <div className="w-6" />
              </div>

              {/* The Autoplay Native HTML Video Stream */}
              <div className="relative overflow-hidden rounded-xl aspect-video bg-gray-900">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src="videos/video.mp4"
                  loop
                  muted
                  playsInline
                  autoPlay
                />
                {/* Subtle dark layout overlay vignette */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent to-gray-950/20 pointer-events-none" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}