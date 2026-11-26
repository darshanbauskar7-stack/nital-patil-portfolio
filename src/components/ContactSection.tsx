import { Check, Copy, Mail, MessageCircle, Phone } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { NAV_ITEMS, PROFILE } from '../data/profileData';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleCopyEmail = async () => {
    const email = PROFILE.contact.email;
    let success = false;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
        success = true;
      }
    } catch {
      success = false;
    }

    if (!success) {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        success = true;
      } catch {
        success = false;
      }
    }

    if (success) {
      setCopied(true);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setCopied(false), 3200);
    }
  };

  const handleFooterNav = (href: string) => {
    const id = href.replace('#', '');
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <section
        id="contact"
        className="relative overflow-hidden bg-[#101827] py-20 text-white sm:py-24 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-ledger-dark opacity-50"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#526BFF]/14 blur-[130px]"
        />

        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start lg:gap-14">
            {/* Left Column: Editorial Heading & Direct Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <div className="flex items-center gap-3 text-sm font-medium text-[#526BFF]">
                <span className="h-[1px] w-8 bg-[#526BFF]" aria-hidden="true" />
                <span>Direct Contact</span>
              </div>
              <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
                Let&apos;s Connect.
              </h2>
              <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-[#C8CED8] sm:text-base">
                Open to academic conversations, Chartered Accountancy guidance, articleship
                discussions and professional connections in accounting, taxation and finance.
              </p>

              {/* Verified Contact Ledger */}
              <dl className="mt-9 divide-y divide-[#C8CED8]/14 border-y border-[#C8CED8]/14">
                <div className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <dt className="text-xs font-medium text-[#C8CED8]/75">Full Name</dt>
                  <dd className="text-sm font-semibold text-white sm:text-base">
                    {PROFILE.fullName}
                  </dd>
                </div>

                <div className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <dt className="text-xs font-medium text-[#C8CED8]/75">Mobile</dt>
                  <dd>
                    <a
                      href={PROFILE.contact.telHref}
                      className="font-mono text-sm font-medium text-[#EAF0FA] transition-colors hover:text-[#526BFF] sm:text-base tabular-nums"
                    >
                      {PROFILE.contact.mobile}
                    </a>
                  </dd>
                </div>

                <div className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <dt className="text-xs font-medium text-[#C8CED8]/75">Email</dt>
                  <dd>
                    <a
                      href={PROFILE.contact.mailtoHref}
                      className="break-all font-mono text-sm font-medium text-[#EAF0FA] transition-colors hover:text-[#526BFF] sm:text-base"
                    >
                      {PROFILE.contact.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </motion.div>

            {/* Right Column: Action Suite */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-[#C8CED8]/16 bg-[#17243A] p-6 sm:p-8 lg:col-span-6"
            >
              <h3 className="font-serif text-2xl font-semibold text-white">
                Reach Out Directly
              </h3>
              <p className="mt-2 text-sm text-[#C8CED8]">
                Choose your preferred channel to call, message or email directly.
              </p>

              <div className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {/* CALL NOW */}
                <a
                  href={PROFILE.contact.telHref}
                  className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-xl bg-[#526BFF] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#4159E8] hover:shadow-[0_14px_30px_-10px_rgba(82,107,255,0.6)] whitespace-nowrap"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>Call Now</span>
                </a>

                {/* SEND EMAIL */}
                <a
                  href={PROFILE.contact.mailtoHref}
                  className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-xl border border-[#C8CED8]/24 bg-[#101827] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-[#526BFF] hover:bg-[#101827]/90 whitespace-nowrap"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#526BFF]" />
                  <span>Send Email</span>
                </a>

                {/* WHATSAPP */}
                <a
                  href={PROFILE.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-xl border border-[#C8CED8]/24 bg-[#101827] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-[#526BFF] hover:bg-[#101827]/90 whitespace-nowrap"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-[#526BFF]" />
                  <span>WhatsApp</span>
                </a>

                {/* COPY EMAIL */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-xl border px-5 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap cursor-pointer ${
                    copied
                      ? 'border-[#526BFF] bg-[#526BFF]/20 text-white'
                      : 'border-[#C8CED8]/24 bg-[#101827] text-white hover:border-[#526BFF]'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 shrink-0 text-[#EAF0FA]" />
                      <span>Email Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 shrink-0 text-[#526BFF]" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Inline Accessible Status Confirmation */}
              <div
                role="status"
                aria-live="polite"
                className="mt-5 min-h-[24px] text-xs text-[#EAF0FA]"
              >
                {copied && (
                  <span>
                    Copied <span className="font-mono">{PROFILE.contact.email}</span> to clipboard.
                  </span>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#C8CED8]/14 bg-[#0B111C] text-[#C8CED8]">
        <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            {/* Brand & Quote */}
            <div className="lg:col-span-5">
              <p className="font-serif text-2xl font-semibold tracking-tight text-white">
                {PROFILE.fullName}
              </p>
              <p className="mt-1.5 text-sm font-medium text-[#526BFF]">
                {PROFILE.title}
              </p>
              <p className="mt-4 max-w-md font-serif text-base italic text-[#EAF0FA]/90">
                &ldquo;{PROFILE.footerQuote}&rdquo;
              </p>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold tracking-wider text-white">
                Navigation
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleFooterNav(item.href);
                      }}
                      className="text-[#C8CED8] transition-colors duration-200 hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Email & Contact */}
            <div className="lg:col-span-3">
              <p className="text-xs font-semibold tracking-wider text-white">
                Contact
              </p>
              <div className="mt-4 space-y-2.5 text-sm">
                <p>
                  <a
                    href={PROFILE.contact.mailtoHref}
                    className="break-all text-[#EAF0FA] transition-colors duration-200 hover:text-[#526BFF]"
                  >
                    {PROFILE.contact.email}
                  </a>
                </p>
                <p>
                  <a
                    href={PROFILE.contact.telHref}
                    className="font-mono text-[#C8CED8] transition-colors duration-200 hover:text-white tabular-nums"
                  >
                    {PROFILE.contact.mobile}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[#C8CED8]/12 pt-6 text-xs text-[#C8CED8]/70 sm:flex-row sm:items-center">
            <p>{PROFILE.copyright}</p>
            <p>{PROFILE.identity}</p>
          </div>
        </div>
      </footer>

      {/* Floating Toast Notification on Copy Email (Electric Blue + Midnight Navy, NO green) */}
      <AnimatePresence>
        {copied && (
          <motion.div
            key="copy-toast"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 14 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-4 z-50 flex items-center gap-3 rounded-xl border border-[#526BFF]/60 bg-[#17243A] px-4 py-3 text-sm font-medium text-white shadow-[0_18px_40px_-14px_rgba(0,0,0,0.65)] sm:right-6"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#526BFF] text-white">
              <Check className="h-3.5 w-3.5" />
            </span>
            <span>Email copied: {PROFILE.contact.email}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
