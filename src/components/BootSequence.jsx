import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { soundFx } from '../utils/soundFx';

export default function BootSequence({ onComplete }) {
  const containerRef = useRef(null);
  const textContainerRef = useRef(null);
  const [skipped, setSkipped] = useState(false);

  const bootLogs = [
    "SAKSHAM-BIOS v95.2 (C) 2026 SAKSHAM KUMAR CORP.",
    "System RAM Check: 640KB Conventional OK, 65536KB Extended OK",
    "Primary Master: DOXY-TELEMEDICINE-PLATFORM [1,000+ CONCURRENT USERS]",
    "Primary Slave : CHATIFYY-REALTIME-ENGINE [SOCKET.IO / JWT]",
    "Secondary Master: WORDLE.BATTLE-REDIS-CLUSTER [DOCKER COMPOSE]",
    " ",
    "Initializing MERN Stack Drivers...",
    "  > Loading JavaScript (ES6+), Java, SQL engines................ [OK]",
    "  > Loading React 19 & Vite frontend subsystem................ [OK]",
    "  > Initializing Node.js & Express.js REST API layer.......... [OK]",
    "  > Binding Socket.IO & WebRTC RTC signaling layer............ [OK]",
    "  > Connecting MongoDB document models & MySQL schemas......... [OK]",
    "  > Containerizing Redis adapter with Docker Compose.......... [OK]",
    " ",
    "User Identity Verified: Saksham Kumar",
    "Role: Software Engineering Student | Full-Stack MERN Developer",
    "Location: Agra, Uttar Pradesh | GLA University Mathura",
    "Achievements: Smart India Hackathon 2025 Finalist | 150+ LeetCode Solved",
    " ",
    "Booting Saksham OS 95 Desktop Interface..."
  ];

  const skipBoot = () => {
    if (skipped) return;
    setSkipped(true);
    soundFx.playStartupChime();
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });
  };

  useEffect(() => {
    const lines = textContainerRef.current?.querySelectorAll('.boot-line');
    if (!lines || lines.length === 0) return;

    const tl = gsap.timeline({
      onComplete: () => {
        soundFx.playStartupChime();
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.7,
          delay: 0.4,
          ease: 'power2.inOut',
          onComplete: () => {
            if (onComplete) onComplete();
          }
        });
      }
    });

    lines.forEach((line, index) => {
      tl.to(line, {
        opacity: 1,
        display: 'block',
        duration: 0.08,
        onStart: () => {
          if (index % 3 === 0) soundFx.playBeep();
        }
      });
    });

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        skipBoot();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      tl.kill();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      onClick={skipBoot}
      className="fixed inset-0 z-[10000] bg-black text-green-500 font-terminal p-6 md:p-12 overflow-hidden flex flex-col justify-between crt-overlay cursor-pointer select-none"
    >
      <div className="flex items-center justify-between border-b border-green-800 pb-3 mb-4 text-xs md:text-sm">
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 bg-green-500 animate-pulse"></span>
          <span className="font-pixel text-green-400">SAKSHAM_BIOS v95.2</span>
        </div>
        <span className="text-gray-400">Press ESC or Click to Skip</span>
      </div>

      <div ref={textContainerRef} className="flex-1 space-y-1 text-sm md:text-xl font-bold tracking-wide overflow-y-auto pr-2">
        {bootLogs.map((log, idx) => (
          <div 
            key={idx} 
            className="boot-line hidden opacity-0 leading-tight"
          >
            {log}
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-green-900 flex justify-between items-center text-xs md:text-sm text-green-400">
        <div>ENERGY STAR LOGO [EPA COMPLIANT]</div>
        <div className="animate-bounce font-pixel text-[10px]">CLICK ANYWHERE TO START OS</div>
      </div>
    </div>
  );
}
