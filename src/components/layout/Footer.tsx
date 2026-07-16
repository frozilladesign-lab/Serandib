import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, MapPinIcon, ArrowUpRight } from 'lucide-react';
import { usePreferences } from '../personalization/PreferencesContext';

export function Footer() {
  const { t } = usePreferences();

  const exploreLinks = [
    { to: '/tours', label: t('footerAllTours') },
    { to: '/destinations', label: t('destinations') },
    { to: '/experiences', label: t('experiences') },
    { to: '/travel-guide', label: t('travelGuide') },
    { to: '/about', label: t('aboutUs') },
    { to: '/testimonials', label: t('testimonials') },
    { to: '/offers', label: t('offers') },
  ];
  const planLinks = [
    { to: '/trip-planner', label: t('tripPlanner') },
    { to: '/custom-tour', label: t('footerCustomTour') },
    { to: '/hotels', label: t('hotelsStays') },
    { to: '/transport', label: t('footerPrivateDriver') },
    { to: '/visa-requirements', label: t('footerVisaReq') },
    { to: '/faq', label: t('faq') },
  ];
  const destinationLinks = [
    { to: '/destinations/sigiriya', label: t('footerSigiriya') },
    { to: '/destinations/ella', label: t('footerElla') },
    { to: '/destinations/yala', label: t('footerYala') },
    { to: '/destinations/mirissa', label: t('footerMirissa') },
    { to: '/destinations/kandy', label: t('footerKandy') },
  ];

  const socials = [
    { href: 'https://www.instagram.com/serandib_tours?igsh=andvNTJzYmpxcW1t', Icon: InstagramIcon, label: 'Instagram' },
    { href: 'https://www.facebook.com/share/18de3Kkjz2/?mibextid=wwXIfr', Icon: FacebookIcon, label: 'Facebook' },
    { href: 'https://www.tiktok.com/@serandibtours?_r=1&_t=ZS-984C8xk5i4I', Icon: InstagramIcon, label: 'TikTok' },
  ];

  const LinkColumn = ({ title, links }: { title: string; links: { to: string; label: string }[] }) => (
    <div>
      <h4 className="text-accent text-xs font-semibold tracking-luxury uppercase mb-5">{title}</h4>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="group inline-flex items-center gap-1.5 text-white/70 hover:text-white transition-colors"
            >
              <span className="w-0 group-hover:w-4 h-px bg-accent transition-all duration-300" />
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-primary text-white">
      {/* ── CTA band ─────────────────────────────────────── */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-accent text-xs font-semibold tracking-luxury uppercase">
              {t('footerGetInTouch')}
            </span>
            <h2 className="font-heading font-semibold leading-[1.05] text-[2rem] md:text-5xl lg:text-[3.25rem] mt-4">
              {t('closingHeading')}
            </h2>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-accent text-ink rounded-full font-semibold hover:bg-gold-dark transition-colors"
          >
            {t('planMyTrip')} <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* ── Brand + link columns ─────────────────────────── */}
      <div className="container mx-auto px-4 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="inline-block bg-white rounded-xl p-2">
                <img src="/logo1.webp" alt="Serandib Journeys logo" className="h-11 w-auto object-contain" />
              </span>
              <span className="font-heading text-2xl font-semibold leading-tight">
                Serandib<br />Journeys
              </span>
            </Link>
            <p className="text-white/70 leading-relaxed text-sm mt-6 max-w-sm">{t('footerDesc')}</p>
            <div className="flex items-center gap-3 mt-7">
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-ink transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
              <a
                href="https://www.tiktok.com/@serandibjourneys"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-ink transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.25 8.25 0 0 0 4.83 1.56V6.79a4.85 4.85 0 0 1-1.06-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            <LinkColumn title={t('footerQuickLinks')} links={exploreLinks} />
            <LinkColumn title={t('footerPlanTrip')} links={planLinks} />
            <LinkColumn title={t('footerPopularDest')} links={destinationLinks} />
          </div>
        </div>
      </div>

      {/* ── Contact + newsletter band ────────────────────── */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact rows */}
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <MapPinIcon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Location</p>
                <p className="text-sm text-white/90">{t('footerLocation')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <PhoneIcon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Contact</p>
                <p className="text-sm text-white/90">+65 9391 0112 / +94 752 952 852</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MailIcon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Email</p>
                <p className="text-sm text-white/90 break-all">info@serandibjourneys.com</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <form className="lg:justify-self-end w-full lg:max-w-md" onSubmit={(e) => e.preventDefault()}>
            <p className="text-sm text-white/80 mb-3">{t('footerNewsletter')}</p>
            <div className="flex items-center border border-white/20 rounded-full p-1 focus-within:border-accent transition-colors">
              <input
                type="email"
                placeholder={t('footerEmailPlaceholder')}
                className="bg-transparent text-white placeholder:text-white/50 px-5 py-2.5 w-full focus:outline-none text-sm"
              />
              <button
                type="submit"
                className="shrink-0 bg-accent text-ink px-6 py-2.5 rounded-full font-semibold hover:bg-gold-dark transition-colors text-sm"
              >
                {t('footerNewsletterJoin')}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ── Legal bar ────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} {t('footerCopyright')}</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">{t('footerPrivacy')}</Link>
            <Link to="/terms" className="hover:text-white transition-colors">{t('footerTerms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
