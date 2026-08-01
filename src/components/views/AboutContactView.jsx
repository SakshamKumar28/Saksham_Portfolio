import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Linkedin, Github, GraduationCap, Award, Languages, Check, Copy } from 'lucide-react';


export default function AboutContactView() {
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="space-y-6 font-terminal text-black text-base md:text-lg leading-relaxed">
      {/* Header */}
      <div className="panel-outset p-4 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white border-2 border-black flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <div>
          <div className="flex items-center gap-2 font-pixel text-xs text-yellow-300">
            <User className="w-4 h-4" />
            <span>ABOUT_ME.INFO / NETWORK.PANEL</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold font-terminal tracking-wider text-white mt-1">
            Saksham Kumar — Engineering Profile
          </h2>
        </div>
        <div className="bg-yellow-400 text-black px-2 py-1 font-pixel text-[10px] border border-black font-bold">
          STATUS: ONLINE
        </div>
      </div>

      {/* Main Grid: Bio & Quick Contact */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Column: Bio Avatar & Intro */}
        <div className="md:col-span-1 panel-outset p-4 bg-win95-surface border-2 border-black flex flex-col items-center text-center space-y-3">
          <div className="w-24 h-24 panel-inset bg-slate-900 border-2 border-black flex items-center justify-center relative overflow-hidden">
            {/* 8-bit Pixel Avatar Visual */}
            <div className="font-pixel text-4xl text-emerald-400">SK</div>
            <div className="absolute inset-0 bg-green-500/10 pointer-events-none"></div>
          </div>

          <div>
            <h3 className="text-xl font-bold font-terminal text-blue-950">Saksham Kumar</h3>
            <p className="text-xs font-pixel text-gray-700 mt-0.5">Software Engineering Student</p>
            <p className="text-xs text-blue-800 font-bold mt-1">Full-Stack MERN Developer</p>
          </div>

          <div className="w-full panel-inset p-2 bg-white text-xs space-y-1 text-left">
            <div className="flex items-center gap-1.5 text-gray-800">
              <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0" />
              <span>Agra, Uttar Pradesh</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-800">
              <GraduationCap className="w-3.5 h-3.5 text-blue-700 shrink-0" />
              <span>GLA University, Mathura</span>
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Contact Cards */}
        <div className="md:col-span-2 panel-outset p-4 bg-win95-surface border-2 border-black space-y-3">
          <div className="bg-win95-titlebar text-white px-2 py-1 font-pixel text-xs">
            COMMUNICATION CHANNELS & CONNECTIONS
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Email */}
            <div className="panel-inset p-3 bg-white flex justify-between items-center">
              <div className="truncate">
                <div className="text-xs text-gray-500 font-pixel flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  <span>EMAIL</span>
                </div>
                <div className="font-bold text-sm text-gray-900 truncate">kumarsaksham@gmail.com</div>
              </div>
              <button 
                onClick={() => copyToClipboard('kumarsaksham@gmail.com', 'email')}
                className="btn-win95 p-1.5 text-xs font-pixel hover:bg-gray-200 shrink-0 ml-2"
                title="Copy Email"
              >
                {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-green-700" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Phone */}
            <div className="panel-inset p-3 bg-white flex justify-between items-center">
              <div>
                <div className="text-xs text-gray-500 font-pixel flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>PHONE</span>
                </div>
                <div className="font-bold text-sm text-gray-900">+91-7818077835</div>
              </div>
              <button 
                onClick={() => copyToClipboard('+91-7818077835', 'phone')}
                className="btn-win95 p-1.5 text-xs font-pixel hover:bg-gray-200 shrink-0 ml-2"
                title="Copy Phone"
              >
                {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-green-700" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* GitHub */}
            <a 
              href="https://github.com/SakshamKumar28"
              target="_blank"
              rel="noopener noreferrer"
              className="panel-inset p-3 bg-white flex justify-between items-center hover:bg-slate-50 transition-colors group"
            >
              <div>
                <div className="text-xs text-gray-500 font-pixel flex items-center gap-1">
                  <Github className="w-3.5 h-3.5 text-black" />
                  <span>GITHUB</span>
                </div>
                <div className="font-bold text-sm text-blue-900 group-hover:underline">github.com/SakshamKumar28</div>
              </div>
              <span className="text-xs font-pixel text-gray-500">↗</span>
            </a>

            {/* LinkedIn Profile */}
            <a 
              href="https://www.linkedin.com/in/saksham-kumar-863a97308"
              target="_blank"
              rel="noopener noreferrer"
              className="panel-inset p-3 bg-white flex justify-between items-center hover:bg-slate-50 transition-colors group"
            >
              <div className="truncate">
                <div className="text-xs text-gray-500 font-pixel flex items-center gap-1">
                  <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                  <span>LINKEDIN</span>
                </div>
                <div className="font-bold text-sm text-blue-900 truncate group-hover:underline">linkedin.com/in/saksham-kumar-863a97308</div>
              </div>
              <span className="text-xs font-pixel text-gray-500">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Education & Achievements Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Education Card */}
        <div className="panel-outset p-4 bg-win95-surface border-2 border-black space-y-3">
          <div className="bg-emerald-900 text-white px-2 py-1 font-pixel text-xs flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            <span>ACADEMIC DEGREES</span>
          </div>

          <div className="panel-inset p-3 bg-white space-y-1">
            <div className="flex justify-between items-start">
              <h4 className="font-bold text-base text-gray-900">B.Tech in Computer Science and Engineering</h4>
              <span className="text-xs font-pixel text-gray-600">2023 – 2027</span>
            </div>
            <p className="text-sm text-gray-700">GLA University, Mathura, Uttar Pradesh</p>
            <p className="text-xs text-emerald-800 font-bold italic pt-1">Expected Graduation: May 2027</p>
          </div>

          {/* Spoken Languages */}
          <div className="panel-inset p-3 bg-white space-y-1">
            <div className="text-xs font-pixel text-gray-500 flex items-center gap-1">
              <Languages className="w-3.5 h-3.5 text-blue-700" />
              <span>SPOKEN LANGUAGES</span>
            </div>
            <div className="text-sm font-bold text-gray-900">
              • English <span className="font-normal text-xs text-gray-600">(Professional Proficiency)</span>
            </div>
            <div className="text-sm font-bold text-gray-900">
              • Hindi <span className="font-normal text-xs text-gray-600">(Native)</span>
            </div>
          </div>
        </div>

        {/* Achievements & Problem Solving Card */}
        <div className="panel-outset p-4 bg-win95-surface border-2 border-black space-y-3">
          <div className="bg-amber-800 text-white px-2 py-1 font-pixel text-xs flex items-center gap-2">
            <Award className="w-4 h-4" />
            <span>HONORS & DSA ACCOMPLISHMENTS</span>
          </div>

          <div className="panel-inset p-3 bg-amber-50/70 border border-amber-300 space-y-1">
            <div className="font-bold text-amber-900 font-pixel text-xs">SMART INDIA HACKATHON 2025</div>
            <p className="text-sm text-gray-900">
              Served as <strong>Sole Backend Architect</strong> on DOXY telemedicine platform. System cleared national-level evaluation handling real-time video streaming + concurrent load.
            </p>
          </div>

          <div className="panel-inset p-3 bg-purple-50/70 border border-purple-300 space-y-1">
            <div className="font-bold text-purple-900 font-pixel text-xs">LEETCODE PROBLEM SOLVING</div>
            <p className="text-sm text-gray-900">
              Solved <strong>150+ LeetCode problems</strong> focusing on graphs, dynamic programming, and trees. Daily system design study & practice since Jan 2024.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
