import { ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { AREAS_OF_INTEREST } from '../data/profileData';

export function InterestsSection() {
  const [activeId, setActiveId] = useState<string>(AREAS_OF_INTEREST[0].id);

  const activeInterest =
    AREAS_OF_INTEREST.find((item) => item.id === activeId) ?? AREAS_OF_INTEREST[0];

  return (
    <section
      id="interests"
      className="relative bg-[#FFFFFF] py-20 text-[#202735] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 text-sm font-medium text-[#526BFF]">
            <span className="h-[1px] w-8 bg-[#526BFF]" aria-hidden="true" />
            <span>Professional Interests</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-[#101827] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
            Areas of Interest
          </h2>
          <p className="mt-4 max-w-[60ch] text-[15px] leading-relaxed text-[#202735]/80 sm:text-base">
            Core domains of finance, law and accounting that guide my academic study and long-term
            Chartered Accountancy aspirations.
          </p>
        </motion.div>

        {/* Interactive Split Editorial Ledger */}
        <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: 7 Clickable Editorial Index Rows */}
          <div className="divide-y divide-[#101827]/10 border-y border-[#101827]/10 lg:col-span-7">
            {AREAS_OF_INTEREST.map((item) => {
              const isSelected = item.id === activeInterest.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  onMouseEnter={() => setActiveId(item.id)}
                  aria-pressed={isSelected}
                  className={`group flex w-full items-center justify-between gap-4 px-3 py-5 text-left transition-colors duration-200 cursor-pointer sm:px-5 ${
                    isSelected ? 'bg-[#EAF0FA]/80' : 'hover:bg-[#EAF0FA]/40'
                  }`}
                >
                  <div className="flex items-baseline gap-4 min-w-0">
                    <span
                      className={`font-mono text-xs tabular-nums transition-colors duration-200 ${
                        isSelected ? 'text-[#526BFF] font-semibold' : 'text-[#202735]/50'
                      }`}
                    >
                      {item.index}
                    </span>
                    <div className="min-w-0">
                      <span
                        className={`block font-serif text-lg font-semibold tracking-tight transition-colors duration-200 sm:text-xl ${
                          isSelected ? 'text-[#101827]' : 'text-[#202735] group-hover:text-[#101827]'
                        }`}
                      >
                        {item.title}
                      </span>
                      <span className="mt-0.5 block text-xs text-[#202735]/65">
                        {item.domain}
                      </span>
                    </div>
                  </div>

                  <ArrowUpRight
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                      isSelected
                        ? 'translate-x-0.5 -translate-y-0.5 text-[#526BFF]'
                        : 'text-[#202735]/35 group-hover:text-[#526BFF]'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Sticky Editorial Spotlight Card */}
          <div className="lg:sticky lg:top-24 lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-[#101827]/12 bg-[#101827] p-7 text-white shadow-[0_24px_60px_-28px_rgba(16,24,39,0.45)] sm:p-9">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-ledger-dark opacity-50"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#526BFF]/22 blur-3xl"
              />

              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeInterest.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="flex items-center justify-between text-xs text-[#C8CED8]">
                      <span className="font-mono text-[#526BFF]">
                        Interest {activeInterest.index} / 07
                      </span>
                      <span>{activeInterest.domain}</span>
                    </div>

                    <h3 className="mt-5 font-serif text-2xl font-semibold leading-snug text-white sm:text-[1.75rem]">
                      {activeInterest.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-relaxed text-[#C8CED8]">
                      {activeInterest.description}
                    </p>

                    <div className="mt-7 border-t border-[#C8CED8]/14 pt-5">
                      <p className="text-xs font-medium text-[#C8CED8]/70">
                        Key Academic Themes
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium text-[#EAF0FA]">
                        {activeInterest.keyThemes.map((theme, idx) => (
                          <span key={theme} className="inline-flex items-center gap-3">
                            <span>{theme}</span>
                            {idx < activeInterest.keyThemes.length - 1 && (
                              <span aria-hidden="true" className="text-[#526BFF]">
                                ·
                              </span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="mt-7 border-t border-[#C8CED8]/10 pt-4 text-xs text-[#C8CED8]/65">
                      Presented as areas of academic study and future career interest.
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
