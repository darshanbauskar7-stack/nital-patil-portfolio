import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { SKILL_CATEGORIES, SkillCategory } from '../data/profileData';

type SkillFilter = 'all' | SkillCategory['id'];

const SKILL_TABS: { id: SkillFilter; label: string }[] = [
  { id: 'all', label: 'All Categories' },
  { id: 'accounting', label: 'Accounting' },
  { id: 'taxation', label: 'Taxation' },
  { id: 'finance', label: 'Finance' },
  { id: 'tools', label: 'Tools' },
];

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<SkillFilter>('all');

  const visibleCategories =
    selectedCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === selectedCategory);

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#101827] py-20 text-white sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-ledger-dark opacity-45"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-[#526BFF]/12 blur-[110px]"
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Header & Interactive Filter Tabs */}
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
              <span>Core Skills &amp; Foundations</span>
            </div>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              Developing Technical Capabilities.
            </h2>
            <p className="mt-4 max-w-[60ch] text-[15px] leading-relaxed text-[#C8CED8] sm:text-base">
              Foundational academic competencies and software familiarity cultivated through
              Chartered Accountancy coursework and Bachelor of Commerce studies.
            </p>
          </motion.div>

          {/* Interactive Category Selector */}
          <div
            role="tablist"
            aria-label="Filter skills by category"
            className="flex flex-wrap items-center gap-1 rounded-xl border border-[#C8CED8]/14 bg-[#17243A] p-1"
          >
            {SKILL_TABS.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`min-h-[40px] rounded-lg px-3.5 py-2 text-xs font-medium transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer sm:px-4 sm:text-sm ${
                    isActive
                      ? 'bg-[#526BFF] text-white shadow-sm'
                      : 'text-[#C8CED8] hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Grid */}
        <div
          className={`mt-12 grid grid-cols-1 gap-6 lg:mt-14 ${
            visibleCategories.length === 1 ? 'md:grid-cols-1' : 'md:grid-cols-2'
          }`}
        >
          <AnimatePresence mode="popLayout">
            {visibleCategories.map((category, catIdx) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.38,
                  delay: catIdx * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-2xl border border-[#C8CED8]/14 bg-[#17243A] p-6 transition-colors duration-300 hover:border-[#526BFF]/45 sm:p-8"
              >
                {/* Category Header */}
                <div className="flex items-baseline justify-between gap-4 border-b border-[#C8CED8]/12 pb-5">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold tracking-tight text-white">
                      {category.label}
                    </h3>
                    <p className="mt-1.5 text-xs text-[#C8CED8]/80 sm:text-sm">
                      {category.subtitle}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-[#526BFF] tabular-nums shrink-0">
                    0{category.skills.length} items
                  </span>
                </div>

                {/* Unboxed Skill Ledger Rows (No fake percentages, no pill clutter) */}
                <ul className="mt-5 divide-y divide-[#C8CED8]/10">
                  {category.skills.map((skill, idx) => (
                    <li
                      key={skill.name}
                      className="group/item py-4 first:pt-1 last:pb-1"
                    >
                      <div className="flex items-start gap-3.5">
                        <span className="mt-0.5 font-mono text-xs text-[#526BFF] tabular-nums">
                          0{idx + 1}
                        </span>
                        <div>
                          <p className="text-base font-semibold text-white transition-colors duration-200 group-hover/item:text-[#EAF0FA]">
                            {skill.name}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-[#C8CED8]/75 sm:text-[13px]">
                            {skill.focus}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
