import React, { useState } from 'react';
import { Expedition, Currency } from '../types';
import { formatPrice } from '../data/expeditions';

interface ExpeditionModalProps {
  expedition: Expedition | null;
  currency: Currency;
  onClose: () => void;
  onBookSuccess: (title: string) => void;
}

export const ExpeditionModal: React.FC<ExpeditionModalProps> = ({
  expedition,
  currency,
  onClose,
  onBookSuccess,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'inclusions' | 'reserve'>('overview');
  const [travelers, setTravelers] = useState(2);
  const [targetMonth, setTargetMonth] = useState('November 2025');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!expedition) return null;

  const totalCalculated = expedition.priceUSD * travelers;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onBookSuccess(expedition.title);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl border border-[#012d1d]/15 flex flex-col my-auto">
        {/* Header Banner */}
        <div className="relative h-56 sm:h-72 overflow-hidden shrink-0">
          <img
            src={expedition.image}
            alt={expedition.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#012d1d] via-[#012d1d]/40 to-transparent"></div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer z-10"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>

          {/* Banner Meta */}
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="bg-[#765a05] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                {expedition.durationDays} Days / {expedition.durationNights} Nights
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white text-xs px-2.5 py-0.5 rounded-full font-medium">
                {expedition.styleLabel}
              </span>
              <div className="flex items-center gap-1 text-[#ffd87c] text-xs font-bold ml-auto">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                <span>{expedition.rating} ({expedition.reviewsCount} verified voyagers)</span>
              </div>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
              {expedition.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#86af99] mt-0.5 font-medium">
              {expedition.routeSub}
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center border-b border-[#ebefea] bg-[#f0f5f0] px-6 gap-2 sm:gap-6 overflow-x-auto shrink-0">
          {[
            { id: 'overview', label: 'Overview & Highlights' },
            { id: 'itinerary', label: 'Day-by-Day Journey' },
            { id: 'inclusions', label: 'Curated Inclusions' },
            { id: 'reserve', label: 'Reserve / Quote' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`py-3.5 text-xs sm:text-sm font-semibold tracking-wide transition-all border-b-2 cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-[#012d1d] text-[#012d1d]'
                  : 'border-transparent text-[#717973] hover:text-[#181d1a]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#012d1d] mb-2">
                  The Sovereign Island Circuit
                </h3>
                <p className="text-sm text-[#414844] leading-relaxed">
                  {expedition.fullOverview}
                </p>
              </div>

              {/* Highlights List */}
              <div className="bg-[#f0f5f0] p-5 rounded-xl border border-[#dfe4df]">
                <span className="text-xs uppercase tracking-widest text-[#765a05] font-bold block mb-3">
                  Privileged Expedition Highlights
                </span>
                <ul className="space-y-2.5">
                  {expedition.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#181d1a]">
                      <span className="material-symbols-outlined text-[#765a05] text-base shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing & Booking Footer Trigger */}
              <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-[#ebefea] rounded-xl gap-4">
                <div>
                  <span className="text-xs text-[#717973] block">Starting from</span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-2xl font-bold text-[#012d1d]">
                      {formatPrice(expedition.priceUSD, currency)}
                    </span>
                    <span className="text-xs text-[#414844]">/ traveler (double occupancy)</span>
                  </div>
                  <span className="text-[11px] text-[#765a05] font-semibold">{expedition.seasonNotice}</span>
                </div>
                <button
                  onClick={() => setActiveTab('reserve')}
                  className="w-full sm:w-auto bg-[#012d1d] hover:bg-[#1b4332] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all shadow-md cursor-pointer"
                >
                  Configure Dates &amp; Reserve
                </button>
              </div>
            </div>
          )}

          {activeTab === 'itinerary' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-between pb-2 border-b border-[#ebefea]">
                <h3 className="font-serif text-xl font-bold text-[#012d1d]">
                  {expedition.durationDays}-Day Private Progression
                </h3>
                <span className="text-xs text-[#717973]">Flexible pace customized for you</span>
              </div>

              <div className="space-y-4">
                {expedition.days.map((d) => (
                  <div
                    key={d.day}
                    className="p-4 sm:p-5 rounded-xl border border-[#dfe4df] bg-[#f6fbf5] hover:border-[#86af99] transition-all"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-full bg-[#1b4332] text-white text-xs font-bold flex items-center justify-center shrink-0">
                          {d.day}
                        </span>
                        <h4 className="font-bold text-sm sm:text-base text-[#012d1d]">
                          {d.title}
                        </h4>
                      </div>
                      <span className="text-xs text-[#765a05] font-semibold bg-[#ffd87c]/30 px-2.5 py-0.5 rounded-full shrink-0">
                        {d.location}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#414844] leading-relaxed mb-3 pl-8">
                      {d.description}
                    </p>

                    <div className="pl-8 flex flex-wrap items-center gap-2 pt-2 border-t border-[#ebefea] text-xs">
                      <div className="flex items-center gap-1 text-[#012d1d] font-medium mr-2">
                        <span className="material-symbols-outlined text-xs text-[#765a05]">bed</span>
                        <span>{d.stayName}</span>
                      </div>
                      {d.highlights.map((item, idx) => (
                        <span key={idx} className="bg-white px-2 py-0.5 rounded text-[11px] text-[#717973] border border-[#c1c8c2]">
                          • {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'inclusions' && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="font-serif text-xl font-bold text-[#012d1d]">
                The Ceylon Compass Standard of Inclusions
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {expedition.inclusions.map((inc, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#f0f5f0] border border-[#dfe4df] flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#1b4332] text-xl mt-0.5">
                      verified
                    </span>
                    <div>
                      <span className="font-bold text-xs uppercase tracking-wider text-[#012d1d] block">
                        Included Privilege {i + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-[#414844] mt-0.5">{inc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#c1ecd4]/30 border border-[#86af99] text-xs text-[#002114] leading-relaxed">
                <strong>Guaranteed Private Chauffeur &amp; Guide:</strong> You will never share a vehicle or guide with other travelers. Every route is exclusively conducted by a licensed senior scholar driver in our executive private fleet.
              </div>
            </div>
          )}

          {activeTab === 'reserve' && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-[#f0f5f0] p-4 rounded-xl border border-[#dfe4df] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#012d1d]">
                    Live Private Quotation
                  </h4>
                  <p className="text-xs text-[#414844]">
                    Includes private transport, executive stays, and all bespoke privileges.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#717973] block">Estimated Total ({travelers} Travelers)</span>
                  <span className="font-serif text-2xl font-bold text-[#012d1d]">
                    {formatPrice(totalCalculated, currency)}
                  </span>
                </div>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-[#c1ecd4] text-[#002114] rounded-2xl border border-[#86af99] space-y-2">
                  <span className="material-symbols-outlined text-4xl text-emerald-800">
                    check_circle
                  </span>
                  <h3 className="font-serif text-2xl font-bold">Inquiry Dispatched</h3>
                  <p className="text-sm max-w-md mx-auto">
                    Thank you, {fullName || 'Voyager'}. Our Colombo private itinerary architect has received your request for <strong>{expedition.title}</strong> and will contact you within 4 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs uppercase tracking-wider font-semibold text-[#414844] block mb-1">
                        Travelers in Party
                      </label>
                      <select
                        value={travelers}
                        onChange={(e) => setTravelers(Number(e.target.value))}
                        className="w-full bg-[#f0f5f0] border border-[#c1c8c2] rounded-lg px-3 py-2 text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#012d1d]"
                      >
                        <option value={1}>1 Solo Voyager (Dedicated Private Guide)</option>
                        <option value={2}>2 Travelers (Private Saloon)</option>
                        <option value={3}>3 Travelers (Executive SUV)</option>
                        <option value={4}>4 Travelers (Family Mini-Van)</option>
                        <option value={6}>6+ Travelers (Private Villa Buyout)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-wider font-semibold text-[#414844] block mb-1">
                        Preferred Travel Season
                      </label>
                      <select
                        value={targetMonth}
                        onChange={(e) => setTargetMonth(e.target.value)}
                        className="w-full bg-[#f0f5f0] border border-[#c1c8c2] rounded-lg px-3 py-2 text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#012d1d]"
                      >
                        <option value="November 2025">November 2025 (Cooler mist &amp; uncrowded)</option>
                        <option value="December 2025">December 2025 (Festive Season)</option>
                        <option value="January 2026">January 2026 (Peak Sapphire Skies)</option>
                        <option value="February 2026">February 2026 (Optimal Wildlife &amp; Whales)</option>
                        <option value="March 2026">March 2026 (Calm Waters &amp; Tea Harvest)</option>
                        <option value="Custom Dates">Other / Custom Dates</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs uppercase tracking-wider font-semibold text-[#414844] block mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Lord & Lady Hamilton"
                        className="w-full bg-[#f0f5f0] border border-[#c1c8c2] rounded-lg px-3 py-2 text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#012d1d]"
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-wider font-semibold text-[#414844] block mb-1">
                        Correspondence Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@domain.com"
                        className="w-full bg-[#f0f5f0] border border-[#c1c8c2] rounded-lg px-3 py-2 text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#012d1d]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#414844] block mb-1">
                      Architectural / Dietary / Pace Preferences
                    </label>
                    <textarea
                      rows={3}
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder="e.g. Geoffrey Bawa suites preferred, slow morning pace, private tea tasting focus..."
                      className="w-full bg-[#f0f5f0] border border-[#c1c8c2] rounded-lg px-3 py-2 text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#012d1d]"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-[#717973]">
                      No immediate payment required · Concierge will confirm availability
                    </span>
                    <button
                      type="submit"
                      className="bg-[#012d1d] hover:bg-[#1b4332] text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-md cursor-pointer"
                    >
                      Dispatch Reservation Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
