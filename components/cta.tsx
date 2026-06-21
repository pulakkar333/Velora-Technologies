import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-linear-to-b from-gray-950/20 to-gray-900/10">
      {/* Background Decorative Ambient Radial Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-[140px]"
        aria-hidden="true"
      />

      {/* Subtle internal abstract light streak - stretched for full-width layout */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-40 mix-blend-screen select-none"
        aria-hidden="true"
      >
        <Image
          className="max-w-none w-full min-w-[1200px] h-auto object-cover"
          src={BlurredShape}
          width={1440}
          height={668}
          alt="Blurred ambient graphic shape"
          priority
        />
      </div>

      {/* Full-Width Content Row Layout */}
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          
          {/* Top Micro-Tag */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300 tracking-wide uppercase">
            <span className="flex h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Get Instant Access
          </div>

          {/* Header Title with Animated Metallic-Gradient */}
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-100),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-100))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            Join the content-first platform
          </h2>
          
          {/* Subtext Paragraph */}
          <p className="mx-auto max-w-xl text-base sm:text-lg text-indigo-200/65 leading-relaxed pb-10">
            Supercharge your creative workflow, coordinate with global teams, and deploy production-ready digital assets in seconds.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="w-full sm:w-auto" data-aos="fade-up" data-aos-delay={200}>
              <a
                className="group inline-flex h-11 w-full items-center justify-center rounded-xl bg-indigo-600 px-6 text-sm font-medium text-white shadow-lg shadow-indigo-600/20 transition-all duration-200 hover:bg-indigo-500 hover:shadow-indigo-500/30 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500/50 sm:w-auto"
                href="#0"
              >
                <span className="flex items-center gap-1.5">
                  Start Building
                  <svg 
                    className="h-4 w-4 text-white/70 transition-transform duration-200 group-hover:translate-x-0.5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </a>
            </div>
            
            <div className="w-full sm:w-auto" data-aos="fade-up" data-aos-delay={400}>
              <a
                className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-gray-900/40 hover:bg-gray-900/80 px-6 text-sm font-medium text-gray-300 backdrop-blur-md transition-all duration-200 hover:text-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-gray-700 sm:w-auto"
                href="#0"
              >
                Schedule Demo
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}