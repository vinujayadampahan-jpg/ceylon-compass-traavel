import React, { useState } from 'react';
import { Currency } from '../types';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  onOpenPlanModal: () => void;
  onOpenSearch: () => void;
  savedTripsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  currency,
  onCurrencyChange,
  onOpenPlanModal,
  onOpenSearch,
  savedTripsCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'signature-journeys', label: 'Signature Journeys' },
    { id: 'iconic-destinations', label: 'Iconic Destinations' },
    { id: 'local-curators', label: 'Local Curators' },
    { id: 'tailor-made-trips', label: 'Tailor-Made Trips' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f6fbf5]/90 backdrop-blur-xl border-b border-[#012d1d]/5 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1320px] mx-auto px-5 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand */}
        <button
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 shrink-0 text-left cursor-pointer group"
        >
          <img
            alt="Ceylon Compass Logo"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida/AEtjO1XyrlXGV7QwnTcpotytOX9D9U90lAaRs28KsJnxxqJCRjidI3XQf3QK2ECVxpG36w2JaEAyEAcHjkbGfpJGPka6QTGQAZG1v3QrJrfQNZJFIqfpBsP2N9he2N8evpH5JGtUyWEcf6j0ZUzK0K7fx3j7eIVFvrcDsTJYvCwpozKOLZfbVof9OCB0iFgcI8ZzpbYJN7rG0Xxspo4DiWi5c0-Q8OaSOnA5-ytzmUQojq7NR0Nzo-67hqfD3gSZ"
          />
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-tight text-[#012d1d] font-semibold leading-none">
              Ceylon Compass
            </span>
            <span className="text-[0.6875rem] tracking-widest uppercase text-[#765a05] font-bold mt-0.5">
              Authentic Expeditions
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-1 p-1 bg-[#f0f5f0] rounded-full">
          {navItems.map((item) => {
            const active = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-4 py-2 rounded-full transition-all text-sm font-medium cursor-pointer whitespace-nowrap shrink-0 ${
                  active
                    ? 'bg-[#1b4332] text-white font-semibold shadow-sm'
                    : 'text-[#414844] hover:text-[#181d1a] hover:bg-[#e5e9e4]/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="flex items-center bg-[#f0f5f0] hover:bg-[#ebefea] rounded-full px-3.5 py-2 text-sm text-[#414844] transition-colors cursor-pointer"
            title="Search destinations, tea estates, safaris..."
          >
            <span className="material-symbols-outlined text-[#717973] text-[1.125rem] mr-1.5">
              search
            </span>
            <span className="hidden lg:inline text-xs font-normal text-[#717973]">
              Search highlands, coasts...
            </span>
          </button>

          {/* Currency Selector */}
          <div className="relative inline-block">
            <select
              aria-label="Currency Selector"
              value={currency}
              onChange={(e) => onCurrencyChange(e.target.value as Currency)}
              className="bg-[#f0f5f0] hover:bg-[#e5e9e4] text-[#181d1a] text-xs font-semibold px-3 py-2 rounded-full border-none outline-none cursor-pointer transition-colors"
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="LKR">LKR (Rs)</option>
            </select>
          </div>

          {/* Primary CTA */}
          <button
            onClick={onOpenPlanModal}
            className="hidden md:inline-flex items-center justify-center bg-[#012d1d] hover:bg-[#1b4332] text-white px-4 py-2 rounded-lg text-sm font-semibold tracking-normal shadow-[0_4px_20px_-2px_rgba(27,67,50,0.15)] transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            Plan My Expedition
          </button>

          {/* User Profile / Saved Drawer toggle */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center relative p-0.5 rounded-full hover:ring-2 hover:ring-[#012d1d]/30 transition-all cursor-pointer"
              aria-label="User Profile"
            >
              <img
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-[#012d1d]/20"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrvL0xTAsAEsYh9rpIwdamc_-HxtFP0thWXwjdCXWaFgJWvR1oRyu7d5LyePx9TM0W73tQN8BR6UrDD7EY1Nuv3il-ixbYTKIMwPDK6jeXX0S2OsKyFb3vogmG5m_2FTUVPHdRrAlnITxcvIXP-kZNlcyAeDA5Teih4JjFt-ge52pu7pTSmgv9WWI-8thcKc-Sjw0pt4LE_x7wy3OkBJrTAWVyPLUGpndG60r4JTHnXNI7JTfqlZc1Nw"
              />
              {savedTripsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#765a05] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {savedTripsCount}
                </span>
              )}
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-[#012d1d]/10 p-3 z-50">
                <div className="pb-2 border-b border-[#ebefea]">
                  <span className="text-xs uppercase tracking-wider text-[#765a05] font-bold block">
                    Private Member
                  </span>
                  <p className="text-sm font-bold text-[#012d1d]">The Ceylon Explorer</p>
                  <p className="text-xs text-[#717973]">VIP Concierge Access Active</p>
                </div>
                <div className="py-2 space-y-1">
                  <button
                    onClick={() => {
                      setShowProfileMenu(false);
                      onOpenPlanModal();
                    }}
                    className="w-full text-left px-2 py-1.5 text-xs text-[#181d1a] hover:bg-[#f0f5f0] rounded-lg transition-colors flex items-center justify-between"
                  >
                    <span>My Inquiries</span>
                    <span className="text-[#765a05] font-semibold">Priority</span>
                  </button>
                  <button
                    onClick={() => {
                      setShowProfileMenu(false);
                      onNavigate('tailor-made-trips');
                    }}
                    className="w-full text-left px-2 py-1.5 text-xs text-[#181d1a] hover:bg-[#f0f5f0] rounded-lg transition-colors"
                  >
                    Bespoke Trip Architect
                  </button>
                  <a
                    href="tel:+94112348890"
                    className="w-full text-left px-2 py-1.5 text-xs text-[#181d1a] hover:bg-[#f0f5f0] rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-xs text-[#765a05]">
                      call
                    </span>
                    <span>Direct Concierge Desk</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#012d1d] hover:bg-[#f0f5f0] rounded-lg cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#f6fbf5] border-t border-[#ebefea] px-5 py-4 space-y-2 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors ${
                currentView === item.id
                  ? 'bg-[#1b4332] text-white font-semibold'
                  : 'text-[#181d1a] hover:bg-[#ebefea]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPlanModal();
              }}
              className="w-full bg-[#012d1d] hover:bg-[#1b4332] text-white py-3 rounded-lg text-sm font-semibold text-center"
            >
              Plan My Expedition
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
