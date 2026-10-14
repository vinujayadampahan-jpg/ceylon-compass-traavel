import React from 'react';
import { CURATORS } from '../../data/expeditions';
import { Curator } from '../../types';

interface CuratorsViewProps {
  onSelectCuratorForTrip: (curator: Curator) => void;
  onOpenConsultation: () => void;
}

export const CuratorsView: React.FC<CuratorsViewProps> = ({
  onSelectCuratorForTrip,
  onOpenConsultation,
}) => {
  return (
    <div className="w-full pb-20">
      {/* Editorial Header Banner */}
      <section className="bg-[#012d1d] text-white pt-16 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#765a05]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-[1320px] mx-auto px-5 lg:px-12 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ffdf96] text-xs uppercase tracking-widest font-bold mb-4 border border-white/5">
            <span>Resident Scholars &amp; Master Naturalists</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold mb-4 leading-tight">
            The Custodians of Ceylon
          </h1>
          <p className="text-base text-[#86af99] max-w-2xl leading-relaxed">
            Our private journeys are not guided by commercial tour couriers. They are led by published archaeologists, marine biologists, conservationists, and generational tea masters who call Sri Lanka home.
          </p>
        </div>
      </section>

      {/* Curators Grid */}
      <section className="max-w-[1320px] mx-auto px-5 lg:px-12 -mt-7 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CURATORS.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-[#012d1d]/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start gap-4 mb-5">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover ring-2 ring-[#012d1d]/10 shrink-0 shadow-md"
                  />
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#765a05] font-bold block">
                      {c.region}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#012d1d]">
                      {c.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#1b4332] mt-0.5">{c.role}</p>
                    <span className="text-xs text-[#717973] block mt-1">{c.specialty}</span>
                  </div>
                </div>

                <div className="p-4 bg-[#f0f5f0] rounded-xl border border-[#dfe4df] mb-4">
                  <p className="text-xs sm:text-sm text-[#012d1d] italic leading-relaxed font-serif">
                    {c.quotes}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#414844] leading-relaxed mb-6">
                  {c.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-[#ebefea] flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-[#717973]">
                  <div>
                    <span className="font-bold text-[#012d1d] block text-sm">
                      {c.yearsExperience} yrs
                    </span>
                    <span className="text-[10px] uppercase">Fieldwork</span>
                  </div>
                  <div className="h-6 w-px bg-[#dfe4df]"></div>
                  <div>
                    <span className="font-bold text-[#012d1d] block text-sm">
                      {c.expeditionsLed}+
                    </span>
                    <span className="text-[10px] uppercase">Private Routes</span>
                  </div>
                </div>

                <button
                  onClick={() => onSelectCuratorForTrip(c)}
                  className="px-4 py-2 bg-[#012d1d] hover:bg-[#1b4332] text-white rounded-lg text-xs font-semibold transition-all shadow-sm cursor-pointer"
                >
                  Request to Travel With {c.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Curator Recruitment Note */}
        <div className="mt-16 p-8 bg-[#ebefea] rounded-2xl border border-[#dfe4df] text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#765a05] font-bold block">
            Academic Fellowship
          </span>
          <h3 className="font-serif text-2xl font-bold text-[#012d1d]">
            Private Scholar Mentorship
          </h3>
          <p className="text-xs sm:text-sm text-[#414844] leading-relaxed">
            Interested in having a dedicated university archaeologist or cetacean biologist accompany your family throughout the entire island circuit?
          </p>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-2.5 bg-[#012d1d] hover:bg-[#1b4332] text-white rounded-lg text-xs font-semibold shadow-md transition-all cursor-pointer"
          >
            Arrange Private Curator Briefing
          </button>
        </div>
      </section>
    </div>
  );
};
