import { MotionConfig } from 'motion/react';
import { useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { AcademicJourneySection } from './components/AcademicJourneySection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { HeroSection } from './components/HeroSection';
import { InterestsSection } from './components/InterestsSection';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { SkillsSection } from './components/SkillsSection';
import { NAV_ITEMS } from './data/profileData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  // Scroll-spy for accurate active navigation indicator
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      const docHeight = document.documentElement.scrollHeight;
      const viewportBottom = window.scrollY + window.innerHeight;

      // If at the bottom of the page, highlight Contact
      if (viewportBottom >= docHeight - 40) {
        setActiveSection('contact');
        return;
      }

      let current = sectionIds[0];
      for (const el of elements) {
        if (el.offsetTop <= scrollPosition) {
          current = el.id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-dvh bg-[#101827] text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#526BFF] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>

        <LoadingScreen />
        <Navbar activeSection={activeSection} />

        <main id="main-content">
          <HeroSection />
          <AboutSection />
          <AcademicJourneySection />
          <AchievementsSection />
          <SkillsSection />
          <InterestsSection />
          <ContactSection />
        </main>
      </div>
    </MotionConfig>
  );
}
