import React, { useEffect, useState, createContext, useContext } from 'react';

export type CurrencyCode = 'USD' | 'RUB' | 'LKR';
export type LanguageCode = 'en';

export interface CurrencyInfo {
  code: CurrencyCode;
  symbol: string;
  label: string;
  rateFromUsd: number;
}

export const CURRENCIES: Record<CurrencyCode, CurrencyInfo> = {
  USD: { code: 'USD', symbol: '$', label: 'US Dollar', rateFromUsd: 1 },
  RUB: { code: 'RUB', symbol: '₽', label: 'Russian Ruble', rateFromUsd: 95 },
  LKR: { code: 'LKR', symbol: 'Rs', label: 'Sri Lankan Rupee', rateFromUsd: 300 }
};

export interface LanguageInfo {
  code: LanguageCode;
  label: string;
  nativeLabel: string;
}

export const LANGUAGES: Record<LanguageCode, LanguageInfo> = {
  en: { code: 'en', label: 'English', nativeLabel: 'English' }
};

const translations: Record<LanguageCode, Record<string, string>> = {
  en: {
    // ── Navbar ──
    home: 'Home',
    tours: 'Tours',
    destinations: 'Destinations',
    experiences: 'Experiences',
    tripPlanner: 'Trip Planner',
    offers: 'Offers',
    hotelsStays: 'Hotels & Stays',
    travelGuide: 'Travel Guide',
    aboutUs: 'About Us',
    testimonials: 'Testimonials',
    faq: 'FAQ',
    planMyTrip: 'Plan My Trip',
    currency: 'Currency',
    language: 'Language',

    // ── Welcome modal ──
    welcomeTitle: 'Welcome to Serandib Journeys',
    welcomeSubtitle: 'Choose your currency to get started',
    selectCurrency: 'Select your currency',
    selectLanguage: 'Select your language',
    continue: 'Continue',

    // ── CinematicHero ──
    heroTag: 'Local Sri Lanka Travel Service',
    heroHeading: 'Explore the Beauty of Sri Lanka with Serandib Journeys',
    heroSub: 'Private excursions, wildlife safaris, cultural journeys, beach adventures, and custom tours across Sri Lanka with trusted local travel support.',
    heroExplore: 'View Tours',
    heroPlan: 'Plan My Journey',
    heroCountriesServed: 'Countries Served',
    heroFiveStarReviews: 'Five-Star Reviews',
    heroYearsExcellence: 'Years of Excellence',

    // ── FeaturedJourneys ──
    featuredTag: 'Our Tours',
    featuredHeading: 'Featured Journeys',
    featuredSub: 'Handpicked tours that showcase the very best of Sri Lanka — culture, wildlife, beaches, and adventure.',
    featuredViewAll: 'View All Tours',
    featuredExplore: 'Explore Journey',
    featuredDays: 'Days',
    featuredStops: 'Stops',
    contactForPrice: 'Contact for Price',

    // ── MoodExplorer ──
    moodTag: 'Discover Your Way',
    moodHeading: 'Explore Sri Lanka by Mood',
    moodSub: 'Every journey tells a story. Choose the experience that speaks to your soul.',
    moodCustom: 'Create Custom Journey',
    moodRomance: 'Romance',
    moodAdventure: 'Adventure',
    moodBeach: 'Beach Bliss',
    moodCulture: 'Culture',
    moodWildlife: 'Wildlife',
    moodTea: 'Tea Country',
    moodWellness: 'Wellness',
    moodHidden: 'Hidden Gems',

    // ── SignatureExperiences ──
    sigTag: 'Unforgettable Moments',
    sigHeading: 'Signature Experiences',
    sigSub: 'Immerse yourself in the authentic culture, wildlife, and traditions that make Sri Lanka extraordinary.',
    sigDiscoverAll: 'Discover All Experiences',
    sigSafariTitle: 'Safari in Yala',
    sigSafariSub: 'Wildlife Encounters',
    sigTeaTitle: 'Tea Plantation Tour',
    sigTeaSub: 'Hill Country Heritage',
    sigTempleTitle: 'Temple of the Tooth',
    sigTempleSub: 'Sacred Traditions',
    sigFishingTitle: 'Ocean Fishing',
    sigFishingSub: 'Coastal Traditions',

    // ── CuratedCollection ──
    curatedTag: 'Curated for You',
    curatedHeading: 'Our Tour Collection',
    curatedP1: 'Discover our handpicked selection of private excursions, wildlife safaris, cultural journeys, and beach adventures across Sri Lanka.',
    curatedP2: 'From ancient rock fortresses to tropical rainforests, every experience is crafted to give you the authentic Sri Lanka.',
    curatedExploreLuxury: 'Explore Tours',
    curatedHoneymoon: 'Honeymoon Journeys',

    // ── SeasonalInspirations ──
    seasonTag: 'When to Visit',
    seasonHeading: 'Seasonal Inspirations',
    seasonSub: 'Sri Lanka is a year-round destination. Discover the best time to visit based on your interests and travel style.',
    seasonGuide: 'Complete Travel Guide',
    season1Period: 'December - March',
    season1Title: 'Peak Season',
    season1Desc: 'Perfect weather for beaches, wildlife safaris, and cultural exploration. Ideal for first-time visitors.',
    season2Period: 'April - May',
    season2Title: 'Shoulder Season',
    season2Desc: 'Fewer crowds, lush landscapes, and great value. Perfect for tea country and hill stations.',
    season3Period: 'June - September',
    season3Title: 'East Coast Season',
    season3Desc: 'Pristine beaches on the east coast, calm seas, and excellent diving conditions.',
    season4Period: 'October - November',
    season4Title: 'Green Season',
    season4Desc: 'Dramatic landscapes, waterfalls at full flow, and incredible photography opportunities.',

    // ── LuxuryStays ──
    staysTag: 'Where You\'ll Stay',
    staysHeading: 'Accommodation',
    staysSub: 'Boutique hotels, heritage bungalows, and exclusive resorts handpicked for their exceptional service and unique character.',
    staysExploreAll: 'Explore All Accommodations',
    staysBeachResort: 'Beach Resort',
    staysHeritageBungalow: 'Heritage Bungalow',
    staysSafariLodge: 'Safari Lodge',
    staysBoutiqueResort: 'Boutique Resort',

    // ── TravellerStories ──
    storiesTag: 'Guest Experiences',
    storiesHeading: 'Traveller Stories',
    storiesSub: 'Hear from the travellers who\'ve experienced the magic of Sri Lanka with Serandib Journeys.',
    storiesReadMore: 'Read More Stories',
    testimonial1: 'Serandib Journeys transformed our honeymoon into a once-in-a-lifetime journey. Every detail was perfection, from the private safari to the beautiful beaches. We\'ll treasure these memories forever.',
    testimonial1Author: 'Sarah & Michael',
    testimonial1Location: 'London, UK',
    testimonial2: 'The attention to detail and local knowledge made all the difference. Our guide felt like family, and the experiences were authentic and deeply moving.',
    testimonial2Author: 'Emma Thompson',
    testimonial2Location: 'Sydney, Australia',
    testimonial3: 'From the tea plantations to the ancient temples, every moment exceeded our expectations. The seamless planning and genuine hospitality made this our best vacation ever.',
    testimonial3Author: 'David Chen',
    testimonial3Location: 'Singapore',

    // ── JourneyBuilderTeaser ──
    builderHeading: 'Design Your Perfect Journey',
    builderSub: 'Our travel experts work together to craft a custom itinerary tailored to your dreams, budget, and travel style.',
    builderFlexDates: 'Flexible Dates',
    builderFlexDatesSub: 'Choose your ideal travel window',
    builderCustomRoutes: 'Custom Routes',
    builderCustomRoutesSub: 'Explore at your own pace',
    builderExpertGuidance: 'Expert Guidance',
    builderExpertGuidanceSub: 'Personal travel consultants',
    builderStartPlanning: 'Start Planning',
    builderCustomTour: 'Custom Tour Builder',

    // ── EditorialJournal ──
    journalTag: 'Stories & Insights',
    journalHeading: 'Travel Journal',
    journalSub: 'Insider guides, cultural insights, and travel inspiration from our team of Sri Lanka experts.',
    journalExplore: 'Explore Travel Guide',
    journalReadArticle: 'Read Article',
    article1Title: '10 Hidden Temples You Must Visit',
    article1Category: 'Culture',
    article1Excerpt: 'Discover ancient sacred sites beyond the tourist trail, where spirituality and history converge.',
    article1Time: '8 min read',
    article2Title: 'The Ultimate Sri Lankan Food Guide',
    article2Category: 'Cuisine',
    article2Excerpt: 'From street food to fine dining, explore the flavors that make Sri Lankan cuisine unforgettable.',
    article2Time: '12 min read',
    article3Title: 'Leopard Spotting in Yala National Park',
    article3Category: 'Wildlife',
    article3Excerpt: 'Expert tips for maximizing your chances of encountering the elusive Sri Lankan leopard.',
    article3Time: '6 min read',

    // ── ClosingCTA ──
    closingHeading: 'Your Sri Lankan Journey Awaits',
    closingSub: 'Let our expert travel consultants craft a bespoke itinerary that brings your travel dreams to life.',
    closingStartPlanning: 'Start Planning',
    closingAIPlanner: 'AI Trip Planner',
    closingTrust: 'Trusted by travellers from over 40 countries • 5,000+ five-star reviews',

    // ── WhyUs ──
    whyTag: 'Why Serandib Journeys',
    whyHeading: 'Why Choose Us',
    whySub: 'We combine local knowledge and flexible planning to create unforgettable Sri Lankan experiences.',
    whyPrivateTitle: 'Private & Flexible',
    whyPrivateDesc: 'Travel at your own pace with flexible routes and personalized planning.',
    whyLocalTitle: 'Local Knowledge',
    whyLocalDesc: 'We know the island — the routes, the hidden spots, the best time to visit each destination.',
    whySafeTitle: 'Safe & Reliable',
    whySafeDesc: 'Comfortable private transport, friendly local support, and easy WhatsApp communication throughout.',
    whyMemTitle: 'Memorable Experiences',
    whyMemDesc: 'From arrival to departure, we help you experience the best of Sri Lanka in a comfortable and meaningful way.',
    whyEasyTitle: 'Easy Communication',
    whyEasyDesc: 'Contact us through WhatsApp or social media for quick tour planning and trip support.',
    whyComfortTitle: 'Comfortable Transport',
    whyComfortDesc: 'Enjoy private transport options suitable for couples, families, and small groups.',

    // ── Footer ──
    footerDesc: 'Discover Sri Lanka with Comfort, Care & Local Experience. Private excursions, wildlife safaris, cultural journeys, and custom tours across the island.',
    footerQuickLinks: 'Quick Links',
    footerPlanTrip: 'Plan Your Trip',
    footerPopularDest: 'Popular Destinations',
    footerGetInTouch: 'Get in Touch',
    footerNewsletter: 'Subscribe to our newsletter for travel inspiration.',
    footerNewsletterJoin: 'Join',
    footerEmailPlaceholder: 'Your email address',
    footerAllTours: 'All Tour Packages',
    footerCustomTour: 'Custom Tour Builder',
    footerPrivateDriver: 'Private Driver',
    footerVisaReq: 'Visa & Requirements',
    footerSigiriya: 'Sigiriya Rock Fortress',
    footerElla: 'Ella & Hill Country',
    footerYala: 'Yala National Park',
    footerMirissa: 'Mirissa Beaches',
    footerKandy: 'Kandy Cultural City',
    footerLocation: 'Sri Lanka',
    footerCopyright: 'Serandib Journeys. All rights reserved.',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms of Service',

    // ── About ──
    aboutTitle: 'About Serandib Journeys',
    aboutSubtitle: 'Discover Sri Lanka with Comfort, Care & Local Experience.',
    aboutStoryHeading: 'A Local Travel Service You Can Trust',
    aboutP1: 'Serandib Journeys is a local travel service offering carefully planned excursions and private tour experiences around the island. From ancient temples and mountain landscapes to wildlife parks, beaches, waterfalls, tea plantations, and ocean adventures, we help travelers experience the best of Sri Lanka in a comfortable and memorable way.',
    aboutP2: 'Whether you want a short one-day trip, a two-day island adventure, a private city tour, or a fully customized experience, Serandib Journeys can help you plan the right journey based on your time, travel style, and interests.',
    aboutP3: 'We offer private tours, one-day excursions, two-day excursions, individual custom tours, airport transfers, wildlife safaris, whale watching, surfing, cultural and heritage tours, nature and rainforest tours, and private transport with driver support across Sri Lanka.',
    aboutCoreValues: 'Our Core Values',
    aboutCoreValuesSub: 'The principles that guide every journey we plan.',
    aboutVal1Title: 'Private & Flexible',
    aboutVal1Desc: 'Travel at your own pace with flexible routes and personalized planning for your unique trip.',
    aboutVal2Title: 'Local Knowledge',
    aboutVal2Desc: 'We know the island — the routes, the hidden spots, the best time to visit each destination.',
    aboutVal3Title: 'Safe & Reliable',
    aboutVal3Desc: 'Comfortable private transport, friendly local support, and easy WhatsApp communication throughout your journey.',
    aboutVal4Title: 'Memorable Experiences',
    aboutVal4Desc: 'From arrival to departure, we help you experience the best of Sri Lanka in a comfortable and meaningful way.',

    // ── FAQ ──
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Everything you need to know before your Sri Lankan journey.',
    faqCat1: 'Tours & Booking',
    faqCat2: 'Activities & Experiences',
    faqCat3: 'Pricing & Inclusions',
    faqQ1: 'Do you offer private tours?',
    faqA1: 'Yes. Serandib Journeys offers private and flexible tour options for individuals, couples, families, and small groups.',
    faqQ2: 'Can I customize my excursion?',
    faqA2: 'Yes. Routes and activities can be adjusted depending on your time, hotel location, and availability. Contact us through WhatsApp to plan your custom tour.',
    faqQ3: 'How can I book a tour?',
    faqA3: 'You can contact Serandib Journeys through WhatsApp, TikTok, Facebook, or Instagram. Share your travel date, pickup location, number of travelers, and preferred tour, and we will confirm your plan.',
    faqQ4: 'Is hotel pickup available?',
    faqA4: 'Yes. Hotel pickup can be arranged depending on your location anywhere in Sri Lanka.',
    faqQ5: 'Can you arrange safari tours?',
    faqA5: 'Yes. Yala National Park jeep safari and other wildlife experiences including elephant encounters can be arranged as part of your tour.',
    faqQ6: 'Can you arrange ocean activities?',
    faqA6: 'Yes. Whale watching, snorkeling, diving, ocean fishing, surfing, and yacht trips can be arranged depending on weather and seasonal availability.',
    faqQ7: 'Do you offer airport pickup?',
    faqA7: 'Yes. Airport pickup and drop-off can be arranged from any Sri Lanka airport to your hotel or destination.',
    faqQ8: 'Are entrance tickets included in the tour price?',
    faqA8: 'Entrance tickets, activity fees, safari jeep fees, and boat charges depend on the selected package and final quotation. Please confirm with us when booking.',
    faqQ9: 'What transport options are available?',
    faqA9: 'We offer private car, SUV, van, and mini coach options depending on group size. All vehicles come with a private driver for your comfort and convenience.',
    faqQ10: 'Can you arrange a fully custom tour?',
    faqA10: "Yes. If you can't find the exact tour you want, we can create a fully custom travel plan based on your arrival date, hotel location, travel duration, and preferred experiences.",
    faqStillQuestion: 'Still have questions?',
    faqStillSub: 'Our travel experts are here to help. Reach out and we\'ll get back to you within hours.',
    faqContactUs: 'Contact Us',

    // ── Contact ──
    contactTitle: 'Plan Your Sri Lanka Tour with Serandib Journeys',
    contactSubtitle: 'Ready to explore Sri Lanka? Send us your travel date, pickup location, number of travelers, and preferred tour.',
    contactHeading: 'Contact Serandib Journeys',
    contactDesc: 'Reach us through WhatsApp for quick tour planning and trip support. Share your travel date, pickup location, number of travelers, and preferred tour and we will help you plan the right experience.',
    contactLocation: 'Location',
    contactPhone: 'Phone / WhatsApp',
    contactEmail: 'Email',
    contactAvailability: 'Availability',
    contactAvailabilityVal: 'Available 7 days a week',
    contactFormHeading: 'Send an Inquiry',
    contactName: 'Name *',
    contactWhatsApp: 'WhatsApp Number *',
    contactEmailField: 'Email Address',
    contactDate: 'Travel Date *',
    contactPickup: 'Pickup Location *',
    contactPickupPH: 'Hotel name or city',
    contactTravelers: 'Number of Travelers *',
    contactTour: 'Selected Tour / Activity',
    contactSelectTour: 'Select a tour or activity...',
    contactTwoDayLabel: 'Two-Day Excursions',
    contactOneDayLabel: 'One-Day Excursions',
    contactIndividualLabel: 'Individual Excursions',
    contactAirport: 'Airport Transfer',
    contactCustom: 'Custom Tour',
    contactMessage: 'Message',
    contactMessagePH: 'Tell us about your travel plans, preferences, or any questions...',
    contactSend: 'Send Inquiry',
    contactWhatsAppBtn: 'Chat on WhatsApp',
    contactSuccessTitle: 'Message Sent Successfully!',
    contactSuccessDesc: 'Thank you for reaching out. One of our travel experts will get back to you within 24 hours.',

    // ── Tours page ──
    toursTitle: 'All Tours & Excursions',
    toursSubtitle: 'Explore our full range of private tours, day excursions, safaris, and custom experiences across Sri Lanka.',
    toursFilterAll: 'All',
    toursDurationLabel: 'Duration',
    toursRegionLabel: 'Region',
    toursActivityLabel: 'Activity',
    toursNoResults: 'No tours found matching your filters.',
    toursFrom: 'From',
    toursPP: '/ pp',
    toursContactPrice: 'Contact for Price',
    toursViewDetails: 'View Details',
    toursBookNow: 'Book Now',
  }
};

