import React, { useState } from 'react';
import { Folder, Video, MessageSquare, Award, Cpu, ShieldCheck, Zap, ExternalLink, Code } from 'lucide-react';

export default function ProjectsView() {
  const [activeTab, setActiveTab] = useState('doxy');

  return (
    <div className="space-y-6 font-terminal text-black text-base md:text-lg leading-relaxed">
      {/* Header Banner */}
      <div className="panel-outset p-4 bg-gradient-to-r from-emerald-900 to-teal-900 text-white border-2 border-black flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <div>
          <div className="flex items-center gap-2 font-pixel text-xs text-green-300">
            <Folder className="w-4 h-4" />
            <span>PROJECTS.FOLDER</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold font-terminal tracking-wider text-white mt-1">
            Featured Full-Stack Systems & Architecture
          </h2>
        </div>
        <div className="bg-emerald-400 text-black px-2 py-1 font-pixel text-[10px] border border-black">
          2 PRODUCTION SYSTEMS
        </div>
      </div>

      {/* Retro Tabs Header */}
      <div className="flex border-b-2 border-black gap-1">
        <button
          onClick={() => setActiveTab('doxy')}
          className={`
            px-4 py-2 font-pixel text-xs border-t-2 border-x-2 border-black flex items-center gap-2
            ${activeTab === 'doxy' 
              ? 'bg-white font-bold text-teal-900 border-b-0 -mb-[2px] z-10' 
              : 'bg-win95-surface text-gray-700 hover:bg-gray-200'
            }
          `}
        >
          <Video className="w-4 h-4 text-emerald-600" />
          <span>DOXY TELEMEDICINE</span>
        </button>

        <button
          onClick={() => setActiveTab('chatifyy')}
          className={`
            px-4 py-2 font-pixel text-xs border-t-2 border-x-2 border-black flex items-center gap-2
            ${activeTab === 'chatifyy' 
              ? 'bg-white font-bold text-blue-900 border-b-0 -mb-[2px] z-10' 
              : 'bg-win95-surface text-gray-700 hover:bg-gray-200'
            }
          `}
        >
          <MessageSquare className="w-4 h-4 text-blue-600" />
          <span>CHATIFYY MESSAGING</span>
        </button>
      </div>

      {/* Tab 1: DOXY */}
      {activeTab === 'doxy' && (
        <div className="panel-outset p-4 md:p-5 bg-win95-surface border-2 border-black space-y-4 animate-fadeIn">
          {/* Title & Badge */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-gray-400 pb-3 gap-2">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="bg-amber-500 text-black font-pixel text-[10px] px-2 py-0.5 border border-black font-bold">
                  SMART INDIA HACKATHON 2025
                </span>
                <span className="bg-emerald-800 text-white font-pixel text-[10px] px-2 py-0.5">
                  NATIONAL EVALUATION CLEARED
                </span>
              </div>
              <h3 className="text-2xl font-bold text-emerald-950 font-terminal mt-1">
                DOXY — Telemedicine Platform
              </h3>
              <p className="text-sm text-gray-700 font-terminal">
                Node.js · Socket.io · WebRTC · REST APIs · Artillery Load Testing
              </p>
            </div>
          </div>

          {/* Architecture Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="panel-inset p-3 bg-emerald-50/60 border border-emerald-300">
              <div className="font-pixel text-xs text-emerald-900 flex items-center gap-1.5 mb-1 font-bold">
                <Zap className="w-4 h-4 text-amber-600" />
                <span>1,000+ CONCURRENT USER SCALE</span>
              </div>
              <p className="text-sm text-gray-800">
                Architected a high-concurrency Node.js backend validated under <strong>Artillery load testing</strong> to sustain 1,000+ active connections simultaneously without latency degradation.
              </p>
            </div>

            <div className="panel-inset p-3 bg-blue-50/60 border border-blue-300">
              <div className="font-pixel text-xs text-blue-900 flex items-center gap-1.5 mb-1 font-bold">
                <Video className="w-4 h-4 text-blue-600" />
                <span>WEBRTC VIDEO CHANNEL</span>
              </div>
              <p className="text-sm text-gray-800">
                Implemented peer-to-peer <strong>WebRTC audio/video connections</strong> using <strong>Socket.io</strong> as the real-time signaling layer for patient–doctor video sessions.
              </p>
            </div>
          </div>

          {/* Detailed Specifications */}
          <div className="panel-inset p-4 bg-white space-y-2">
            <h4 className="font-pixel text-xs text-black border-b pb-1">TECHNICAL SPECIFICATIONS</h4>
            <ul className="space-y-2 text-gray-900 pt-1">
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold font-pixel text-xs mt-1">►</span>
                <span>
                  <strong>Async NLP Triage API Pipeline:</strong> Designed an async request pipeline for a third-party NLP triage API with timeout handling, error boundaries, and response normalisation before surfacing medical triage insights to clients.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold font-pixel text-xs mt-1">►</span>
                <span>
                  <strong>Sole Backend Architect:</strong> Served as sole backend architect during Smart India Hackathon 2025, taking system through national-level evaluation under real-time video + concurrent load.
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-400">
            {['Node.js', 'WebRTC', 'Socket.IO', 'REST APIs', 'NLP Pipeline', 'Artillery', 'Express.js'].map((tag, i) => (
              <span key={i} className="btn-win95 px-2 py-0.5 text-xs font-pixel">#{tag}</span>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Chatifyy */}
      {activeTab === 'chatifyy' && (
        <div className="panel-outset p-4 md:p-5 bg-win95-surface border-2 border-black space-y-4 animate-fadeIn">
          {/* Title & Badge */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-gray-400 pb-3 gap-2">
            <div>
              <span className="bg-blue-900 text-white font-pixel text-[10px] px-2 py-0.5">
                REAL-TIME MESSAGING ENGINE
              </span>
              <h3 className="text-2xl font-bold text-blue-950 font-terminal mt-1">
                Chatifyy — Real-Time Messaging Platform
              </h3>
              <p className="text-sm text-gray-700 font-terminal">
                MERN Stack · Socket.io · JWT · Presence Tracking
              </p>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="panel-inset p-3 bg-indigo-50/60 border border-indigo-300">
              <div className="font-pixel text-xs text-indigo-900 flex items-center gap-1.5 mb-1 font-bold">
                <MessageSquare className="w-4 h-4 text-indigo-600" />
                <span>EVENT-DRIVEN CHAT ENGINE</span>
              </div>
              <p className="text-sm text-gray-800">
                Shipped MERN-based chat system with Socket.io event-driven messaging supporting concurrent group & private rooms with live user presence tracked via connection state.
              </p>
            </div>

            <div className="panel-inset p-3 bg-purple-50/60 border border-purple-300">
              <div className="font-pixel text-xs text-purple-900 flex items-center gap-1.5 mb-1 font-bold">
                <ShieldCheck className="w-4 h-4 text-purple-600" />
                <span>DECOUPLED AUTH & RBAC</span>
              </div>
              <p className="text-sm text-gray-800">
                Secured all REST routes & WebSocket handshakes with JWT verification and role-based middleware (admin/user), keeping auth logic decoupled from business logic.
              </p>
            </div>
          </div>

          <div className="panel-inset p-4 bg-white space-y-2">
            <h4 className="font-pixel text-xs text-black border-b pb-1">HIGHLIGHTS</h4>
            <ul className="space-y-2 text-gray-900 pt-1">
              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold font-pixel text-xs mt-1">►</span>
                <span>Supports typing indicators, message delivery status, and room state persistence across MongoDB document schemas.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold font-pixel text-xs mt-1">►</span>
                <span>Optimized WebSocket handshake verification to prevent unauthorized socket connections before room join events.</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-400">
            {['React.js', 'Node.js', 'MongoDB', 'Socket.IO', 'JWT Auth', 'RBAC Middleware'].map((tag, i) => (
              <span key={i} className="btn-win95 px-2 py-0.5 text-xs font-pixel">#{tag}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
