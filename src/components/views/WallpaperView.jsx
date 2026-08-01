import React, { useState } from 'react';
import { Monitor, Check, Palette } from 'lucide-react';
import { soundFx } from '../../utils/soundFx';

export const WALLPAPERS = [
  {
    id: 'teal',
    name: 'Windows 95 Teal (Default)',
    style: {
      backgroundColor: '#008080',
      backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 0)`,
      backgroundSize: '16px 16px'
    },
    badge: 'Classic Win95'
  },
  {
    id: 'clouds',
    name: '90s Sky Blue',
    style: {
      backgroundColor: '#3a6ea5',
      backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 2px, transparent 0)`,
      backgroundSize: '24px 24px'
    },
    badge: 'Retro Sky'
  },
  {
    id: 'matrix',
    name: 'Matrix Digital Rain',
    style: {
      backgroundColor: '#051105',
      backgroundImage: `linear-gradient(rgba(0, 255, 65, 0.15) 1px, transparent 0), linear-gradient(90deg, rgba(0, 255, 65, 0.15) 1px, transparent 0)`,
      backgroundSize: '16px 16px'
    },
    badge: 'Terminal Green'
  },
  {
    id: 'cyberpunk',
    name: 'Synthwave Grid',
    style: {
      backgroundColor: '#1a0933',
      backgroundImage: `linear-gradient(rgba(255, 0, 128, 0.2) 1px, transparent 0), linear-gradient(90deg, rgba(0, 255, 255, 0.2) 1px, transparent 0)`,
      backgroundSize: '20px 20px'
    },
    badge: 'Neon Grid'
  },
  {
    id: 'mac7',
    name: 'Classic Mac System 7',
    style: {
      backgroundColor: '#606060',
      backgroundImage: `repeating-conic-gradient(#505050 0% 25%, #757575 0% 50%)`,
      backgroundSize: '8px 8px'
    },
    badge: 'Macintosh Gray'
  },
  {
    id: 'midnight',
    name: 'Retro 8-Bit Midnight',
    style: {
      backgroundColor: '#0f172a',
      backgroundImage: `radial-gradient(rgba(99, 102, 241, 0.2) 1px, transparent 0)`,
      backgroundSize: '16px 16px'
    },
    badge: 'Deep Blue'
  }
];

export default function WallpaperView({ currentWallpaper, onSelectWallpaper }) {
  const [selectedId, setSelectedId] = useState(currentWallpaper);

  const activeWallpaper = WALLPAPERS.find((w) => w.id === selectedId) || WALLPAPERS[0];

  const handleApply = () => {
    soundFx.playClick();
    onSelectWallpaper(selectedId);
  };

  return (
    <div className="space-y-4 font-terminal text-black text-base md:text-lg select-none">
      {/* Header Banner */}
      <div className="panel-outset p-3 bg-win95-titlebar text-white border-2 border-black flex items-center justify-between">
        <div className="flex items-center gap-2 font-pixel text-xs">
          <Palette className="w-4 h-4 text-yellow-300" />
          <span>DISPLAY PROPERTIES — WALLPAPER SWITCHER</span>
        </div>
        <span className="font-pixel text-[10px] bg-yellow-400 text-black px-1.5 py-0.5 border border-black font-bold">
          v95.2
        </span>
      </div>

      {/* CRT Monitor Interactive Preview */}
      <div className="flex flex-col items-center">
        <div className="relative w-64 h-44 panel-outset p-3 bg-gray-300 border-2 border-black flex flex-col items-center justify-center shadow-xl">
          {/* Monitor Screen Frame */}
          <div 
            className="w-full h-full panel-inset p-2 border-2 border-black relative overflow-hidden flex flex-col justify-between transition-all duration-300"
            style={activeWallpaper.style}
          >
            {/* Mini Desktop Preview Elements */}
            <div className="flex justify-between items-start">
              <div className="w-4 h-4 bg-blue-600/80 border border-white flex items-center justify-center text-[7px] text-white font-pixel">
                SK
              </div>
              <div className="panel-outset px-1 py-0.5 bg-gray-200 text-[8px] font-pixel text-black border border-black">
                PREVIEW
              </div>
            </div>

            <div className="panel-outset p-1 bg-gray-200/90 border border-black text-[9px] font-terminal text-black truncate">
              {activeWallpaper.name}
            </div>
          </div>
        </div>
        {/* Monitor Stand */}
        <div className="w-16 h-3 bg-gray-400 border-x-2 border-b-2 border-black"></div>
        <div className="w-28 h-2 bg-gray-300 panel-outset border-2 border-black"></div>
      </div>

      {/* Wallpaper Selection List */}
      <div className="space-y-2">
        <label className="font-pixel text-xs text-gray-800 block">
          SELECT DESKTOP WALLPAPER PATTERN:
        </label>

        <div className="panel-inset p-2 bg-white max-h-48 overflow-y-auto space-y-1 border border-black">
          {WALLPAPERS.map((wp) => {
            const isSelected = selectedId === wp.id;
            const isApplied = currentWallpaper === wp.id;

            return (
              <div
                key={wp.id}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedId(wp.id);
                }}
                className={`
                  p-2 flex items-center justify-between cursor-pointer border transition-colors
                  ${isSelected ? 'bg-win95-titlebar text-white border-blue-900' : 'hover:bg-gray-100 text-black border-transparent'}
                `}
              >
                <div className="flex items-center gap-2.5">
                  <div 
                    className="w-5 h-5 border border-black shrink-0 shadow-inner" 
                    style={wp.style}
                  />
                  <span className="font-terminal font-bold text-base md:text-lg">{wp.name}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`font-pixel text-[9px] px-1.5 py-0.5 border border-black ${isSelected ? 'bg-yellow-400 text-black' : 'bg-gray-200 text-gray-800'}`}>
                    {wp.badge}
                  </span>
                  {isApplied && (
                    <span className="font-pixel text-[9px] bg-emerald-600 text-white px-1 py-0.5 flex items-center gap-0.5">
                      <Check className="w-3 h-3" /> APPLIED
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-2 border-t border-gray-400 flex justify-end gap-2">
        <button
          onClick={handleApply}
          className="btn-win95 px-4 py-1.5 font-pixel text-xs bg-emerald-700 text-white hover:bg-emerald-800 flex items-center gap-1.5 font-bold"
        >
          <Check className="w-3.5 h-3.5" />
          <span>Apply Wallpaper</span>
        </button>
      </div>
    </div>
  );
}
