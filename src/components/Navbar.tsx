import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NAV_ITEMS, PROFILE } from '../data/profileData';

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const primaryLinks = NAV_ITEMS.filter((item) => item.id !== 'contact');
  const contactItem = NAV_ITEMS.find((item) => item.id === 'contact')!;

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || mobileOpen
          ? 'border-b border-[#C8CED8]/12 bg-[#101827]/95 backdrop-blur-md'
          : 'border-b border-transparent bg-[#101827]/75 backdrop-blur-sm'
      }`}
    >
      {/* Top 3-zone contract: Brand — Links — Primary Action */}
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="font-serif text-lg font-semibold tracking-tight text-white transition-colors duration-200 hover:text-[#EAF0FA] whitespace-nowrap shrink-0 sm:text-xl"
        >
          {PROFILE.brandMark}
        </a>

        {/* Zone 2: Clean single-line text links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          {primaryLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-1 text-sm font-medium transition-colors duration-200 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-white'
                    : 'text-[#C8CED8] hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-underline"
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-x-0 -bottom-1 h-[2px] bg-[#526BFF]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={contactItem.href}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(contactItem.href);
            }}
            aria-current={activeSection === 'contact' ? 'page' : undefined}
            className={`hidden h-10 items-center justify-center rounded-lg px-5 text-sm font-medium transition-all duration-200 whitespace-nowrap shrink-0 lg:inline-flex ${
              activeSection === 'contact'
                ? 'bg-[#FFFFFF] text-[#101827]'
                : 'bg-[#526BFF] text-white hover:bg-[#4159E8]'
            }`}
          >
            {contactItem.label}
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#C8CED8]/20 text-white transition-colors duration-200 hover:border-[#526BFF] hover:bg-[#17243A] lg:hidden cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Scroll progress indicator hairline */}
      <motion.div
        style={{ scaleX }}
        aria-hidden="true"
        className="h-[2px] w-full origin-left bg-[#526BFF]"
      />

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-nav-drawer"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="border-b border-[#C8CED8]/15 bg-[#101827] px-4 pb-6 pt-3 shadow-2xl lg:hidden"
          >
            <div className="mx-auto flex max-w-[1200px] flex-col divide-y divide-[#C8CED8]/10">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03, duration: 0.2 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`flex min-h-[48px] items-center justify-between px-2 text-base font-medium transition-colors ${
                      isActive ? 'text-white' : 'text-[#C8CED8] hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="h-0.5 w-6 bg-[#526BFF]" aria-hidden="true" />
                    )}
                  </motion.a>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
