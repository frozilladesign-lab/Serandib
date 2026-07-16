import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { usePreferences } from '../personalization/PreferencesContext';
import { SectionHeading } from '../common/SectionHeading';

export function SignatureExperiences() {
  const { t } = usePreferences();

  const experiences = [
    { id: 1, titleKey: 'sigSafariTitle', subtitleKey: 'sigSafariSub', image: '/images/tours/yala-safari/gallery-2.jpg', link: '/experiences' },
    { id: 2, titleKey: 'sigTeaTitle', subtitleKey: 'sigTeaSub', image: '/images/places/nuwara-eliya.jpg', link: '/experiences' },
    { id: 3, titleKey: 'sigTempleTitle', subtitleKey: 'sigTempleSub', image: '/images/tours/the-last-kingdom/hero.jpg', link: '/experiences' },
    { id: 4, titleKey: 'sigFishingTitle', subtitleKey: 'sigFishingSub', image: '/images/tours/ocean-fishing/hero.jpg', link: '/experiences' },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-sand relative overflow-hidden">
      <div className="bg-leaf-outline absolute inset-0"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeading index="03" className="mb-12 md:mb-16" eyebrow={t('sigTag')} title={t('sigHeading')} subtitle={t('sigSub')} />

        {/* Caption-below-image cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group h-full"
            >
              <Link
                to={exp.link}
                className="flex flex-col h-full bg-surface rounded-2xl overflow-hidden border border-hairline shadow-card hover:shadow-lift hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img
                    src={exp.image}
                    alt={t(exp.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm text-primary font-heading text-sm font-semibold flex items-center justify-center shadow-sm">
                    0{exp.id}
                  </span>
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <p className="text-accent text-[11px] font-semibold mb-1.5 tracking-luxury uppercase">
                    {t(exp.subtitleKey)}
                  </p>
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-primary leading-snug mb-4">
                    {t(exp.titleKey)}
                  </h3>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-secondary text-sm font-semibold group-hover:gap-3 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="text-center mt-12">
          <Link to="/experiences" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-card hover:shadow-lift">
            {t('sigDiscoverAll')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
