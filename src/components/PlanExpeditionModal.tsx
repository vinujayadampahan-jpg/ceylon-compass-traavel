import React, { useState } from 'react';

interface PlanExpeditionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (summary: string) => void;
}

export const PlanExpeditionModal: React.FC<PlanExpeditionModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [step, setStep] = useState(1);
  const [style, setStyle] = useState('highlands');
  const [duration, setDuration] = useState('8-11');
  const [travelers, setTravelers] = useState('2');
  const [pace, setPace] = useState('unhurried');
  const [season, setSeason] = useState('winter');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onSuccess(`Custom ${duration}-day ${style} expedition inquiry for ${name}`);
      onClose();
      setSubmitted(false);
      setStep(1);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#012d1d]/15 flex flex-col relative my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#f0f5f0] hover:bg-[#ebefea] text-[#181d1a] flex items-center justify-center transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        <div className="mb-6">
          <span className="text-xs uppercase tracking-widest text-[#765a05] font-bold block mb-1">
            Complimentary Itinerary Design
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#012d1d]">
            Plan Your Bespoke Ceylon Expedition
          </h2>
          <p className="text-xs sm:text-sm text-[#414844] mt-1">
            Step {step} of 2 · Orchestrated by native Colombo scholars and naturalists.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center bg-[#c1ecd4] text-[#002114] rounded-2xl border border-[#86af99] space-y-3">
            <span className="material-symbols-outlined text-5xl text-emerald-800">
              verified
            </span>
            <h3 className="font-serif text-2xl font-bold">Expedition Blueprint Requested</h3>
            <p className="text-sm max-w-md mx-auto leading-relaxed">
              We have dispatched your brief directly to our Senior Itinerary Architect at Galle Face Court. You will receive a bespoke preliminary route proposal and telephone briefing within 4 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <div className="space-y-5 animate-fade-in">
                {/* Travel Style */}
                <div>
                  <label className="text-xs uppercase tracking-wider font-bold text-[#181d1a] block mb-2">
                    Primary Expedition Focus
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {[
                      { id: 'highlands', label: 'Highlands & Tea Trails', icon: 'local_cafe' },
                      { id: 'heritage', label: 'Citadels & Ancient Ruins', icon: 'castle' },
                      { id: 'ocean', label: 'Coast & Whale Sanctuaries', icon: 'waves' },
                      { id: 'wildlife', label: 'Yala Leopard Safaris', icon: 'pets' },
                      { id: 'wellness', label: 'Ayurveda & Solitude', icon: 'spa' },
                      { id: 'grand', label: 'The Complete Island Loop', icon: 'explore' },
                    ].map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setStyle(opt.id)}
                        className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between h-20 ${
                          style === opt.id
                            ? 'border-[#012d1d] bg-[#f0f5f0] ring-1 ring-[#012d1d]'
                            : 'border-[#dfe4df] hover:border-[#86af99]'
                        }`}
                      >
                        <span className="material-symbols-outlined text-lg text-[#765a05]">
                          {opt.icon}
                        </span>
                        <span className="text-xs font-semibold text-[#012d1d] leading-tight">
                          {opt.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Duration & Travelers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider font-bold text-[#181d1a] block mb-1.5">
                      Ideal Journey Duration
                    </label>
                    <select
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-full bg-[#f0f5f0] border border-[#c1c8c2] rounded-lg p-2.5 text-xs sm:text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#012d1d]"
                    >
                      <option value="5-7">5 – 7 Days (Highlights)</option>
                      <option value="8-11">8 – 11 Days (Deep Island Immersion)</option>
                      <option value="12-16">12 – 16 Days (The Sovereign Grand Ceylon)</option>
                      <option value="17+">17+ Days (Extended Private Estate Stay)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider font-bold text-[#181d1a] block mb-1.5">
                      Travelers in Party
                    </label>
                    <select
                      value={travelers}
                      onChange={(e) => setTravelers(e.target.value)}
                      className="w-full bg-[#f0f5f0] border border-[#c1c8c2] rounded-lg p-2.5 text-xs sm:text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#012d1d]"
                    >
                      <option value="1">1 Explorer (Dedicated Scholar Guide)</option>
                      <option value="2">2 Travelers (Private Chauffeured Saloon)</option>
                      <option value="3-4">3 – 4 Family / Friends (Executive SUV)</option>
                      <option value="5+">5+ Travelers (Private Villa Buyout)</option>
                    </select>
                  </div>
                </div>

                {/* Travel Cadence & Season */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider font-bold text-[#181d1a] block mb-1.5">
                      Cadence &amp; Pace
                    </label>
                    <select
                      value={pace}
                      onChange={(e) => setPace(e.target.value)}
                      className="w-full bg-[#f0f5f0] border border-[#c1c8c2] rounded-lg p-2.5 text-xs sm:text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#012d1d]"
                    >
                      <option value="unhurried">Unhurried Slow Travel (2-3 nights per stay)</option>
                      <option value="active">Active Exploration (Daily hikes, early safaris)</option>
                      <option value="balanced">Balanced Curated Cadence</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider font-bold text-[#181d1a] block mb-1.5">
                      Target Window
                    </label>
                    <select
                      value={season}
                      onChange={(e) => setSeason(e.target.value)}
                      className="w-full bg-[#f0f5f0] border border-[#c1c8c2] rounded-lg p-2.5 text-xs sm:text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#012d1d]"
                    >
                      <option value="winter">Nov 2025 – Apr 2026 (Peak Season)</option>
                      <option value="summer">May 2026 – Aug 2026 (East Coast &amp; Yala)</option>
                      <option value="flexible">Flexible / Planning in Advance</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="bg-[#012d1d] hover:bg-[#1b4332] text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <span>Proceed to Contact Details</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 animate-fade-in">
                <div className="p-3 bg-[#f0f5f0] rounded-xl text-xs text-[#414844] flex items-center justify-between">
                  <span>Selected: {duration} Days · {style} focus · {travelers} Guests</span>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-[#765a05] font-semibold underline hover:text-[#012d1d]"
                  >
                    Modify
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider font-bold text-[#181d1a] block mb-1">
                      Lead Voyager Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Dr. Arthur Wellesley"
                      className="w-full bg-[#f0f5f0] border border-[#c1c8c2] rounded-lg p-2.5 text-xs sm:text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#012d1d]"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider font-bold text-[#181d1a] block mb-1">
                      Correspondence Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@domain.com"
                      className="w-full bg-[#f0f5f0] border border-[#c1c8c2] rounded-lg p-2.5 text-xs sm:text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#012d1d]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider font-bold text-[#181d1a] block mb-1">
                    Telephone (for WhatsApp Concierge Coordination)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+44 7700 900077"
                    className="w-full bg-[#f0f5f0] border border-[#c1c8c2] rounded-lg p-2.5 text-xs sm:text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#012d1d]"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider font-bold text-[#181d1a] block mb-1">
                    Bespoke Desires &amp; Architectural Preferences
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Tell us if you love Geoffrey Bawa architecture, require private tea plucking, or wish to combine high tea with private marine biologist catamarans..."
                    className="w-full bg-[#f0f5f0] border border-[#c1c8c2] rounded-lg p-2.5 text-xs sm:text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#012d1d]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs text-[#717973] hover:text-[#181d1a]"
                  >
                    ← Back to Preferences
                  </button>
                  <button
                    type="submit"
                    className="bg-[#012d1d] hover:bg-[#1b4332] text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-md cursor-pointer"
                  >
                    Send to Colombo Concierge
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};
