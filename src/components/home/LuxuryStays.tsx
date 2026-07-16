import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Star } from 'lucide-react';
import { usePreferences } from '../personalization/PreferencesContext';
import { SectionHeading } from '../common/SectionHeading';

export function LuxuryStays() {
  const { t } = usePreferences();
  const hotels = [
    { id: 1, name: 'Galle Fort', location: 'Galle', categoryKey: 'staysBeachResort', image: '/images/tours/charm-of-southern-coast/hero.avif', rating: 5 },
    { id: 2, name: 'Ceylon Tea Trails', location: 'Hatton', categoryKey: 'staysHeritageBungalow', image: '/images/places/nuwara-eliya.jpg', rating: 5 },
    { id: 3, name: 'Wild Coast Tented Lodge', location: 'Yala', categoryKey: 'staysSafariLodge', image: '/images/tours/yala-safari/hero.jpg', rating: 5 },
    { id: 4, name: 'Sigiriya Rock', location: 'Sigiriya', categoryKey: 'staysBoutiqueResort', image: '/images/tours/majestic-island/hero.jpg', rating: 5 },
  ];
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="bg-wave-lines absolute inset-0"></div>
      <div className="relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading index="06" className="mb-10 md:mb-14" eyebrow={t('staysTag')} title={t('staysHeading')} subtitle={t('staysSub')} />
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide lg:hidden px-4 md:px-8">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="snap-start shrink-0 w-56">
              <div className="relative rounded-lg overflow-hidden border border-dark/10 shadow-sm h-72">
                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent"></div>
                <div className="absolute top-3 right-3 flex gap-0.5">
                  {[...Array(hotel.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-accent text-accent" />)}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-accent text-xs font-semibold mb-1 tracking-luxury uppercase">{t(hotel.categoryKey)}</p>
                  <h3 className="font-heading text-sm font-semibold mb-1">{hotel.name}</h3>
                  <p className="flex items-center gap-1 text-xs text-white/80"><MapPin className="w-3 h-3" />{hotel.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: 4-col grid */}
        <div className="hidden lg:grid grid-cols-4 gap-6 container mx-auto px-8">
          {hotels.map((hotel, index) => (
            <motion.div key={hotel.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="group">
              <div className="relative rounded-lg overflow-hidden border border-dark/10 shadow-sm hover:shadow-md hover:border-dark/20 transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent"></div>
                <div className="absolute top-4 right-4 flex gap-1">
                  {[...Array(hotel.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-accent text-xs font-semibold mb-2 tracking-luxury uppercase">{t(hotel.categoryKey)}</p>
                  <h3 className="font-heading text-xl font-semibold mb-2">{hotel.name}</h3>
                  <p className="flex items-center gap-1 text-sm text-white/90"><MapPin className="w-4 h-4" />{hotel.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 md:px-8 text-center mt-10">
          <Link to="/hotels" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-card hover:shadow-lift">
            {t('staysExploreAll')}
          </Link>
        </div>
      </div>
    </section>
  );
}
