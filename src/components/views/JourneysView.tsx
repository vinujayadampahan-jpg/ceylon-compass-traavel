import React, { useState } from 'react';
import { Expedition, Currency } from '../../types';
import { EXPEDITIONS, formatPrice } from '../../data/expeditions';

interface JourneysViewProps {
  currency: Currency;
  onSelectExpedition: (exp: Expedition) => void;
  initialFilter?: string;
  onOpenPlanModal: () => void;
}

export const JourneysView: React.FC<JourneysViewProps> = ({
  currency,
  onSelectExpedition,
  initialFilter,
  onOpenPlanModal,
}) => {
  const [selectedStyle, setSelectedStyle] = useState<string>(initialFilter || 'all');
  const [selectedDuration, setSelectedDuration] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'recommended' | 'price-asc' | 'price-desc' | 'duration'>('recommended');
  const [searchFilter, setSearchFilter] = useState('');

  const filterOptions = [
    { id: 'all', label: 'All Collections' },
    { id: 'highlands', label: 'Highlands & Tea Trails' },
    { id: 'heritage', label: 'Heritage & Citadels' },
    { id: 'ocean', label: 'Coast & Marine Solitude' },
    { id: 'wildlife', label: 'Wildlife & Safaris' },
    { id: 'wellness', label: 'Ayurvedic Retreats' },
  ];

  const filtered = EXPEDITIONS.filter((exp) => {
    if (selectedStyle !== 'all' && exp.style !== selectedStyle) return false;
    if (selectedDuration === 'short' && exp.durationDays > 7) return false;
    if (selectedDuration === 'medium' && (exp.durationDays < 8 || exp.durationDays > 11)) return false;
    if (selectedDuration === 'long' && exp.durationDays < 12) return false;
    if (
      searchFilter &&
      !exp.title.toLowerCase().includes(searchFilter.toLowerCase()) &&
      !exp.routeSub.toLowerCase().includes(searchFilter.toLowerCase())
    )
      return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.priceUSD - b.priceUSD;
    if (sortBy === 'price-desc') return b.priceUSD - a.priceUSD;
    if (sortBy === 'duration') return b.durationDays - a.durationDays;
    return b.rating - a.rating;
  });

  return (
    <div className="w-full pb-20">
      {/* Editorial Header Banner */}
      <section className="bg-[#012d1d] text-white pt-16 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#765a05]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-[1320px] mx-auto px-5 lg:px-12 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ffdf96] text-xs uppercase tracking-widest font-bold mb-4 border border-white/5">
            <span>The Private Collections · Sri Lanka</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold mb-4 leading-tight">
            Handcrafted Signature Journeys
          </h1>
          <p className="text-base text-[#86af99] max-w-2xl leading-relaxed">
            Every itinerary in our private collection is sovereign: 100% private executive chauffeured transit, insider historian access, and hand-selected heritage bungalows.
          </p>
        </div>
      </section>

      {/* Filter and Control Bar */}
      <div className="max-w-[1320px] mx-auto px-5 lg:px-12 -mt-7 relative z-20">
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-[#012d1d]/10 flex flex-col gap-4">
          {/* Top row: Search and Sort */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="relative w-full sm:w-80">
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#765a05] text-lg">
                search
              </span>
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Search routes by destination or keyword..."
                className="w-full bg-[#f0f5f0] text-[#181d1a] pl-9 pr-3 py-2 rounded-lg text-xs sm:text-sm outline-none focus:ring-2 focus:ring-[#012d1d] border border-[#dfe4df]"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <span className="text-xs text-[#717973] uppercase font-bold tracking-wider">
                Sort:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="bg-[#f0f5f0] text-[#181d1a] text-xs font-semibold px-3 py-2 rounded-lg outline-none cursor-pointer border border-[#dfe4df]"
              >
                <option value="recommended">Curator Choice</option>
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
                <option value="duration">Duration (Longest)</option>
              </select>
            </div>
          </div>

          {/* Bottom row: Style pills & Duration filter */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 pt-3 border-t border-[#ebefea]">
            <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-1">
              {filterOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedStyle(opt.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    selectedStyle === opt.id
                      ? 'bg-[#1b4332] text-white shadow-sm'
                      : 'bg-[#f0f5f0] text-[#414844] hover:bg-[#e5e9e4]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1 shrink-0 text-xs">
              <span className="text-[#717973] mr-1">Duration:</span>
              {[
                { id: 'all', label: 'All' },
                { id: 'short', label: '5-7D' },
                { id: 'medium', label: '8-11D' },
                { id: 'long', label: '12D+' },
              ].map((d) => (
                <button
                  key={d.id}
                  onClick={() => setSelectedDuration(d.id)}
                  className={`px-2.5 py-1 rounded text-xs font-medium cursor-pointer ${
                    selectedDuration === d.id
                      ? 'bg-[#012d1d] text-white font-bold'
                      : 'bg-[#f0f5f0] text-[#414844] hover:bg-[#ebefea]'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Expeditions Grid */}
      <section className="max-w-[1320px] mx-auto px-5 lg:px-12 mt-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#012d1d]">
              Available Private Expeditions ({filtered.length})
            </h2>
            <p className="text-xs text-[#717973]">
              All dates are private &amp; flexible. Request exact arrival windows.
            </p>
          </div>

          <button
            onClick={onOpenPlanModal}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#765a05] font-bold hover:text-[#012d1d] transition-colors"
          >
            <span>Need a custom bespoke length?</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((exp) => (
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
                <div className="flex items-center justify-between text-[11px] text-[#765a05] uppercase tracking-wider font-bold mb-1">
                  <span>{exp.styleLabel}</span>
                  <span className="text-[#717973] font-normal">{exp.idealSeason}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#012d1d] mb-2 leading-tight">
                  {exp.title}
                </h3>
                <p className="text-xs text-[#717973] mb-3 font-medium">
                  {exp.routeSub}
                </p>
                <p className="text-xs sm:text-sm text-[#414844] mb-6 line-clamp-3 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Micro Highlights */}
                <div className="space-y-1.5 mb-6 pt-3 border-t border-[#ebefea]">
                  {exp.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#414844]">
                      <span className="material-symbols-outlined text-xs text-[#765a05] shrink-0">
                        done
                      </span>
                      <span className="line-clamp-1">{h}</span>
                    </div>
                  ))}
                </div>

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
                    className="px-4 py-2.5 rounded-lg bg-[#012d1d] text-white font-semibold text-xs hover:bg-[#1b4332] transition-colors cursor-pointer shadow-sm"
                  >
                    View Itinerary
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 bg-[#f0f5f0] rounded-2xl border border-[#dfe4df]">
            <span className="material-symbols-outlined text-4xl text-[#717973] mb-2">
              travel_explore
            </span>
            <h3 className="font-serif text-xl font-bold text-[#012d1d]">
              No expeditions match this filter combination
            </h3>
            <p className="text-xs text-[#717973] mt-1 mb-4">
              Try selecting &quot;All Collections&quot; or ask our concierge to craft a completely bespoke route.
            </p>
            <button
              onClick={() => {
                setSelectedStyle('all');
                setSelectedDuration('all');
                setSearchFilter('');
              }}
              className="px-5 py-2 bg-[#012d1d] text-white text-xs font-semibold rounded-lg hover:bg-[#1b4332]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};
