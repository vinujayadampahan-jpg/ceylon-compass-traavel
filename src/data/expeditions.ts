import { Expedition, Destination, Curator, RouteLeg, Testimonial, Currency } from '../types';

export const EXPEDITIONS: Expedition[] = [
  {
    id: 'grand-ceylon-odyssey',
    title: 'The Grand Ceylon Odyssey',
    routeTitle: 'The Grand Ceylon Odyssey',
    routeSub: 'Sigiriya · Kandy · Ella · Yala · Mirissa',
    durationDays: 12,
    durationNights: 11,
    priceUSD: 3450,
    rating: 5.0,
    reviewsCount: 42,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGItE22Mt4vHpPqoL7gH8CznOFQiFBaIdUqAUd9_COtew5uDUgBQGc7sxXIp1HwxlWw-S_GvYLb_OHpeDYk9JQIdW-tYrBh3T6rvnKnaBwILlKpznwW0azRJwpLPt7TAWjkYLHeID57998EJjRbiYEq_u5xwTg6SBHA11yDi6zsLY_koP7IZPHNlNohHsCthoSMGGwQMg5uvmVnj16cyQhq8S0VMlN9INDRX0o5wTQABTE0O3zL-Wh9g',
    badge: 'Signature Expedition',
    style: 'heritage',
    styleLabel: 'Heritage & Deep Immersion',
    summary: 'The quintessential luxury loop: ancient citadel hot-air ballooning, the sacred Temple of the Tooth, private blue train cabins through mist, leopard safari in Yala block 1, and tranquil coastal restoration.',
    fullOverview: 'The Grand Ceylon Odyssey is our defining 12-day sovereign voyage across the teardrop isle. Connecting the dry-zone ancient kingdoms of the north-central plains with the temperate emerald spine of Ceylon’s high-altitude tea plantations, and concluding on the golden swell of the southern Indian Ocean bastions.',
    seasonNotice: 'Limited Season · November through May',
    idealSeason: 'Nov – May',
    highlights: [
      'Pre-dawn private ascent keys to Sigiriya Lion Rock prior to public gates opening',
      'First-class salon carriage tickets across Nine Arch Bridge British viaduct',
      'Exclusive sunrise leopard tracking safari with private tracker in Yala Sector 1',
      'Quiet low-noise catamaran whale encounters off Mirissa submarine trenches',
      'Rest in restored Geoffrey Bawa architectural masterworks and 19th-century planter tea estates'
    ],
    inclusions: [
      'Dedicated chauffeured climate-controlled private fleet with native scholar driver',
      'VIP tarmac concierge greeting at Bandaranaike International Airport (CMB)',
      'All private heritage site permits, hot-air balloon flight, and national park passes',
      'Daily gourmet planter breakfasts and curated dining experiences',
      'Carbon Neutral Ceylon certification pledge with mangrove reforestation certificate'
    ],
    days: [
      {
        day: 1,
        title: 'Arrival in Colombo & The Wallawwa',
        location: 'Colombo & Kotugoda',
        description: 'VIP airport tarmac greeting by our senior concierge. Private escort to a restored 200-year-old colonial manor house amidst tranquil tropical gardens.',
        highlights: ['VIP Tarmac Meet', 'Ayurvedic arrival foot ritual', 'Welcome Ceylon spice dinner'],
        stayName: 'The Wallawwa (Kotugoda)'
      },
      {
        day: 2,
        title: 'Journey to the Cultural Triangle & Dambulla Cave Temples',
        location: 'Dambulla & Sigiriya',
        description: 'Chauffeured transit into the heart of the dry zone. Private twilight exploration of Dambulla’s 2,000-year-old painted cave monasteries with our resident archaeologist.',
        highlights: ['Dambulla Golden Caves', 'Monastery mural decryption', 'Lakefront villa check-in'],
        stayName: 'Water Garden Sigiriya / Jetwing Vil Uyana'
      },
      {
        day: 3,
        title: 'Sigiriya Pre-Dawn Ascent & Minneriya Elephant Gathering',
        location: 'Sigiriya Rock & Minneriya',
        description: 'Ascend the 5th-century sky citadel in pre-dawn silence. In the afternoon, venture into the ancient Minneriya reservoir plains for the majestic Asian elephant gathering.',
        highlights: ['Exclusive dawn citadel gate access', 'Frescoes & Mirror Wall Sanskrit study', 'Private 4x4 open-top safari'],
        stayName: 'Water Garden Sigiriya'
      },
      {
        day: 4,
        title: 'Kandy Sacred Valley & Temple of the Tooth Privileges',
        location: 'Kandy',
        description: 'Drive past spice gardens into the sacred hill capital. Special closed-door ceremonial viewing of the Sacred Tooth Relic accompanied by royal temple custodians.',
        highlights: ['Private blessing ceremony', 'Peradeniya Royal Botanical Orchid pavilion', 'Dinner overlooking Kandy Lake'],
        stayName: 'The Kandy House'
      },
      {
        day: 5,
        title: 'Ascending into the Emerald Cloudline: Hatton Tea Terraces',
        location: 'Hatton & Bogawantalawa Valley',
        description: 'Winding scenic ascent to the Golden Valley of Ceylon tea. Stay in an authentic restored Scottish tea planter bungalow with crackling cedar fireplaces.',
        highlights: ['Private tea cupping with 4th-gen planter', 'Leopard Rock panoramic walk', 'Fireplace butler supper'],
        stayName: 'Ceylon Tea Trails - Castlereagh Bungalow'
      },
      {
        day: 6,
        title: 'The Blue Train: High Viaducts & Ella Cloud Forest',
        location: 'Ella',
        description: 'Board the vintage blue observation carriage traversing misty mountain valleys and the iconic 1921 British Nine Arch Bridge viaduct into Ella.',
        highlights: ['First-class private observation salon', 'Nine Arch Bridge scenic crossing', 'Highland sundowner at Little Adam’s Peak'],
        stayName: '98 Acres Resort & Spa / Ceylon Tea Trails'
      },
      {
        day: 7,
        title: 'Ella Rock Vista & Little Adam’s Peak Dawn Picnic',
        location: 'Ella Gap',
        description: 'Sunrise breakfast atop the southern highland escarpment overlooking vast valleys stretching toward the Indian Ocean, followed by Ravana falls forest trek.',
        highlights: ['Dawn ridge picnic with highland silver tips tea', 'Hidden cloud forest waterfall baths', 'Artisanal spice lunch'],
        stayName: '98 Acres Luxury Chalets'
      },
      {
        day: 8,
        title: 'Descent to the Wild: Yala Leopard Wilderness',
        location: 'Yala National Park',
        description: 'Descend through dry savannah scrublands into the kingdom of Sri Lankan leopards, sloth bears, and mugger crocodiles.',
        highlights: ['Luxury glamping beneath tamarind canopies', 'Twilight game drive with wildlife biologist', 'Starlit bush braai dinner'],
        stayName: 'Wild Coast Tented Lodge'
      },
      {
        day: 9,
        title: 'Dawn Leopard Track & Palatupana Coastal Dunes',
        location: 'Yala Block 1',
        description: 'Early morning expedition through restricted interior tracks tracking the highest density of leopards on earth, pausing at rugged sea boulders.',
        highlights: ['Private leopard tracker lead', 'Coastal bird sanctuary lagoons', 'Sundowner on dunes'],
        stayName: 'Wild Coast Tented Lodge'
      },
      {
        day: 10,
        title: 'The Southern Indian Ocean: Mirissa & Weligama Bay',
        location: 'Mirissa & Weligama',
        description: 'Drive along the sapphire southern coastline. Check into private cliffside suites overlooking peeling surf waves and coconut headlands.',
        highlights: ['Private beachfront coconut grove check-in', 'Sunset longboard surfing lesson', 'Fresh grilled jumbo king prawn feast'],
        stayName: 'Cape Weligama / Kahanda Kanda'
      },
      {
        day: 11,
        title: 'Silent Catamaran Whale Watching & Galle Dutch Fort',
        location: 'Mirissa & Galle Fort',
        description: 'Sail out onto deep oceanic drop-offs on an exclusive low-noise catamaran with a resident marine biologist. Afternoon walking tour of Galle Dutch UNESCO Fort.',
        highlights: ['Blue whale & spinner dolphin encounter', 'Private historian stroll on 17th-century ramparts', 'Dinner at Amangalla verandah'],
        stayName: 'Amangalla / Cape Weligama'
      },
      {
        day: 12,
        title: 'Geoffrey Bawa Lunuganga & Colombo Departure',
        location: 'Bentota & Colombo',
        description: 'Morning private stroll through architect Geoffrey Bawa’s country estate at Lunuganga. Coastal expressway transfer to Colombo for your return flight.',
        highlights: ['Architectural garden monograph tour', 'Chauffeured departure transfer', 'VIP lounge access'],
        stayName: 'Departure'
      }
    ]
  },
  {
    id: 'highland-mist-tea-heritage',
    title: 'Highland Mist & Tea Heritage',
    routeTitle: 'Highland Mist & Tea Heritage',
    routeSub: 'Colombo · Hatton · Nuwara Eliya · Ella',
    durationDays: 6,
    durationNights: 5,
    priceUSD: 1850,
    rating: 4.9,
    reviewsCount: 68,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7x1196oOkR48SKz1n20xoIX4PQIz8fnfZT2GAt_O11dwyEgpZu1NiFsbBTy2Mh7cOiJVy5N75ePKOjJCD3WR2E6aT-yYlrCSSTVbxWs3cpMrWrNL4frpo2cW8VYs7KRj0kO9rid3NOmlw69F3-BPJ5HD7FmjNUVhkRzMx4QkasUMU8EI2tMMmqNPX1i1_UCsUGay4GyhXKgAup8v6lmFLcLDJ6nJJsvUR4ei4DppSlq8MlcM1FdKnKg',
    badge: 'Highland Romance',
    style: 'highlands',
    styleLabel: 'Highlands & Tea Trails',
    summary: 'Dedicated slow-travel through the emerald tea terraces. Features first-class salon carriages over the Nine Arch Bridge, private tea blending workshops, and candlelit dinners beside cedar fireplaces.',
    fullOverview: 'Immerse yourself in the world of Ceylon tea planters, cool mountain breezes, high altitude eucalyptus trails, and historic colonial railways. Stay in authentic heritage tea bungalows with four-poster beds and butler service.',
    seasonNotice: 'Year-Round Bliss · Best Dec – April',
    idealSeason: 'Dec – Apr',
    highlights: [
      'Vintage colonial railway journey crossing the Nine Arch Bridge viaduct',
      'Private masterclass in artisanal orthodox single-estate tea plucking and grading',
      'Stay in original Scottish planter residences with croquet lawns and fireplaces',
      'Sunrise trek to Little Adam’s Peak followed by secluded champagne breakfast',
      'Exclusive access to century-old tea factory archives and cupping rooms'
    ],
    inclusions: [
      'Private Mercedes/Audi executive vehicle with native hill country scholar driver',
      'First-class scenic train tickets with priority reserved seating',
      'All heritage tea tastings, factory tours, and estate fees included',
      'Full daily planter board (Breakfast, Afternoon High Tea, Fireplace Dinners)',
      'Luggage porterage and direct station-to-bungalow transfers'
    ],
    days: [
      {
        day: 1,
        title: 'Colombo to the Bogawantalawa Tea Valley',
        location: 'Hatton & Castlereagh',
        description: 'Depart coastal Colombo ascending past cascading waterfalls into the heart of the high-altitude tea hills. Settle into a tranquil lakefront planter bungalow.',
        highlights: ['Scenic hill climb', 'Traditional English afternoon high tea', 'Cedar wood fire evening'],
        stayName: 'Ceylon Tea Trails'
      },
      {
        day: 2,
        title: 'The Art of Single-Estate Ceylon Tea',
        location: 'Castlereagh Valley',
        description: 'Walk through century-old Camellia sinensis bushes alongside expert tea pluckers. Tour a working 1890s factory and participate in an exclusive tasting cupping.',
        highlights: ['Two leaves and a bud harvesting', 'Orthodox fermentation study', 'Lake kayaking at sunset'],
        stayName: 'Ceylon Tea Trails'
      },
      {
        day: 3,
        title: 'Colonial Nuwara Eliya & Little England',
        location: 'Nuwara Eliya',
        description: 'Explore the highest town in Sri Lanka (1,868m). Stroll past the 1891 Hill Club, historic post office, and Lake Gregory framed by cypress trees.',
        highlights: ['Hill Club billiard room & archives', 'Pedro Tea Estate visit', 'Botanical Gardens Hakgala'],
        stayName: 'Heritance Tea Factory / The Grand Hotel'
      },
      {
        day: 4,
        title: 'The Great Mountain Railway & Nine Arch Bridge',
        location: 'Ella',
        description: 'Board the iconic blue train through tunnels cut by hand through sheer rock. Cross the Nine Arch Bridge viaduct into the bohemian mountain enclave of Ella.',
        highlights: ['Blue train observation carriage', 'Nine Arch viaduct photography', 'Ella gap sunset lounge'],
        stayName: '98 Acres Resort & Spa'
      },
      {
        day: 5,
        title: 'Ella Peak Ridges & Forest Waterfalls',
        location: 'Ella & Ravana Valley',
        description: 'Sunrise trek up Little Adam’s Peak with 360-degree vistas of the southern drop-off. Private afternoon dip in secluded freshwater pools along the Ravana trail.',
        highlights: ['Little Adam’s Peak sunrise', 'Natural freshwater bathing', 'Highland fusion degustation'],
        stayName: '98 Acres Resort & Spa'
      },
      {
        day: 6,
        title: 'Morning Highland Mist & Colombo Return',
        location: 'Ella to Colombo',
        description: 'Leisurely breakfast on the terrace watching the morning mist burn off the tea valley. Private chauffeured descent back to Colombo or southern beaches.',
        highlights: ['Final valley panorama', 'Bespoke souvenir tea hamper', 'Airport or beach drop-off'],
        stayName: 'Departure'
      }
    ]
  },
  {
    id: 'southern-ocean-wild-coast',
    title: 'Southern Ocean & Wild Coast',
    routeTitle: 'Southern Ocean & Wild Coast',
    routeSub: 'Galle Fort · Weligama · Mirissa · Yala',
    durationDays: 8,
    durationNights: 7,
    priceUSD: 2200,
    rating: 5.0,
    reviewsCount: 31,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAB5E_Y9NJZolSSZNTAC7mbXRF-hRIfGFZ9Pr7s0nJZeaFzZkFbN4MKNWAljKn0wCT8yMLiL9snyOxEdS8QPTcKSaBC5n2LsOFeTDnbwpDo86huBqpNsbc96VBknEQdIUikkhFXVoLWkvyY_3idKWn4AxwSywkVcFQ-k1NJhvzKkKawZgZaOTqdt_ZlnLeefTbEWjYZAYk0ZrgFfu20K5pHIixaf6in5Tzu9gsaL--lNeby14Yikeps6g',
    badge: 'Coastal Solitude',
    style: 'ocean',
    styleLabel: 'Coast & Marine Solitude',
    summary: 'Experience the sapphire maritime frontier: quiet whale watching off Mirissa on an exclusive catamaran, private surf tuition at dawn, cinnamon plantation walks, and luxury safari glamping tents.',
    fullOverview: 'The south of Sri Lanka is where the vast Indian Ocean crashes against 17th-century stone ramparts, coconut fringes, and untamed national parks. Experience private marine mammal expeditions, pristine beach coves, and colonial Dutch grandeur.',
    seasonNotice: 'Prime Ocean Conditions · November to April',
    idealSeason: 'Nov – Apr',
    highlights: [
      'Low-noise private catamaran charter tracking blue whales and dolphins off Mirissa',
      'Private guided architectural walking tour of Galle Dutch UNESCO Fort',
      'Dawn surfing in gentle protected bays with ISA-certified local instructors',
      'Private cinnamon peeling demonstration on a secret inland lake island',
      'Two full safari game drives in Yala National Park for leopards and elephants'
    ],
    inclusions: [
      'Private coastal vehicle with seasoned southern maritime specialist guide',
      'Private catamaran charter with certified marine biologist onboard',
      'All national park tracker fees, private 4WD safari jeeps, and entrance passes',
      'Daily coastal seafood feasts and private villa breakfasts',
      'Complimentary standup paddleboards and surf equipment'
    ],
    days: [
      {
        day: 1,
        title: 'Arrival in Colonial Galle Fort',
        location: 'Galle Fort',
        description: 'Arrive at the cobblestone streets of Galle Fort, an intact 400-year-old living fortress. Settle into a restored Dutch burgher residence.',
        highlights: ['Galle Fort rampart sunset stroll', 'Spiced arrack cocktail on the veranda', 'Dutch colonial architecture'],
        stayName: 'Amangalla / Fort Bazaar'
      },
      {
        day: 2,
        title: 'Galle Fort Heritage & Cinnamon Lake Safari',
        location: 'Galle & Koggala Lake',
        description: 'Morning walk with a local historian unearthing secret tunnels and spice merchant mansions. Afternoon wooden boat safari through Koggala lake to cinnamon island.',
        highlights: ['Rampart bastions & lighthouse', 'Fresh artisanal cinnamon harvesting', 'Lakeside birdwatching'],
        stayName: 'Fort Bazaar'
      },
      {
        day: 3,
        title: 'Weligama Bay Surf & Mirissa Clifftops',
        location: 'Weligama & Mirissa',
        description: 'Check into cliffside ocean villas. Gentle morning surf session on peeling sandy breaks followed by fresh young coconuts beneath palm trees.',
        highlights: ['Private surf lesson', 'Coconut hill panoramic walk', 'Fresh tuna tartare dinner'],
        stayName: 'Cape Weligama'
      },
      {
        day: 4,
        title: 'Deep Oceanic Blue Whale Encounter',
        location: 'Mirissa Marine Trench',
        description: 'Early morning private catamaran voyage 15 nautical miles offshore to the continental shelf where blue whales congregate to feed.',
        highlights: ['Marine biologist briefing', 'Sperm whale & dolphin pods', 'Catamaran breakfast on deck'],
        stayName: 'Cape Weligama'
      },
      {
        day: 5,
        title: 'Tangalle Secluded Coves & Sea Turtle Sanctuary',
        location: 'Tangalle & Rekawa',
        description: 'Travel further east along dramatic wild beaches. Night patrol with conservation naturalists witnessing giant sea turtles nesting on protected shores.',
        highlights: ['Wild cliff-backed beaches', 'Silent turtle nesting observation', 'Coastal Ayurveda spa treatment'],
        stayName: 'Amanwella'
      },
      {
        day: 6,
        title: 'Transition into the Wild: Yala National Park',
        location: 'Yala',
        description: 'Leave the surf behind and enter the wilderness borders of Yala. Afternoon safari tracking Asian elephants, hornbills, and leopards.',
        highlights: ['Transition into dry zone thorn scrub', 'Safari tracker escort', 'Open fire dinner under stars'],
        stayName: 'Wild Coast Tented Lodge'
      },
      {
        day: 7,
        title: 'Yala Deep Game Drives & Coastal Dunes',
        location: 'Yala Block 1 & 2',
        description: 'Dual game drives through Yala’s most remote tracks. Encounter sloth bears foraging for termites and leopards resting on granite inselbergs.',
        highlights: ['Dawn leopard tracking', 'Ancient Sithulpawwa rock monastery visit', 'Private bush barbecue'],
        stayName: 'Wild Coast Tented Lodge'
      },
      {
        day: 8,
        title: 'Final Coastal Sunrise & Return Transfer',
        location: 'Yala to Colombo',
        description: 'Savor one last tropical breakfast overlooking the Indian Ocean rollers before seamless private chauffeur transfer along the Southern Expressway.',
        highlights: ['Sunrise yoga over ocean', 'Expressway return transfer', 'Colombo departure farewell'],
        stayName: 'Departure'
      }
    ]
  },
  {
    id: 'cultural-triangle-sacred-kingdoms',
    title: 'Imperial Citadels & Sacred Kingdoms',
    routeTitle: 'Imperial Citadels & Sacred Kingdoms',
    routeSub: 'Anuradhapura · Polonnaruwa · Sigiriya · Kandy',
    durationDays: 7,
    durationNights: 6,
    priceUSD: 2450,
    rating: 4.95,
    reviewsCount: 38,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGItE22Mt4vHpPqoL7gH8CznOFQiFBaIdUqAUd9_COtew5uDUgBQGc7sxXIp1HwxlWw-S_GvYLb_OHpeDYk9JQIdW-tYrBh3T6rvnKnaBwILlKpznwW0azRJwpLPt7TAWjkYLHeID57998EJjRbiYEq_u5xwTg6SBHA11yDi6zsLY_koP7IZPHNlNohHsCthoSMGGwQMg5uvmVnj16cyQhq8S0VMlN9INDRX0o5wTQABTE0O3zL-Wh9g',
    badge: 'Archeological Deep Dive',
    style: 'heritage',
    styleLabel: 'Heritage & History',
    summary: 'Travel through 2,500 years of continuous Buddhist and royal civilization. Unearth the hydraulic engineering of ancient reservoir kings and walk silent stone courtyards before crowds arrive.',
    fullOverview: 'For historians and cultural connoisseurs. Venture beyond the standard itineraries to decipher Sanskrit inscriptions, explore lost monastic forests, and witness living rituals untouched by centuries.',
    seasonNotice: 'Ideal Season · Year-Round (Dry climate)',
    idealSeason: 'Jan – Sep',
    highlights: [
      'Pre-dawn private ascent to Sigiriya Lion Rock fortress',
      'Cycling the 10th-century medieval capital of Polonnaruwa with archaeological curator',
      'The sacred Jaya Sri Maha Bodhi tree in Anuradhapura (oldest recorded human-planted tree on Earth)',
      'Ritual ceremony at Temple of the Sacred Tooth Relic in Kandy',
      'Private hot-air balloon sunrise flight over the Kandalama tank and jungle canopy'
    ],
    inclusions: [
      'Private vehicle with dedicated archaeology and history scholar',
      'All archaeological permissions and VIP access keys',
      'Hot air balloon flight with champagne breakfast',
      'Boutique eco-luxury resort accommodation nestled in nature reserves'
    ],
    days: [
      {
        day: 1,
        title: 'Arrival to the Kingdom of Anuradhapura',
        location: 'Anuradhapura',
        description: 'Transit into Sri Lanka’s first grand capital (founded 4th century BCE). Evening blessing beside the colossal white dome of Ruwanwelisaya stupa.',
        highlights: ['Sacred Bodhi Tree blessing', 'Ruwanwelisaya stupa by oil lamps', 'Monastic meditation talk'],
        stayName: 'Ulagalla by Uga Escapes'
      },
      {
        day: 2,
        title: 'The Great Reservoirs & Monastic Forests of Ritigala',
        location: 'Ritigala & Anuradhapura',
        description: 'Explore ancient hydraulic sluice gates and trek into the mysterious jungle-swallowed ruins of Ritigala strict natural reserve.',
        highlights: ['Ritigala medicinal stone paths', 'Ancient irrigation technology study', 'Sunset over Tissa Wewa'],
        stayName: 'Ulagalla by Uga Escapes'
      },
      {
        day: 3,
        title: 'Sigiriya Pre-Dawn Ascent & Lion Staircase',
        location: 'Sigiriya',
        description: 'Climb 1,200 steps up King Kashyapa’s palace citadel before the public gates open. Gaze down upon mist rolling across symmetrical royal pleasure gardens.',
        highlights: ['Pre-dawn exclusive entry', 'Mirror wall poetry reading', 'Royal water gardens tour'],
        stayName: 'Water Garden Sigiriya'
      },
      {
        day: 4,
        title: 'Polonnaruwa Medieval Kingdom by Bicycle',
        location: 'Polonnaruwa',
        description: 'Cycle along shady pathways between colossal stone statues of the Buddha carved into sheer granite faces at Gal Vihara.',
        highlights: ['Gal Vihara stone carving mastery', 'Parakrama Samudra inland sea', 'Wild peacock sanctuaries'],
        stayName: 'Water Garden Sigiriya'
      },
      {
        day: 5,
        title: 'Dambulla Golden Cave Temples & Spice En Route',
        location: 'Dambulla & Matale',
        description: 'Ascend to the cave sanctuaries housing 153 Buddha statues beneath hand-painted ceilings. Continue through Matale organic vanilla and cardamom gardens.',
        highlights: ['Dambulla 1st-century BCE murals', 'Artisanal spice garden cupping', 'Traditional clay pot curry lunch'],
        stayName: 'The Kandy House'
      },
      {
        day: 6,
        title: 'Kandy Sacred Tooth Relic & Royal Valley',
        location: 'Kandy',
        description: 'Attend the morning puja ceremony at Sri Dalada Maligawa. Afternoon stroll through the Peradeniya Royal Botanic Gardens featuring towering Royal Palms.',
        highlights: ['Temple of the Tooth special access', 'Royal botanic gardens flora walk', 'High Kandyan drumming recital'],
        stayName: 'The Kandy House'
      },
      {
        day: 7,
        title: 'Bawa Masterpiece Kandalama & Return',
        location: 'Kandalama to Colombo',
        description: 'Explore Geoffrey Bawa’s legendary Heritance Kandalama integrated directly into the rock face before comfortable transfer to Colombo.',
        highlights: ['Bawa architecture tour', 'Final panoramic lunch', 'Airport VIP farewell'],
        stayName: 'Departure'
      }
    ]
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'cultural-triangle',
    name: 'Sigiriya & The Cultural Triangle',
    region: 'North Central Province',
    number: '01',
    kicker: 'Ancient Citadel & Hydraulic Wonders',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGItE22Mt4vHpPqoL7gH8CznOFQiFBaIdUqAUd9_COtew5uDUgBQGc7sxXIp1HwxlWw-S_GvYLb_OHpeDYk9JQIdW-tYrBh3T6rvnKnaBwILlKpznwW0azRJwpLPt7TAWjkYLHeID57998EJjRbiYEq_u5xwTg6SBHA11yDi6zsLY_koP7IZPHNlNohHsCthoSMGGwQMg5uvmVnj16cyQhq8S0VMlN9INDRX0o5wTQABTE0O3zL-Wh9g',
    elevation: '349m Peak',
    avgTemp: '28°C Amber Sunshine',
    bestSeason: 'Nov – May',
    overview: 'Surpassing common tours, Ceylon Compass guests enjoy pre-dawn private ascent keys before park gates open. Ascend 1,200 steps past ancient celestial frescoes and wind-sculpted royal water gardens beneath the soft morning amber haze.',
    features: [
      {
        icon: 'wb_twilight',
        title: 'Private Hot-Air Balloon Dawn Flyover',
        desc: 'Glide above the jungle canopy as elephants bathe in prehistoric irrigation reservoirs.'
      },
      {
        icon: 'menu_book',
        title: 'Historian-Accredited Walk',
        desc: 'Accompanied by a senior archaeologist decrypting ancient Sanskrit graffiti at the Mirror Wall.'
      },
      {
        icon: 'nature_people',
        title: 'Minneriya Elephant Gathering',
        desc: 'Witness up to 300 Asian elephants congregating on exposed lakebeds during the dry months.'
      }
    ],
    insiderSecret: 'Take the narrow hidden staircase on the western face at 5:45 AM. The temperature is 12 degrees cooler and the sunrise illuminates the royal throne with pure gold light.',
    topStays: ['Water Garden Sigiriya', 'Jetwing Vil Uyana', 'Ulagalla by Uga Escapes']
  },
  {
    id: 'highlands-ella',
    name: 'The Highland Mist: Ella & Tea Trails',
    region: 'Central Highlands',
    number: '02',
    kicker: 'Pekoe Trail & Cloud Forest Viaducts',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7x1196oOkR48SKz1n20xoIX4PQIz8fnfZT2GAt_O11dwyEgpZu1NiFsbBTy2Mh7cOiJVy5N75ePKOjJCD3WR2E6aT-yYlrCSSTVbxWs3cpMrWrNL4frpo2cW8VYs7KRj0kO9rid3NOmlw69F3-BPJ5HD7FmjNUVhkRzMx4QkasUMU8EI2tMMmqNPX1i1_UCsUGay4GyhXKgAup8v6lmFLcLDJ6nJJsvUR4ei4DppSlq8MlcM1FdKnKg',
    elevation: '1,041m Elevation',
    avgTemp: '19°C Average Mist Temp',
    bestSeason: 'Dec – Apr',
    overview: 'Traverse the iconic 1921 British viaduct woven through dense virgin cloud forests. Our private journeys secure reserved vintage observation salon seating, pairing scenic slow travel with personal visits to fourth-generation artisanal tea factories.',
    features: [
      {
        icon: 'train',
        title: 'Observation Salon Seating',
        desc: 'Private first-class carriage on the nostalgic blue locomotive over Nine Arch Bridge.'
      },
      {
        icon: 'local_cafe',
        title: 'Artisanal Tea Sommelier Cupping',
        desc: 'Walk hand-in-hand with 4th-generation planters across historic single-estate bush lines.'
      },
      {
        icon: 'fireplace',
        title: 'Colonial Fireplace Bungalows',
        desc: 'Retreat to restored Scottish planter estates with private fireplace butler service.'
      }
    ],
    insiderSecret: 'A private sunrise trail behind Little Adam’s Peak leads to a natural stone ledge where tea workers gather wild honey; our guides arrange an exclusive hot tea breakfast right here.',
    topStays: ['Ceylon Tea Trails (Castlereagh & Summerville)', '98 Acres Luxury Chalets', 'Heritance Tea Factory']
  },
  {
    id: 'southern-coast',
    name: 'The Golden Horizon: Mirissa & Galle',
    region: 'Southern Indian Ocean',
    number: '03',
    kicker: 'Marine Sanctuaries & Dutch Ramparts',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAB5E_Y9NJZolSSZNTAC7mbXRF-hRIfGFZ9Pr7s0nJZeaFzZkFbN4MKNWAljKn0wCT8yMLiL9snyOxEdS8QPTcKSaBC5n2LsOFeTDnbwpDo86huBqpNsbc96VBknEQdIUikkhFXVoLWkvyY_3idKWn4AxwSywkVcFQ-k1NJhvzKkKawZgZaOTqdt_ZlnLeefTbEWjYZAYk0ZrgFfu20K5pHIixaf6in5Tzu9gsaL--lNeby14Yikeps6g',
    elevation: 'Sea Level',
    avgTemp: '29°C Tropical Ocean Breeze',
    bestSeason: 'Nov – Apr',
    overview: 'Where warm turquoise rollers caress palm-fringed headlands and colonial Dutch bastions. Sail out onto deep oceanic drop-offs aboard private marine biologist catamarans or catch gentle longboard waves in sunset Weligama Bay.',
    features: [
      {
        icon: 'sailing',
        title: 'Ethical Blue Whale Expeditions',
        desc: 'Conducted at low-noise vessel speeds away from crowded commercial tour routes.'
      },
      {
        icon: 'dinner_dining',
        title: 'Cinnamon Coast Supper Club',
        desc: 'Private beachfront dining with king prawns and cinnamon-infused spiced rum curries.'
      },
      {
        icon: 'surfing',
        title: 'Dawn Surf & Longboard Coaching',
        desc: 'Gentle, warm Indian Ocean peeling waves with expert local instructors.'
      }
    ],
    insiderSecret: 'The southern ramparts of Galle Fort at 6:15 PM catch the maritime trade winds while street performers play traditional flute melodies as sunset paints the bastions copper.',
    topStays: ['Amangalla (Galle Fort)', 'Cape Weligama', 'Kahanda Kanda']
  }
];

