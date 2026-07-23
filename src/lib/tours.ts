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
const YALA_G1 = '/images/tours/yala-safari/gallery-1.jpg';
const YALA_G2 = '/images/tours/yala-safari/gallery-2.jpg';
const YALA_G3 = '/images/tours/yala-safari/gallery-3.jpg';
const SINHARAJA_HERO = '/images/tours/sinharaja-rainforest/hero.jpg';
const SINHARAJA_G1 = '/images/tours/sinharaja-rainforest/gallery-1.jpg';
const MAJESTIC_HERO = '/images/tours/majestic-island/hero.jpg';
const MAJESTIC_G1 = '/images/tours/majestic-island/gallery-1.jpg';
const MAJESTIC_G2 = '/images/tours/majestic-island/gallery-2.jpg';
const MAJESTIC_G3 = '/images/tours/majestic-island/gallery-3.jpg';
const MAJESTIC_G4 = '/images/tours/majestic-island/gallery-4.jpg';
const MAJESTIC_G5 = '/images/tours/majestic-island/gallery-5.jpg';
const PEARL_G1 = '/images/tours/pearl-of-sri-lanka/gallery-1.jpg';
const PEARL_G2 = '/images/tours/pearl-of-sri-lanka/gallery-2.jpg';
const PEARL_G3 = '/images/tours/pearl-of-sri-lanka/gallery-3.jpg';
const PEARL_G4 = '/images/tours/pearl-of-sri-lanka/gallery-4.jpg';
const PEARL_G5 = '/images/tours/pearl-of-sri-lanka/gallery-5.jpg';
const WONDER_G1 = '/images/tours/wonder-of-sri-lanka/gallery-1.jpg';
const WONDER_G2 = '/images/tours/wonder-of-sri-lanka/gallery-2.jpg';
const WONDER_G3 = '/images/tours/wonder-of-sri-lanka/gallery-3.jpg';
const WONDER_G4 = '/images/tours/wonder-of-sri-lanka/gallery-4.jpg';
const CHARM_G1 = '/images/tours/charm-of-southern-coast/gallery-1.jpg';
const CHARM_G2 = '/images/tours/charm-of-southern-coast/gallery-2.jpeg';
const CHARM_G3 = '/images/tours/charm-of-southern-coast/gallery-3.avif';
const COLOMBO_G1 = '/images/tours/colombo-city-tour/gallery-1.jpg';
const COLOMBO_G2 = '/images/tours/colombo-city-tour/gallery-2.jpg';
const COLOMBO_G3 = '/images/tours/colombo-city-tour/gallery-3.jpg';
const COLOMBO_G4 = '/images/tours/colombo-city-tour/gallery-4.jpeg';
const YALA_GALLERY = [YALA_HERO, YALA_G1, YALA_G2, YALA_G3];
const SINHARAJA_GALLERY = [SINHARAJA_HERO, SINHARAJA_G1];
const MAJESTIC_GALLERY = [MAJESTIC_HERO, MAJESTIC_G1, MAJESTIC_G2, MAJESTIC_G3, MAJESTIC_G4, MAJESTIC_G5];
const PEARL_GALLERY = [PEARL_HERO, PEARL_G1, PEARL_G2, PEARL_G3, PEARL_G4, PEARL_G5];
const WONDER_GALLERY = [WONDER_HERO, WONDER_G1, WONDER_G2, WONDER_G3, WONDER_G4];
const CHARM_GALLERY = [GALLE_HERO, CHARM_G1, CHARM_G2, CHARM_G3];
const COLOMBO_GALLERY = [COLOMBO_HERO, COLOMBO_G1, COLOMBO_G2, COLOMBO_G3, COLOMBO_G4];
const DEFAULT_HERO = COLOMBO_HERO;

