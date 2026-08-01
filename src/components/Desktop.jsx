import React, { useState } from 'react';
import { 
  Briefcase, 
  Folder, 
  FileText, 
  User, 
  Terminal, 
  Github, 
  Gamepad2, 
  Palette,
  Monitor
} from 'lucide-react';
import { soundFx } from '../utils/soundFx';
import { WALLPAPERS } from './views/WallpaperView';

export default function Desktop({ onOpenWindow, currentWallpaper = 'teal' }) {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const activeWp = WALLPAPERS.find((w) => w.id === currentWallpaper) || WALLPAPERS[0];

  const desktopIcons = [
    {
      id: 'experience',
      title: 'Experience.exe',
      icon: Briefcase,
      color: 'bg-blue-600 text-white',
      badge: 'InstanDev',
      action: () => onOpenWindow('experience')
    },
    {
      id: 'projects',
      title: 'Projects.folder',
      icon: Folder,
      color: 'bg-amber-500 text-black',
      badge: 'DOXY & Chatifyy',
      action: () => onOpenWindow('projects')
    },
    {
      id: 'skills',
      title: 'Skills.txt',
      icon: FileText,
      color: 'bg-emerald-600 text-white',
      badge: 'MERN Stack',
      action: () => onOpenWindow('skills')
    },
    {
      id: 'about',
      title: 'About_Me.info',
      icon: User,
      color: 'bg-purple-600 text-white',
      badge: 'Agra, UP',
      action: () => onOpenWindow('about')
    },
    {
      id: 'wallpaper',
      title: 'Display.cpl',
      icon: Palette,
      color: 'bg-pink-600 text-white',
      badge: 'Wallpapers',
      action: () => onOpenWindow('wallpaper')
    },
    {
      id: 'terminal',
      title: 'Terminal.exe',
      icon: Terminal,
      color: 'bg-black text-green-400',
      badge: 'CLI',
      action: () => onOpenWindow('terminal')
    },
    {
      id: 'resume',
      title: 'My_Resume',
      icon: FileText,
      color: 'bg-red-600 text-white',
      badge: 'PDF',
      action: () => onOpenWindow('resume')
    },
    {
      id: 'minigame',
      title: 'Wordle_Battle.game',
      icon: Gamepad2,
      color: 'bg-red-500 text-white',
      badge: '8-bit Playable',
      action: () => onOpenWindow('minigame')
    },
    {
      id: 'github',
      title: 'GitHub.lnk',
      icon: Github,
      color: 'bg-gray-800 text-white',
      badge: 'External',
      action: () => {
        soundFx.playClick();
        window.open('https://github.com/SakshamKumar28', '_blank');
      }
    }
  ];

  const handleIconClick = (e, icon) => {
    e.stopPropagation();
    soundFx.playClick();
    setSelectedIcon(icon.id);
  };

  const handleIconDoubleClick = (e, icon) => {
    e.stopPropagation();
    soundFx.playOpenWindow();
    icon.action();
  };

  return (
    <div 
      onClick={() => setSelectedIcon(null)}
      onContextMenu={(e) => {
        e.preventDefault();
        soundFx.playClick();
        onOpenWindow('wallpaper');
      }}
      className="absolute inset-0 bottom-9 p-4 md:p-8 select-none font-system overflow-hidden flex flex-col justify-between transition-all duration-300"
      style={activeWp.style}
    >
      {/* Desktop Grid Icons */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4 md:gap-6 max-w-7xl">
        {desktopIcons.map((iconItem) => {
          const IconComponent = iconItem.icon;
          const isSelected = selectedIcon === iconItem.id;

          return (
            <div
              key={iconItem.id}
              onClick={(e) => handleIconClick(e, iconItem)}
              onDoubleClick={(e) => handleIconDoubleClick(e, iconItem)}
              onTouchEnd={(e) => handleIconDoubleClick(e, iconItem)}
              className={`
                group flex flex-col items-center p-2 rounded cursor-pointer transition-transform duration-100 hover:scale-105 active:scale-95
                ${isSelected ? 'bg-blue-900/40 border border-dotted border-white' : ''}
              `}
            >
              {/* 8-bit Icon Box */}
              <div className={`
                w-12 h-12 md:w-14 md:h-14 panel-outset p-2 flex items-center justify-center relative shadow-lg
                ${iconItem.color}
              `}>
                <IconComponent className="w-7 h-7 md:w-8 md:h-8" />
                {iconItem.badge && (
                  <span className="absolute -top-1 -right-1 bg-yellow-400 text-black font-pixel text-[8px] px-1 border border-black font-bold">
                    {iconItem.badge}
                  </span>
                )}
              </div>

              {/* Icon Title */}
              <span className={`
                mt-1.5 px-1 font-pixel text-[10px] md:text-xs text-center text-white tracking-tighter leading-tight break-all
                ${isSelected ? 'bg-win95-titlebar' : 'drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'}
              `}>
                {iconItem.title}
              </span>
            </div>
          );
        })}
      </div>

      {/* Retro OS Watermark / Hero Badge in Bottom Right */}
      <div className="self-end panel-outset p-3 md:p-4 bg-win95-surface/90 border-2 border-black max-w-sm text-left shadow-2xl backdrop-blur-sm">
        <div className="flex items-center gap-2 border-b border-gray-400 pb-1.5 mb-2">
          <Monitor className="w-4 h-4 text-blue-900" />
          <span className="font-pixel text-xs font-bold text-blue-950">SAKSHAM KUMAR v95.2</span>
        </div>
        <h1 className="font-terminal text-lg md:text-xl font-bold text-black leading-snug">
          Saksham Kumar
        </h1>
        <p className="font-terminal text-sm text-blue-900 font-bold">
          Software Engineering Student | Full-Stack MERN Developer
        </p>
        <div className="mt-2 text-xs text-gray-700 font-terminal space-y-0.5 border-t border-gray-300 pt-1.5">
          <div>📍 Agra, UP | GLA University Mathura</div>
          <div>🏆 Smart India Hackathon 2025 Finalist</div>
          <div className="text-red-700 font-bold flex items-center justify-between">
            <span>⚡ Right-click for Wallpapers</span>
            <span className="font-pixel text-[9px] bg-black text-yellow-300 px-1">{activeWp.badge}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
