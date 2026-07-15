import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { usePreferences } from '../personalization/PreferencesContext';

export function CuratedCollection() {
  const { t } = usePreferences();
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-primary text-white relative overflow-hidden">
      <div className="bg-wave-lines absolute inset-0"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-heading text-xl md:text-2xl font-semibold text-accent tabular-nums leading-none">04</span>
              <span className="h-4 w-px bg-accent/50" />
              <span className="text-[11px] md:text-xs tracking-luxury uppercase font-semibold text-accent">{t('curatedTag')}</span>
            </div>
            <h2 className="font-heading font-semibold text-white leading-[1.03] text-[2rem] md:text-5xl lg:text-[3.5rem] mb-6">{t('curatedHeading')}</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">{t('curatedP1')}</p>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">{t('curatedP2')}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/tours" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-ink rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lift">
                {t('curatedExploreLuxury')} <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/tours/category/honeymoon" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300">
                {t('curatedHoneymoon')}
              </Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lift h-64">
                <img src="/images/tours/charm-of-southern-coast/hero.avif" alt="Galle Fort coastline" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lift h-80">
                <img src="/images/tours/the-last-kingdom/gallery-3.jpg" alt="Peradeniya Botanical Garden" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="rounded-2xl overflow-hidden shadow-lift h-80">
                <img src="/images/tours/yala-safari/hero.jpg" alt="Yala safari" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lift h-64">
                <img src="/images/tours/the-last-kingdom/gallery-4.jpg" alt="Ayurvedic garden" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
