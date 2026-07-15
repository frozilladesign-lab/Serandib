export type Region =
'South Coast' |
'Hill Country' |
'Cultural Triangle' |
'East Coast' |
'Multiple Regions';
export type Activity =
'Cultural' |
'Wildlife' |
'Beach' |
'Adventure' |
'Luxury' |
'Honeymoon' |
'Family';

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  image?: string;
}

export interface Hotel {
  name: string;
  image: string;
  rating: number;
  amenities: string[];
  location: string;
}

export interface Tour {
  slug: string;
  title: string;
  subtitle?: string;
  durationDays: number;
  price: number;
  rating: number;
  reviewCount: number;
  heroImage: string;
  galleryImages: string[];
  region: Region;
  activityTags: Activity[];
  shortDescription: string;
  highlights: string[];
  included: string[];
  excluded: string[];
  itinerary: ItineraryDay[];
  hotels: Hotel[];
}

/* Local tour photos (reused from the Serandib Journeys image library) */
const KINGDOM_HERO = '/images/tours/the-last-kingdom/hero.jpg';
const KINGDOM_G1 = '/images/tours/the-last-kingdom/gallery-1.jpg';
const KINGDOM_G2 = '/images/tours/the-last-kingdom/gallery-2.jpg';
const KINGDOM_G3 = '/images/tours/the-last-kingdom/gallery-3.jpg';

const MISTY_HERO = '/images/tours/misty-mountains/hero.jpg';
const MISTY_G1 = '/images/tours/misty-mountains/gallery-1.jpg';
const MISTY_G2 = '/images/tours/misty-mountains/gallery-2.jpg';

const YALA_HERO = '/images/tours/yala-safari/hero.jpg';
const MISTY_YALA_HERO = '/images/tours/misty-mountains-yala-safari/hero.jpg';

const GALLE_HERO = '/images/tours/charm-of-southern-coast/hero.avif';

const WHALE_HERO = '/images/tours/whale-watching/hero.avif';
const WHALE_G1 = '/images/tours/whale-watching/gallery-1.avif';

const COLOMBO_HERO = '/images/tours/colombo-city-tour/hero.jpg';
const PEARL_HERO = '/images/tours/pearl-of-sri-lanka/hero.jpg';
const WONDER_HERO = '/images/tours/wonder-of-sri-lanka/hero.jpg';
const FISHING_HERO = '/images/tours/ocean-fishing/hero.jpg';
const FISHING_G1 = '/images/tours/ocean-fishing/gallery-1.jpg';