export const ROUTE_LEGS: RouteLeg[] = [
  {
    id: 1,
    legNumber: 1,
    title: 'Leg 1: Sigiriya Fortress & Cultural Triangle',
    subtitle: 'Ancient imperial rock & Minneriya elephant gather',
    location: 'Sigiriya, Sri Lanka',
    description: 'Day 1-3: Dawn climb of the 5th-century UNESCO citadel, cycling through prehistoric irrigation reservoirs, and royal water gardens.',
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoNKshOmITcqYi7Tj2dvo9TPxz0BG7XxoYpqFxRGpo-b21tOb2IlbGozP0oBT-fYA1Po0CzVDlu7CpDvC8d7W-FZkOcJmPUODJkLFZj5pA8ulfpiIooWI3TWNkPT78AraPJPWyULTG2uAtlYJub4y-bJWEqJUc___6huYkF-M6U7_81R3Ki9bECtgcFQ3DVlmBhNvhonJ5kRpRYdRVM_pS-RcKdu6fS2oUiWzRrJKNXInh6htNzjGrGg',
    perks: [
      { icon: 'directions_car', label: 'Private Chauffeur Included' },
      { icon: 'hotel', label: '5-Star Heritage Villa' },
      { icon: 'verified_user', label: 'SLTDA Certified Guide' }
    ]
  },
  {
    id: 2,
    legNumber: 2,
    title: 'Leg 2: The Ella Highland Tea Route',
    subtitle: 'Nine Arch Bridge rail & high-altitude planters bungalows',
    location: 'Ella, Sri Lanka',
    description: 'Day 4-6: Colonial railway journey over Nine Arch Bridge, misty ridge walks along Little Adam’s Peak, and estate tea harvest.',
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7x1196oOkR48SKz1n20xoIX4PQIz8fnfZT2GAt_O11dwyEgpZu1NiFsbBTy2Mh7cOiJVy5N75ePKOjJCD3WR2E6aT-yYlrCSSTVbxWs3cpMrWrNL4frpo2cW8VYs7KRj0kO9rid3NOmlw69F3-BPJ5HD7FmjNUVhkRzMx4QkasUMU8EI2tMMmqNPX1i1_UCsUGay4GyhXKgAup8v6lmFLcLDJ6nJJsvUR4ei4DppSlq8MlcM1FdKnKg',
    perks: [
      { icon: 'train', label: '1st Class Salon Carriage' },
      { icon: 'fireplace', label: 'Restored Planter Bungalow' },
      { icon: 'local_cafe', label: 'Tea Sommelier Tasting' }
    ]
  },
  {
    id: 3,
    legNumber: 3,
    title: 'Leg 3: Southern Indian Ocean Sanctuary',
    subtitle: 'Marine dolphin sanctuary & coconut palm headlands',
    location: 'Mirissa Beach, Sri Lanka',
    description: 'Day 7-10: Blue whale watching aboard private silent catamaran, secluded Weligama surf sessions, and Galle Fort sunset strolls.',
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAB5E_Y9NJZolSSZNTAC7mbXRF-hRIfGFZ9Pr7s0nJZeaFzZkFbN4MKNWAljKn0wCT8yMLiL9snyOxEdS8QPTcKSaBC5n2LsOFeTDnbwpDo86huBqpNsbc96VBknEQdIUikkhFXVoLWkvyY_3idKWn4AxwSywkVcFQ-k1NJhvzKkKawZgZaOTqdt_ZlnLeefTbEWjYZAYk0ZrgFfu20K5pHIixaf6in5Tzu9gsaL--lNeby14Yikeps6g',
    perks: [
      { icon: 'sailing', label: 'Private Catamaran' },
      { icon: 'beach_access', label: 'Beachfront Clifftop Villa' },
      { icon: 'dinner_dining', label: 'Cinnamon Coast Seafood' }
    ]
  }
];

