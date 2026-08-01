import React, { useState, useRef, useEffect } from 'react';
import { soundFx } from '../../utils/soundFx';

export default function TerminalView({ onOpenWindow }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Saksham OS Command Interpreter v95.2' },
    { type: 'system', text: 'Type "help" for a list of available commands.' },
    { type: 'system', text: '---------------------------------------------------' }
  ]);
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const command = inputVal.trim();
    if (!command) return;

    soundFx.playClick();
    const newHistory = [...history, { type: 'user', text: `C:\\SAKSHAM> ${command}` }];
    setCmdHistory((prev) => [...prev, command]);
    setHistoryIdx(-1);
    setInputVal('');

    const cmdLower = command.toLowerCase();

    if (cmdLower === 'help') {
      newHistory.push({
        type: 'output',
        text: `AVAILABLE COMMANDS:
  help       - Display this command list
  whoami     - Output user profile summary
  exp        - View internship & WORDLE.BATTLE experience
  projects   - Output project architecture details
  skills     - List technical stack & categories
  contact    - Display email, phone, and links
  cat resume - Open resume PDF window
  game       - Launch Wordle Battle minigame
  clear      - Clear terminal screen
  date       - Print system timestamp
  matrix     - Activate retro matrix digital rain`
      });
    } else if (cmdLower === 'whoami') {
      newHistory.push({
        type: 'output',
        text: `NAME: Saksham Kumar
ROLE: Software Engineering Student | Full-Stack MERN Developer
EDUCATION: B.Tech CSE @ GLA University, Mathura (2023-2027)
LOCATION: Agra, Uttar Pradesh`
      });
    } else if (cmdLower === 'exp' || cmdLower === 'experience') {
      newHistory.push({
        type: 'output',
        text: `[INTERNSHIP]: Full-Stack Developer Intern @ InstanDev (Jun 2026 - Aug 2026)
PROJECT: WORDLE.BATTLE (Real-time multiplayer word-guessing game)
STACK: React 19, Node.js, Express.js, Socket.IO, Redis, Docker Compose, JWT`
      });
    } else if (cmdLower === 'projects') {
      newHistory.push({
        type: 'output',
        text: `1. DOXY — Telemedicine Platform (Smart India Hackathon 2025)
   - Sustained 1,000+ concurrent load test users via Artillery
   - WebRTC peer video + Socket.io signaling layer

2. Chatifyy — Real-Time Messaging Platform
   - MERN Stack, Socket.io presence, JWT RBAC middleware`
      });
    } else if (cmdLower === 'skills') {
      newHistory.push({
        type: 'output',
        text: `LANGUAGES : JavaScript (ES6+), Java, SQL
FRONTEND  : React.js, Tailwind CSS, Vite
BACKEND   : Node.js, Express.js, REST APIs, WebSockets (Socket.io), JWT
DATABASES : MongoDB, MySQL
INFRA     : Docker, Redis, Git, GitHub, Postman
CS CORE   : DSA (150+ LeetCode), OOP, System Design`
      });
    } else if (cmdLower === 'contact') {
      newHistory.push({
        type: 'output',
        text: `EMAIL    : kumarsaksham@gmail.com
PHONE    : +91-7818077835
LOCATION : Agra, Uttar Pradesh
LINKEDIN : linkedin.com/in/saksham-kumar-863a97308
GITHUB   : github.com/SakshamKumar28`
      });
    } else if (cmdLower === 'cat resume' || cmdLower === 'resume') {
      newHistory.push({ type: 'output', text: 'Opening My_Resume.pdf window...' });
      onOpenWindow('resume');
    } else if (cmdLower === 'game' || cmdLower === 'play') {
      newHistory.push({ type: 'output', text: 'Launching Wordle_Battle.game window...' });
      onOpenWindow('minigame');
    } else if (cmdLower === 'clear') {
      setHistory([]);
      return;
    } else if (cmdLower === 'date') {
      newHistory.push({ type: 'output', text: new Date().toString() });
    } else if (cmdLower === 'matrix') {
      newHistory.push({
        type: 'output',
        text: `01001100 01101111 01100001 01100100 01101001 01101110 01100111 
W A K E  U P ,  N E O . . .
The MERN Matrix has you.`
      });
    } else if (cmdLower.startsWith('sudo')) {
      newHistory.push({ type: 'output', text: 'Access Granted. Welcome, Administrator Saksham.' });
    } else {
      newHistory.push({
        type: 'error',
        text: `Bad command or file name: "${command}". Type "help" for command list.`
      });
    }

    setHistory(newHistory);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIdx = historyIdx + 1;
        if (nextIdx < cmdHistory.length) {
          setHistoryIdx(nextIdx);
          setInputVal(cmdHistory[cmdHistory.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIdx]);
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInputVal('');
      }
    }
  };

  return (
    <div className="h-full min-h-[380px] bg-black text-green-400 font-terminal p-4 flex flex-col justify-between select-text crt-overlay rounded">
      {/* Terminal Output */}
      <div className="flex-1 overflow-y-auto space-y-1 text-base md:text-lg">
        {history.map((item, idx) => (
          <div key={idx} className="leading-tight">
            {item.type === 'user' && (
              <span className="text-white font-bold">{item.text}</span>
            )}
            {item.type === 'system' && (
              <span className="text-green-500">{item.text}</span>
            )}
            {item.type === 'output' && (
              <pre className="text-green-400 font-terminal whitespace-pre-wrap">{item.text}</pre>
            )}
            {item.type === 'error' && (
              <span className="text-red-400 font-bold">{item.text}</span>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input Row */}
      <form onSubmit={handleCommandSubmit} className="mt-3 pt-2 border-t border-green-900 flex items-center gap-2">
        <span className="text-green-400 font-bold text-lg shrink-0">C:\SAKSHAM&gt;</span>
        <input 
          type="text" 
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          className="flex-1 bg-transparent text-green-300 font-terminal text-lg focus:outline-none caret-green-400"
          placeholder="type a command..."
        />
      </form>
    </div>
  );
}
