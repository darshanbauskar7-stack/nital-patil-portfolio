import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ACADEMIC_STATS, PROFILE } from '../data/profileData';
import { AnimatedCounter } from './AnimatedCounter';
import { PortraitFrame } from './PortraitFrame';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Subtle GPU-composited vertical parallax for ambient electric-blue aura
  const beamY = useTransform(scrollYProgress, [0, 1], [0, 96]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 48]);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#101827] pt-24 pb-0 text-white sm:pt-28 lg:pt-32"
    >
      {/* Subtle drifting architectural ledger grid */}
      <motion.div
        style={{ y: gridY }}
        aria-hidden="true"
        className="pointer-events-none absolute -inset-16 bg-ledger-dark opacity-75 animate-grid-drift"
      />

      {/* Electric-blue studio rim lighting */}
      <motion.div
        style={{ y: beamY }}
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full bg-[#526BFF]/16 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-24 left-[-12%] h-[400px] w-[400px] rounded-full bg-[#526BFF]/10 blur-[110px]"
      />

      {/* Primary Hero Split */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Editorial Identity & Copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 text-sm font-medium text-[#C8CED8]"
            >
              <span className="h-[1px] w-8 bg-[#526BFF]" aria-hidden="true" />
              <span>{PROFILE.title}</span>
              <span aria-hidden="true" className="text-[#C8CED8]/40">·</span>
              <span className="text-[#C8CED8]/80">{PROFILE.identity}</span>
            </motion.div>

            {/* Primary Name Display */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 font-sans text-4xl font-bold leading-[1.04] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.75rem]"
            >
              <span className="block">{PROFILE.firstName}</span>
              <span className="mt-1 block text-[#EAF0FA]">{PROFILE.lastName}</span>
            </motion.h1>

            {/* Editorial Headline */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-2xl font-serif text-2xl font-medium leading-snug text-[#EAF0FA] sm:text-[1.75rem]"
            >
              {PROFILE.heroHeadline}
            </motion.p>

            {/* Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 max-w-[60ch] text-[15px] leading-relaxed text-[#C8CED8] sm:text-base"
            >
              {PROFILE.heroIntro}
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <button
                type="button"
                onClick={() => scrollToSection('education')}
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-lg bg-[#526BFF] px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#4159E8] hover:shadow-[0_14px_30px_-10px_rgba(82,107,255,0.65)] whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Explore My Journey</span>
                <ArrowDownRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-lg border border-[#C8CED8]/28 bg-[#17243A]/60 px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-[#526BFF] hover:bg-[#17243A] whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="h-4 w-4 text-[#C8CED8]" />
              </button>
            </motion.div>

            {/* Quiet Academic Metadata Footer inside Hero */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#C8CED8]/12 pt-6 text-xs text-[#C8CED8]/80 sm:text-[13px]"
            >
              <span>ICAI CA Intermediate Group I Cleared</span>
              <span aria-hidden="true" className="text-[#526BFF]">·</span>
              <span>B.Com Third Year (8.36 CGPA)</span>
              <span aria-hidden="true" className="text-[#526BFF]">·</span>
              <span>Class 12 Commerce (92%)</span>
            </motion.div>
          </div>

          {/* Right Column: Personal Portrait Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto w-full max-w-[400px] lg:col-span-5 lg:max-w-none"
          >
            <PortraitFrame variant="hero" />
          </motion.div>
        </div>
      </div>

      {/* Full-Width Academic Statistics Ledger Band */}
      <div
        aria-label="Academic Statistics"
        className="relative z-10 border-y border-[#C8CED8]/14 bg-[#17243A]"
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 divide-x divide-y divide-[#C8CED8]/12 lg:grid-cols-4 lg:divide-y-0">
            {ACADEMIC_STATS.map((stat, idx) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-col justify-between px-4 py-7 transition-colors duration-200 hover:bg-[#101827]/45 sm:px-7 sm:py-9"
              >
                <div className="flex items-baseline gap-1">
                  <AnimatedCounter
                    value={stat.value}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                    className="font-mono text-3xl font-semibold tracking-tight text-white transition-colors duration-200 group-hover:text-[#EAF0FA] sm:text-4xl lg:text-[2.75rem]"
                  />
                </div>
                <div className="mt-3">
                  <p className="text-sm font-semibold text-[#EAF0FA] sm:text-[15px]">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-xs text-[#C8CED8]/75">
                    {stat.sublabel}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
