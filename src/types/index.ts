export type Currency = 'USD' | 'EUR' | 'LKR';

export interface DayItinerary {
  day: number;
  title: string;
  location: string;
  description: string;
  highlights: string[];
  stayName: string;
}

export interface Expedition {
  id: string;
  title: string;
  routeTitle: string;
  routeSub: string;
  durationDays: number;
  durationNights: number;
  priceUSD: number;
  rating: number;
  reviewsCount: number;
  image: string;
  badge?: string;
  style: 'highlands' | 'heritage' | 'ocean' | 'wildlife' | 'wellness';
  styleLabel: string;
  summary: string;
  fullOverview: string;
  seasonNotice: string;
  idealSeason: string;
  highlights: string[];
  inclusions: string[];
  days: DayItinerary[];
}

export interface Destination {
  id: string;
  name: string;
  region: string;
  number: string;
  kicker: string;
  heroImage: string;
  elevation: string;
  avgTemp: string;
  bestSeason: string;
  overview: string;
  features: {
    icon: string;
    title: string;
    desc: string;
  }[];
  insiderSecret: string;
  topStays: string[];
}

export interface Curator {
  id: string;
  name: string;
  role: string;
  specialty: string;
  region: string;
  image: string;
  bio: string;
  quotes: string;
  yearsExperience: number;
  expeditionsLed: number;
}

export interface RouteLeg {
  id: number;
  legNumber: number;
  title: string;
  subtitle: string;
  location: string;
  description: string;
  mapImage: string;
  perks: { icon: string; label: string }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  trip: string;
  initials: string;
  rating: number;
  avatarColor: string;
}
