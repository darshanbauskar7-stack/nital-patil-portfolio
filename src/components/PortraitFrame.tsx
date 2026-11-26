import { motion } from 'motion/react';
import { PROFILE } from '../data/profileData';

interface PortraitFrameProps {
  variant?: 'hero' | 'about';
}

export function PortraitFrame({ variant = 'hero' }: PortraitFrameProps) {
  const isHero = variant === 'hero';

  return (
    <div className="relative w-full">
      {/* Subtle electric-blue architectural ambient glow */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -inset-3 rounded-2xl blur-2xl transition-opacity duration-500 ${
          isHero
            ? 'bg-radial from-[#526BFF]/28 via-[#526BFF]/8 to-transparent opacity-95'
            : 'bg-radial from-[#526BFF]/18 via-transparent to-transparent opacity-85'
        }`}
      />

      {/* Precision editorial outer border frame with Electric Blue accent */}
      <div
        className={`relative rounded-2xl p-[1.5px] transition-all duration-300 ${
          isHero
            ? 'bg-gradient-to-br from-[#526BFF] via-[#C8CED8]/35 to-[#526BFF]/70 shadow-[0_28px_72px_-20px_rgba(0,0,0,0.72),0_0_32px_-12px_rgba(82,107,255,0.45)]'
            : 'bg-gradient-to-br from-[#526BFF]/85 via-[#101827]/25 to-[#526BFF]/60 shadow-[0_22px_52px_-22px_rgba(16,24,39,0.34)]'
        }`}
      >
        <div className="relative overflow-hidden rounded-[14.5px] bg-[#101827]">
          {/* Subtle top luminous hairline */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[1px] bg-gradient-to-r from-transparent via-[#EAF0FA]/60 to-transparent"
          />

          {/* Responsive 4:5 editorial portrait crop centered cleanly on Nital's face & upper frame */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] w-full overflow-hidden bg-[#17243A]"
          >
            <img
              src={PROFILE.portraitPath}
              alt={`${PROFILE.fullName}, ${PROFILE.title}`}
              referrerPolicy="no-referrer"
              loading={isHero ? 'eager' : 'lazy'}
              decoding="async"
              className={`h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.025] ${
                isHero ? 'object-[50%_38%]' : 'object-[50%_40%]'
              }`}
            />

            {/* Measured dark scrim at bottom edge for clean caption contrast */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#101827]/90 via-[#101827]/35 to-transparent"
            />

            {/* Subtle inner electric-blue border trace */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-2.5 rounded-[10px] border border-[#EAF0FA]/14"
            />

            {/* Editorial portrait caption */}
            <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-3 px-5 py-4 sm:px-6 sm:py-5">
              <div className="min-w-0">
                <p className="truncate font-serif text-base font-semibold tracking-tight text-white sm:text-lg">
                  {PROFILE.fullName}
                </p>
                <p className="mt-0.5 truncate text-xs font-medium text-[#EAF0FA]/85">
                  {PROFILE.title}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="mb-1 h-[2px] w-7 shrink-0 bg-[#526BFF]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