export const tours: Tour[] = [
{
  slug: 'sri-lanka-14-day-grand-tour',
  title: '14-Day Sri Lanka Grand Tour',
  subtitle: '14-дневный тур по Шри-Ланке',
  durationDays: 14,
  price: 0,
  rating: 5,
  reviewCount: 0,
  heroImage: '/images/tours/majestic-island/hero.jpg',
  galleryImages: [GALLE_HERO, YALA_HERO, MISTY_HERO, MISTY_G1, WHALE_HERO, KINGDOM_G1],
  region: 'Multiple Regions',
  activityTags: ['Cultural', 'Wildlife', 'Adventure', 'Beach'],
  shortDescription:
  'A comprehensive 14-day island journey — from the beaches of Negombo to Galle, a Yala leopard safari, Ella’s Nine Arch Bridge, the hill-country train, Nuwara Eliya, Kandy, Sigiriya and the East Coast beaches of Trincomalee.',
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
    'Airport → Negombo. Welcome pickup from the airport and transfer to Negombo. Rest after your flight and enjoy fresh seafood and the beach. Overnight in Negombo.',
    image: '/images/places/negombo.jpg',
  },
  {
    day: 2,
    title: 'Negombo to Galle',
    description:
    'Negombo → Galle. Drive south with a Madu River boat safari and a sea turtle conservation project on the way, then explore the ramparts of Galle Fort in the evening. Overnight in Galle.',
    image: '/images/places/galle-fort.webp',
  },
  {
    day: 3,
    title: 'Galle to Yala',
    description:
    'Galle → Yala. Continue toward Yala, stopping at Coconut Tree Hill, Weligama fish point for lunch, and the traditional stilt fishermen along the coast. Overnight near Yala.',
    image: '/images/places/yala-leopard.jpg',
  },
  {
    day: 4,
    title: 'Yala Safari',
    description:
    'Yala. A half-day or full-day safari in Yala National Park — the best place in Sri Lanka to spot leopards, alongside elephants, crocodiles and abundant birdlife. Overnight near Yala.',
    image: '/images/places/yala-leopard.jpg',
  },
  {
    day: 5,
    title: 'Yala to Ella',
    description:
    'Yala → Ella. Head into the hills to Ella, visiting Ravana Waterfall, Ravana Cave and the iconic Nine Arch Bridge, then unwind at a chilled café in the evening. Overnight in Ella.',
    image: '/images/places/ella.jpg',
  },
  {
    day: 6,
    title: 'Ella Sightseeing',
    description:
    'Ella. A full day exploring Ella — hike Ella Rock and Little Adam’s Peak, try the Ravana zipline, and relax at the Ravana Pool Club. Overnight in Ella.',
    image: '/images/places/ella.jpg',
  },
  {
    day: 7,
    title: 'Ella to Nuwara Eliya',
    description:
    'Ella → Nanu Oya → Nuwara Eliya. Board the scenic morning train from Ella to Nanu Oya, then continue to Nuwara Eliya. Visit a tea plantation and enjoy water activities at Gregory Lake. Overnight in Nuwara Eliya.',
    image: '/images/places/nuwara-eliya.jpg',
  },
  {
    day: 8,
    title: 'Nuwara Eliya to Kandy',
    description:
    'Nuwara Eliya → Kandy. Drive to Kandy with stops at a world-class tea factory, Ramboda Waterfall and Ambuluwawa Tower. Watch the 5:00 pm Kandy cultural dance and visit the Temple of the Sacred Tooth Relic. Overnight in Kandy.',
    image: '/images/places/kandy.jpg',
  },
  {
    day: 9,
    title: 'Kandy to Sigiriya',
    description:
    'Kandy → Dambulla → Sigiriya. Travel to Sigiriya via Dambulla, visiting a batik workshop, spice garden, wood carvings and the Dambulla Cave Temple. Overnight in Sigiriya.',
    image: '/images/places/sigiriya.webp',
  },
  {
    day: 10,
    title: 'Sigiriya Sightseeing',
    description:
    'Sigiriya. Climb Pidurangala Rock at dawn, then choose an optional Habarana, Minneriya or Kawdulla safari (special for elephants) or a village safari. In the evening, enjoy a relaxing Ayurvedic spa and massage. Overnight in Sigiriya.',
    image: '/images/places/sigiriya.webp',
  },
  {
    day: 11,
    title: 'Sigiriya to Trincomalee',
    description:
    'Sigiriya → Trincomalee. Morning visit to the Sigiriya Lion Rock fortress, then transfer to the East Coast at Trincomalee. Overnight in Trincomalee.',
    image: '/images/places/east-coast.jpg',
  },
  {
    day: 12,
    title: 'Trincomalee Activities',
    description:
    'Trincomalee. Morning whale watching off Trincomalee, followed by snorkeling, scuba diving and fresh seafood by the sea. Overnight in Trincomalee.',
    image: '/images/places/east-coast.jpg',
  },
  {
    day: 13,
    title: 'Leisure in Trincomalee',
    description:
    'Trincomalee. A leisure day to relax on the beach at your own pace.',
    image: '/images/places/east-coast.jpg',
  },
  {
    day: 14,
    title: 'Airport Transfer & Departure',
    description:
    'Trincomalee → Airport. Transfer back to the airport for your departure. End of the tour — thank you for travelling with us!',
    image: '/images/places/colombo.jpg',
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
  heroImage: '/images/tours/misty-mountains/hero.jpg',
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
    image: '/images/places/sigiriya.webp',
  },
  {
    day: 2,
    title: 'Sigiriya & Pidurangala',
    description:
    'Sigiriya. Climb the Sigiriya Rock Fortress, enjoy a local village tour, and visit Pidurangala. Overnight in Sigiriya.',
    image: '/images/places/pidurangala.jpg',
  },
  {
    day: 3,
    title: 'Dambulla to Kandy',
    description:
    'Sigiriya → Dambulla → Kandy. Visit the Dambulla Cave Temple and a spice garden, then travel to Kandy and check in. Overnight in Kandy.',
    image: '/images/places/kandy.jpg',
  },
  {
    day: 4,
    title: 'Kandy, Nuwara Eliya & Scenic Train',
    description:
    'Kandy → Nuwara Eliya → Nanu Oya → Ella. Depart Kandy and visit a tea plantation, with an optional early-morning Nuwara Eliya stop (around 5:00 am). Take the scenic second-class train from Nanu Oya to Ella. Overnight in Ella.',
    image: '/images/places/train.jpg',
  },
  {
    day: 5,
    title: 'Ella to Yala',
    description:
    'Ella → Yala. Visit the Nine Arch Bridge, hike Little Adam’s Peak and stop at Ravana Falls before travelling to Yala. Overnight near Yala.',
    image: '/images/places/yala-leopard.jpg',
  },
  {
    day: 6,
    title: 'Yala Safari & Mirissa',
    description:
    'Yala → Mirissa. Morning safari in Yala National Park by private jeep, then transfer to the southern beach town of Mirissa for some beach relaxation. Overnight in Mirissa.',
    image: '/images/places/mirissa.jpg',
  },
  {
    day: 7,
    title: 'Mirissa Leisure Day',
    description:
    'Mirissa. A free day for beach relaxation, with optional whale watching. Overnight in Mirissa.',
    image: '/images/places/mirissa.jpg',
  },
  {
    day: 8,
    title: 'Mirissa to Galle',
    description:
    'Mirissa → Galle. Travel along the coast to Galle and explore the historic Galle Fort. Overnight in Galle.',
    image: '/images/places/galle-fort.webp',
  },
  {
    day: 9,
    title: 'Colombo Transfer & Departure',
    description:
    'Galle → Colombo → Airport. Transfer to Colombo and onward to the airport for departure, timed to your flight.',
    image: '/images/places/colombo.jpg',
  },
  ],
  hotels: [],
},
{
  slug: 'sri-lanka-wildlife-bird-watching-17-days',
  title: 'Sri Lanka Wildlife & Bird Watching Tour',
  subtitle: '17-Day Essential Wildlife & Nature Expedition',
  durationDays: 17,
  price: 0,
  rating: 5,
  reviewCount: 0,
  heroImage: '/images/tours/yala-safari/hero.jpg',
  galleryImages: YALA_GALLERY,
  region: 'Multiple Regions',
  activityTags: ['Wildlife', 'Adventure'],
  shortDescription:
  'A 17-day wildlife and bird-watching expedition that explores Sri Lanka’s best nature reserves, wetlands, and coastal habitats.',
  highlights: [
    'Bird watching in wetland reserves',
    'Wildlife safaris in national parks',
    'Coastal nature and traditional village visits',
  ],
  included: [
    'Private air-conditioned transport',
    'English-speaking chauffeur guide',
    'Airport transfers',
    'Selected wildlife park entry planning support',
  ],
  excluded: [
    'Flights and visa fees',
    'Meals unless specified',
    'Entrance fees and activity charges',
    'Personal expenses and tips',
  ],
  itinerary: [
    { day: 1, title: 'Arrival & Negombo', description: 'Arrival at Bandaranaike International Airport and transfer to Negombo for a beach-side welcome.', image: '/images/places/negombo.jpg' },
    { day: 2, title: 'Negombo to Wilpattu', description: 'Travel to Wilpattu National Park for a wildlife safari and wetlands bird-watching experience.', image: '/images/places/wilpattu.jpg' },
    { day: 3, title: 'Wilpattu Safari', description: 'Full-day wildlife safari in Wilpattu, with a focus on leopard, elephant, and wetland birds.', image: '/images/places/wilpattu.jpg' },
    { day: 4, title: 'Wilpattu to Minneriya', description: 'Morning safari and transfer toward the Cultural Triangle via Minneriya.', image: '/images/places/minneriya.jpg' },
    { day: 5, title: 'Minneriya & Sigiriya', description: 'Visit Minneriya National Park for elephant gatherings, then continue to Sigiriya.', image: '/images/places/sigiriya.webp' },
    { day: 6, title: 'Sigiriya Wildlife', description: 'Explore Sigiriya and optional village safari activities nearby.', image: '/images/places/sigiriya.webp' },
    { day: 7, title: 'Kandy via Dambulla', description: 'Travel to Kandy with a stop at Dambulla Cave Temple and a spice garden.', image: '/images/places/dambulla.jpg' },
    { day: 8, title: 'Kandy Cultural Sightseeing', description: 'City tour of Kandy, Temple of the Tooth, and local markets.', image: '/images/places/kandy.jpg' },
    { day: 9, title: 'Kandy to Nuwara Eliya', description: 'Journey into the hill country to Nuwara Eliya with tea estate visits.', image: '/images/places/nuwara-eliya.jpg' },
    { day: 10, title: 'Nuwara Eliya to Ella', description: 'Scenic hill-country transfer toward Ella, with waterfalls and viewpoints.', image: '/images/places/ella.jpg' },
    { day: 11, title: 'Ella & Yala', description: 'Travel through Ella toward Yala with time for nature walks and scenic stops.', image: '/images/places/yala-leopard.jpg' },
    { day: 12, title: 'Yala Safari', description: 'Full-day Yala National Park safari in a private jeep.', image: '/images/places/yala-leopard.jpg' },
    { day: 13, title: 'Yala to Mirissa', description: 'Transfer from Yala to the southern coast for beach relaxation.', image: '/images/places/mirissa.jpg' },
    { day: 14, title: 'Mirissa Beach', description: 'Leisure day at Mirissa with optional whale watching.', image: '/images/places/mirissa.jpg' },
    { day: 15, title: 'Mirissa to Galle', description: 'Coastal drive to Galle and historic Galle Fort exploration.', image: '/images/places/galle-fort.webp' },
    { day: 16, title: 'Galle to Colombo', description: 'Transfer to Colombo and city sightseeing.', image: '/images/places/colombo.jpg' },
    { day: 17, title: 'Departure from Colombo', description: 'Airport transfer and departure.', image: '/images/places/colombo.jpg' },
  ],
  hotels: [],
},
{
  slug: 'the-ultimate-sri-lanka-14-days-journey',
  title: 'The Ultimate Sri Lanka 14 Days Journey',
  subtitle: 'Timeless Sri Lanka: Culture, Wilderness & Coastal Bliss',
  durationDays: 14,
  price: 0,
  rating: 5,
  reviewCount: 0,
  heroImage: '/images/tours/the-last-kingdom/hero.jpg',
  galleryImages: MAJESTIC_GALLERY,
  region: 'Multiple Regions',
  activityTags: ['Cultural', 'Wildlife', 'Beach'],
  shortDescription:
  'A broad two-week experience through Sri Lanka’s culture, wildlife, and southern coastline, with a mix of sightseeing and leisure.',
  highlights: [
    'Culture, wildlife and beach experiences',
    'Historic UNESCO destinations',
    'Galle and Mirissa coastal highlights',
  ],
  included: [
    'Private transport and airport transfers',
    'English-speaking chauffeur',
    'Selected city tours and planning support',
  ],
  excluded: [
    'Flights and visa',
    'Entrance fees',
    'Meals outside of hotel board',
    'Personal expenses and tips',
  ],
  itinerary: [
    { day: 1, title: 'Arrival & Negombo', description: 'Arrival and transfer to Negombo.', image: '/images/places/negombo.jpg' },
    { day: 2, title: 'Negombo to Sigiriya', description: 'Travel to the Cultural Triangle, visiting Sigiriya and nearby villages.', image: '/images/places/sigiriya.webp' },
    { day: 3, title: 'Sigiriya & Dambulla', description: 'Explore Sigiriya Rock and Dambulla Cave Temple.', image: '/images/places/dambulla.jpg' },
    { day: 4, title: 'Kandy', description: 'Cultural sightseeing in Kandy, including the Temple of the Tooth.', image: '/images/places/kandy.jpg' },
    { day: 5, title: 'Nuwara Eliya', description: 'Hill-country travel with tea plantation visits.', image: '/images/places/nuwara-eliya.jpg' },
    { day: 6, title: 'Ella & Yala', description: 'Travel through Ella toward Yala with scenic stops.', image: '/images/places/yala-leopard.jpg' },
    { day: 7, title: 'Yala Safari', description: 'Yala National Park safari experience.', image: '/images/places/yala-leopard.jpg' },
    { day: 8, title: 'Galle', description: 'Explore Galle Fort and surrounding coastline.', image: '/images/places/galle-fort.webp' },
    { day: 9, title: 'Galle Leisure', description: 'Coastal relaxation and local culture around Galle.', image: '/images/places/galle-fort.webp' },
    { day: 10, title: 'Mirissa Beach', description: 'Beach leisure with optional whale watching.', image: '/images/places/mirissa.jpg' },
    { day: 11, title: 'Mirissa to Colombo', description: 'Transfer to Colombo and city sightseeing.', image: '/images/places/colombo.jpg' },
    { day: 12, title: 'Colombo Highlights', description: 'City tour of Colombo landmarks and markets.', image: '/images/places/colombo.jpg' },
    { day: 13, title: 'Colombo Leisure', description: 'Relaxation or optional cultural visits in Colombo.', image: '/images/places/colombo.jpg' },
    { day: 14, title: 'Departure', description: 'Airport transfer for departure.', image: '/images/places/colombo.jpg' },
  ],
  hotels: [],
},
{
  slug: 'sri-lanka-tour-holiday-package-10-days',
  title: 'Sri Lanka Tour Holiday Package 10 Days',
  subtitle: 'Tailor-made 10-Day Sri Lanka Holiday Package',
  durationDays: 10,
  price: 0,
  rating: 5,
  reviewCount: 0,
  heroImage: '/images/tours/pearl-of-sri-lanka/hero.jpg',
  galleryImages: PEARL_GALLERY,
  region: 'Multiple Regions',
  activityTags: ['Cultural', 'Family'],
  shortDescription:
  'A tailor-made 10-day holiday package with Colombo, Sigiriya, Kandy, Nuwara Eliya, Ella, Yala, Galle, and Colombo return.',
  highlights: [
    'Colombo city tour',
    'Cultural Triangle and Kandy',
    'Hill country and wildlife safari',
  ],
  included: [
    'Accommodation and breakfast/dinner arrangement',
    'Private transport and airport transfers',
    'English-speaking chauffeur',
  ],
  excluded: [
    'Flights and visas',
    'Entrance fees and activity charges',
    'Personal expenses and tips',
  ],
  itinerary: [
    { day: 1, title: 'Colombo Arrival', description: 'Arrival in Colombo and city transfer.', image: '/images/places/colombo.jpg' },
    { day: 2, title: 'Sigiriya', description: 'Travel to Sigiriya and explore the rock fortress.', image: '/images/places/sigiriya.webp' },
    { day: 3, title: 'Polonnaruwa & Sigiriya', description: 'Visit Polonnaruwa archaeological city and return to Sigiriya.', image: '/images/places/sigiriya.webp' },
    { day: 4, title: 'Kandy', description: 'Transfer to Kandy with cultural sightseeing.', image: '/images/places/kandy.jpg' },
    { day: 5, title: 'Nuwara Eliya', description: 'Travel to Nuwara Eliya through the hill country.', image: '/images/places/nuwara-eliya.jpg' },
    { day: 6, title: 'Ella & Yala', description: 'Travel from Ella toward Yala with scenic stops.', image: '/images/places/yala-leopard.jpg' },
    { day: 7, title: 'Yala & Sinharaja', description: 'Yala safari then a transfer toward Sinharaja rainforest.', image: '/images/places/sinharaja.jpg' },
    { day: 8, title: 'Galle', description: 'Transfer to Galle and coastal leisure.', image: '/images/places/galle-fort.webp' },
    { day: 9, title: 'Galle Leisure', description: 'Relax in Galle and enjoy the coastline.', image: '/images/places/galle-fort.webp' },
    { day: 10, title: 'Colombo Departure', description: 'Transfer back to Colombo or airport for departure.', image: '/images/places/colombo.jpg' },
  ],
  hotels: [],
},
{
  slug: 'herping-loris-watching-expedition-10-days',
  title: 'Herping & Loris Watching Expedition 10 Days',
  subtitle: 'Sri Lanka’s Nocturnal Wildlife Adventure',
  durationDays: 10,
  price: 0,
  rating: 5,
  reviewCount: 0,
  heroImage: '/images/tours/sinharaja-rainforest/hero.jpg',
  galleryImages: SINHARAJA_GALLERY,
  region: 'Multiple Regions',
  activityTags: ['Wildlife', 'Adventure'],
  shortDescription:
  'A 10-day nocturnal wildlife expedition focused on herping, slender loris watching, and secret nature encounters.',
  highlights: [
    'Nocturnal wildlife excursions',
    'Slender loris watching',
    'Forest and rainforest exploration',
  ],
  included: [
    'Private transport and airport transfers',
    'English-speaking driver guide',
    '24/7 support and logistics coordination',
  ],
  excluded: [
    'Flights and visas',
    'Entrance and permit fees',
    'Meals and drinks outside package plan',
    'Tips and personal expenses',
  ],
  itinerary: [
    { day: 1, title: 'Arrival & Negombo', description: 'Arrival and transfer to Negombo.', image: '/images/places/negombo.jpg' },
    { day: 2, title: 'Wetland Wildlife', description: 'Begin the wildlife expedition with wetlands and birding in Negombo.', image: '/images/places/sinharaja.jpg' },
    { day: 3, title: 'Forest & Loris Watching', description: 'Travel toward forest habitats and search for slender lorises.', image: '/images/places/sinharaja.jpg' },
    { day: 4, title: 'Nocturnal Safari', description: 'Night safari and nocturnal wildlife exploration.', image: '/images/places/colombo.jpg' },
    { day: 5, title: 'Rainforest Transfer', description: 'Move deeper into rainforest terrain for herping.', image: '/images/places/sinharaja.jpg' },
    { day: 6, title: 'Jungle Activities', description: 'Rainforest hikes, wildlife walks, and cultural interactions.', image: '/images/places/sinharaja.jpg' },
    { day: 7, title: 'Coastal Nature', description: 'Transfer to the south coast for combined wildlife and beach.', image: '/images/places/south-coast.png' },
    { day: 8, title: 'Coastal Relaxation', description: 'Beach time with optional coastal birdwatching.', image: '/images/places/sinharaja.jpg' },
    { day: 9, title: 'Galle & Departure Prep', description: 'Explore Galle and prepare for departure.', image: '/images/places/colombo.jpg' },
    { day: 10, title: 'Departure', description: 'Transfer to Colombo airport for departure.', image: '/images/places/colombo.jpg' },
  ],
  hotels: [],
},
{
  slug: 'wildlife-nature-expedition-10-days',
  title: 'Wildlife & Nature Expedition 10 Days',
  subtitle: 'From Rainforests to Savannahs',
  durationDays: 10,
  price: 0,
  rating: 5,
  reviewCount: 0,
  heroImage: '/images/tours/misty-mountains-yala-safari/hero.jpg',
  galleryImages: YALA_GALLERY,
  region: 'Multiple Regions',
  activityTags: ['Wildlife', 'Adventure'],
  shortDescription:
  'A nature expedition through Sri Lanka’s lush rainforests and sweeping savannahs over ten unforgettable days.',
  highlights: [
    'Rainforest and savannah wildlife',
    'Elephant and bird watching',
    'Diverse ecosystems',
  ],
  included: [
    'Private vehicle and airport transfers',
    'Driver guide and support',
    'Accommodation coordination',
  ],
  excluded: [
    'Flights and visas',
    'Meals outside the plan',
    'Activity fees and tips',
  ],
  itinerary: [
    { day: 1, title: 'Arrival & Negombo', description: 'Arrival at Colombo airport and transfer to Negombo.', image: '/images/places/negombo.jpg' },
    { day: 2, title: 'Negombo to Wilpattu', description: 'Transfer to Wilpattu for wetland and wildlife exploration.', image: '/images/places/wilpattu.jpg' },
    { day: 3, title: 'Wilpattu Safari', description: 'Full-day safari in Wilpattu National Park.', image: '/images/places/wilpattu.jpg' },
    { day: 4, title: 'Transfer to Minneriya', description: 'Move toward Minneriya and explore the national park.', image: '/images/places/minneriya.jpg' },
    { day: 5, title: 'Minneriya Safari', description: 'Elephant and wildlife safari at Minneriya.', image: '/images/places/minneriya.jpg' },
    { day: 6, title: 'Transfer to Yala', description: 'Travel through the cultural triangle toward Yala.', image: '/images/places/yala-leopard.jpg' },
    { day: 7, title: 'Yala Safari', description: 'Private safari experience in Yala National Park.', image: '/images/places/yala-leopard.jpg' },
    { day: 8, title: 'Yala to Udawalawe', description: 'Travel to Udawalawe for another safari experience.', image: '/images/places/udawalawe.jpg' },
    { day: 9, title: 'Udawalawe Safari', description: 'Morning safari and elephant observation.', image: '/images/places/udawalawe.jpg' },
    { day: 10, title: 'Departure from Colombo', description: 'Return to Colombo and depart.', image: '/images/places/colombo.jpg' },
  ],
  hotels: [],
},
{
  slug: 'wildlife-escape-7-days',
  title: 'Wildlife Escape 07 Days',
  subtitle: 'From Wetlands to Wilderness',
  durationDays: 7,
  price: 0,
  rating: 5,
  reviewCount: 0,
  heroImage: '/images/tours/yala-safari/gallery-1.jpg',
  galleryImages: YALA_GALLERY,
  region: 'Multiple Regions',
  activityTags: ['Wildlife'],
  shortDescription:
  'A short seven-day wildlife escape through Sri Lanka’s wetlands, forests, and wildlife reserves.',
  highlights: [
    'Wildlife drives and safari experiences',
    'Wilderness exploration',
    'Rainforest and wetland journeys',
  ],
  included: [
    'Private transport and airport transfers',
    'English-speaking chauffeur',
    '24/7 trip support',
  ],
  excluded: [
    'Flights and visas',
    'Entrance fees and activity charges',
    'Meals and personal expenses',
  ],
  itinerary: [
    { day: 1, title: 'Arrival & Negombo', description: 'Arrival and transfer to Negombo.', image: '/images/places/negombo.jpg' },
    { day: 2, title: 'Negombo to Wilpattu', description: 'Travel to Wilpattu National Park.', image: '/images/places/wilpattu.jpg' },
    { day: 3, title: 'Wilpattu Safari', description: 'Wildlife safari in Wilpattu.', image: '/images/places/wilpattu.jpg' },
    { day: 4, title: 'Minneriya & Transfer', description: 'Move toward Minneriya for wildlife viewing.', image: '/images/places/minneriya.jpg' },
    { day: 5, title: 'Yala Safari', description: 'Safari in Yala National Park.', image: '/images/places/yala-leopard.jpg' },
    { day: 6, title: 'Yala Leisure', description: 'Leisure and optional safari in Yala.', image: '/images/places/yala-leopard.jpg' },
    { day: 7, title: 'Return to Colombo', description: 'Transfer back to Colombo and depart.', image: '/images/places/colombo.jpg' },
  ],
  hotels: [],
},
{
  slug: 'sri-lanka-wildlife-tour-package-14-days',
  title: 'Sri Lanka Wildlife Tour Package 14 Days',
  subtitle: 'Two weeks of wildlife and scenic experiences',
  durationDays: 14,
  price: 0,
  rating: 5,
  reviewCount: 0,
  heroImage: '/images/tours/yala-safari/gallery-2.jpg',
  galleryImages: YALA_GALLERY,
  region: 'Multiple Regions',
  activityTags: ['Wildlife', 'Family'],
  shortDescription:
  'A 14-day private wildlife tour for solo travellers, couples, families, and friends with rugged safari and scenic highlights.',
  highlights: [
    'Wilpattu and/or Minneriya safaris',
    'Cultural Triangle and Kandy',
    'South coast beaches and Galle',
  ],
  included: [
    'Private transport and airport transfers',
    'Driver-guide meals and accommodation',
    '24/7 travel support',
  ],
  excluded: [
    'Flights and visas',
    'Entrance fees and safari permits',
    'Personal expenses and tips',
  ],
  itinerary: [
    { day: 1, title: 'Negombo Arrival', description: 'Arrival and transfer to Negombo.', image: '/images/places/colombo.jpg' },
    { day: 2, title: 'Wilpattu Transfer', description: 'Travel to Wilpattu National Park.', image: '/images/places/wilpattu.jpg' },
    { day: 3, title: 'Wilpattu Safari', description: 'Second safari day in Wilpattu.', image: '/images/places/wilpattu.jpg' },
    { day: 4, title: 'Minneriya & Sigiriya', description: 'Transfer toward Minneriya and Sigiriya.', image: '/images/places/sigiriya.webp' },
    { day: 5, title: 'Sigiriya & Dambulla', description: 'Visit Sigiriya Rock and Dambulla Cave Temple.', image: '/images/places/dambulla.jpg' },
    { day: 6, title: 'Kandy', description: 'Visit Kandy and cultural sites.', image: '/images/places/kandy.jpg' },
    { day: 7, title: 'Kandy to Knuckles', description: 'Day trip into the Knuckles Mountain Range.', image: '/images/places/knuckles.jpg' },
    { day: 8, title: 'Nuwara Eliya via Udawalawe', description: 'Travel via Udawalawe with tea-country views.', image: '/images/places/udawalawe.jpg' },
    { day: 9, title: 'Udawalawe Safari', description: 'Elephant safari in Udawalawe.', image: '/images/places/udawalawe.jpg' },
    { day: 10, title: 'Yala Safari', description: 'Yala National Park safari adventure.', image: '/images/places/yala-leopard.jpg' },
    { day: 11, title: 'Yala to Colombo', description: 'Transfer to Colombo via scenic south coast.', image: '/images/places/colombo.jpg' },
    { day: 12, title: 'Colombo Highlights', description: 'Explore Colombo cultural and city highlights.', image: '/images/places/colombo.jpg' },
    { day: 13, title: 'Colombo Leisure', description: 'Relax in Colombo before departure.', image: '/images/places/colombo.jpg' },
    { day: 14, title: 'Departure', description: 'Airport transfer and departure.', image: '/images/places/colombo.jpg' },
  ],
  hotels: [],
},
{
  slug: 'sri-lanka-luxury-honeymoon-10-days',
  title: 'Sri Lanka Luxury Honeymoon Package 10 Days',
  subtitle: 'Tailor-made romantic honeymoon escape',
  durationDays: 10,
  price: 0,
  rating: 5,
  reviewCount: 0,
  heroImage: '/images/tours/charm-of-southern-coast/hero.avif',
  galleryImages: MAJESTIC_GALLERY,
  region: 'Multiple Regions',
  activityTags: ['Honeymoon', 'Beach'],
  shortDescription:
  'A luxury 10-day honeymoon itinerary featuring beaches, tea country, romantic stays, and scenic train journeys.',
  highlights: [
    'Negombo beachfront luxury stay',
    'Kandy culture and Hatton tea country',
    'Mirissa beach romance and Galle Fort',
  ],
  included: [
    'Luxury accommodation and meals',
    'Private transport and airport transfers',
    'English-speaking chauffeur guide',
  ],
  excluded: [
    'Flights and visas',
    'Entrance fees and optional activities',
    'Personal expenses and tips',
  ],
  itinerary: [
    { day: 1, title: 'Arrival & Negombo', description: 'Welcome arrival and beachfront resort transfer.', image: '/images/places/negombo.jpg' },
    { day: 2, title: 'Negombo to Kandy', description: 'Scenic drive to Kandy with optional Pinnawala or spice garden stop.', image: '/images/places/kandy.jpg' },
    { day: 3, title: 'Kandy Culture', description: 'Temple of the Tooth and romantic Kandy lakeside experiences.', image: '/images/places/kandy.jpg' },
    { day: 4, title: 'Kandy to Hatton', description: 'Tea country transfer to Hatton and waterfall visit.', image: '/images/places/nuwara-eliya.jpg' },
    { day: 5, title: 'Hatton Leisure', description: 'Tea estate and resort leisure in Hatton.', image: '/images/places/nuwara-eliya.jpg' },
    { day: 6, title: 'Hatton to Ella', description: 'Scenic transfer and Nine Arch Bridge visit.', image: '/images/places/ella.jpg' },
    { day: 7, title: 'Ella Romance', description: 'Sunrise hike and hill-country romance in Ella.', image: '/images/places/ella.jpg' },
    { day: 8, title: 'Ella to Mirissa', description: 'South coast transfer to Mirissa.', image: '/images/places/mirissa.jpg' },
    { day: 9, title: 'Mirissa Leisure', description: 'Beachfront leisure and optional spa treatments.', image: '/images/places/mirissa.jpg' },
    { day: 10, title: 'Galle & Departure', description: 'Optional Galle Fort visit and airport transfer.', image: '/images/places/colombo.jpg' },
  ],
  hotels: [],
},
{
  slug: 'sri-lanka-family-package-7-days',
  title: 'Sri Lanka Family Package 07 Days',
  subtitle: 'Tailor-made family tour through culture and beaches',
  durationDays: 7,
  price: 0,
  rating: 5,
  reviewCount: 0,
  heroImage: '/images/tours/wonder-of-sri-lanka/hero.jpg',
  galleryImages: WONDER_GALLERY,
  region: 'Multiple Regions',
  activityTags: ['Family', 'Cultural'],
  shortDescription:
  'A 7-day family holiday combining cultural sights, nature, and beach relaxation around Sri Lanka’s most family-friendly destinations.',
  highlights: [
    'Cultural Triangle and adventure activities',
    'Kandy and hill-country views',
    'South-coast beach stay',
  ],
  included: [
    'Accommodation with breakfast and dinner',
    'Private transport and airport transfers',
    'English-speaking chauffeur',
  ],
  excluded: [
    'Flights and visas',
    'Entrance fees and optional activities',
    'Tips and personal expenses',
  ],
  itinerary: [
    { day: 1, title: 'Negombo Arrival', description: 'Arrival and beach-side relaxation in Negombo.', image: '/images/places/colombo.jpg' },
    { day: 2, title: 'Pinnawala & Sigiriya', description: 'Visit Pinnawala and transfer to Sigiriya.', image: '/images/places/sigiriya.webp' },
    { day: 3, title: 'Sigiriya & Dambulla', description: 'Explore Sigiriya and Dambulla Cave Temple.', image: '/images/places/dambulla.jpg' },
    { day: 4, title: 'Kandy', description: 'Travel to Kandy and enjoy cultural sightseeing.', image: '/images/places/kandy.jpg' },
    { day: 5, title: 'Nuwara Eliya', description: 'Hill-country transfer with scenic views.', image: '/images/places/nuwara-eliya.jpg' },
    { day: 6, title: 'Bentota', description: 'Coastal transfer to Bentota with river or beach activities.', image: '/images/places/bentota.jpg' },
    { day: 7, title: 'Departure via Colombo', description: 'Optional Colombo sightseeing and airport transfer.', image: '/images/places/colombo.jpg' },
  ],
  hotels: [],
},
{
  slug: 'sri-lanka-honeymoon-package-7-days',
  title: 'Sri Lanka Honeymoon Package 07 Days',
  subtitle: '7-Day Romantic Sri Lankan Honeymoon Holiday',
  durationDays: 7,
  price: 0,
  rating: 5,
  reviewCount: 0,
  heroImage: '/images/tours/charm-of-southern-coast/gallery-1.jpg',
  galleryImages: MAJESTIC_GALLERY,
  region: 'Multiple Regions',
  activityTags: ['Honeymoon', 'Luxury'],
  shortDescription:
  'A romantic seven-day honeymoon combining culture, wildlife, and luxury relaxation with an Udawalawe safari highlight.',
  highlights: [
    'Udawalawe safari and elephant encounter',
    'Romantic hill-country and beach experiences',
    'Private luxury transfers',
  ],
  included: [
    'Private vehicle and airport transfers',
    'Accommodation and meals as listed',
    'English-speaking chauffeur',
  ],
  excluded: [
    'Flights and visas',
    'Entrance fees and safari charges',
    'Personal expenses and tips',
  ],
  itinerary: [
    { day: 1, title: 'Arrival & Kandy', description: 'Transfer to Kandy after arrival.', image: '/images/places/kandy.jpg' },
    { day: 2, title: 'Kandy Highlights', description: 'Kandy sightseeing and cultural visits.', image: '/images/places/kandy.jpg' },
    { day: 3, title: 'Nuwara Eliya', description: 'Travel to Nuwara Eliya and visit tea plantations.', image: '/images/places/nuwara-eliya.jpg' },
    { day: 4, title: 'Ella', description: 'Travel to Ella and scenic hill-country experiences.', image: '/images/places/ella.jpg' },
    { day: 5, title: 'Yala Safari', description: 'Transfer to Yala and safari activities.', image: '/images/places/yala-leopard.jpg' },
    { day: 6, title: 'Mirissa Beach', description: 'Beach leisure in Mirissa with optional whale watching.', image: '/images/places/mirissa.jpg' },
    { day: 7, title: 'Colombo Departure', description: 'Return to Colombo and fly home.', image: '/images/places/colombo.jpg' },
  ],
  hotels: [],
},
{
  slug: 'sri-lanka-holiday-package-7-days',
  title: 'Sri Lanka Holiday Package 7 Days',
  subtitle: 'Tailor-made 7-Day Sri Lanka Holiday Package',
  durationDays: 7,
  price: 0,
  rating: 5,
  reviewCount: 0,
  heroImage: '/images/tours/colombo-city-tour/hero.jpg',
  galleryImages: COLOMBO_GALLERY,
  region: 'Multiple Regions',
  activityTags: ['Cultural', 'Family'],
  shortDescription:
  'A seven-day holiday through the Cultural Triangle, Kandy, Nuwara Eliya, Ella, Yala, and coastal Galle with departure via Colombo.',
  highlights: [
    'Cultural Triangle and Kandy',
    'Hill-country and Yala wildlife',
    'Galle coastal highlights',
  ],
  included: [
    'Private transport and airport transfers',
    'English-speaking chauffeur',
    'Accommodation with breakfast and dinner',
  ],
  excluded: [
    'Flights and visas',
    'Entrance and safari fees',
    'Meals outside the hotel plan',
  ],
  itinerary: [
    { day: 1, title: 'Sigiriya & Dambulla', description: 'Arrival and transfer to the Cultural Triangle.', image: '/images/places/dambulla.jpg' },
    { day: 2, title: 'Kandy', description: 'Transfer to Kandy with temple visits.', image: '/images/places/kandy.jpg' },
    { day: 3, title: 'Nuwara Eliya', description: 'Tea-country journey and scenic attractions.', image: '/images/places/nuwara-eliya.jpg' },
    { day: 4, title: 'Ella', description: 'Scenic train from Nanu Oya to Ella and local sites.', image: '/images/places/ella.jpg' },
    { day: 5, title: 'Yala & Kataragama', description: 'Yala safari and optional Kataragama area visit.', image: '/images/places/east-coast.jpg' },
    { day: 6, title: 'Mirissa', description: 'South-coast leisure and beach time.', image: '/images/places/mirissa.jpg' },
    { day: 7, title: 'Colombo Departure', description: 'Optional Colombo sightseeing and airport transfer.', image: '/images/places/colombo.jpg' },
  ],
  hotels: [],
},
{
  slug: 'sri-lanka-tour-package-8-days',
  title: 'Sri Lanka Tour Package 8 Days',
  subtitle: 'Explore the Best of the Island in 8 Days',
  durationDays: 8,
  price: 0,
  rating: 5,
  reviewCount: 0,
  heroImage: '/images/tours/majestic-island/gallery-1.jpg',
  galleryImages: COLOMBO_GALLERY,
  region: 'Multiple Regions',
  activityTags: ['Cultural'],
  shortDescription:
  'An eight-day journey across Colombo, culture, and scenic Sri Lanka highlights.',
  highlights: [
    'Colombo city arrival',
    'Cultural Triangle and tea-country',
    'Beachside leisure',
  ],
  included: [
    'Private vehicle and airport transfers',
    'Accommodation and daily breakfast',
    'English-speaking chauffeur',
  ],
  excluded: [
    'Flights and visas',
    'Entrance fees and extras',
    'Personal expenses and tips',
  ],
  itinerary: [
    { day: 1, title: 'Colombo Arrival', description: 'Arrival in Colombo and city transfer.', image: '/images/places/colombo.jpg' },
    { day: 2, title: 'Colombo to Sigiriya', description: 'Travel to Sigiriya from Colombo.', image: '/images/places/sigiriya.webp' },
    { day: 3, title: 'Sigiriya & Pidurangala', description: 'Visit Sigiriya Rock and nearby Pidurangala.', image: '/images/places/pidurangala.jpg' },
    { day: 4, title: 'Kandy', description: 'Travel to Kandy and enjoy local culture.', image: '/images/places/kandy.jpg' },
    { day: 5, title: 'Nuwara Eliya', description: 'Tea estate sightseeing in Nuwara Eliya.', image: '/images/places/nuwara-eliya.jpg' },
    { day: 6, title: 'Ella & Yala', description: 'Travel toward Ella and Yala with scenic stops.', image: '/images/places/yala-leopard.jpg' },
    { day: 7, title: 'Galle', description: 'Galle Fort and coastal relaxation.', image: '/images/places/galle-fort.webp' },
    { day: 8, title: 'Departure', description: 'Return to Colombo for departure.', image: '/images/places/colombo.jpg' },
  ],
  hotels: [],
},
{
  slug: 'sri-lanka-tour-package-14-days-2',
  title: 'Sri Lanka Tour Package 14 Days',
  subtitle: 'Tailor-made 14-Day Sri Lanka Adventure',
  durationDays: 14,
  price: 0,
  rating: 5,
  reviewCount: 0,
  heroImage: '/images/tours/wonder-of-sri-lanka/gallery-1.jpg',
  galleryImages: WONDER_GALLERY,
  region: 'Multiple Regions',
  activityTags: ['Cultural', 'Beach'],
  shortDescription:
  'A 14-day tailor-made Sri Lanka discovery tour with north, cultural, hill and coastal highlights.',
  highlights: [
    'Jaffna and northern culture',
    'Cultural Triangle and hill country',
    'Galle coast and leisure',
  ],
  included: [
    'Private transport and airport transfers',
    'Accommodation and meals as listed',
    'English-speaking chauffeur',
  ],
  excluded: [
    'Flights and visas',
    'Entrance fees and optional activities',
    'Personal expenses and tips',
  ],
  itinerary: [
    { day: 1, title: 'Negombo Arrival', description: 'Arrive and transfer to Negombo.', image: '/images/places/colombo.jpg' },
    { day: 2, title: 'Jaffna Transfer', description: 'Travel to Jaffna in northern Sri Lanka.', image: '/images/places/colombo.jpg' },
    { day: 3, title: 'Jaffna Sightseeing', description: 'Explore Jaffna cultural highlights.', image: '/images/places/colombo.jpg' },
    { day: 4, title: 'Jaffna to Sigiriya', description: 'Travel south to Sigiriya via Anuradhapura.', image: '/images/places/sigiriya.webp' },
    { day: 5, title: 'Polonnaruwa & Sigiriya', description: 'Visit Polonnaruwa and Sigiriya.', image: '/images/places/sigiriya.webp' },
    { day: 6, title: 'Minneriya Safari', description: 'Minneriya wildlife experience and nearby cultural sites.', image: '/images/places/minneriya.jpg' },
    { day: 7, title: 'Kandy', description: 'Cultural Kandy sightseeing and relaxation.', image: '/images/places/kandy.jpg' },
    { day: 8, title: 'Kandy & Nuwara Eliya', description: 'Move into the hill country via tea plantations.', image: '/images/places/nuwara-eliya.jpg' },
    { day: 9, title: 'Ella & Yala', description: 'Travel toward Ella and Yala with scenic views.', image: '/images/places/yala-leopard.jpg' },
    { day: 10, title: 'Yala & Galle', description: 'Yala safari followed by transfer to Galle.', image: '/images/places/galle-fort.webp' },
    { day: 11, title: 'Galle Fort & Coast', description: 'Explore Galle and the southwest coast.', image: '/images/places/galle-fort.webp' },
    { day: 12, title: 'Unawatuna & Beach', description: 'Beach leisure on the south coast near Unawatuna.', image: '/images/places/south-coast.png' },
    { day: 13, title: 'Unawatuna Relaxation', description: 'Enjoy a relaxation day by the beach.', image: '/images/places/south-coast.png' },
    { day: 14, title: 'Departure', description: 'Return to the airport for departure.', image: '/images/places/colombo.jpg' },
  ],
  hotels: [],
},
{
  slug: 'sri-lanka-holiday-package-12-days',
  title: 'Sri Lanka Holiday Package 12 Days',
  subtitle: 'Tailor-made 12-Day Sri Lanka Holiday',
  durationDays: 12,
  price: 0,
  rating: 5,
  reviewCount: 0,
  heroImage: '/images/tours/misty-mountains/gallery-1.jpg',
  galleryImages: WONDER_GALLERY,
  region: 'Multiple Regions',
  activityTags: ['Cultural', 'Beach'],
  shortDescription:
  'A 12-day holiday package with cultural, hill country, coastal, and beach highlights across Sri Lanka.',
  highlights: [
    'Cultural Triangle and Kandy',
    'Tea-country and hill views',
    'Galle and south coast leisure',
  ],
  included: [
    'Private transport and airport transfers',
    'Accommodation with most meals',
    'English-speaking chauffeur',
  ],
  excluded: [
    'Flights and visas',
    'Entrance fees and activity charges',
    'Personal expenses and tips',
  ],
  itinerary: [
    { day: 1, title: 'Negombo Arrival', description: 'Arrival and stay in Negombo.', image: '/images/places/colombo.jpg' },
    { day: 2, title: 'Sigiriya', description: 'Travel to the Cultural Triangle and stay in Sigiriya.', image: '/images/places/sigiriya.webp' },
    { day: 3, title: 'Polonnaruwa & Minneriya', description: 'Ancient city visit and safari at Minneriya.', image: '/images/places/minneriya.jpg' },
    { day: 4, title: 'Sigiriya & Dambulla', description: 'Explore Sigiriya and Dambulla Cave Temple.', image: '/images/places/dambulla.jpg' },
    { day: 5, title: 'Kandy', description: 'Kandy culture, spice garden, and lake sightseeing.', image: '/images/places/kandy.jpg' },
    { day: 6, title: 'Nuwara Eliya', description: 'Tea plantation and Gregory Lake activities.', image: '/images/places/nuwara-eliya.jpg' },
    { day: 7, title: 'Nanu Oya to Ella', description: 'Scenic train from Nanu Oya to Ella.', image: '/images/places/ella.jpg' },
    { day: 8, title: 'Ella to Yala', description: 'Nine Arch Bridge and transfer to Yala.', image: '/images/places/yala-leopard.jpg' },
    { day: 9, title: 'Yala to Galle', description: 'Safari and coastal transfer to Galle.', image: '/images/places/galle-fort.webp' },
    { day: 10, title: 'Galle Fort', description: 'Galle Fort exploration and beach time.', image: '/images/places/galle-fort.webp' },
    { day: 11, title: 'South Coast Leisure', description: 'Beach or spa leisure along the south coast.', image: '/images/places/south-coast.png' },
    { day: 12, title: 'Departure', description: 'Return to the airport for departure.', image: '/images/places/colombo.jpg' },
  ],
  hotels: [],
},
{
  slug: 'sri-lanka-tour-package-10-days-2',
  title: 'Sri Lanka Tour Package 10 Days',
  subtitle: '10 Days of Relaxing, Exploring, and Learning',
  durationDays: 10,
  price: 0,
  rating: 5,
  reviewCount: 0,
  heroImage: '/images/tours/pearl-of-sri-lanka/gallery-1.jpg',
  galleryImages: PEARL_GALLERY,
  region: 'Multiple Regions',
  activityTags: ['Cultural', 'Beach'],
  shortDescription:
  'A ten-day exploratory package across Colombo, Sigiriya, Polonnaruwa, Kandy, Nuwara Eliya, Ella, Yala, Mirissa, Galle and Colombo.',
  highlights: [
    'Cultural monuments and historic sites',
    'Hill-country and nature',
    'Safari and coast.',
  ],
  included: [
    'Private transport and airport transfers',
    'Accommodation with meal arrangements',
    'English-speaking chauffeur',
  ],
  excluded: [
    'Flights and visas',
    'Entrance fees and optional activities',
    'Personal expenses and tips',
  ],
  itinerary: [
    { day: 1, title: 'Negombo', description: 'Arrival and coastal relaxation.', image: '/images/places/negombo.jpg' },
    { day: 2, title: 'Kitulgala & Kandy', description: 'Adventure in Kitulgala and transfer to Kandy.', image: '/images/places/kandy.jpg' },
    { day: 3, title: 'Kandy', description: 'Kandy cultural sightseeing.', image: '/images/places/kandy.jpg' },
    { day: 4, title: 'Kandy Continued', description: 'More Kandy experiences and markets.', image: '/images/places/kandy.jpg' },
    { day: 5, title: 'Nuwara Eliya', description: 'Tea country and hill station attractions.', image: '/images/places/nuwara-eliya.jpg' },
    { day: 6, title: 'Ella', description: 'Ella sightseeing and scenic views.', image: '/images/places/ella.jpg' },
    { day: 7, title: 'Yala', description: 'Yala National Park safari.', image: '/images/places/yala-leopard.jpg' },
    { day: 8, title: 'Mirissa', description: 'Mirissa beach and optional whale watching.', image: '/images/places/mirissa.jpg' },
    { day: 9, title: 'Mirissa Beach', description: 'Beach leisure on the south coast.', image: '/images/places/mirissa.jpg' },
    { day: 10, title: 'Departure', description: 'Transfer to airport for departure.', image: '/images/places/colombo.jpg' },
  ],
  hotels: [],
},
{
  slug: 'sri-lanka-holiday-package-10-days-2',
  title: 'Sri Lanka Holiday Package 10 Days',
  subtitle: '10-Day East and South Coast Explorer',
  durationDays: 10,
  price: 0,
  rating: 5,
  reviewCount: 0,
  heroImage: '/images/tours/charm-of-southern-coast/gallery-2.jpeg',
  galleryImages: CHARM_GALLERY,
  region: 'Multiple Regions',
  activityTags: ['Cultural', 'Beach'],
  shortDescription:
  'A 10-day package linking east and south coast highlights with cultural and beach experiences.',
  highlights: [
    'Trincomalee and eastern beaches',
    'Cultural Triangle visits',
    'South-coast leisure in Hikkaduwa and Galle',
  ],
  included: [
    'Private transport and airport transfers',
    'Accommodation and meal planning',
    'English-speaking chauffeur',
  ],
  excluded: [
    'Flights and visas',
    'Entrance and safari fees',
    'Personal expenses and tips',
  ],
  itinerary: [
    { day: 1, title: 'Negombo Arrival', description: 'Arrival and transfer to Negombo.', image: '/images/places/colombo.jpg' },
    { day: 2, title: 'Trincomalee', description: 'Transfer to the East Coast and beach time.', image: '/images/places/east-coast.jpg' },
    { day: 3, title: 'Trincomalee Leisure', description: 'Beach and water activities in Trincomalee.', image: '/images/places/east-coast.jpg' },
    { day: 4, title: 'Polonnaruwa & Sigiriya', description: 'Ancient city visit and Sigiriya exploration.', image: '/images/places/sigiriya.webp' },
    { day: 5, title: 'Pidurangala & Sigiriya', description: 'Visit Pidurangala and Sigiriya Rock Fortress.', image: '/images/places/sigiriya.webp' },
    { day: 6, title: 'Dambulla & Kandy', description: 'Dambulla temples and transfer to Kandy.', image: '/images/places/kandy.jpg' },
    { day: 7, title: 'Kandy', description: 'Sightseeing in Kandy and botanical gardens.', image: '/images/places/kandy.jpg' },
    { day: 8, title: 'Hikkaduwa', description: 'Transfer to the southwest coast and beach time.', image: '/images/places/south-coast.png' },
    { day: 9, title: 'Hikkaduwa Leisure', description: 'Beach activities and coastal relaxation.', image: '/images/places/south-coast.png' },
    { day: 10, title: 'Departure', description: 'Transfer to the airport for departure.', image: '/images/places/colombo.jpg' },
  ],
  hotels: [],
},
{
  slug: 'sri-lanka-tour-package-4-days',
  title: 'Sri Lanka Tour Package 04 Days',
  subtitle: 'How to Discover Sri Lanka in 4 Days',
  durationDays: 4,
  price: 0,
  rating: 5,
  reviewCount: 0,
  heroImage: '/images/tours/the-last-kingdom/gallery-1.jpg',
  galleryImages: COLOMBO_GALLERY,
  region: 'Multiple Regions',
  activityTags: ['Cultural', 'Beach'],
  shortDescription:
  'A compact four-day itinerary through Kandy, Nuwara Eliya, Bentota, and Colombo for a quick Sri Lanka introduction.',
  highlights: [
    'Kandy and hill country highlights',
    'Beach stop in Bentota',
    'Colombo departure',
  ],
  included: [
    'Private transport and airport transfers',
    'Accommodation and meals as listed',
    'English-speaking chauffeur',
  ],
  excluded: [
    'Flights and visas',
    'Entrance fees and extras',
    'Personal expenses and tips',
  ],
  itinerary: [
    { day: 1, title: 'Kandy Arrival', description: 'Arrival and transfer to Kandy.', image: '/images/places/colombo.jpg' },
    { day: 2, title: 'Nuwara Eliya', description: 'Tea-country day trip from Kandy.', image: '/images/places/nuwara-eliya.jpg' },
    { day: 3, title: 'Bentota', description: 'Transfer to Bentota for beach leisure.', image: '/images/places/bentota.jpg' },
    { day: 4, title: 'Colombo Departure', description: 'Transfer through Colombo and departure.', image: '/images/places/colombo.jpg' },
  ],
  hotels: [],
},
{
  slug: 'sri-lanka-holiday-package-5-days',
  title: 'Sri Lanka Holiday Package 05 Days',
  subtitle: 'How to Enjoy Sri Lanka in 5 Days',
  durationDays: 5,
  price: 0,
  rating: 5,
  reviewCount: 0,
  heroImage: '/images/tours/the-last-kingdom/gallery-2.jpg',
  galleryImages: COLOMBO_GALLERY,
  region: 'Multiple Regions',
  activityTags: ['Cultural'],
  shortDescription:
  'A five-day cultural holiday focused on the Cultural Triangle and Kandy with quick Sri Lanka highlights.',
  highlights: [
    'Cultural Triangle and Kandy',
    'Compact and focused sightseeing',
  ],
  included: [
    'Private transport and airport transfers',
    'Accommodation and meal arrangements',
    'English-speaking chauffeur',
  ],
  excluded: [
    'Flights and visas',
    'Entrance fees and optional activities',
    'Personal expenses and tips',
  ],
  itinerary: [
    { day: 1, title: 'Arrival & Cultural Triangle', description: 'Arrival at Bandaranaike Airport and transfer toward Sigiriya.', image: '/images/places/colombo.jpg' },
  ],
  hotels: [],
},
{
  slug: 'sri-lanka-tour-itinerary-7-days',
  title: 'Sri Lanka Tour Itinerary 7 Days',
  subtitle: 'Tailor-made 7-Day Sri Lanka Tour',
  durationDays: 7,
  price: 0,
  rating: 5,
  reviewCount: 0,
  heroImage: '/images/tours/misty-mountains/gallery-2.jpg',
  galleryImages: YALA_GALLERY,
  region: 'Multiple Regions',
  activityTags: ['Cultural', 'Adventure'],
  shortDescription:
  'A seven-day tailor-made itinerary through Kandy, Nuwara Eliya, Ella, Yala, Mirissa, Galle, and Colombo.',
  highlights: [
    'Hill country and safari',
    'Beach and city experiences',
  ],
  included: [
    'Private transport and airport transfers',
    'Accommodation and meal arrangements',
    'English-speaking chauffeur',
  ],
  excluded: [
    'Flights and visas',
    'Entrance fees and activity charges',
    'Personal expenses and tips',
  ],
  itinerary: [
    { day: 1, title: 'Kandy Arrival', description: 'Arrival and transfer to Kandy.', image: '/images/places/colombo.jpg' },
    { day: 2, title: 'Nuwara Eliya', description: 'Travel to the hill country for sightseeing.', image: '/images/places/nuwara-eliya.jpg' },
    { day: 3, title: 'Ella & Yala', description: 'Scenic travel toward Ella and Yala.', image: '/images/places/yala-leopard.jpg' },
    { day: 4, title: 'Yala to Mirissa', description: 'Yala safari and transfer to Mirissa.', image: '/images/places/mirissa.jpg' },
    { day: 5, title: 'Galle & Bentota', description: 'Galle sightseeing and transfer to Bentota.', image: '/images/places/bentota.jpg' },
    { day: 6, title: 'Colombo', description: 'Travel to Colombo and city tour.', image: '/images/places/colombo.jpg' },
    { day: 7, title: 'Departure', description: 'Airport transfer and departure.', image: '/images/places/colombo.jpg' },
  ],
  hotels: [],
},
{
  slug: 'sri-lanka-tour-itinerary-10-days',
  title: 'Sri Lanka Tour Itinerary 10 Days',
  subtitle: 'Tailor-made 10-Day Sri Lanka Tour',
  durationDays: 10,
  price: 0,
  rating: 5,
  reviewCount: 0,
  heroImage: '/images/tours/pearl-of-sri-lanka/gallery-2.jpg',
  galleryImages: PEARL_GALLERY,
  region: 'Multiple Regions',
  activityTags: ['Cultural', 'Beach'],
  shortDescription:
  'A ten-day tailor-made tour combining Kitulgala adventure, Kandy culture, Nuwara Eliya, Ella, Yala, Mirissa and Colombo.',
  highlights: [
    'Kitulgala and Kandy',
    'Hill country and safari',
    'Southern coast and departure',
  ],
  included: [
    'Private transport and airport transfers',
    'Accommodation and meals as listed',
    'English-speaking chauffeur',
  ],
  excluded: [
    'Flights and visas',
    'Entrance fees and activity charges',
    'Personal expenses and tips',
  ],
  itinerary: [
    { day: 1, title: 'Negombo', description: 'Arrival and transfer to Negombo.', image: '/images/places/negombo.jpg' },
    { day: 2, title: 'Kitulgala & Kandy', description: 'Adventure in Kitulgala and transfer to Kandy.', image: '/images/places/kandy.jpg' },
    { day: 3, title: 'Kandy', description: 'Kandy cultural sightseeing.', image: '/images/places/kandy.jpg' },
    { day: 4, title: 'Kandy Continued', description: 'More Kandy exploration.', image: '/images/places/kandy.jpg' },
    { day: 5, title: 'Nuwara Eliya', description: 'Tea-country and scenic attractions.', image: '/images/places/nuwara-eliya.jpg' },
    { day: 6, title: 'Ella', description: 'Ella sightseeing and scenic train region.', image: '/images/places/ella.jpg' },
    { day: 7, title: 'Yala', description: 'Yala safari experience.', image: '/images/places/yala-leopard.jpg' },
    { day: 8, title: 'Mirissa', description: 'Beach leisure in Mirissa.', image: '/images/places/mirissa.jpg' },
    { day: 9, title: 'Mirissa Leisure', description: 'Relaxation and optional whale watching.', image: '/images/places/mirissa.jpg' },
    { day: 10, title: 'Departure', description: 'Return to the airport for departure.', image: '/images/places/colombo.jpg' },
  ],
  hotels: [],
},
{
  slug: 'sri-lanka-holiday-package-10-days-3',
  title: 'Sri Lanka Holiday Package 10 Days',
  subtitle: 'Visual East to West Island Explorer',
  durationDays: 10,
  price: 0,
  rating: 5,
  reviewCount: 0,
  heroImage: '/images/tours/surfing/hero.avif',
  galleryImages: CHARM_GALLERY,
  region: 'Multiple Regions',
  activityTags: ['Cultural', 'Beach'],
  shortDescription:
  'A ten-day holiday linking Trincomalee, the Cultural Triangle, Kandy, Colombo and southwest coast highlights.',
  highlights: [
    'Trincomalee east coast beaches',
    'Cultural Triangle and Kandy',
    'South coast relaxation',
  ],
  included: [
    'Private transport and airport transfers',
    'Accommodation and meal arrangements',
    'English-speaking chauffeur',
  ],
  excluded: [
    'Flights and visas',
    'Entrance fees and optional activities',
    'Personal expenses and tips',
  ],
  itinerary: [
    { day: 1, title: 'Negombo', description: 'Arrival and transfer to Negombo.', image: '/images/places/negombo.jpg' },
    { day: 2, title: 'Trincomalee', description: 'East coast transfer and beach activities.', image: '/images/places/east-coast.jpg' },
    { day: 3, title: 'Trincomalee Leisure', description: 'Relax and enjoy water activities.', image: '/images/places/east-coast.jpg' },
    { day: 4, title: 'Polonnaruwa & Sigiriya', description: 'Historic sites and village experiences.', image: '/images/places/sigiriya.webp' },
    { day: 5, title: 'Dambulla & Kandy', description: 'Temple visits and transfer to Kandy.', image: '/images/places/kandy.jpg' },
    { day: 6, title: 'Kandy', description: 'Kandy cultural sightseeing.', image: '/images/places/kandy.jpg' },
    { day: 7, title: 'Hikkaduwa', description: 'Transfer to the southwest coast.', image: '/images/places/south-coast.png' },
    { day: 8, title: 'Hikkaduwa Leisure', description: 'Beach and water activities.', image: '/images/places/south-coast.png' },
    { day: 9, title: 'Colombo', description: 'Return to Colombo and city time.', image: '/images/places/colombo.jpg' },
    { day: 10, title: 'Departure', description: 'Airport transfer and departure.', image: '/images/places/colombo.jpg' },
  ],
  hotels: [],
},
{
  slug: 'sri-lanka-tour-package-4-days-2',
  title: 'Sri Lanka Tour Package 04 Days',
  subtitle: 'How to Discover Sri Lanka in 4 Days',
  durationDays: 4,
  price: 0,
  rating: 5,
  reviewCount: 0,
  heroImage: '/images/tours/colombo-city-tour/gallery-1.jpg',
  galleryImages: COLOMBO_GALLERY,
  region: 'Multiple Regions',
  activityTags: ['Cultural', 'Beach'],
  shortDescription:
  'A tight four-day tour across Kandy, Nuwara Eliya, Bentota and Colombo for first-time visitors.',
  highlights: [
    'Kandy and tea country',
    'South coast beach stop',
    'Colombo departure',
  ],
  included: [
    'Private transport and airport transfers',
    'Accommodation and meals as listed',
    'English-speaking chauffeur',
  ],
  excluded: [
    'Flights and visas',
    'Entrance fees and optional extras',
    'Personal expenses and tips',
  ],
  itinerary: [
    { day: 1, title: 'Kandy', description: 'Arrival and transfer to Kandy.', image: '/images/places/kandy.jpg' },
    { day: 2, title: 'Nuwara Eliya', description: 'Tea-country and scenic attractions.', image: '/images/places/nuwara-eliya.jpg' },
    { day: 3, title: 'Bentota', description: 'Beach leisure in Bentota.', image: '/images/places/bentota.jpg' },
    { day: 4, title: 'Colombo Departure', description: 'Transfer to Colombo and depart.', image: '/images/places/colombo.jpg' },
  ],
  hotels: [],
},
{
  slug: 'sri-lanka-holiday-package-5-days-2',
  title: 'Sri Lanka Holiday Package 05 Days',
  subtitle: 'Five-Day Cultural Holiday',
  durationDays: 5,
  price: 0,
  rating: 5,
  reviewCount: 0,
  heroImage: '/images/tours/misty-mountains-yala-safari/gallery-1.jpg',
  galleryImages: COLOMBO_GALLERY,
  region: 'Multiple Regions',
  activityTags: ['Cultural'],
  shortDescription:
  'A short cultural holiday with a focus on the Cultural Triangle and Kandy.',
  highlights: [
    'Cultural Triangle arrival',
    'Kandy and heritage sites',
  ],
  included: [
    'Private transport and airport transfers',
    'Accommodation and meals as listed',
    'English-speaking chauffeur',
  ],
  excluded: [
    'Flights and visas',
    'Entrance fees and optional activities',
    'Personal expenses and tips',
  ],
  itinerary: [
    { day: 1, title: 'Arrival & Sigiriya', description: 'Airport arrival and transfer toward the Cultural Triangle.', image: '/images/places/sigiriya.webp' },
  ],
  hotels: [],
},
];