interface PreferencesContextType {
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
  language: LanguageCode;
  setLanguage: (l: LanguageCode) => void;
  hasChosenPreferences: boolean;
  setHasChosenPreferences: (v: boolean) => void;
  formatPrice: (usdAmount: number) => string;
  t: (key: string) => string;
}

const PreferencesContext = createContext<PreferencesContextType | undefined>(
  undefined
);

export function PreferencesProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [currency, setCurrencyState] = useState<CurrencyCode>('USD');
  const [language, setLanguageState] = useState<LanguageCode>('en');
  const [hasChosenPreferences, setHasChosenPreferencesState] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedCurrency = localStorage.getItem('serandib_currency') as CurrencyCode | null;
      const storedLanguage = localStorage.getItem('serandib_language') as LanguageCode | null;
      const storedChosen = localStorage.getItem('serandib_prefs_chosen');
      if (storedCurrency && CURRENCIES[storedCurrency]) setCurrencyState(storedCurrency);
      if (storedLanguage && LANGUAGES[storedLanguage]) setLanguageState(storedLanguage);
      setHasChosenPreferencesState(storedChosen === 'true');
    } catch (e) {
      console.error('Failed to load preferences', e);
    } finally {
      setLoaded(true);
    }
  }, []);

  const setCurrency = (c: CurrencyCode) => {
    setCurrencyState(c);
    localStorage.setItem('serandib_currency', c);
  };

  const setLanguage = (l: LanguageCode) => {
    setLanguageState(l);
    localStorage.setItem('serandib_language', l);
  };

  const setHasChosenPreferences = (v: boolean) => {
    setHasChosenPreferencesState(v);
    localStorage.setItem('serandib_prefs_chosen', String(v));
  };

  const formatPrice = (usdAmount: number) => {
    const info = CURRENCIES[currency];
    if (usdAmount === 0) return translations[language]['contactForPrice'] ?? 'Contact for Price';
    const converted = Math.round(usdAmount * info.rateFromUsd);
    return `${info.symbol}${converted.toLocaleString()}`;
  };

  const t = (key: string) => translations[language][key] ?? translations['en'][key] ?? key;

  if (!loaded) return null;

  return (
    <PreferencesContext.Provider
      value={{
        currency, setCurrency,
        language, setLanguage,
        hasChosenPreferences, setHasChosenPreferences,
        formatPrice, t
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (context === undefined) {
    throw new Error('usePreferences must be used within a PreferencesProvider');
  }
  return context;
}
