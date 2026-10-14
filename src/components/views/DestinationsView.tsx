import React, { useState } from 'react';
import { DESTINATIONS } from '../../data/expeditions';
import { Destination } from '../../types';

interface DestinationsViewProps {
  onNavigateToJourneys: (style?: string) => void;
  onOpenPlanModal: () => void;
  selectedDestId?: string;
}

export const DestinationsView: React.FC<DestinationsViewProps> = ({
  onNavigateToJourneys,
  onOpenPlanModal,
  selectedDestId,
}) => {
  const [activeTab, setActiveTab] = useState<string>(selectedDestId || DESTINATIONS[0].id);

  const currentDest: Destination =
    DESTINATIONS.find((d) => d.id === activeTab) || DESTINATIONS[0];

  return (
    <div className="w-full pb-20">
      {/* Editorial Header Banner */}
      <section className="bg-[#012d1d] text-white pt-16 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#765a05]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-[1320px] mx-auto px-5 lg:px-12 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ffdf96] text-xs uppercase tracking-widest font-bold mb-4 border border-white/5">
            <span>Geographic Atlas · Sri Lanka</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold mb-4 leading-tight">
            The Iconic Geographies of Ceylon
          </h1>
          <p className="text-base text-[#86af99] max-w-2xl leading-relaxed">
            From the dry-zone stone fortresses of the north to the mist-wrapped eucalyptus cloud forests and the sapphire oceanic shelves of the south.
          </p>
        </div>
      </section>

      {/* Region Selector Bar */}
      <div className="max-w-[1320px] mx-auto px-5 lg:px-12 -mt-7 relative z-20">
        <div className="bg-white rounded-2xl p-2 sm:p-3 shadow-xl border border-[#012d1d]/10 flex items-center gap-2 overflow-x-auto">
          {DESTINATIONS.map((d) => (
            <button
              key={d.id}
              onClick={() => setActiveTab(d.id)}
              className={`px-4 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-2.5 ${
                activeTab === d.id
                  ? 'bg-[#012d1d] text-white shadow-md'
                  : 'text-[#414844] hover:bg-[#f0f5f0]'
              }`}
            >
              <span className="text-[11px] opacity-70 font-mono">{d.number}</span>
              <span>{d.name.split(':')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Destination Deep-Dive Detail */}
      <section className="max-w-[1320px] mx-auto px-5 lg:px-12 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Visual and Fast Stats */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/10] border border-[#012d1d]/10">
              <img
                src={currentDest.heroImage}
                alt={currentDest.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#f6fbf5]/95 backdrop-blur-md px-3 py-1 rounded-full text-[#765a05] text-xs font-bold uppercase tracking-wider shadow-sm">
                {currentDest.region}
              </div>
            </div>

            {/* Weather & Elevation Badges */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-4 bg-[#f0f5f0] rounded-xl text-center border border-[#dfe4df]">
                <span className="material-symbols-outlined text-[#765a05] text-xl block mb-1">
                  landscape
                </span>
                <span className="font-serif text-lg font-bold text-[#012d1d] block">
                  {currentDest.elevation}
                </span>
                <span className="text-[10px] uppercase text-[#717973] font-bold">Altitude</span>
              </div>
              <div className="p-4 bg-[#f0f5f0] rounded-xl text-center border border-[#dfe4df]">
                <span className="material-symbols-outlined text-[#765a05] text-xl block mb-1">
                  thermostat
                </span>
                <span className="font-serif text-lg font-bold text-[#012d1d] block">
                  {currentDest.avgTemp}
                </span>
                <span className="text-[10px] uppercase text-[#717973] font-bold">Climate</span>
              </div>
              <div className="p-4 bg-[#f0f5f0] rounded-xl text-center border border-[#dfe4df]">
                <span className="material-symbols-outlined text-[#765a05] text-xl block mb-1">
                  calendar_today
                </span>
                <span className="font-serif text-lg font-bold text-[#012d1d] block">
                  {currentDest.bestSeason}
                </span>
                <span className="text-[10px] uppercase text-[#717973] font-bold">Optimal Window</span>
              </div>
            </div>

            {/* Insider Secret Callout */}
            <div className="p-5 bg-[#c1ecd4]/20 rounded-2xl border border-[#86af99] space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#002114] font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-[#765a05]">key</span>
                <span>Resident Curator Field Note</span>
              </span>
              <p className="text-xs sm:text-sm text-[#002114] leading-relaxed italic">
                &ldquo;{currentDest.insiderSecret}&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Editorial & Experiences */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#765a05] font-bold mb-1 block">
                {currentDest.kicker}
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#012d1d] mb-4">
                {currentDest.name}
              </h2>
              <p className="text-sm text-[#414844] leading-relaxed">
                {currentDest.overview}
              </p>
            </div>

            {/* Signature Regional Experiences */}
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-wider font-bold text-[#012d1d] block">
                Signature Regional Encounters
              </span>
              {currentDest.features.map((feat, i) => (
                <div
                  key={i}
                  className="p-4 bg-white rounded-xl border border-[#dfe4df] flex items-start gap-3 shadow-sm"
                >
                  <span className="material-symbols-outlined text-[#765a05] mt-0.5 shrink-0">
                    {feat.icon}
                  </span>
                  <div>
                    <h4 className="font-bold text-sm text-[#012d1d]">{feat.title}</h4>
                    <p className="text-xs text-[#414844] mt-0.5 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Curated Accommodations */}
            <div className="p-5 bg-[#f0f5f0] rounded-xl border border-[#dfe4df]">
              <span className="text-xs uppercase tracking-widest text-[#765a05] font-bold block mb-2">
                Handpicked Heritage Enclaves
              </span>
              <ul className="space-y-1.5 text-xs text-[#012d1d] font-semibold">
                {currentDest.topStays.map((stay, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#765a05]"></span>
                    <span>{stay}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onNavigateToJourneys()}
                className="w-full sm:w-auto bg-[#012d1d] hover:bg-[#1b4332] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all shadow-md cursor-pointer"
              >
                View Routes Passing Here
              </button>
              <button
                onClick={onOpenPlanModal}
                className="w-full sm:w-auto bg-[#f0f5f0] hover:bg-[#ebefea] text-[#012d1d] px-6 py-3 rounded-lg text-sm font-semibold transition-all cursor-pointer border border-[#c1c8c2]"
              >
                Request Custom Stay
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
