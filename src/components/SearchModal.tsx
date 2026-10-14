import React, { useState } from 'react';
import { EXPEDITIONS, DESTINATIONS, CURATORS } from '../data/expeditions';
import { Expedition } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectExpedition: (exp: Expedition) => void;
  onSelectDestination: (destId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectExpedition,
  onSelectDestination,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const filteredExpeditions = EXPEDITIONS.filter(
    (e) =>
      e.title.toLowerCase().includes(q) ||
      e.routeSub.toLowerCase().includes(q) ||
      e.summary.toLowerCase().includes(q)
  );

  const filteredDestinations = DESTINATIONS.filter(
    (d) =>
      d.name.toLowerCase().includes(q) ||
      d.overview.toLowerCase().includes(q) ||
      d.region.toLowerCase().includes(q)
  );

  const filteredCurators = CURATORS.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.specialty.toLowerCase().includes(q) ||
      c.region.toLowerCase().includes(q)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-5 sm:p-6 shadow-2xl border border-[#012d1d]/15 flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 pb-4 border-b border-[#ebefea]">
          <span className="material-symbols-outlined text-[#765a05] text-2xl">search</span>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search highlands, tea lines, Sigiriya, surf, leopards..."
            className="w-full text-base sm:text-lg text-[#181d1a] placeholder:text-[#717973] border-none outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-[#717973] hover:text-[#181d1a] px-2 py-1 bg-[#f0f5f0] rounded"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#717973] hover:text-[#181d1a] hover:bg-[#f0f5f0]"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Results */}
        <div className="py-4 overflow-y-auto space-y-5">
          {/* Expeditions */}
          {filteredExpeditions.length > 0 && (
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#765a05] font-bold block mb-2">
                Curated Expeditions ({filteredExpeditions.length})
              </span>
              <div className="space-y-2">
                {filteredExpeditions.map((e) => (
                  <button
                    key={e.id}
                    onClick={() => {
                      onSelectExpedition(e);
                      onClose();
                    }}
                    className="w-full text-left p-3 rounded-xl hover:bg-[#f0f5f0] border border-transparent hover:border-[#dfe4df] transition-all flex items-center gap-3 cursor-pointer group"
                  >
                    <img
                      src={e.image}
                      alt={e.title}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-sm text-[#012d1d] group-hover:text-[#1b4332]">
                        {e.title}
                      </h4>
                      <p className="text-xs text-[#717973] line-clamp-1">{e.routeSub}</p>
                    </div>
                    <span className="text-xs text-[#765a05] font-bold shrink-0">
                      {e.durationDays} Days
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Destinations */}
          {filteredDestinations.length > 0 && (
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#765a05] font-bold block mb-2">
                Geographic Regions ({filteredDestinations.length})
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredDestinations.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => {
                      onSelectDestination(d.id);
                      onClose();
                    }}
                    className="text-left p-3 rounded-xl hover:bg-[#f0f5f0] border border-[#dfe4df] transition-all flex items-center gap-3 cursor-pointer"
                  >
                    <img
                      src={d.heroImage}
                      alt={d.name}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-xs text-[#012d1d]">{d.name}</h4>
                      <p className="text-[11px] text-[#717973]">{d.region}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Curators */}
          {filteredCurators.length > 0 && (
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#765a05] font-bold block mb-2">
                Resident Scholars &amp; Curators ({filteredCurators.length})
              </span>
              <div className="space-y-2">
                {filteredCurators.map((c) => (
                  <div
                    key={c.id}
                    className="p-2.5 rounded-xl bg-[#f6fbf5] border border-[#ebefea] flex items-center gap-3 text-xs"
                  >
                    <img
                      src={c.image}
                      alt={c.name}
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <div>
                      <span className="font-bold text-[#012d1d] block">{c.name}</span>
                      <span className="text-[#717973]">{c.role} · {c.region}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {filteredExpeditions.length === 0 &&
            filteredDestinations.length === 0 &&
            filteredCurators.length === 0 && (
              <div className="text-center py-8 text-[#717973]">
                <p className="text-sm">No matches found for &quot;{query}&quot;.</p>
                <p className="text-xs mt-1 text-[#414844]">
                  Try searching for &quot;Ella&quot;, &quot;Sigiriya&quot;, &quot;Whales&quot;, or &quot;Tea&quot;.
                </p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};
