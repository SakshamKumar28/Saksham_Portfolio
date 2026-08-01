import React from 'react';
import { Briefcase, Calendar, MapPin, Code2, ShieldCheck, Cpu, Terminal, ExternalLink } from 'lucide-react';

export default function ExperienceView({ onOpenProject }) {
  return (
    <div className="space-y-6 font-terminal text-black text-base md:text-lg leading-relaxed">
      {/* Banner / Header */}
      <div className="panel-outset p-4 bg-gradient-to-r from-blue-900 to-indigo-900 text-white border-2 border-black flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <div>
          <div className="flex items-center gap-2 font-pixel text-xs text-yellow-300">
            <Briefcase className="w-4 h-4" />
            <span>EXPERIENCE.EXE</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold font-terminal tracking-wider text-white mt-1">
            Work Experience & Featured Engineering
          </h2>
        </div>
        <div className="bg-yellow-400 text-black px-2 py-1 font-pixel text-[10px] border border-black shadow">
          1 INTERNSHIP RECORD
        </div>
      </div>

      {/* Main Internship Entry */}
      <div className="panel-outset p-4 md:p-5 bg-win95-surface border-2 border-black space-y-4">
        {/* Company Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-gray-400 pb-3 gap-2">
          <div>
            <span className="bg-blue-900 text-white px-2 py-0.5 text-xs font-pixel">UPCOMING INTERNSHIP</span>
            <h3 className="text-xl md:text-2xl font-bold text-blue-950 font-terminal mt-1">
              Full-Stack Developer Intern — InstanDev
            </h3>
            <p className="text-sm text-gray-700 italic font-terminal">
              InstanDev Internship Cohort 2026 (Remote)
            </p>
          </div>
          <div className="text-right text-sm font-bold font-pixel text-slate-800 bg-white/70 px-3 py-1.5 border border-black">
            Jun 2026 – Aug 2026
          </div>
        </div>

        {/* Highlight Box: WORDLE.BATTLE */}
        <div className="panel-inset p-4 bg-amber-50/70 border border-amber-300 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-red-700 font-pixel text-sm">
              <Cpu className="w-4 h-4 animate-pulse" />
              <span>FEATURED PROJECT: WORDLE.BATTLE</span>
            </div>
            <span className="text-xs bg-red-600 text-white font-pixel px-2 py-0.5">SOCKET.IO + REDIS</span>
          </div>

          <p className="text-gray-900 font-medium">
            Architected and built <strong className="text-red-800 font-bold">WORDLE.BATTLE</strong>, a real-time multiplayer word-guessing game supporting random matchmaking and host-controlled private lobbies over a single Socket.IO connection.
          </p>

          {/* Technical Deep Dive Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            <div className="panel-outset p-3 bg-white text-xs space-y-1">
              <div className="font-bold font-pixel text-blue-900 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>AUTH & SECURITY LAYER</span>
              </div>
              <p className="text-gray-800">
                Short-lived JWT access tokens & rotating refresh tokens stored in <code className="bg-gray-200 px-1 font-bold">httpOnly</code> cookies, <code className="bg-gray-200 px-1 font-bold">Zod</code>-validated schemas, and <code className="bg-gray-200 px-1 font-bold">bcrypt</code> password hashing.
              </p>
            </div>

            <div className="panel-outset p-3 bg-white text-xs space-y-1">
              <div className="font-bold font-pixel text-blue-900 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-purple-600" />
                <span>SCALABILITY & INFRA</span>
              </div>
              <p className="text-gray-800">
                Integrated <code className="bg-gray-200 px-1 font-bold">Socket.IO Redis adapter</code> & per-IP rate limiting for horizontal scaling. Containerized frontend, backend, MongoDB, and Redis via <code className="bg-gray-200 px-1 font-bold">Docker Compose</code>.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Bullet Points */}
        <div className="space-y-2 pt-2">
          <div className="flex items-start gap-2">
            <span className="text-blue-700 font-bold font-pixel text-xs mt-1">►</span>
            <p className="text-gray-900">
              Built <strong>WORDLE.BATTLE</strong>, a real-time multiplayer word-guessing game, architecting both the Node.js/Express backend and the React 19 frontend — supporting random matchmaking and host-controlled private lobbies over a single Socket.IO connection.
            </p>
          </div>

          <div className="flex items-start gap-2">
            <span className="text-blue-700 font-bold font-pixel text-xs mt-1">►</span>
            <p className="text-gray-900">
              Designed the auth layer with short-lived JWT access tokens and rotating refresh tokens stored in httpOnly cookies, zod-validated request schemas, and bcrypt password hashing.
            </p>
          </div>

          <div className="flex items-start gap-2">
            <span className="text-blue-700 font-bold font-pixel text-xs mt-1">►</span>
            <p className="text-gray-900">
              Added a Socket.IO Redis adapter and per-IP rate limiting for horizontal scalability, and containerized the frontend, backend, MongoDB, and Redis with Docker Compose for reproducible deployment.
            </p>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="pt-3 border-t border-gray-400 flex flex-wrap gap-2">
          {['React 19', 'Node.js', 'Express.js', 'Socket.IO', 'Redis', 'Docker Compose', 'JWT', 'Zod', 'MongoDB', 'Bcrypt'].map((tech, idx) => (
            <span key={idx} className="btn-win95 px-2 py-0.5 text-xs font-pixel text-slate-900">
              #{tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