export const tours: Tour[] = [
{
  slug: 'sri-lanka-14-day-grand-tour',
  title: '14-Day Sri Lanka Grand Tour',
  subtitle: '14-дневный тур по Шри-Ланке',
  durationDays: 14,
  price: 0,
  rating: 5,
  reviewCount: 0,
  heroImage: KINGDOM_HERO,
  galleryImages: [GALLE_HERO, YALA_HERO, MISTY_HERO, MISTY_G1, WHALE_HERO, KINGDOM_G1],
  region: 'Multiple Regions',
  activityTags: ['Cultural', 'Wildlife', 'Adventure', 'Beach'],
  shortDescription:
  'A comprehensive 14-day island journey (16–29 August 2026) — from the beaches of Negombo to Galle, a Yala leopard safari, Ella’s Nine Arch Bridge, the hill-country train, Nuwara Eliya, Kandy, Sigiriya and the East Coast beaches of Trincomalee.',
  highlights: [
  'Madu River safari & sea turtle conservation project',
  'Galle Fort',
  'Coconut Tree Hill & Weligama stilt fishermen',
  'Yala leopard safari',
  'Ravana Waterfall, Ravana Cave & Nine Arch Bridge',
  'Ella Rock & Little Adam’s Peak',
  'Ella to Nanu Oya scenic mountain train',
  'Tea plantations & Gregory Lake',
  'Ramboda Waterfall & Ambuluwawa Tower',
  'Kandy cultural dance & Temple of the Sacred Tooth Relic',
  'Dambulla Cave Temple & Sigiriya Lion Rock',
  'Whale watching, snorkeling & scuba diving in Trincomalee',
  ],
  included: [
  'Airport pickup and drop-off',
  'Private transport between all destinations',
  'Ella to Nanu Oya scenic train journey',
  'Guided sightseeing across all 14 days',
  ],
  excluded: [
  'Entrance tickets & safari permits (quoted separately)',
  'Accommodation (hotel category arranged on request)',
  'Meals (seafood experiences payable directly)',
  'Personal expenses, tips and gratuities',
  ],
  itinerary: [
  {
    day: 1,
    title: 'Airport to Negombo',
    description:
    '16 Aug 2026 · Airport → Negombo. Welcome pickup from the airport and transfer to Negombo. Rest after your flight and enjoy fresh seafood and the beach. Overnight in Negombo.',
    image: FISHING_HERO,
  },
  {
    day: 2,
    title: 'Negombo to Galle',
    description:
    '17 Aug 2026 · Negombo → Galle. Drive south with a Madu River boat safari and a sea turtle conservation project on the way, then explore the ramparts of Galle Fort in the evening. Overnight in Galle.',
    image: GALLE_HERO,
  },
  {
    day: 3,
    title: 'Galle to Yala',
    description:
    '18 Aug 2026 · Galle → Yala. Continue toward Yala, stopping at Coconut Tree Hill, Weligama fish point for lunch, and the traditional stilt fishermen along the coast. Overnight near Yala.',
    image: FISHING_G1,
  },
  {
    day: 4,
    title: 'Yala Safari',
    description:
    '19 Aug 2026 · Yala. A half-day or full-day safari in Yala National Park — the best place in Sri Lanka to spot leopards, alongside elephants, crocodiles and abundant birdlife. Overnight near Yala.',
    image: YALA_HERO,
  },
  {
    day: 5,
    title: 'Yala to Ella',
    description:
    '20 Aug 2026 · Yala → Ella. Head into the hills to Ella, visiting Ravana Waterfall, Ravana Cave and the iconic Nine Arch Bridge, then unwind at a chilled café in the evening. Overnight in Ella.',
    image: MISTY_HERO,
  },
  {
    day: 6,
    title: 'Ella Sightseeing',
    description:
    '21 Aug 2026 · Ella. A full day exploring Ella — hike Ella Rock and Little Adam’s Peak, try the Ravana zipline, and relax at the Ravana Pool Club. Overnight in Ella.',
    image: MISTY_G1,
  },
  {
    day: 7,
    title: 'Ella to Nuwara Eliya',
    description:
    '22 Aug 2026 · Ella → Nanu Oya → Nuwara Eliya. Board the scenic morning train from Ella to Nanu Oya, then continue to Nuwara Eliya. Visit a tea plantation and enjoy water activities at Gregory Lake. Overnight in Nuwara Eliya.',
    image: MISTY_G2,
  },
  {
    day: 8,
    title: 'Nuwara Eliya to Kandy',
    description:
    '23 Aug 2026 · Nuwara Eliya → Kandy. Drive to Kandy with stops at a world-class tea factory, Ramboda Waterfall and Ambuluwawa Tower. Watch the 5:00 pm Kandy cultural dance and visit the Temple of the Sacred Tooth Relic. Overnight in Kandy.',
    image: PEARL_HERO,
  },
  {
    day: 9,
    title: 'Kandy to Sigiriya',
    description:
    '24 Aug 2026 · Kandy → Dambulla → Sigiriya. Travel to Sigiriya via Dambulla, visiting a batik workshop, spice garden, wood carvings and the Dambulla Cave Temple. Overnight in Sigiriya.',
    image: KINGDOM_G2,
  },
  {
    day: 10,
    title: 'Sigiriya Sightseeing',
    description:
    '25 Aug 2026 · Sigiriya. Climb Pidurangala Rock at dawn, then choose an optional Habarana, Minneriya or Kawdulla safari (special for elephants) or a village safari. In the evening, enjoy a relaxing Ayurvedic spa and massage. Overnight in Sigiriya.',
    image: MISTY_YALA_HERO,
  },
  {
    day: 11,
    title: 'Sigiriya to Trincomalee',
    description:
    '26 Aug 2026 · Sigiriya → Trincomalee. Morning visit to the Sigiriya Lion Rock fortress, then transfer to the East Coast at Trincomalee. Overnight in Trincomalee.',
    image: KINGDOM_G3,
  },
  {
    day: 12,
    title: 'Trincomalee Activities',
    description:
    '27 Aug 2026 · Trincomalee. Morning whale watching off Trincomalee, followed by snorkeling, scuba diving and fresh seafood by the sea. Overnight in Trincomalee.',
    image: WHALE_HERO,
  },
  {
    day: 13,
    title: 'Leisure in Trincomalee',
    description:
    '28 Aug 2026 · Trincomalee. A leisure day to relax on the beach at your own pace.',
    image: WHALE_G1,
  },
  {
    day: 14,
    title: 'Airport Transfer & Departure',
    description:
    '29 Aug 2026 · Trincomalee → Airport. Transfer back to the airport for your departure. End of the tour — thank you for travelling with us!',
    image: COLOMBO_HERO,
  },
  ],
  hotels: [],
},
{
  slug: 'sri-lanka-9-day-highlights',
  title: '9-Day Sri Lanka Highlights',
  subtitle: '9-дневный тур по Шри-Ланке',
  durationDays: 9,
  price: 0,
  rating: 5,
  reviewCount: 0,
  heroImage: WONDER_HERO,
  galleryImages: [KINGDOM_HERO, MISTY_HERO, YALA_HERO, WHALE_HERO, GALLE_HERO, COLOMBO_HERO],
  region: 'Multiple Regions',
  activityTags: ['Cultural', 'Wildlife', 'Beach', 'Family'],
  shortDescription:
  'Nine days and eight nights combining ancient cities, hill-country scenery, a Yala safari and southern beaches — from Anuradhapura and Sigiriya to the Nanu Oya–Ella scenic train, Yala, Mirissa and Galle Fort. 3-star hotels, twin sharing, breakfast included.',
  highlights: [
  'Anuradhapura & Sigiriya Rock Fortress',
  'Pidurangala & a local village tour',
  'Dambulla Cave Temple & spice garden',
  'Kandy & a tea plantation',
  'Nanu Oya to Ella second-class scenic train',
  'Nine Arch Bridge, Little Adam’s Peak & Ravana Falls',
  'Yala National Park safari with private jeep',
  'Mirissa beaches & optional whale watching',
  'Galle Fort',
  ],
  included: [
  '8 nights in 3-star hotels, twin sharing',
  'Daily breakfast',
  'Private air-conditioned vehicle throughout',
  'English-speaking guide (other languages on request)',
  'Second-class scenic train ticket (Nanu Oya → Ella)',
  'Yala National Park safari with private jeep & park permit',
  'Entrance fees for the main attractions',
  'Airport arrival & departure transfers',
  ],
  excluded: [
  'Airfare & visa fees',
  'Lunch & dinner',
  'Whale watching & hot-air balloon experiences',
  'Spa treatments',
  'Personal expenses, tips & gratuities',
  ],
  itinerary: [
  {
    day: 1,
    title: 'Arrival, Anuradhapura & Sigiriya',
    description:
    'Colombo → Anuradhapura → Sigiriya. Arrive in Colombo and travel to the ancient city of Anuradhapura, then continue to Sigiriya for an evening at leisure. Overnight in Sigiriya.',
    image: WONDER_HERO,
  },
  {
    day: 2,
    title: 'Sigiriya & Pidurangala',
    description:
    'Sigiriya. Climb the Sigiriya Rock Fortress, enjoy a local village tour, and visit Pidurangala. Overnight in Sigiriya.',
    image: KINGDOM_HERO,
  },
  {
    day: 3,
    title: 'Dambulla to Kandy',
    description:
    'Sigiriya → Dambulla → Kandy. Visit the Dambulla Cave Temple and a spice garden, then travel to Kandy and check in. Overnight in Kandy.',
    image: KINGDOM_G1,
  },
  {
    day: 4,
    title: 'Kandy, Nuwara Eliya & Scenic Train',
    description:
    'Kandy → Nuwara Eliya → Nanu Oya → Ella. Depart Kandy and visit a tea plantation, with an optional early-morning Nuwara Eliya stop (around 5:00 am). Take the scenic second-class train from Nanu Oya to Ella. Overnight in Ella.',
    image: MISTY_HERO,
  },
  {
    day: 5,
    title: 'Ella to Yala',
    description:
    'Ella → Yala. Visit the Nine Arch Bridge, hike Little Adam’s Peak and stop at Ravana Falls before travelling to Yala. Overnight near Yala.',
    image: MISTY_G1,
  },
  {
    day: 6,
    title: 'Yala Safari & Mirissa',
    description:
    'Yala → Mirissa. Morning safari in Yala National Park by private jeep, then transfer to the southern beach town of Mirissa for some beach relaxation. Overnight in Mirissa.',
    image: YALA_HERO,
  },
  {
    day: 7,
    title: 'Mirissa Leisure Day',
    description:
    'Mirissa. A free day for beach relaxation, with optional whale watching. Overnight in Mirissa.',
    image: WHALE_HERO,
  },
  {
    day: 8,
    title: 'Mirissa to Galle',
    description:
    'Mirissa → Galle. Travel along the coast to Galle and explore the historic Galle Fort. Overnight in Galle.',
    image: GALLE_HERO,
  },
  {
    day: 9,
    title: 'Colombo Transfer & Departure',
    description:
    'Galle → Colombo → Airport. Transfer to Colombo and onward to the airport for departure, timed to your flight.',
    image: COLOMBO_HERO,
  },
  ],
  hotels: [],
},
];

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}
