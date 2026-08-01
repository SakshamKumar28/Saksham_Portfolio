'use client';

import React, { useState, useEffect } from 'react';
import BootSequence from '@/components/BootSequence';
import Desktop from '@/components/Desktop';
import Taskbar from '@/components/Taskbar';
import WindowWrapper from '@/components/WindowWrapper';
import LenisProvider from '@/components/LenisProvider';

import ExperienceView from '@/components/views/ExperienceView';
import ProjectsView from '@/components/views/ProjectsView';
import SkillsView from '@/components/views/SkillsView';
import AboutContactView from '@/components/views/AboutContactView';
import TerminalView from '@/components/views/TerminalView';
import ResumeView from '@/components/views/ResumeView';
import MinigameView from '@/components/views/MinigameView';
import WallpaperView from '@/components/views/WallpaperView';

import { Briefcase, Folder, FileText, User, Terminal, Gamepad2, Palette } from 'lucide-react';

export default function Home() {
  const [booting, setBooting] = useState(true);
  const [activeWindowId, setActiveWindowId] = useState<string | null>('about');
  const [currentWallpaper, setCurrentWallpaper] = useState<string>('teal');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedWp = localStorage.getItem('saksham_os_wallpaper');
      if (savedWp) {
        setCurrentWallpaper(savedWp);
      }
    }
  }, []);

  const changeWallpaper = (id: string) => {
    setCurrentWallpaper(id);
    if (typeof window !== 'undefined') {
      localStorage.setItem('saksham_os_wallpaper', id);
    }
  };

  const [windows, setWindows] = useState<Record<string, {
    id: string;
    title: string;
    icon: any;
    isOpen: boolean;
    isMinimized: boolean;
    isMaximized: boolean;
    pos: { x: number; y: number };
    defaultWidth?: string;
    defaultHeight?: string;
  }>>({
    about: {
      id: 'about',
      title: 'About_Me.info',
      icon: User,
      isOpen: true,
      isMinimized: false,
      isMaximized: false,
      pos: { x: 40, y: 40 },
      defaultWidth: 'w-[92vw] md:w-[720px]',
      defaultHeight: 'h-[75vh] md:h-[520px]',
    },
    experience: {
      id: 'experience',
      title: 'Experience.exe - InstanDev & WORDLE.BATTLE',
      icon: Briefcase,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      pos: { x: 70, y: 50 },
      defaultWidth: 'w-[92vw] md:w-[750px]',
      defaultHeight: 'h-[80vh] md:h-[540px]',
    },
    projects: {
      id: 'projects',
      title: 'Projects.folder - DOXY Telemedicine & Chatifyy',
      icon: Folder,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      pos: { x: 100, y: 60 },
      defaultWidth: 'w-[92vw] md:w-[750px]',
      defaultHeight: 'h-[80vh] md:h-[540px]',
    },
    skills: {
      id: 'skills',
      title: 'Skills.txt - Technical Arsenal',
      icon: FileText,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      pos: { x: 120, y: 70 },
      defaultWidth: 'w-[92vw] md:w-[720px]',
      defaultHeight: 'h-[75vh] md:h-[520px]',
    },
    wallpaper: {
      id: 'wallpaper',
      title: 'Display.cpl - Wallpaper Switcher',
      icon: Palette,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      pos: { x: 130, y: 60 },
      defaultWidth: 'w-[92vw] md:w-[620px]',
      defaultHeight: 'h-[80vh] md:h-[550px]',
    },
    terminal: {
      id: 'terminal',
      title: 'Terminal.exe - C:\\SAKSHAM>',
      icon: Terminal,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      pos: { x: 140, y: 80 },
      defaultWidth: 'w-[92vw] md:w-[680px]',
      defaultHeight: 'h-[70vh] md:h-[460px]',
    },
    resume: {
      id: 'resume',
      title: 'My_Resume.pdf - Saksham Kumar',
      icon: FileText,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      pos: { x: 90, y: 50 },
      defaultWidth: 'w-[92vw] md:w-[720px]',
      defaultHeight: 'h-[80vh] md:h-[560px]',
    },
    minigame: {
      id: 'minigame',
      title: 'Wordle_Battle.game - 8-Bit Playable',
      icon: Gamepad2,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      pos: { x: 160, y: 90 },
      defaultWidth: 'w-[92vw] md:w-[580px]',
      defaultHeight: 'h-[75vh] md:h-[500px]',
    },
  });

  const openWindow = (id: string) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isOpen: true,
        isMinimized: false,
      },
    }));
    setActiveWindowId(id);
  };

  const closeWindow = (id: string) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isOpen: false,
      },
    }));
    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
  };

  const minimizeWindow = (id: string) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isMinimized: true,
      },
    }));
    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
  };

  const maximizeWindow = (id: string) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isMaximized: !prev[id].isMaximized,
      },
    }));
  };

  const toggleWindow = (id: string) => {
    const win = windows[id];
    if (win.isOpen && !win.isMinimized && activeWindowId === id) {
      minimizeWindow(id);
    } else {
      openWindow(id);
    }
  };

  const focusWindow = (id: string) => {
    setActiveWindowId(id);
  };

  return (
    <LenisProvider>
      <main className="relative w-screen h-screen overflow-hidden select-none">
        {/* GSAP BIOS Boot Loader */}
        {booting && (
          <BootSequence onComplete={() => setBooting(false)} />
        )}

        {/* Desktop Environment */}
        <Desktop onOpenWindow={openWindow} currentWallpaper={currentWallpaper} />

        {/* Draggable Windows Container */}
        {Object.values(windows).map((win) => (
          <WindowWrapper
            key={win.id}
            id={win.id}
            title={win.title}
            icon={win.icon}
            isOpen={win.isOpen}
            isMinimized={win.isMinimized}
            isMaximized={win.isMaximized}
            isActive={activeWindowId === win.id}
            onClose={closeWindow}
            onMinimize={minimizeWindow}
            onMaximize={maximizeWindow}
            onFocus={focusWindow}
            initialPos={win.pos}
            defaultWidth={win.defaultWidth}
            defaultHeight={win.defaultHeight}
          >
            {win.id === 'about' && <AboutContactView />}
            {win.id === 'experience' && <ExperienceView onOpenProject={openWindow} />}
            {win.id === 'projects' && <ProjectsView />}
            {win.id === 'skills' && <SkillsView />}
            {win.id === 'wallpaper' && <WallpaperView currentWallpaper={currentWallpaper} onSelectWallpaper={changeWallpaper} />}
            {win.id === 'terminal' && <TerminalView onOpenWindow={openWindow} />}
            {win.id === 'resume' && <ResumeView />}
            {win.id === 'minigame' && <MinigameView />}
          </WindowWrapper>
        ))}

        {/* Windows 95 Taskbar */}
        <Taskbar
          windows={Object.values(windows)}
          activeWindowId={activeWindowId}
          onToggleWindow={toggleWindow}
          onOpenWindow={openWindow}
          onRestartBoot={() => setBooting(true)}
        />
      </main>
    </LenisProvider>
  );
}
