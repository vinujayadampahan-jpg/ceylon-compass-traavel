import React, { useState } from 'react';
import { Currency } from '../../types';
import { formatPrice } from '../../data/expeditions';

interface TailorMadeViewProps {
  currency: Currency;
  onSuccess: (summary: string) => void;
}

export const TailorMadeView: React.FC<TailorMadeViewProps> = ({
  currency,
  onSuccess,
}) => {
  const [days, setDays] = useState(10);
  const [guests, setGuests] = useState(2);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([
    'Sigiriya',
    'Ella & Tea Trails',
    'Mirissa & Galle',
  ]);
  const [accommodationStyle, setAccommodationStyle] = useState('bawa');
  const [transportType, setTransportType] = useState('mercedes');
  const [specialInterests, setSpecialInterests] = useState<string[]>([
    'Private Tea Sommelier Tasting',
    'Pre-Dawn Sigiriya Ascent',
  ]);
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadNotes, setLeadNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Dynamic cost calculation based on days, guests, accommodations, transport
  const baseRatePerDayPerGuest = 280;
  const accomMultipliers: Record<string, number> = {
    bawa: 1.25,
    planter: 1.15,
    beach: 1.3,
    eco: 1.05,
  };
  const transportDaily: Record<string, number> = {
    mercedes: 160,
    landcruiser: 220,
    van: 180,
  };

  const calculatedTotalUSD = Math.round(
    days * guests * baseRatePerDayPerGuest * (accomMultipliers[accommodationStyle] || 1) +
      days * (transportDaily[transportType] || 150)
  );

  const toggleRegion = (r: string) => {
    if (selectedRegions.includes(r)) {
      if (selectedRegions.length > 1) {
        setSelectedRegions(selectedRegions.filter((item) => item !== r));
      }
    } else {
      setSelectedRegions([...selectedRegions, r]);
    }
  };

  const toggleInterest = (interest: string) => {
    if (specialInterests.includes(interest)) {
      setSpecialInterests(specialInterests.filter((item) => item !== interest));
    } else {
      setSpecialInterests([...specialInterests, interest]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onSuccess(`Bespoke ${days}-day expedition for ${leadName}`);
      setSubmitted(false);
    }, 2500);
  };

  return (
    <div className="w-full pb-20">
      {/* Editorial Header Banner */}
      <section className="bg-[#012d1d] text-white pt-16 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#765a05]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-[1320px] mx-auto px-5 lg:px-12 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ffdf96] text-xs uppercase tracking-widest font-bold mb-4 border border-white/5">
            <span>Bespoke Private Architecture</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold mb-4 leading-tight">
            Craft Your Sovereign Ceylon Route
          </h1>
          <p className="text-base text-[#86af99] max-w-2xl leading-relaxed">
            Every traveler holds a unique cadence. Configure your desired regions, architectural stays, and curated privileges for an instant preliminary estimate and Colombo concierge dispatch.
          </p>
        </div>
      </section>

      {/* Builder Layout */}
      <section className="max-w-[1320px] mx-auto px-5 lg:px-12 -mt-7 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Controls Form */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-[#012d1d]/10 space-y-8">
            {submitted ? (
              <div className="p-10 text-center bg-[#c1ecd4] text-[#002114] rounded-2xl border border-[#86af99] space-y-3">
                <span className="material-symbols-outlined text-5xl text-emerald-800">
                  check_circle
                </span>
                <h3 className="font-serif text-3xl font-bold">Bespoke Blueprint Dispatched</h3>
                <p className="text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{leadName}</strong>. Our senior itinerary architect at Galle Face Court has received your custom configuration ({days} days, {guests} guests across {selectedRegions.join(', ')}). We will deliver your itemized blueprint within 4 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* 1. Regions Selection */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase tracking-wider font-bold text-[#181d1a]">
                      1. Select Geographies to Weave Together
                    </span>
                    <span className="text-xs text-[#717973]">Minimum 1 required</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {[
                      { name: 'Sigiriya', sub: 'Cultural Triangle & Caves' },
                      { name: 'Kandy', sub: 'Sacred Tooth & Spices' },
                      { name: 'Ella & Tea Trails', sub: 'Nine Arch & Cloud Forest' },
                      { name: 'Yala', sub: 'Leopard & Wilderness' },
                      { name: 'Mirissa & Galle', sub: 'Blue Whales & Ramparts' },
                      { name: 'Kalpitiya & Wilpattu', sub: 'Dolphin & Untamed Coast' },
                    ].map((reg) => (
                      <button
                        type="button"
                        key={reg.name}
                        onClick={() => toggleRegion(reg.name)}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                          selectedRegions.includes(reg.name)
                            ? 'border-[#012d1d] bg-[#f0f5f0] ring-1 ring-[#012d1d]'
                            : 'border-[#dfe4df] hover:border-[#86af99]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-xs text-[#012d1d]">{reg.name}</span>
                          {selectedRegions.includes(reg.name) && (
                            <span className="material-symbols-outlined text-xs text-[#765a05]">
                              check
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-[#717973] block">{reg.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Duration & Party Size Sliders */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-5 bg-[#f0f5f0] rounded-xl border border-[#dfe4df]">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs uppercase tracking-wider font-bold text-[#181d1a]">
                        Expedition Duration
                      </span>
                      <span className="font-serif text-lg font-bold text-[#012d1d]">
                        {days} Days / {days - 1} Nights
                      </span>
                    </div>
                    <input
                      type="range"
                      min={5}
                      max={21}
                      value={days}
                      onChange={(e) => setDays(Number(e.target.value))}
                      className="w-full accent-[#012d1d] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-[#717973] mt-1">
                      <span>5 Days (Highlights)</span>
                      <span>12 Days (Classic)</span>
                      <span>21 Days (Residency)</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs uppercase tracking-wider font-bold text-[#181d1a]">
                        Voyager Party Size
                      </span>
                      <span className="font-serif text-lg font-bold text-[#012d1d]">
                        {guests} {guests === 1 ? 'Guest' : 'Guests'}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={8}
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full accent-[#012d1d] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-[#717973] mt-1">
                      <span>1 Solo Explorer</span>
                      <span>2 Couple</span>
                      <span>8+ Private Villa Buyout</span>
                    </div>
                  </div>
                </div>

                {/* 3. Heritage Stays & Vehicles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider font-bold text-[#181d1a] block mb-2">
                      Accommodation Architectural Style
                    </label>
                    <select
                      value={accommodationStyle}
                      onChange={(e) => setAccommodationStyle(e.target.value)}
                      className="w-full bg-[#f0f5f0] border border-[#c1c8c2] rounded-lg p-3 text-xs sm:text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#012d1d]"
                    >
                      <option value="bawa">Geoffrey Bawa Masterworks &amp; Architectural Enclaves</option>
                      <option value="planter">Restored 19th-Century Colonial Tea Planter Bungalows</option>
                      <option value="beach">Private Clifftop Ocean Villas with Butler Service</option>
                      <option value="eco">Eco-Luxury Lake Chalets &amp; Tented Safari Pavilions</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider font-bold text-[#181d1a] block mb-2">
                      Private Chauffeured Fleet
                    </label>
                    <select
                      value={transportType}
                      onChange={(e) => setTransportType(e.target.value)}
                      className="w-full bg-[#f0f5f0] border border-[#c1c8c2] rounded-lg p-3 text-xs sm:text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#012d1d]"
                    >
                      <option value="mercedes">Mercedes-Benz / Audi Executive Saloon</option>
                      <option value="landcruiser">Toyota Land Cruiser 4WD Overland (All-Terrain)</option>
                      <option value="van">Luxury Commuter Mini-Coach (For Families)</option>
                    </select>
                  </div>
                </div>

                {/* 4. Privileged Encounters */}
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-[#181d1a] block mb-2">
                    Include Privileged Experiences
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      'Private Tea Sommelier Tasting',
                      'Pre-Dawn Sigiriya Ascent',
                      'First-Class Blue Train Carriage',
                      'Silent Marine Biologist Whale Catamaran',
                      'Private Yala Block 1 Leopard Tracker',
                      'Geoffrey Bawa Lunuganga Estate Tour',
                    ].map((interest) => (
                      <button
                        type="button"
                        key={interest}
                        onClick={() => toggleInterest(interest)}
                        className={`p-2.5 rounded-lg border text-left text-xs transition-colors flex items-center justify-between cursor-pointer ${
                          specialInterests.includes(interest)
                            ? 'bg-[#1b4332] text-white font-medium border-[#1b4332]'
                            : 'bg-white text-[#414844] border-[#dfe4df] hover:bg-[#f0f5f0]'
                        }`}
                      >
                        <span>{interest}</span>
                        {specialInterests.includes(interest) && (
                          <span className="material-symbols-outlined text-xs">done</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 5. Contact info */}
                <div className="pt-4 border-t border-[#ebefea] space-y-4">
                  <span className="text-xs uppercase tracking-wider font-bold text-[#181d1a] block">
                    Lead Voyager Details
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      placeholder="Your Full Name"
                      className="w-full bg-[#f0f5f0] border border-[#c1c8c2] rounded-lg p-2.5 text-xs sm:text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#012d1d]"
                    />
                    <input
                      type="email"
                      required
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      placeholder="Correspondence Email"
                      className="w-full bg-[#f0f5f0] border border-[#c1c8c2] rounded-lg p-2.5 text-xs sm:text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#012d1d]"
                    />
                  </div>

                  <textarea
                    rows={2}
                    value={leadNotes}
                    onChange={(e) => setLeadNotes(e.target.value)}
                    placeholder="Specific dietary needs, mobility preferences, or celebration details..."
                    className="w-full bg-[#f0f5f0] border border-[#c1c8c2] rounded-lg p-2.5 text-xs sm:text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#012d1d]"
                  />

                  <button
                    type="submit"
                    className="w-full bg-[#012d1d] hover:bg-[#1b4332] text-white py-3.5 rounded-lg text-sm font-semibold transition-all shadow-md cursor-pointer"
                  >
                    Dispatch Custom Blueprint Request
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Live Summary & Quotation Sidebar */}
          <div className="lg:col-span-4 bg-[#ebefea] rounded-2xl p-6 border border-[#dfe4df] sticky top-28 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#765a05] font-bold block mb-1">
                Live Blueprint Estimation
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#012d1d]">
                Bespoke Expedition
              </h3>
            </div>

            <div className="space-y-3 text-xs border-y border-[#dfe4df] py-4">
              <div className="flex justify-between">
                <span className="text-[#717973]">Duration:</span>
                <span className="font-bold text-[#012d1d]">{days} Days / {days - 1} Nights</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#717973]">Party:</span>
                <span className="font-bold text-[#012d1d]">{guests} Voyagers</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#717973]">Transit:</span>
                <span className="font-bold text-[#012d1d] capitalize">{transportType} Fleet</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#717973]">Stays:</span>
                <span className="font-bold text-[#012d1d] capitalize">{accommodationStyle}</span>
              </div>
              <div>
                <span className="text-[#717973] block mb-1">Regions:</span>
                <div className="flex flex-wrap gap-1">
                  {selectedRegions.map((r) => (
                    <span key={r} className="bg-white px-2 py-0.5 rounded text-[10px] text-[#012d1d] font-semibold border border-[#dfe4df]">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <span className="text-xs text-[#717973] block">Estimated Total for {guests} Voyagers</span>
              <div className="font-serif text-3xl font-bold text-[#012d1d]">
                {formatPrice(calculatedTotalUSD, currency)}
              </div>
              <span className="text-[11px] text-[#765a05] font-medium block mt-0.5">
                Approximately {formatPrice(Math.round(calculatedTotalUSD / guests), currency)} per traveler
              </span>
            </div>

            <div className="p-3 bg-white rounded-xl text-[11px] text-[#414844] space-y-1 border border-[#dfe4df]">
              <div className="flex items-center gap-1.5 text-[#012d1d] font-bold">
                <span className="material-symbols-outlined text-xs text-[#765a05]">verified</span>
                <span>Guaranteed Transparent Quotation</span>
              </div>
              <p>
                Includes all private chauffeured transfers, entrance permissions, daily breakfast, and local scholar guides.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
