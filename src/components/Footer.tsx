import React, { useState } from 'react';

interface FooterProps {
  onNavigate: (view: string, filter?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');
  const [legalModal, setLegalModal] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid correspondence email address.');
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
    setTimeout(() => {
      setSubscribed(false);
    }, 6000);
  };

  return (
    <>
      <footer className="w-full bg-[#f0f5f0] text-[#181d1a] border-t border-[#ebefea]">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-12 pt-16 pb-12">
          {/* Curated Dispatches Newsletter Box */}
          <div className="bg-[#ebefea] p-8 lg:p-10 rounded-2xl shadow-[0_4px_20px_-2px_rgba(27,67,50,0.05)] mb-16 flex flex-col lg:flex-row items-center justify-between gap-6 border border-[#dfe4df]">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-widest text-[#765a05] font-bold block mb-1">
                Curated Dispatches
              </span>
              <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-[#012d1d] mb-2">
                Ceylon Travel Stories &amp; Private Retreats
              </h3>
              <p className="text-sm text-[#414844] leading-relaxed">
                Receive quarterly monographs on heritage tea bungalows, seasonal elephant gatherings,
                and secluded southern sanctuaries.
              </p>
            </div>

            <form
              onSubmit={handleSubscribe}
              className="w-full lg:w-auto flex flex-col sm:flex-row gap-2 shrink-0"
            >
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Enter your correspondence email"
                  className="bg-white px-4 py-3 rounded-lg text-sm text-[#181d1a] placeholder:text-[#717973] border border-[#c1c8c2] outline-none focus:ring-2 focus:ring-[#012d1d] focus:border-transparent w-full sm:w-80 transition-all"
                />
                {error && (
                  <span className="absolute -bottom-5 left-1 text-xs text-[#ba1a1a] font-medium">
                    {error}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="bg-[#012d1d] text-white hover:bg-[#1b4332] px-6 py-3 rounded-lg text-sm font-semibold transition-all shrink-0 cursor-pointer shadow-md"
              >
                {subscribed ? 'Subscribed ✓' : 'Subscribe'}
              </button>
            </form>
          </div>

          {subscribed && (
            <div className="mb-8 p-4 bg-[#c1ecd4] text-[#002114] rounded-xl text-sm font-medium border border-[#86af99] flex items-center gap-2">
              <span className="material-symbols-outlined text-emerald-800">check_circle</span>
              <span>
                Thank you for subscribing. You will receive our next quarterly Ceylon monograph in your inbox.
              </span>
            </div>
          )}

          {/* 5-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            {/* Col 1-2: Brand & Concierge */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img
                  alt="Ceylon Compass Logo"
                  className="h-8 w-auto object-contain"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1XyrlXGV7QwnTcpotytOX9D9U90lAaRs28KsJnxxqJCRjidI3XQf3QK2ECVxpG36w2JaEAyEAcHjkbGfpJGPka6QTGQAZG1v3QrJrfQNZJFIqfpBsP2N9he2N8evpH5JGtUyWEcf6j0ZUzK0K7fx3j7eIVFvrcDsTJYvCwpozKOLZfbVof9OCB0iFgcI8ZzpbYJN7rG0Xxspo4DiWi5c0-Q8OaSOnA5-ytzmUQojq7NR0Nzo-67hqfD3gSZ"
                />
                <span className="font-serif text-xl font-bold text-[#012d1d]">Ceylon Compass</span>
              </div>
              <p className="text-sm text-[#414844] leading-relaxed max-w-sm">
                Handcrafted luxury expeditions curated with colonial architectural grace, highland reverence,
                and unspoiled maritime solitude.
              </p>

              <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-[#dfe4df]">
                <span className="text-xs uppercase tracking-wider text-[#012d1d] font-bold">
                  24/7 Colombo Concierge Desk
                </span>
                <div className="flex items-center gap-2 text-xs text-[#414844]">
                  <span className="material-symbols-outlined text-[1.125rem] text-[#765a05]">
                    call
                  </span>
                  <a href="tel:+94112348890" className="hover:text-[#012d1d] font-medium">
                    +94 11 234 8890
                  </a>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#414844]">
                  <span className="material-symbols-outlined text-[1.125rem] text-[#765a05]">
                    mail
                  </span>
                  <a href="mailto:concierge@ceyloncompass.com" className="hover:text-[#012d1d]">
                    concierge@ceyloncompass.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#414844]">
                  <span className="material-symbols-outlined text-[1.125rem] text-[#765a05]">
                    location_on
                  </span>
                  <span>Galle Face Court, Colombo 03, Sri Lanka</span>
                </div>
              </div>
            </div>

            {/* Col 3: Iconic Destinations */}
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold text-[#012d1d] uppercase tracking-wider">
                Iconic Destinations
              </h4>
              <ul className="flex flex-col gap-2 text-xs text-[#414844]">
                <li>
                  <button
                    onClick={() => onNavigate('iconic-destinations')}
                    className="hover:text-[#012d1d] transition-colors text-left cursor-pointer"
                  >
                    Sigiriya &amp; Cultural Triangle
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('iconic-destinations')}
                    className="hover:text-[#012d1d] transition-colors text-left cursor-pointer"
                  >
                    Ella Mist Highlands
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('iconic-destinations')}
                    className="hover:text-[#012d1d] transition-colors text-left cursor-pointer"
                  >
                    Mirissa &amp; Southern Coast
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('iconic-destinations')}
                    className="hover:text-[#012d1d] transition-colors text-left cursor-pointer"
                  >
                    Kandy Sacred Valley
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('iconic-destinations')}
                    className="hover:text-[#012d1d] transition-colors text-left cursor-pointer"
                  >
                    Yala Leopard Reserves
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 4: Expedition Styles */}
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold text-[#012d1d] uppercase tracking-wider">
                Expedition Styles
              </h4>
              <ul className="flex flex-col gap-2 text-xs text-[#414844]">
                <li>
                  <button
                    onClick={() => onNavigate('signature-journeys', 'highlands')}
                    className="hover:text-[#012d1d] transition-colors text-left cursor-pointer"
                  >
                    Colonial Planter Bungalows
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('signature-journeys', 'wellness')}
                    className="hover:text-[#012d1d] transition-colors text-left cursor-pointer"
                  >
                    Ayurvedic Wellness Retreats
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('signature-journeys', 'wildlife')}
                    className="hover:text-[#012d1d] transition-colors text-left cursor-pointer"
                  >
                    Private Wildlife Safaris
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('signature-journeys', 'highlands')}
                    className="hover:text-[#012d1d] transition-colors text-left cursor-pointer"
                  >
                    Bespoke Train Expeditions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('signature-journeys', 'ocean')}
                    className="hover:text-[#012d1d] transition-colors text-left cursor-pointer"
                  >
                    Coastal Sailing Charters
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 5: Accreditations */}
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold text-[#012d1d] uppercase tracking-wider">
                Accreditations
              </h4>
              <div className="flex flex-col gap-3">
                <div className="p-3 bg-[#ebefea] rounded-xl border border-[#dfe4df]">
                  <span className="text-[11px] uppercase tracking-wider text-[#765a05] font-bold block">
                    SLTDA Certified
                  </span>
                  <span className="text-xs text-[#414844]">Official License No. A-4902</span>
                </div>
                <div className="p-3 bg-[#ebefea] rounded-xl border border-[#dfe4df]">
                  <span className="text-[11px] uppercase tracking-wider text-[#765a05] font-bold block">
                    Conservation Pledge
                  </span>
                  <span className="text-xs text-[#414844]">
                    Carbon Neutral Ceylon Certified
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-[#dfe4df] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#717973]">
            <span>© 2025 Ceylon Compass - Authentic Expeditions Ltd. All privileges reserved.</span>
            <div className="flex items-center gap-6">
              <button
                onClick={() => setLegalModal('privacy')}
                className="uppercase tracking-wider hover:text-[#012d1d] transition-colors cursor-pointer"
              >
                Privacy Charter
              </button>
              <button
                onClick={() => setLegalModal('terms')}
                className="uppercase tracking-wider hover:text-[#012d1d] transition-colors cursor-pointer"
              >
                Expedition Terms
              </button>
              <button
                onClick={() => setLegalModal('sustainability')}
                className="uppercase tracking-wider hover:text-[#012d1d] transition-colors cursor-pointer"
              >
                Sustainable Travel
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal & Policy Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#012d1d]/10 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-[#ebefea]">
              <h3 className="font-serif text-xl font-bold text-[#012d1d]">
                {legalModal === 'privacy' && 'Privacy Charter & Client Discretion'}
                {legalModal === 'terms' && 'Expedition Terms & Guarantees'}
                {legalModal === 'sustainability' && 'Carbon Neutral Ceylon Pledge'}
              </h3>
              <button
                onClick={() => setLegalModal(null)}
                className="p-1 rounded-lg hover:bg-[#f0f5f0] text-[#717973] hover:text-[#181d1a]"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="py-4 text-sm text-[#414844] space-y-3 leading-relaxed">
              {legalModal === 'privacy' && (
                <>
                  <p>
                    Ceylon Compass upholds uncompromising discretion for our voyagers. Private passenger
                    flight manifests, personal dietary requests, and bespoke itinerary schedules are
                    retained exclusively for logistical fulfillment.
                  </p>
                  <p>
                    We never vend, syndicate, or broker client records to third-party commercial databases.
                  </p>
                </>
              )}
              {legalModal === 'terms' && (
                <>
                  <p>
                    All Ceylon Compass expeditions are operated in full accordance with the Sri Lanka
                    Tourism Development Authority (SLTDA License No. A-4902).
                  </p>
                  <p>
                    Our private chauffeured fleet carries comprehensive sovereign passenger insurance.
                    Cancellations initiated up to 30 days prior to arrival are 100% refundable or
                    transferable to alternative seasonal dates without administrative penalty.
                  </p>
                </>
              )}
              {legalModal === 'sustainability' && (
                <>
                  <p>
                    Every liter of premium fuel consumed across our private transfer operations is
                    audited quarterly and counterbalanced through certified mangrove planting in the
                    Kalpitiya peninsula.
                  </p>
                  <p>
                    Furthermore, 3% of every expedition fee is contributed directly to local wildlife
                    conservation corridors and archaeological preservation trusts in Anuradhapura and Yala.
                  </p>
                </>
              )}
            </div>
            <div className="pt-3 border-t border-[#ebefea] text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="px-5 py-2 bg-[#012d1d] text-white rounded-lg text-xs font-semibold hover:bg-[#1b4332]"
              >
                Close Charter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