// Improved auto-fill for itinerary images: prefer specific place images, then tour gallery, then hero.
// External image URLs (Dia Lanka) mapped to location keywords. These are used
// preferentially when available to provide accurate per-day photos.
// Location-accurate photos (downloaded from the Dia Lanka source list and
// hosted locally under /public/images/places for reliable production serving).
const EXTERNAL_IMAGE_MAP: Array<[RegExp, string[]]> = [
  [/\bcolombo\b/i, ['/images/places/colombo.jpg']],
  [/\bnegombo\b/i, ['/images/places/negombo.jpg']],
  [/\bsigiriya\b/i, ['/images/places/sigiriya.webp']],
  [/\bpidurangala\b/i, ['/images/places/pidurangala.jpg']],
  [/\bdambulla\b/i, ['/images/places/dambulla.jpg']],
  [/\bpolonnaruwa\b/i, ['/images/places/polonnaruwa.jpg']],
  [/\banuradhapura\b/i, ['/images/places/polonnaruwa.jpg']],
  [/\bkandy\b/i, ['/images/places/kandy.jpg']],
  [/\bnuwara eliya\b|\bhatton\b/i, ['/images/places/nuwara-eliya.jpg']],
  [/\bella\b/i, ['/images/places/ella.jpg']],
  [/\btrain\b|\bnanu oya\b/i, ['/images/places/train.jpg']],
  [/\byala\b/i, ['/images/places/yala-leopard.jpg']],
  [/\budawalawe\b/i, ['/images/places/udawalawe.jpg']],
  [/\bminneriya\b/i, ['/images/places/minneriya.jpg']],
  [/\bwilpattu\b/i, ['/images/places/wilpattu.jpg']],
  [/\bknuckles\b/i, ['/images/places/knuckles.jpg']],
  [/\bgalle\b/i, ['/images/places/galle-fort.webp']],
  [/\bmirissa\b|\bwhale\b/i, ['/images/places/mirissa.jpg']],
  [/\bbentota\b/i, ['/images/places/bentota.jpg']],
  [/\bkitulgala\b|\brafting\b/i, ['/images/places/kitulgala.webp']],
  [/\bsinharaja\b|\brainforest\b|\bloris\b|\bherping\b/i, ['/images/places/sinharaja.jpg']],
  [/\btrincomalee\b|\beast coast\b|\bpasikuda\b/i, ['/images/places/east-coast.jpg']],
  [/\bpinnawala\b/i, ['/images/places/udawalawe.jpg']],
  [/\bhikkaduwa\b/i, ['/images/places/mirissa.jpg']],
  [/\bunawatuna\b|\bdalawella\b|\bsouth coast\b/i, ['/images/places/south-coast.png']],
];

