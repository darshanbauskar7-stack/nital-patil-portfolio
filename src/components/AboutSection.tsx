import { motion } from 'motion/react';
import { PROFILE } from '../data/profileData';
import { PortraitFrame } from './PortraitFrame';

const ACADEMIC_HIGHLIGHTS = [
  { label: 'CA Intermediate (Group I)', value: '150 Marks · Sep 2026' },
  { label: 'CA Foundation', value: '217 Marks · Sep 2024' },
  { label: 'B.Com (Third Year)', value: '8.36 Current CGPA' },
  { label: 'Class 12 Commerce', value: '92% Board Result' },
];

const CORE_INTERESTS_PREVIEW = [
  'Accounting & Financial Reporting',
  'Corporate Laws',
  'Direct & Indirect Taxation',
  'Financial Management',
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-[#FFFFFF] py-20 text-[#202735] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 text-sm font-medium text-[#526BFF]">
            <span className="h-[1px] w-8 bg-[#526BFF]" aria-hidden="true" />
            <span>About Me</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-[#101827] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
            {PROFILE.aboutHeading}
          </h2>
        </motion.div>

        {/* Editorial Split Layout */}
        <div className="mt-12 grid grid-cols-1 items-start gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Synced Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto w-full max-w-[380px] lg:col-span-5 lg:max-w-none"
          >
            <PortraitFrame variant="about" />
          </motion.div>

          {/* Right Column: Narrative, Academic Highlights & Career Interests */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-5 text-base leading-[1.75] text-[#202735]/90 sm:text-[17px]"
            >
              {PROFILE.aboutParagraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={idx === 0 ? 'font-medium text-[#101827]' : undefined}
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Hairline Divider */}
            <div className="my-10 h-[1px] w-full bg-[#101827]/10" />

            {/* Two-Column Structured Highlights (Whitespace & Hairlines, No Nested Cards) */}
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
              {/* Academic Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="text-sm font-semibold tracking-tight text-[#101827]">
                  Academic Highlights
                </h3>
                <dl className="mt-4 divide-y divide-[#101827]/8">
                  {ACADEMIC_HIGHLIGHTS.map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col gap-0.5 py-3 first:pt-0 last:pb-0"
                    >
                      <dt className="text-xs text-[#202735]/65">{item.label}</dt>
                      <dd className="font-mono text-sm font-medium text-[#101827] tabular-nums">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </motion.div>

              {/* Career Interests & Institution */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="text-sm font-semibold tracking-tight text-[#101827]">
                  Academic &amp; Career Focus
                </h3>
                <ul className="mt-4 divide-y divide-[#101827]/8">
                  {CORE_INTERESTS_PREVIEW.map((focus, idx) => (
                    <li
                      key={focus}
                      className="flex items-center gap-3 py-3 text-sm text-[#202735] first:pt-0 last:pb-0"
                    >
                      <span className="font-mono text-xs text-[#526BFF] tabular-nums">
                        0{idx + 1}
                      </span>
                      <span>{focus}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-xl bg-[#EAF0FA] px-5 py-4">
                  <p className="text-xs font-medium text-[#526BFF]">
                    Current Undergraduate Institution
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-snug text-[#101827]">
                    Adv. S.A. Baheti Arts, Commerce and Science College
                  </p>
                  <p className="mt-1 text-xs text-[#202735]/75">
                    Bachelor of Commerce · Third Year
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
