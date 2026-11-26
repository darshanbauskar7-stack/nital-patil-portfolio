import { motion } from 'motion/react';
import { VERIFIED_ACHIEVEMENTS } from '../data/profileData';

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="relative bg-[#EAF0FA] py-20 text-[#101827] sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-ledger-light opacity-55"
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 text-sm font-medium text-[#526BFF]">
            <span className="h-[1px] w-8 bg-[#526BFF]" aria-hidden="true" />
            <span>Key Achievements</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-[#101827] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
            Verified Academic Milestones.
          </h2>
          <p className="mt-4 max-w-[58ch] text-[15px] leading-relaxed text-[#202735]/80 sm:text-base">
            Consistent discipline and steady progress across national Chartered Accountancy
            examinations and commerce academics.
          </p>
        </motion.div>

        {/* 2x2 Editorial Monograph Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-14">
          {VERIFIED_ACHIEVEMENTS.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: idx * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col justify-between rounded-2xl border border-[#101827]/10 bg-[#FFFFFF] p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#526BFF]/50 hover:shadow-[0_20px_45px_-24px_rgba(16,24,39,0.2)] sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between gap-4 text-xs font-medium text-[#202735]/65">
                  <span className="font-mono text-[#526BFF]">{item.index}</span>
                  <span>{item.period}</span>
                </div>

                <h3 className="mt-5 font-serif text-xl font-semibold leading-snug text-[#101827] sm:text-2xl">
                  {item.statement}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#202735]/75">
                  {item.context}
                </p>
              </div>

              <div className="mt-8 flex items-baseline justify-between border-t border-[#101827]/10 pt-5">
                <span className="text-xs font-medium text-[#202735]/65">
                  {item.metricCaption}
                </span>
                <span className="font-mono text-2xl font-semibold tracking-tight text-[#101827] tabular-nums transition-colors duration-200 group-hover:text-[#526BFF] sm:text-3xl">
                  {item.metricDisplay}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