// Auto-fill missing itinerary images with suitable local images based on keywords.
const ITINERARY_IMAGE_MAP: Array<[RegExp, string[]]> = [
  [/\bgalle\b/i, [GALLE_HERO, CHARM_G1, CHARM_G2]],
  [/\bmirissa\b/i, [GALLE_HERO, GALLE_HERO]],
  [/\byala\b/i, [YALA_HERO, ...YALA_GALLERY]],
  [/\bella\b/i, [MISTY_HERO, MISTY_G1, MISTY_G2]],
  [/\bnine arch\b/i, [MISTY_G1, MISTY_HERO]],
  [/\bnuwara eliya\b/i, [MISTY_HERO, MISTY_G2]],
  [/\bkandy\b/i, [PEARL_HERO, PEARL_G1]],
  [/\bsigiriya\b/i, [KINGDOM_HERO, KINGDOM_G2]],
  [/\bdambulla\b/i, [KINGDOM_G2, KINGDOM_G3 || KINGDOM_G1]],
  [/\btrincomalee\b/i, [WHALE_HERO, WHALE_G1]],
  [/\bwhale\b/i, [WHALE_HERO, WHALE_G1]],
  [/\bnegombo\b/i, [FISHING_HERO, FISHING_G1]],
  [/\bpolonnaruwa\b/i, [PEARL_HERO]],
  [/\budawalawe\b/i, [YALA_HERO]],
  [/\bwilpattu\b/i, [YALA_HERO]],
  [/\bminneriya\b/i, [YALA_HERO]],
  [/\bpinnawala\b/i, [PEARL_HERO]],
  [/\bhikkaduwa\b/i, [GALLE_HERO]],
  [/\bbentota\b/i, [GALLE_HERO]],
  [/\bkitulgala\b/i, [PEARL_HERO]],
  [/\bravana\b/i, [MISTY_HERO]],
  [/\bmadu river\b/i, [GALLE_HERO]],
];

