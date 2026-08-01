import React, { useState, useEffect } from 'react';
import { soundFx } from '../utils/soundFx';
import { 
  Terminal, 
  Folder, 
  Briefcase, 
  FileText, 
  User, 
  Github, 
  Linkedin,
  Palette,
  Gamepad2, 
  Volume2, 
  VolumeX, 
  RotateCcw,
  Monitor
} from 'lucide-react';

export default function Taskbar({ 
  windows, 
  activeWindowId, 
  onToggleWindow, 
  onOpenWindow,
  onRestartBoot
}) {
  const [startOpen, setStartOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [isMuted, setIsMuted] = useState(soundFx.isMuted());

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleStartItemClick = (action) => {
    soundFx.playClick();
    setStartOpen(false);
    action();
  };

  const toggleSound = () => {
    const muted = soundFx.toggleMute();
    setIsMuted(muted);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-9 bg-win95-surface panel-outset z-[9000] flex items-center justify-between px-1 select-none font-system text-xs border-t-2 border-white">
      {/* Start Button & Active Window Buttons */}
      <div className="flex items-center gap-1 overflow-x-auto py-0.5">
        {/* Start Button */}
        <button
          onClick={() => {
            soundFx.playClick();
            setStartOpen(!startOpen);
          }}
          className={`
            h-7 px-2 flex items-center gap-1.5 font-bold font-pixel text-[11px] btn-win95 shrink-0
            ${startOpen ? 'btn-win95-pressed bg-gray-300' : 'bg-win95-surface'}
          `}
        >
          <div className="w-4 h-4 bg-gradient-to-tr from-red-600 via-green-500 to-blue-600 flex items-center justify-center text-[9px] font-bold text-white shadow-sm">
            田
          </div>
          <span>Start</span>
        </button>

        <div className="h-5 w-[2px] bg-gray-400 border-r border-white mx-0.5"></div>

        {/* Taskbar Window Tabs */}
        {windows.map((win) => {
          const isActive = activeWindowId === win.id && !win.isMinimized && win.isOpen;
          if (!win.isOpen) return null;
          const Icon = win.icon;

          return (
            <button
              key={win.id}
              onClick={() => {
                soundFx.playClick();
                onToggleWindow(win.id);
              }}
              className={`
                h-7 px-2 min-w-[120px] max-w-[170px] flex items-center gap-1.5 text-xs truncate btn-win95 shrink-0
                ${isActive ? 'btn-win95-pressed font-bold bg-gray-300 border-dashed border-gray-600' : ''}
              `}
            >
              {Icon && <Icon className="w-3.5 h-3.5 shrink-0 text-blue-900" />}
              <span className="truncate">{win.title}</span>
            </button>
          );
        })}
      </div>

      {/* Start Menu Dropdown */}
      {startOpen && (
        <>
          <div 
            className="fixed inset-0 z-[9990]" 
            onClick={() => setStartOpen(false)} 
          />
          <div className="absolute bottom-9 left-1 w-64 panel-outset z-[9999] p-1 flex shadow-2xl border-2 border-black overflow-hidden">
            {/* Windows 95 Vertical Banner */}
            <div className="w-8 bg-gradient-to-t from-win95-titlebar via-blue-800 to-teal-700 relative overflow-hidden flex items-end justify-center border-r border-black shrink-0">
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 -rotate-90 whitespace-nowrap font-pixel text-[11px] font-bold text-white tracking-wider uppercase origin-center select-none">
                Saksham <span className="text-yellow-300">OS 95</span>
              </div>
            </div>

            {/* Menu Options */}
            <div className="flex-1 py-1 px-1 flex flex-col gap-0.5 font-terminal text-base text-black">
              <div 
                onClick={() => handleStartItemClick(() => onOpenWindow('experience'))}
                className="flex items-center gap-2.5 px-2 py-1 hover:bg-win95-titlebar hover:text-white cursor-pointer"
              >
                <Briefcase className="w-4 h-4 text-blue-700" />
                <span>Experience.exe</span>
              </div>

              <div 
                onClick={() => handleStartItemClick(() => onOpenWindow('projects'))}
                className="flex items-center gap-2.5 px-2 py-1 hover:bg-win95-titlebar hover:text-white cursor-pointer"
              >
                <Folder className="w-4 h-4 text-yellow-600" />
                <span>Projects.folder</span>
              </div>

              <div 
                onClick={() => handleStartItemClick(() => onOpenWindow('skills'))}
                className="flex items-center gap-2.5 px-2 py-1 hover:bg-win95-titlebar hover:text-white cursor-pointer"
              >
                <FileText className="w-4 h-4 text-emerald-700" />
                <span>Skills.txt</span>
              </div>

              <div 
                onClick={() => handleStartItemClick(() => onOpenWindow('about'))}
                className="flex items-center gap-2.5 px-2 py-1 hover:bg-win95-titlebar hover:text-white cursor-pointer"
              >
                <User className="w-4 h-4 text-purple-700" />
                <span>About_Me.info</span>
              </div>

              <div 
                onClick={() => handleStartItemClick(() => onOpenWindow('terminal'))}
                className="flex items-center gap-2.5 px-2 py-1 hover:bg-win95-titlebar hover:text-white cursor-pointer"
              >
                <Terminal className="w-4 h-4 text-black" />
                <span>Terminal.exe</span>
              </div>

              <div 
                onClick={() => handleStartItemClick(() => onOpenWindow('minigame'))}
                className="flex items-center gap-2.5 px-2 py-1 hover:bg-win95-titlebar hover:text-white cursor-pointer"
              >
                <Gamepad2 className="w-4 h-4 text-red-600" />
                <span>Wordle_Battle.game</span>
              </div>

              <div 
                onClick={() => handleStartItemClick(() => onOpenWindow('wallpaper'))}
                className="flex items-center gap-2.5 px-2 py-1 hover:bg-win95-titlebar hover:text-white cursor-pointer"
              >
                <Palette className="w-4 h-4 text-pink-600" />
                <span>Display_Properties.cpl</span>
              </div>

              <div 
                onClick={() => handleStartItemClick(() => onOpenWindow('resume'))}
                className="flex items-center gap-2.5 px-2 py-1 hover:bg-win95-titlebar hover:text-white cursor-pointer"
              >
                <FileText className="w-4 h-4 text-red-700" />
                <span>My_Resume.pdf</span>
              </div>

              <hr className="my-1 border-gray-400" />

              <a 
                href="https://www.linkedin.com/in/saksham-kumar-863a97308"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setStartOpen(false)}
                className="flex items-center gap-2.5 px-2 py-1 hover:bg-win95-titlebar hover:text-white cursor-pointer"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
                <span>LinkedIn Profile ↗</span>
              </a>

              <a 
                href="https://github.com/SakshamKumar28"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setStartOpen(false)}
                className="flex items-center gap-2.5 px-2 py-1 hover:bg-win95-titlebar hover:text-white cursor-pointer"
              >
                <Github className="w-4 h-4 text-gray-800" />
                <span>GitHub Profile ↗</span>
              </a>

              <hr className="my-1 border-gray-400" />

              <div 
                onClick={() => handleStartItemClick(onRestartBoot)}
                className="flex items-center gap-2.5 px-2 py-1 hover:bg-win95-titlebar hover:text-white cursor-pointer text-red-800 font-bold"
              >
                <RotateCcw className="w-4 h-4 text-red-600" />
                <span>Restart Saksham OS</span>
              </div>
            </div>
          </div>
        </>
      )}

      {/* System Tray */}
      <div className="flex items-center gap-2 px-2 panel-inset h-7 font-terminal text-sm shrink-0">
        <button 
          onClick={toggleSound}
          className="hover:scale-110 transition-transform"
          title={isMuted ? "Unmute Retro Audio" : "Mute Retro Audio"}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-red-600" />
          ) : (
            <Volume2 className="w-4 h-4 text-emerald-700" />
          )}
        </button>

        <Monitor className="w-3.5 h-3.5 text-blue-800" />

        <div className="text-[11px] font-pixel text-black tracking-tighter">
          {currentTime}
        </div>
      </div>
    </div>
  );
}
