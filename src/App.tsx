import { useState } from 'react';
import { Currency, Expedition, Curator } from './types';
import { EXPEDITIONS } from './data/expeditions';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/views/HomeView';
import { JourneysView } from './components/views/JourneysView';
import { DestinationsView } from './components/views/DestinationsView';
import { CuratorsView } from './components/views/CuratorsView';
import { TailorMadeView } from './components/views/TailorMadeView';
import { ExpeditionModal } from './components/ExpeditionModal';
import { AudioPlayerDrawer } from './components/AudioPlayerDrawer';
import { PlanExpeditionModal } from './components/PlanExpeditionModal';
import { ConsultationModal } from './components/ConsultationModal';
import { SearchModal } from './components/SearchModal';
import { ceylonAudio } from './utils/audioEngine';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [journeyFilter, setJourneyFilter] = useState<string | undefined>(undefined);
  const [currency, setCurrency] = useState<Currency>('USD');

  // Modals
  const [selectedExpedition, setSelectedExpedition] = useState<Expedition | null>(null);
  const [planModalOpen, setPlanModalOpen] = useState(false);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Ambient Audio
  const [audioDrawerOpen, setAudioDrawerOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<'ella' | 'mirissa' | 'sigiriya'>('ella');

  // Toast feedback
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => {
      setToast(null);
    }, 5000);
  };

  const handleToggleAudio = (trackKey?: 'ella' | 'mirissa' | 'sigiriya') => {
    const track = trackKey || currentTrack;
    if (trackKey) {
      setCurrentTrack(trackKey);
    }

    if (isPlayingAudio && (!trackKey || trackKey === currentTrack)) {
      ceylonAudio.stop();
      setIsPlayingAudio(false);
    } else {
      ceylonAudio.play(track);
      setIsPlayingAudio(true);
      setAudioDrawerOpen(true);
    }
  };

  const handleNavigate = (view: string, filter?: string) => {
    setCurrentView(view);
    setJourneyFilter(filter);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCurator = (curator: Curator) => {
    showToast(`Curator ${curator.name} requested. Our team will tailor your itinerary.`);
    setCurrentView('tailor-made-trips');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDestinationFromSearch = (destId: string) => {
    setCurrentView('iconic-destinations');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f6fbf5] text-[#181d1a] flex flex-col font-sans selection:bg-[#c1ecd4] selection:text-[#002114]">
      {/* Top Navigation */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        currency={currency}
        onCurrencyChange={setCurrency}
        onOpenPlanModal={() => setPlanModalOpen(true)}
        onOpenSearch={() => setSearchModalOpen(true)}
        savedTripsCount={0}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-20">
        {currentView === 'home' && (
          <HomeView
            currency={currency}
            onSelectExpedition={(exp) => setSelectedExpedition(exp)}
            onNavigate={handleNavigate}
            onOpenConsultation={() => setConsultationModalOpen(true)}
            onOpenPlanModal={() => setPlanModalOpen(true)}
            onToggleAudio={() => handleToggleAudio()}
            isPlayingAudio={isPlayingAudio}
          />
        )}

        {currentView === 'signature-journeys' && (
          <JourneysView
            currency={currency}
            onSelectExpedition={(exp) => setSelectedExpedition(exp)}
            initialFilter={journeyFilter}
            onOpenPlanModal={() => setPlanModalOpen(true)}
          />
        )}

        {currentView === 'iconic-destinations' && (
          <DestinationsView
            onNavigateToJourneys={(style) => handleNavigate('signature-journeys', style)}
            onOpenPlanModal={() => setPlanModalOpen(true)}
          />
        )}

        {currentView === 'local-curators' && (
          <CuratorsView
            onSelectCuratorForTrip={handleSelectCurator}
            onOpenConsultation={() => setConsultationModalOpen(true)}
          />
        )}

        {currentView === 'tailor-made-trips' && (
          <TailorMadeView
            currency={currency}
            onSuccess={(msg) => showToast(msg)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Expedition Detail & Booking Modal */}
      <ExpeditionModal
        expedition={selectedExpedition}
        currency={currency}
        onClose={() => setSelectedExpedition(null)}
        onBookSuccess={(title) =>
          showToast(`Priority inquiry registered for ${title}. Colombo Concierge notified.`)
        }
      />

      {/* Plan Expedition Modal */}
      <PlanExpeditionModal
        isOpen={planModalOpen}
        onClose={() => setPlanModalOpen(false)}
        onSuccess={(msg) => showToast(msg)}
      />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        onSuccess={(msg) => showToast(msg)}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectExpedition={(exp) => setSelectedExpedition(exp)}
        onSelectDestination={handleSelectDestinationFromSearch}
      />

      {/* Ambient Audio Player Drawer */}
      <AudioPlayerDrawer
        isOpen={audioDrawerOpen}
        onClose={() => setAudioDrawerOpen(false)}
        isPlaying={isPlayingAudio}
        onTogglePlay={handleToggleAudio}
        currentTrack={currentTrack}
      />

      {/* Persistent Audio Mini-Pill (When drawer closed but audio playing) */}
      {!audioDrawerOpen && isPlayingAudio && (
        <button
          onClick={() => setAudioDrawerOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-[#012d1d] hover:bg-[#1b4332] text-white px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2.5 border border-white/20 transition-all cursor-pointer animate-bounce"
        >
          <span className="w-2 h-2 rounded-full bg-[#ffdf96] animate-pulse"></span>
          <span className="text-xs font-semibold">Ceylon Dispatches Playing</span>
          <span className="material-symbols-outlined text-sm">equalizer</span>
        </button>
      )}

      {/* Global Success / Alert Toast */}
      {toast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[#012d1d] text-white px-6 py-3 rounded-xl shadow-2xl border border-[#c1ecd4]/20 flex items-center gap-3 text-sm animate-fade-in">
          <span className="material-symbols-outlined text-[#ffdf96] text-lg">
            verified
          </span>
          <span>{toast}</span>
          <button
            onClick={() => setToast(null)}
            className="text-white/60 hover:text-white ml-2 text-xs"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