function chooseItineraryImage(dayTitle: string, dayDesc: string, tour?: Tour) {
  const text = `${dayTitle} ${dayDesc}`;

  // Prefer external Dia Lanka images when a keyword matches.
  for (const [pattern, imgs] of EXTERNAL_IMAGE_MAP) {
    if (pattern.test(text) && imgs && imgs.length) return imgs[0];
  }

  // Then prefer local matching images.
  for (const [pattern, imgs] of ITINERARY_IMAGE_MAP) {
    if (pattern.test(text)) {
      if (imgs && imgs.length) return imgs[0];
    }
  }

  // If no match, prefer the tour's gallery first, then hero, then default.
  if (tour) {
    if (Array.isArray(tour.galleryImages) && tour.galleryImages.length) return tour.galleryImages[0];
    if (tour.heroImage) return tour.heroImage;
  }

  return DEFAULT_HERO;
}

for (const t of tours) {
  if (Array.isArray(t.itinerary)) {
    t.itinerary = t.itinerary.map((d) => ({
      ...d,
      image: d.image && d.image !== DEFAULT_HERO ? d.image : chooseItineraryImage(d.title, d.description, t),
    }));
  }
}

// Prioritize external URL images for tour hero and gallery images.
function assignExternalAssetsToTours() {
  for (const t of tours) {
    const searchText = `${t.title} ${t.shortDescription} ${t.highlights?.join(' ') || ''} ${t.region}`;
    const matches: string[] = [];

    for (const [pattern, imgs] of EXTERNAL_IMAGE_MAP) {
      if (pattern.test(searchText)) {
        for (const u of imgs) {
          if (!matches.includes(u)) matches.push(u);
        }
      }
    }

    if (matches.length) {
      // Keep the high-res static hero image; use the location-accurate place
      // photos for the gallery so each tour shows its actual destinations.
      t.galleryImages = Array.from(new Set(matches)).slice(0, 8);
    } else {
      // No external match; ensure hero/gallery are non-empty and sensible
      if ((!t.heroImage || t.heroImage === DEFAULT_HERO) && Array.isArray(t.galleryImages) && t.galleryImages.length) {
        t.heroImage = t.galleryImages[0];
      }
      if (!Array.isArray(t.galleryImages) || t.galleryImages.length === 0) {
        t.galleryImages = [t.heroImage || DEFAULT_HERO];
      }
    }
  }
}

assignExternalAssetsToTours();

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}
