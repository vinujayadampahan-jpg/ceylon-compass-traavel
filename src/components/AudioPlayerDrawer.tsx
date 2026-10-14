import React, { useState, useEffect } from 'react';
import { ceylonAudio } from '../utils/audioEngine';

interface AudioPlayerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  isPlaying: boolean;
  onTogglePlay: (trackKey?: 'ella' | 'mirissa' | 'sigiriya') => void;
  currentTrack: 'ella' | 'mirissa' | 'sigiriya';
}

export const AudioPlayerDrawer: React.FC<AudioPlayerDrawerProps> = ({
  isOpen,
  onClose,
  isPlaying,
  onTogglePlay,
  currentTrack,
}) => {
  const [volume, setVolume] = useState(0.35);

  useEffect(() => {
    ceylonAudio.setVolume(volume);
  }, [volume]);

  if (!isOpen) return null;

  const tracks = [
    {
      id: 'ella' as const,
      title: 'The Highland Cloudline',
      region: 'Ella & Nine Arch Bridge',
      desc: 'Misty eucalyptus valley breeze, rhythmic distant British locomotive rumble, and tea bird warbles.',
      icon: 'train',
    },
    {
      id: 'mirissa' as const,
      title: 'Mirissa Golden Surf',
      region: 'Southern Indian Ocean',
      desc: 'Gentle rhythmic swell of turquoise ocean rollers breaking against coconut palm headlands.',
      icon: 'waves',
    },
    {
      id: 'sigiriya' as const,
      title: 'Sigiriya Dawn Canopy',
      region: 'Cultural Triangle Citadel',
      desc: 'Pre-dawn jungle rustle, awakening hornbills, and distant resonant temple singing bowl.',
      icon: 'forest',
    },
  ];

  const activeTrackObj = tracks.find((t) => t.id === currentTrack) || tracks[0];

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-[#012d1d] text-white rounded-2xl shadow-2xl border border-white/10 p-5 backdrop-blur-xl animate-fade-in">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffdf96] animate-pulse"></span>
          <span className="text-xs uppercase tracking-widest text-[#ffdf96] font-bold">
            Ceylon Dispatches · Ambient Audio
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Minimize audio player"
        >
          <span className="material-symbols-outlined text-sm">close</span>
        </button>
      </div>

      <div className="py-4">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h4 className="font-serif text-lg font-bold text-white">
              {activeTrackObj.title}
            </h4>
            <span className="text-xs text-[#86af99]">{activeTrackObj.region}</span>
          </div>
          <button
            onClick={() => onTogglePlay()}
            className="w-12 h-12 rounded-full bg-[#765a05] hover:bg-[#ffd87c] hover:text-[#012d1d] text-white flex items-center justify-center transition-all shadow-lg cursor-pointer shrink-0"
            aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
          >
            <span className="material-symbols-outlined text-2xl">
              {isPlaying ? 'pause' : 'play_arrow'}
            </span>
          </button>
        </div>

        <p className="text-xs text-white/70 leading-relaxed mb-4">
          {activeTrackObj.desc}
        </p>

        {/* Visualizer bars */}
        <div className="flex items-center gap-1 h-6 mb-4">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className={`flex-1 rounded-full transition-all duration-300 ${
                isPlaying
                  ? 'bg-[#ffdf96] opacity-80'
                  : 'bg-white/20'
              }`}
              style={{
                height: isPlaying
                  ? `${Math.max(15, Math.sin(i * 0.7 + Date.now() * 0.003) * 100)}%`
                  : '20%',
              }}
            />
          ))}
        </div>

        {/* Track Selection Tabs */}
        <div className="space-y-1.5 mb-4">
          {tracks.map((t) => (
            <button
              key={t.id}
              onClick={() => onTogglePlay(t.id)}
              className={`w-full text-left p-2 rounded-lg text-xs flex items-center justify-between transition-colors ${
                currentTrack === t.id
                  ? 'bg-white/15 text-white font-semibold'
                  : 'text-white/60 hover:bg-white/5 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-[#ffdf96]">
                  {t.icon}
                </span>
                <span>{t.title}</span>
              </div>
              {currentTrack === t.id && isPlaying && (
                <span className="text-[10px] uppercase font-bold text-[#ffd87c]">Playing</span>
              )}
            </button>
          ))}
        </div>

        {/* Volume Slider */}
        <div className="flex items-center gap-2 pt-2 border-t border-white/10 text-white/70">
          <span className="material-symbols-outlined text-sm">
            {volume === 0 ? 'volume_off' : 'volume_up'}
          </span>
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-full accent-[#ffdf96] cursor-pointer"
          />
          <span className="text-[10px] w-8 text-right">{Math.round(volume * 100)}%</span>
        </div>
      </div>
    </div>
  );
};