export const CURATORS: Curator[] = [
  {
    id: 'nalinda',
    name: 'Nalinda Senanayake',
    role: 'Senior Archaeologist & Cultural Historian',
    specialty: 'Ancient Hydraulic Engineering & Buddhist Epigraphy',
    region: 'Cultural Triangle & Sigiriya',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'Former consultant to the Central Cultural Fund of Sri Lanka with over 22 years of field excavations at Sigiriya, Anuradhapura, and Polonnaruwa. Nalinda deciphers 1,500-year-old graffiti and opens doors to non-public chambers.',
    quotes: '“Sigiriya is not merely a rock citadel; it is an astronomical poem written in stone and gravity.”',
    yearsExperience: 22,
    expeditionsLed: 340
  },
  {
    id: 'aruni',
    name: 'Dr. Aruni Jayawardena',
    role: 'Cetacean Marine Biologist',
    specialty: 'Blue Whale Acoustics & Southern Ocean Ecology',
    region: 'Mirissa & Southern Coast',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    bio: 'PhD from the University of Southampton with extensive research on the non-migratory northern Indian Ocean blue whale population. Aruni leads our ethical, low-impact private sea expeditions.',
    quotes: '“Our blue whales stay in Sri Lankan waters year-round due to the deep underwater canyons right off Mirissa.”',
    yearsExperience: 16,
    expeditionsLed: 210
  },
  {
    id: 'ruwan',
    name: 'Ruwan Wijesinghe',
    role: 'Master Tea Planter & Botanist',
    specialty: 'High-Altitude Orthodox Single-Estate Cultivation',
    region: 'Ella, Hatton & Bogawantalawa',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    bio: '4th-generation tea planter raised among the emerald slopes of the Golden Valley. Ruwan teaches our guests the nuances of floral notes, high elevation mist, and traditional wood-fired withering.',
    quotes: '“A cup of real Ceylon high-grown tea tastes of mountain mist, eucalyptus breeze, and morning dew.”',
    yearsExperience: 28,
    expeditionsLed: 420
  },
  {
    id: 'tharindu',
    name: 'Tharindu Perera',
    role: 'Master Wildlife Tracker & Conservationist',
    specialty: 'Leopard Behaviour & Asian Elephant Ethology',
    region: 'Yala & Wilpattu National Parks',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    bio: 'Native of the southeastern forest fringes, Tharindu was trained from youth in reading paw prints, alarm calls, and scent marks. He is an advisor to the Wildlife and Nature Protection Society (WNPS).',
    quotes: '“When the jungle goes suddenly silent in Yala, you do not need to look around; you just need to look up.”',
    yearsExperience: 18,
    expeditionsLed: 510
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'Standing atop Sigiriya before the gates opened was pure magic. Our guide, Nalinda, wasn’t just a driver; his deep knowledge of ancient hydraulic engineering brought the ruins alive.',
    author: 'Eleanor & Henry Vance',
    location: 'London, UK',
    trip: 'Grand Ceylon 14-Day',
    initials: 'EH',
    rating: 5,
    avatarColor: 'bg-primary-container text-on-primary'
  },
  {
    id: '2',
    quote: 'The blue train through Nine Arch Bridge was spectacular, but what truly distinguished Ceylon Compass was the private tea bungalow in Hatton. Seamless, gracious, and utterly authentic.',
    author: 'Marcus Lindqvist',
    location: 'Stockholm, Sweden',
    trip: 'Highland Mist 8-Day',
    initials: 'ML',
    rating: 5,
    avatarColor: 'bg-secondary text-surface'
  },
  {
    id: '3',
    quote: 'Watching blue whales in Mirissa on a quiet private catamaran without thirty loud diesel boats around us was worth every single penny. Ethical, thoughtful luxury at its finest.',
    author: 'Sarah Chen',
    location: 'Singapore',
    trip: 'Southern Wild Coast 7-Day',
    initials: 'SC',
    rating: 5,
    avatarColor: 'bg-tertiary-container text-on-tertiary'
  }
];

export const CURRENCY_RATES = {
  USD: { symbol: '$', rate: 1.0, label: 'USD ($)' },
  EUR: { symbol: '€', rate: 0.92, label: 'EUR (€)' },
  LKR: { symbol: 'Rs ', rate: 305.0, label: 'LKR (Rs)' }
};

export function formatPrice(usdAmount: number, currency: Currency): string {
  const config = CURRENCY_RATES[currency];
  const converted = Math.round(usdAmount * config.rate);
  return `${config.symbol}${converted.toLocaleString()}`;
}
