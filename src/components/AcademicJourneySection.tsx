import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { ACADEMIC_MILESTONES } from '../data/profileData';
import { AnimatedCounter } from './AnimatedCounter';

type FilterTrack = 'all' | 'ca' | 'degree';

const FILTER_OPTIONS: { id: FilterTrack; label: string }[] = [
  { id: 'all', label: 'All Milestones' },
  { id: 'ca', label: 'Chartered Accountancy' },
  { id: 'degree', label: 'College & Board' },
];

export function AcademicJourneySection() {
  const [activeTrack, setActiveTrack] = useState<FilterTrack>('all');

  const filteredMilestones = ACADEMIC_MILESTONES.filter((item) => {
    if (activeTrack === 'all') return true;
    if (activeTrack === 'ca') return item.category === 'Chartered Accountancy';
    return item.category !== 'Chartered Accountancy';
  });

  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#101827] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Subtle architectural background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-ledger-dark opacity-50"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-[#526BFF]/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Header + Interactive Filter Controls */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 text-sm font-medium text-[#526BFF]">
              <span className="h-[1px] w-8 bg-[#526BFF]" aria-hidden="true" />
              <span>Academic Journey</span>
            </div>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              Structured Progression in Commerce &amp; Accountancy.
            </h2>
            <p className="mt-4 max-w-[58ch] text-[15px] leading-relaxed text-[#C8CED8] sm:text-base">
              Verified academic milestones across the Institute of Chartered Accountants of India
              (ICAI), undergraduate commerce studies and higher secondary education.
            </p>
          </motion.div>

          {/* Interactive Track Filter */}
          <div
            role="tablist"
            aria-label="Filter academic milestones"
            className="inline-flex w-fit flex-wrap items-center gap-1 rounded-xl border border-[#C8CED8]/14 bg-[#17243A] p-1"
          >
            {FILTER_OPTIONS.map((option) => {
              const selected = activeTrack === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveTrack(option.id)}
                  className={`min-h-[40px] rounded-lg px-4 py-2 text-xs font-medium transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer sm:text-sm ${
                    selected
                      ? 'bg-[#526BFF] text-white shadow-sm'
                      : 'text-[#C8CED8] hover:text-white'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Architectural Timeline List */}
        <div className="relative mt-14">
          {/* Subtle vertical spine on desktop */}
          <div
            aria-hidden="true"
            className="absolute bottom-4 left-[19px] top-4 hidden w-[1px] bg-gradient-to-b from-[#526BFF] via-[#C8CED8]/20 to-transparent md:block"
          />

          <div className="space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredMilestones.map((milestone, idx) => (
                <motion.article
                  key={milestone.id}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative md:pl-14"
                >
                  {/* Timeline Node Marker (Geometric square, no pulsing dot) */}
                  <div
                    aria-hidden="true"
                    className={`absolute left-[11px] top-9 hidden h-[17px] w-[17px] items-center justify-center rounded-sm border md:flex ${
                      milestone.highlight
                        ? 'border-[#526BFF] bg-[#101827]'
                        : 'border-[#C8CED8]/35 bg-[#101827]'
                    }`}
                  >
                    <span
                      className={`h-[7px] w-[7px] rounded-[1px] ${
                        milestone.highlight ? 'bg-[#526BFF]' : 'bg-[#C8CED8]/60'
                      }`}
                    />
                  </div>

                  {/* Milestone Card */}
                  <div className="group rounded-2xl border border-[#C8CED8]/14 bg-[#17243A] p-6 transition-all duration-300 hover:border-[#526BFF]/55 hover:shadow-[0_20px_50px_-24px_rgba(82,107,255,0.28)] sm:p-8">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center lg:gap-8">
                      {/* Left Content */}
                      <div className="lg:col-span-8">
                        {/* Unboxed typographic metadata */}
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-[#C8CED8]">
                          <span className="font-mono text-[#526BFF]">{milestone.order}</span>
                          <span aria-hidden="true" className="text-[#C8CED8]/35">/</span>
                          <span>{milestone.category}</span>
                          <span aria-hidden="true" className="text-[#C8CED8]/35">·</span>
                          <span>{milestone.timeframe}</span>
                          <span aria-hidden="true" className="text-[#C8CED8]/35">·</span>
                          <span className="text-[#EAF0FA]">{milestone.status}</span>
                        </div>

                        <h3 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-white sm:text-[1.75rem]">
                          {milestone.title}
                        </h3>

                        <p className="mt-2 text-sm font-medium text-[#EAF0FA]/90 sm:text-[15px]">
                          {milestone.institution}
                        </p>

                        <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-[#C8CED8]/10 pt-4 text-xs text-[#C8CED8]/85 sm:text-[13px]">
                          {milestone.details.map((detail) => (
                            <li key={detail} className="flex items-center gap-2">
                              <span
                                aria-hidden="true"
                                className="h-[1px] w-3 bg-[#526BFF]"
                              />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right Prominent Achievement Figure */}
                      <div className="flex flex-row items-baseline justify-between border-t border-[#C8CED8]/12 pt-5 lg:col-span-4 lg:flex-col lg:items-end lg:justify-center lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 lg:text-right">
                        <span className="text-xs font-medium tracking-wide text-[#C8CED8]/75 lg:order-2 lg:mt-2">
                          {milestone.metricLabel}
                        </span>
                        <div className="lg:order-1">
                          <AnimatedCounter
                            value={milestone.metricValue}
                            decimals={milestone.metricDecimals}
                            suffix={milestone.metricSuffix}
                            className="font-mono text-4xl font-semibold tracking-tight text-white transition-colors duration-200 group-hover:text-[#EAF0FA] sm:text-5xl lg:text-[3.5rem]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
