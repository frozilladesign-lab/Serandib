import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { usePreferences } from '../personalization/PreferencesContext';
import { SectionHeading } from '../common/SectionHeading';

export function SignatureExperiences() {
  const { t } = usePreferences();

  const experiences = [
    { id: 1, titleKey: 'sigSafariTitle', subtitleKey: 'sigSafariSub', image: '/images/tours/yala-safari/gallery-2.jpg', link: '/experiences' },
    { id: 2, titleKey: 'sigTeaTitle', subtitleKey: 'sigTeaSub', image: '/images/tours/the-last-kingdom/gallery-3.jpg', link: '/experiences' },
    { id: 3, titleKey: 'sigTempleTitle', subtitleKey: 'sigTempleSub', image: '/images/tours/the-last-kingdom/hero.jpg', link: '/experiences' },
    { id: 4, titleKey: 'sigFishingTitle', subtitleKey: 'sigFishingSub', image: '/images/tours/ocean-fishing/hero.jpg', link: '/experiences' },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-sand relative overflow-hidden">
      <div className="bg-leaf-outline absolute inset-0"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeading index="03" className="mb-12 md:mb-16" eyebrow={t('sigTag')} title={t('sigHeading')} subtitle={t('sigSub')} />

        {/* Mobile / tablet: simple 2x2 grid */}
        <div className="grid grid-cols-2 gap-4 lg:hidden">
          {experiences.map((exp, index) => (
            <motion.div key={exp.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }}>
              <Link to={exp.link} className="block relative rounded-2xl overflow-hidden shadow-card h-48 sm:h-64">
                <img src={exp.image} alt={t(exp.titleKey)} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-accent text-xs font-semibold mb-1 tracking-luxury uppercase">{t(exp.subtitleKey)}</p>
                  <h3 className="font-heading text-base md:text-xl font-semibold leading-tight">{t(exp.titleKey)}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Desktop: overlapping editorial layout */}
        <div className="hidden lg:block relative h-[600px] mb-8">
          {experiences.map((exp, index) => (
            <motion.div key={exp.id} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}
              className="absolute group" style={{ left: `${index * 18}%`, top: `${index * 8}%`, zIndex: experiences.length - index }}>
              <Link to={exp.link}>
                <div className="w-[360px] h-[500px] rounded-2xl overflow-hidden shadow-lift hover:shadow-glass-strong transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                  <img src={exp.image} alt={t(exp.titleKey)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-accent text-sm font-semibold mb-2 tracking-luxury uppercase">{t(exp.subtitleKey)}</p>
                    <h3 className="font-heading text-3xl font-semibold">{t(exp.titleKey)}</h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="text-center mt-8 lg:mt-24">
          <Link to="/experiences" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-card hover:shadow-lift">
            {t('sigDiscoverAll')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
