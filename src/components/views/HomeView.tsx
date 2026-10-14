import React, { useState } from 'react';
import { Expedition, Currency, RouteLeg } from '../../types';
import { EXPEDITIONS, ROUTE_LEGS, TESTIMONIALS, formatPrice } from '../../data/expeditions';

interface HomeViewProps {
  currency: Currency;
  onSelectExpedition: (exp: Expedition) => void;
  onNavigate: (view: string, filter?: string) => void;
  onOpenConsultation: () => void;
  onOpenPlanModal: () => void;
  onToggleAudio: () => void;
  isPlayingAudio: boolean;
}

export const HomeView: React.FC<HomeViewProps> = ({
  currency,
  onSelectExpedition,
  onNavigate,
  onOpenConsultation,
  onOpenPlanModal,
  onToggleAudio,
  isPlayingAudio,
}) => {
  // Expedition finder state
  const [selectedStyle, setSelectedStyle] = useState('highlands');
  const [selectedDuration, setSelectedDuration] = useState('medium');
  const [selectedTravelers, setSelectedTravelers] = useState('couple');

  // Interactive Route Simulation State
  const [activeLegId, setActiveLegId] = useState<number>(1);
  const activeLeg: RouteLeg = ROUTE_LEGS.find((l) => l.id === activeLegId) || ROUTE_LEGS[0];

  // Carousel pagination for Handcrafted Expeditions
  const [carouselIndex, setCarouselIndex] = useState(0);
  const displayedExpeditions = EXPEDITIONS.slice(carouselIndex, carouselIndex + 3);

  const handleNextExpeditions = () => {
    if (carouselIndex + 3 < EXPEDITIONS.length) {
      setCarouselIndex(carouselIndex + 1);
    } else {
      setCarouselIndex(0);
    }
  };

  const handlePrevExpeditions = () => {
    if (carouselIndex > 0) {
      setCarouselIndex(carouselIndex - 1);
    } else {
      setCarouselIndex(Math.max(0, EXPEDITIONS.length - 3));
    }
  };

  const handleFinderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('signature-journeys', selectedStyle);
  };

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION: CINEMATIC DUAL-PANE & EXPEDITION FINDER */}
      <section className="relative w-full -mt-20 pt-20 bg-[#012d1d] overflow-hidden text-white">
        {/* Atmospheric Ambient Glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#765a05]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-[#c1ecd4]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-[1320px] mx-auto px-5 lg:px-12 pt-12 pb-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
            {/* Hero Left Column: Editorial Statement */}
            <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md mb-6 border border-white/5">
                <span className="w-2 h-2 rounded-full bg-[#ffdf96] animate-pulse"></span>
                <span className="text-xs tracking-widest uppercase text-[#ffdf96] font-bold">
                  Local Curators · Sri Lanka
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.5rem] text-white mb-6 leading-[1.12] tracking-tight font-semibold">
                We Are Your Local Compass to the Real Ceylon
              </h1>

              <p className="text-base sm:text-lg text-[#86af99] max-w-xl mb-10 leading-relaxed">
                From the ancient stone fortress of Sigiriya rising above the jungle mist, to the nostalgic morning blue train crossing Ella&apos;s tea hills and the golden sunset rollers of Mirissa—we guide you deep into the authentic soul of Sri Lanka.
              </p>

              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <a
                  href="#expedition-finder"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#765a05] text-white text-base font-semibold hover:bg-[#ffdf96] hover:text-[#012d1d] transition-all duration-300 shadow-xl group cursor-pointer"
                >
                  <span>Craft My Bespoke Journey</span>
                  <span className="material-symbols-outlined text-[1.25rem] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>

                <button
                  type="button"
                  onClick={onToggleAudio}
                  className="inline-flex items-center gap-3 px-6 py-4 rounded-lg bg-white/10 hover:bg-white/15 text-white backdrop-blur-md text-base font-semibold transition-all cursor-pointer border border-white/10"
                >
                  <span className="w-8 h-8 rounded-full bg-[#765a05] text-white flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[1.125rem]">
                      {isPlayingAudio ? 'pause' : 'play_arrow'}
                    </span>
                  </span>
                  <span>{isPlayingAudio ? 'Pause Soundscape' : 'Listen to Ceylon Dispatches'}</span>
                </button>
              </div>

              {/* Trust Badges Inline */}
              <div className="flex items-center gap-6 mt-12 pt-8 border-t border-white/10 w-full">
                <div>
                  <div className="flex items-center gap-1 text-[#ffdf96] mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                    <span className="text-base text-white ml-1.5 font-bold">4.98</span>
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-[#86af99] font-medium">
                    Condé Nast Traveler Choice
                  </span>
                </div>
                <div className="h-8 w-px bg-white/10"></div>
                <div>
                  <span className="font-serif text-2xl text-white block font-bold leading-none">
                    100%
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-[#86af99] mt-1 block font-medium">
                    Native Naturalist Led
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Right Column: Cinematic Frame Overlays */}
            <div className="lg:col-span-6 relative mt-8 lg:mt-0">
              <div
                onClick={() => onSelectExpedition(EXPEDITIONS[1])}
                className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group cursor-pointer border border-white/10"
              >
                <img
                  alt="Nine Arch Bridge Train Sri Lanka"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7x1196oOkR48SKz1n20xoIX4PQIz8fnfZT2GAt_O11dwyEgpZu1NiFsbBTy2Mh7cOiJVy5N75ePKOjJCD3WR2E6aT-yYlrCSSTVbxWs3cpMrWrNL4frpo2cW8VYs7KRj0kO9rid3NOmlw69F3-BPJ5HD7FmjNUVhkRzMx4QkasUMU8EI2tMMmqNPX1i1_UCsUGay4GyhXKgAup8v6lmFLcLDJ6nJJsvUR4ei4DppSlq8MlcM1FdKnKg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#012d1d]/85 via-transparent to-transparent"></div>

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#f6fbf5]/95 backdrop-blur-xl text-[#181d1a] shadow-xl flex items-center justify-between border border-white/40">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#1b4332] text-white flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[1.25rem]">train</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#765a05] font-bold block">
                        Signature Route · Fall 2025
                      </span>
                      <p className="text-sm font-bold text-[#012d1d]">
                        The Highland Cloud Odyssey · 7 Days
                      </p>
                    </div>
                  </div>
                  <span className="text-xs bg-[#ffd87c] text-[#795d08] px-3 py-1 rounded-full font-bold hidden sm:inline-block">
                    Limited Season
                  </span>
                </div>
              </div>

              {/* Secondary Overlapping Floating Photo Card */}
              <div
                onClick={() => onSelectExpedition(EXPEDITIONS[0])}
                className="hidden xl:flex items-center gap-3 absolute -bottom-10 -left-10 bg-white p-3 rounded-xl shadow-2xl text-[#181d1a] max-w-xs border border-[#012d1d]/10 cursor-pointer hover:-translate-y-1 transition-transform"
              >
                <img
                  alt="Sigiriya Sunrise Vista"
                  className="w-16 h-16 rounded-lg object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGItE22Mt4vHpPqoL7gH8CznOFQiFBaIdUqAUd9_COtew5uDUgBQGc7sxXIp1HwxlWw-S_GvYLb_OHpeDYk9JQIdW-tYrBh3T6rvnKnaBwILlKpznwW0azRJwpLPt7TAWjkYLHeID57998EJjRbiYEq_u5xwTg6SBHA11yDi6zsLY_koP7IZPHNlNohHsCthoSMGGwQMg5uvmVnj16cyQhq8S0VMlN9INDRX0o5wTQABTE0O3zL-Wh9g"
                />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#765a05] font-bold">
                    Cultural Wonder
                  </span>
                  <p className="text-xs text-[#181d1a] font-bold line-clamp-1">
                    Sigiriya Lion Rock at Dawn
                  </p>
                  <div className="flex items-center text-[11px] text-[#414844] gap-1 mt-0.5">
                    <span className="material-symbols-outlined text-[0.875rem] text-[#765a05]">
                      wb_sunny
                    </span>
                    <span>Private Hot Air Balloon flyover</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Expedition Finder Widget */}
          <div
            id="expedition-finder"
            className="w-full bg-white rounded-2xl p-6 lg:p-8 text-[#181d1a] shadow-2xl relative z-20 -mb-28 border border-[#012d1d]/10"
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-5 mb-5 border-b border-[#ebefea]">
              <div>
                <span className="text-xs tracking-widest uppercase text-[#765a05] font-bold block">
                  Expedition Curators
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#012d1d] font-bold">
                  Discover Your Tailored Island Itinerary
                </h3>
              </div>
              <div className="flex items-center gap-2 text-[#414844] text-xs">
                <span className="material-symbols-outlined text-[1.125rem] text-[#765a05]">
                  verified
                </span>
                <span>All private routes customized by resident Colombo scholars</span>
              </div>
            </div>

            <form
              onSubmit={handleFinderSubmit}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end"
            >
              {/* Style Select */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-wider text-[#414844] font-bold">
                  Travel Style
                </label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-[#765a05] text-[1.25rem]">
                    travel_explore
                  </span>
                  <select
                    value={selectedStyle}
                    onChange={(e) => setSelectedStyle(e.target.value)}
                    className="w-full bg-[#f0f5f0] text-[#181d1a] text-xs sm:text-sm pl-10 pr-8 py-3 rounded-lg outline-none cursor-pointer focus:bg-[#ebefea] transition-all border border-[#dfe4df]"
                  >
                    <option value="highlands">Highlands &amp; Tea Trails (Ella, Nuwara Eliya)</option>
                    <option value="heritage">Heritage &amp; History (Sigiriya, Polonnaruwa)</option>
                    <option value="ocean">Coast &amp; Marine Solitude (Mirissa, Weligama)</option>
                    <option value="wildlife">Big Game Safari (Yala, Wilpattu)</option>
                    <option value="wellness">Ayurvedic Sanctuary &amp; Forest Yoga</option>
                  </select>
                </div>
              </div>

              {/* Duration Select */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-wider text-[#414844] font-bold">
                  Expedition Duration
                </label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-[#765a05] text-[1.25rem]">
                    calendar_month
                  </span>
                  <select
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(e.target.value)}
                    className="w-full bg-[#f0f5f0] text-[#181d1a] text-xs sm:text-sm pl-10 pr-8 py-3 rounded-lg outline-none cursor-pointer focus:bg-[#ebefea] transition-all border border-[#dfe4df]"
                  >
                    <option value="short">5 – 7 Days (Highlights)</option>
                    <option value="medium">8 – 11 Days (Deep Island Immersion)</option>
                    <option value="extended">12 – 16 Days (The Grand Ceylon)</option>
                    <option value="custom">17+ Days (Bespoke Private Residence)</option>
                  </select>
                </div>
              </div>

              {/* Travelers */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-wider text-[#414844] font-bold">
                  Travelers
                </label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-[#765a05] text-[1.25rem]">
                    group
                  </span>
                  <select
                    value={selectedTravelers}
                    onChange={(e) => setSelectedTravelers(e.target.value)}
                    className="w-full bg-[#f0f5f0] text-[#181d1a] text-xs sm:text-sm pl-10 pr-8 py-3 rounded-lg outline-none cursor-pointer focus:bg-[#ebefea] transition-all border border-[#dfe4df]"
                  >
                    <option value="couple">2 Travelers (Private Chauffeured Saloon)</option>
                    <option value="solo">Solo Explorer (Dedicated Scholar Guide)</option>
                    <option value="family">Family / Group (Exclusive Private Estate Mini-Coach)</option>
                    <option value="charter">Private Villa Buyout (Up to 12)</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full bg-[#012d1d] text-white hover:bg-[#1b4332] font-semibold text-sm py-3.5 rounded-lg transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span className="material-symbols-outlined text-[1.25rem]">search</span>
                <span>Find Curated Routes</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION SPACER FOR FLOATING FINDER */}
      <div className="w-full h-24 lg:h-28 bg-[#f6fbf5]"></div>

      {/* THREE PILLAR SHOWCASES: THE CORE ICONIC PROMPTS */}
      <section className="max-w-[1320px] mx-auto px-5 lg:px-12 py-16">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e5e9e4] text-[#765a05] text-xs uppercase tracking-widest font-bold mb-3">
            <span>Three Geographies · One Island</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.5rem] text-[#012d1d] font-bold mb-4">
            The Iconic Pillars of Ceylon
          </h2>
          <p className="text-base text-[#414844] leading-relaxed">
            Sri Lanka compresses millennia of ancient empire, misty colonial tea hills, and pristine turquoise oceans within hours of each other. Experience them through privileged access.
          </p>
        </div>

        {/* Pillar 1: Sigiriya Lion Rock */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-28">
          <div className="lg:col-span-7 relative group">
            <div className="overflow-hidden rounded-2xl shadow-xl aspect-[16/10] border border-[#012d1d]/10">
              <img
                alt="Sigiriya Rock Fortress at Golden Dawn"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGItE22Mt4vHpPqoL7gH8CznOFQiFBaIdUqAUd9_COtew5uDUgBQGc7sxXIp1HwxlWw-S_GvYLb_OHpeDYk9JQIdW-tYrBh3T6rvnKnaBwILlKpznwW0azRJwpLPt7TAWjkYLHeID57998EJjRbiYEq_u5xwTg6SBHA11yDi6zsLY_koP7IZPHNlNohHsCthoSMGGwQMg5uvmVnj16cyQhq8S0VMlN9INDRX0o5wTQABTE0O3zL-Wh9g"
              />
            </div>
            <div className="absolute top-4 left-4 bg-[#f6fbf5]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[#765a05] text-xs tracking-wider uppercase font-bold shadow-sm border border-black/5">
              5th Century Wonder · UNESCO World Heritage
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start lg:pl-4">
            <span className="text-xs uppercase tracking-widest text-[#765a05] font-bold mb-2">
              01 / The Cultural Triangle
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#012d1d] font-bold mb-4 leading-tight">
              The Ancient Citadel: Sigiriya Lion Rock
            </h3>
            <p className="text-sm sm:text-base text-[#414844] mb-6 leading-relaxed">
              Surpassing common tours, Ceylon Compass guests enjoy pre-dawn private ascent keys before park gates open. Ascend 1,200 steps past ancient celestial frescoes and wind-sculpted royal water gardens beneath the soft morning amber haze.
            </p>

            {/* Feature Points */}
            <div className="space-y-3 mb-8 w-full">
              <div className="flex items-start gap-3 p-3.5 bg-[#f0f5f0] rounded-xl border border-[#dfe4df]">
                <span className="material-symbols-outlined text-[#765a05] shrink-0 mt-0.5">
                  wb_twilight
                </span>
                <div>
                  <span className="font-bold text-sm text-[#012d1d] block">
                    Private Hot-Air Balloon Dawn Flyover
                  </span>
                  <span className="text-xs text-[#414844] leading-relaxed">
                    Glide above the jungle canopy as elephants bathe in prehistoric irrigation reservoirs.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-[#f0f5f0] rounded-xl border border-[#dfe4df]">
                <span className="material-symbols-outlined text-[#765a05] shrink-0 mt-0.5">
                  menu_book
                </span>
                <div>
                  <span className="font-bold text-sm text-[#012d1d] block">
                    Historian-Accredited Walk
                  </span>
                  <span className="text-xs text-[#414844] leading-relaxed">
                    Accompanied by a senior archaeologist decrypting ancient Sanskrit graffiti at the Mirror Wall.
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={() => onNavigate('iconic-destinations')}
                className="px-5 py-3 rounded-lg bg-[#012d1d] text-white text-sm font-semibold hover:bg-[#1b4332] transition-all cursor-pointer shadow-md"
                type="button"
              >
                Explore Cultural Triangle
              </button>
              <span className="text-xs text-[#717973] font-medium">Ideal Season: Nov – May</span>
            </div>
          </div>
        </div>

        {/* Pillar 2: Ella & Nine Arch Bridge (Reversed Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-28">
          <div className="lg:col-span-5 flex flex-col items-start lg:pr-4 order-2 lg:order-1">
            <span className="text-xs uppercase tracking-widest text-[#765a05] font-bold mb-2">
              02 / The Hill Country
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#012d1d] font-bold mb-4 leading-tight">
              The Highland Mist: Ella &amp; The Ceylon Tea Line
            </h3>
            <p className="text-sm sm:text-base text-[#414844] mb-6 leading-relaxed">
              Traverse the iconic 1921 British viaduct woven through dense virgin cloud forests. Our private journeys secure reserved vintage observation salon seating, pairing scenic slow travel with personal visits to fourth-generation artisanal tea factories.
            </p>

            {/* Statistics Badges */}
            <div className="grid grid-cols-3 gap-3 w-full mb-6">
              <div className="p-3 bg-[#ebefea] rounded-xl text-center border border-[#dfe4df]">
                <span className="font-serif text-xl sm:text-2xl text-[#012d1d] block font-bold">
                  1,041m
                </span>
                <span className="text-[10px] uppercase text-[#717973] font-bold">Elevation</span>
              </div>
              <div className="p-3 bg-[#ebefea] rounded-xl text-center border border-[#dfe4df]">
                <span className="font-serif text-xl sm:text-2xl text-[#012d1d] block font-bold">
                  19°C
                </span>
                <span className="text-[10px] uppercase text-[#717973] font-bold">Average Mist Temp</span>
              </div>
              <div className="p-3 bg-[#ebefea] rounded-xl text-center border border-[#dfe4df]">
                <span className="font-serif text-xl sm:text-2xl text-[#012d1d] block font-bold">
                  1899
                </span>
                <span className="text-[10px] uppercase text-[#717973] font-bold">First Planting</span>
              </div>
            </div>

            <div className="space-y-3 mb-8 w-full">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#181d1a]">
                <span className="material-symbols-outlined text-[#765a05] shrink-0">check_circle</span>
                <span>Little Adam&apos;s Peak secluded sunrise picnic with fresh highland Ceylon tea</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#181d1a]">
                <span className="material-symbols-outlined text-[#765a05] shrink-0">check_circle</span>
                <span>Stay in restored Scottish colonial planter bungalows with fireplace butler service</span>
              </div>
            </div>

            <button
              onClick={() => onSelectExpedition(EXPEDITIONS[1])}
              className="px-5 py-3 rounded-lg bg-[#012d1d] text-white text-sm font-semibold hover:bg-[#1b4332] transition-all cursor-pointer shadow-md"
              type="button"
            >
              Highland Journey Route
            </button>
          </div>

          <div className="lg:col-span-7 relative group order-1 lg:order-2">
            <div className="overflow-hidden rounded-2xl shadow-xl aspect-[16/10] border border-[#012d1d]/10">
              <img
                alt="Ella Nine Arch Bridge Blue Train Viaduct"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7x1196oOkR48SKz1n20xoIX4PQIz8fnfZT2GAt_O11dwyEgpZu1NiFsbBTy2Mh7cOiJVy5N75ePKOjJCD3WR2E6aT-yYlrCSSTVbxWs3cpMrWrNL4frpo2cW8VYs7KRj0kO9rid3NOmlw69F3-BPJ5HD7FmjNUVhkRzMx4QkasUMU8EI2tMMmqNPX1i1_UCsUGay4GyhXKgAup8v6lmFLcLDJ6nJJsvUR4ei4DppSlq8MlcM1FdKnKg"
              />
            </div>
            <div className="absolute top-4 right-4 bg-[#f6fbf5]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[#012d1d] text-xs tracking-wider uppercase font-bold shadow-sm border border-black/5">
              Hill Country Romance · Pekoe Trail
            </div>
          </div>
        </div>

        {/* Pillar 3: Mirissa & Southern Coast */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 relative group">
            <div className="overflow-hidden rounded-2xl shadow-xl aspect-[16/10] border border-[#012d1d]/10">
              <img
                alt="Mirissa Weligama Golden Sunset Surfing"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB5E_Y9NJZolSSZNTAC7mbXRF-hRIfGFZ9Pr7s0nJZeaFzZkFbN4MKNWAljKn0wCT8yMLiL9snyOxEdS8QPTcKSaBC5n2LsOFeTDnbwpDo86huBqpNsbc96VBknEQdIUikkhFXVoLWkvyY_3idKWn4AxwSywkVcFQ-k1NJhvzKkKawZgZaOTqdt_ZlnLeefTbEWjYZAYk0ZrgFfu20K5pHIixaf6in5Tzu9gsaL--lNeby14Yikeps6g"
              />
            </div>
            <div className="absolute top-4 left-4 bg-[#f6fbf5]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[#765a05] text-xs tracking-wider uppercase font-bold shadow-sm border border-black/5">
              Tropical Coast · Marine Sanctuary
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start lg:pl-4">
            <span className="text-xs uppercase tracking-widest text-[#765a05] font-bold mb-2">
              03 / The Southern Indian Ocean
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#012d1d] font-bold mb-4 leading-tight">
              The Golden Horizon: Mirissa, Weligama &amp; Galle
            </h3>
            <p className="text-sm sm:text-base text-[#414844] mb-6 leading-relaxed">
              Where warm turquoise rollers caress palm-fringed headlands and colonial Dutch bastions. Sail out onto deep oceanic drop-offs aboard private marine biologist catamarans or catch gentle longboard waves in sunset Weligama Bay.
            </p>

            {/* Highlights List */}
            <div className="space-y-3 mb-8 w-full">
              <div className="flex items-start gap-3 p-3.5 bg-[#f0f5f0] rounded-xl border border-[#dfe4df]">
                <span className="material-symbols-outlined text-[#765a05] shrink-0 mt-0.5">
                  sailing
                </span>
                <div>
                  <span className="font-bold text-sm text-[#012d1d] block">
                    Ethical Blue Whale Expeditions
                  </span>
                  <span className="text-xs text-[#414844] leading-relaxed">
                    Conducted at low-noise vessel speeds away from crowded commercial routes.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-[#f0f5f0] rounded-xl border border-[#dfe4df]">
                <span className="material-symbols-outlined text-[#765a05] shrink-0 mt-0.5">
                  dinner_dining
                </span>
                <div>
                  <span className="font-bold text-sm text-[#012d1d] block">
                    Cinnamon Coast Supper Club
                  </span>
                  <span className="text-xs text-[#414844] leading-relaxed">
                    Private beachfront dining with king prawns and cinnamon-infused spiced rum curries.
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={() => onSelectExpedition(EXPEDITIONS[2])}
                className="px-5 py-3 rounded-lg bg-[#012d1d] text-white text-sm font-semibold hover:bg-[#1b4332] transition-all cursor-pointer shadow-md"
                type="button"
              >
                Southern Coast Itineraries
              </button>
              <span className="text-xs text-[#717973] font-medium">Best Surf: Nov – April</span>
            </div>
          </div>
        </div>
      </section>

      {/* THE CEYLON COMPASS DIFFERENCE (EXPEDITION VALUES) */}
      <section className="w-full bg-[#f0f5f0] py-20 my-16 border-y border-[#ebefea]">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-widest text-[#765a05] font-bold block mb-2">
                Our Standard of Excellence
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#012d1d] font-bold mb-6 leading-tight">
                Why Discerning Voyagers Choose Ceylon Compass
              </h2>
              <p className="text-sm sm:text-base text-[#414844] mb-6 leading-relaxed">
                We operate beyond standard agency itineraries. Our expeditions are orchestrated by native scholars, master naturalists, and preservationists devoted to protecting Sri Lanka&apos;s heritage.
              </p>

              <div className="p-5 bg-[#ebefea] rounded-xl border border-[#dfe4df]">
                <span className="text-sm font-bold text-[#012d1d] block mb-1">
                  Carbon Neutral Ceylon Guarantee
                </span>
                <p className="text-xs text-[#414844] leading-relaxed">
                  Every liter of fuel in our chauffeured private fleet is counterbalanced through mangrove reforestation along the Kalpitiya peninsula.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="p-6 bg-white rounded-xl shadow-sm border border-[#dfe4df]">
                <div className="w-12 h-12 rounded-lg bg-[#012d1d]/10 text-[#012d1d] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">school</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-[#012d1d] mb-2">
                  Historians &amp; Naturalists
                </h4>
                <p className="text-xs sm:text-sm text-[#414844] leading-relaxed">
                  Your drivers are not just navigators; they are vetted English-fluent cultural biographers with decades of regional folklore.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-6 bg-white rounded-xl shadow-sm border border-[#dfe4df]">
                <div className="w-12 h-12 rounded-lg bg-[#765a05]/15 text-[#765a05] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">key</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-[#012d1d] mb-2">
                  Private Key Access
                </h4>
                <p className="text-xs sm:text-sm text-[#414844] leading-relaxed">
                  Skip queues at the Temple of the Tooth; enjoy closed-door tea tastings and private sunset perches on secluded southern clifftops.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-6 bg-white rounded-xl shadow-sm border border-[#dfe4df]">
                <div className="w-12 h-12 rounded-lg bg-[#012d1d]/10 text-[#012d1d] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">cottage</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-[#012d1d] mb-2">
                  Colonial Heritage Restorations
                </h4>
                <p className="text-xs sm:text-sm text-[#414844] leading-relaxed">
                  Dormitory hotels are forbidden. Rest in century-old Geoffrey Bawa masterworks and restored 19th-century planter tea estates.
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-6 bg-white rounded-xl shadow-sm border border-[#dfe4df]">
                <div className="w-12 h-12 rounded-lg bg-[#765a05]/15 text-[#765a05] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">support_agent</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-[#012d1d] mb-2">
                  24/7 Colombo Concierge
                </h4>
                <p className="text-xs sm:text-sm text-[#414844] leading-relaxed">
                  Every detail seamlessly managed from Colombo airport VIP tarmac greeting through to final coastal takeoff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURATED SIGNATURE ITINERARY CAROUSEL / GRID */}
      <section className="max-w-[1320px] mx-auto px-5 lg:px-12 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#765a05] font-bold block mb-2">
              Private Collections
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#012d1d] font-bold">
              Handcrafted Expeditions
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevExpeditions}
              aria-label="Previous Itinerary"
              className="w-10 h-10 rounded-full bg-[#ebefea] hover:bg-[#dfe4df] text-[#012d1d] flex items-center justify-center transition-colors cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-xl">west</span>
            </button>
            <button
              onClick={handleNextExpeditions}
              aria-label="Next Itinerary"
              className="w-10 h-10 rounded-full bg-[#012d1d] hover:bg-[#1b4332] text-white flex items-center justify-center transition-colors cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-xl">east</span>
            </button>
          </div>
        </div>

        {/* 3 Signature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedExpeditions.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#dfe4df] flex flex-col group hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={exp.image}
                />
                <span className="absolute top-3 left-3 bg-[#012d1d] text-white px-3 py-1 rounded-full text-[11px] tracking-wider uppercase font-semibold">
                  {exp.durationDays} Days / {exp.durationNights} Nights
                </span>
                <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-[#181d1a] px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                  <span
                    className="material-symbols-outlined text-[#765a05] text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span>
                    {exp.rating} ({exp.reviewsCount})
                  </span>
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <span className="text-[11px] text-[#765a05] uppercase tracking-wider font-bold mb-1">
                  {exp.routeSub}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#012d1d] mb-2 leading-tight">
                  {exp.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#414844] mb-6 line-clamp-3 leading-relaxed">
                  {exp.summary}
                </p>

                <div className="mt-auto pt-4 border-t border-[#ebefea] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-[#717973] block font-medium">From</span>
                    <span className="font-serif text-2xl font-bold text-[#012d1d]">
                      {formatPrice(exp.priceUSD, currency)}
                    </span>
                    <span className="text-xs text-[#717973]"> / traveler</span>
                  </div>
                  <button
                    onClick={() => onSelectExpedition(exp)}
                    className="px-4 py-2 rounded-lg bg-[#ebefea] text-[#012d1d] font-semibold text-xs hover:bg-[#012d1d] hover:text-white transition-colors cursor-pointer"
                  >
                    View Itinerary
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE DAY-BY-DAY ROUTE SIMULATION & MAP */}
      <section className="max-w-[1320px] mx-auto px-5 lg:px-12 py-16">
        <div className="bg-[#ebefea] rounded-2xl p-6 lg:p-10 border border-[#dfe4df]">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase tracking-widest text-[#765a05] font-bold block mb-1">
              Interactive Route Simulation
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#012d1d] font-bold">
              Preview The Island Circuit
            </h3>
            <p className="text-xs sm:text-sm text-[#414844] mt-1">
              Click each expedition checkpoint to examine daily highlights, transport logistics, and private curation perks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Interactive Checkpoint Selector (Left) */}
            <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
              {ROUTE_LEGS.map((leg) => {
                const isActive = leg.id === activeLegId;
                return (
                  <button
                    key={leg.id}
                    onClick={() => setActiveLegId(leg.id)}
                    className={`text-left p-4 rounded-xl flex items-start gap-4 transition-all cursor-pointer border ${
                      isActive
                        ? 'bg-white shadow-md border-[#012d1d]/20 ring-1 ring-[#012d1d]/15'
                        : 'bg-[#f0f5f0] border-transparent hover:bg-white hover:border-[#dfe4df]'
                    }`}
                    type="button"
                  >
                    <span
                      className={`w-7 h-7 rounded-full text-xs flex items-center justify-center font-bold shrink-0 mt-0.5 transition-colors ${
                        isActive
                          ? 'bg-[#012d1d] text-white'
                          : 'bg-[#dfe4df] text-[#181d1a]'
                      }`}
                    >
                      {leg.legNumber}
                    </span>
                    <div>
                      <span className="font-bold text-sm sm:text-base text-[#012d1d] block">
                        {leg.title}
                      </span>
                      <span className="text-xs text-[#414844] line-clamp-1">{leg.subtitle}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Map & Leg Detail (Right) */}
            <div className="lg:col-span-7 flex flex-col bg-white rounded-xl p-5 shadow-sm border border-[#dfe4df]">
              <div
                className="w-full h-72 rounded-lg bg-cover bg-center shadow-inner mb-4 relative overflow-hidden transition-all duration-500"
                style={{ backgroundImage: `url('${activeLeg.mapImage}')` }}
              >
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute bottom-3 left-3 bg-[#f6fbf5]/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-[#012d1d] text-xs font-semibold flex items-center gap-1.5 shadow-sm border border-black/5">
                  <span className="material-symbols-outlined text-[#765a05] text-sm">
                    pin_drop
                  </span>
                  <span>{activeLeg.location}</span>
                </div>
              </div>

              <div className="p-2">
                <h4 className="font-serif text-xl font-bold text-[#012d1d] mb-2">
                  {activeLeg.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#414844] mb-4 leading-relaxed">
                  {activeLeg.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-[#414844] text-xs border-t border-[#ebefea] pt-3">
                  {activeLeg.perks.map((p, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-[#765a05]">
                        {p.icon}
                      </span>
                      <span>{p.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF & DISPATCH MONOGRAPHS */}
      <section className="max-w-[1320px] mx-auto px-5 lg:px-12 py-16">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#765a05] font-bold block mb-2">
            Verified Travelers
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#012d1d] font-bold">
            Voices From The Expedition Trail
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 bg-[#f0f5f0] rounded-xl shadow-sm border border-[#dfe4df] flex flex-col justify-between"
            >
              <div>
                <div className="flex text-[#765a05] mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-sm text-[#181d1a] italic mb-6 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 border-t border-[#ebefea] pt-4">
                <div
                  className={`w-10 h-10 rounded-full font-bold flex items-center justify-center text-xs ${t.avatarColor}`}
                >
                  {t.initials}
                </div>
                <div>
                  <span className="font-bold text-sm text-[#012d1d] block">
                    {t.author}
                  </span>
                  <span className="text-xs text-[#717973]">{t.location} · {t.trip}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CALL TO ACTION BANNER */}
      <section className="max-w-[1320px] mx-auto px-5 lg:px-12 mb-20">
        <div className="relative rounded-2xl overflow-hidden bg-[#012d1d] text-white p-8 lg:p-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/10">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#765a05]/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ffdf96] text-xs uppercase tracking-widest font-bold mb-4 border border-white/5">
              <span>Complimentary Itinerary Design</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4 leading-tight font-bold">
              Begin Your Ceylon Journey With a Local Specialist
            </h2>
            <p className="text-sm sm:text-base text-[#86af99] leading-relaxed">
              Connect directly with our Colombo private itinerary architects. We design bespoke routes matching your seasonal timing, physical cadence, and architectural preferences.
            </p>
          </div>

          <div className="w-full lg:w-auto relative z-10 flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 rounded-lg bg-[#765a05] text-white font-semibold text-sm text-center hover:bg-[#ffdf96] hover:text-[#012d1d] transition-all duration-300 shadow-lg cursor-pointer"
            >
              Schedule 1-on-1 Consultation
            </button>
            <a
              href="tel:+94112348890"
              className="px-8 py-4 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-sm text-center transition-all flex items-center justify-center gap-2 border border-white/10"
            >
              <span className="material-symbols-outlined text-[1.125rem]">call</span>
              <span>Direct Concierge Desk</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
