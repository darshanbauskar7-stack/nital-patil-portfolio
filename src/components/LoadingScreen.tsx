import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { PROFILE } from '../data/profileData';

export function LoadingScreen() {
  const [visible, setVisible] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (!visible) return;
    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 620);
    return () => window.clearTimeout(timer);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader-curtain"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
          aria-hidden="true"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#101827] pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <span className="font-serif text-3xl font-semibold tracking-tight text-white">
              {PROFILE.initials}
            </span>
            <span className="mt-2 text-xs font-medium tracking-[0.22em] text-[#C8CED8]">
              {PROFILE.brandMark}
            </span>
            <div className="mt-5 h-[2px] w-28 overflow-hidden bg-[#17243A]">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
                className="h-full w-full origin-left bg-[#526BFF]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
