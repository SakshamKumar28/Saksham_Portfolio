import React from 'react';
import { Code, Terminal, Server, Database, Wrench, BookOpen, CheckSquare, Sparkles } from 'lucide-react';

export default function SkillsView() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      color: "bg-blue-900 text-white",
      borderColor: "border-blue-900",
      skills: [
        { name: "JavaScript (ES6+)", desc: "Core language, Async/Await, ES Modules, Event Loop" },
        { name: "Java", desc: "Object-Oriented Programming, Data Structures, Core Java" },
        { name: "SQL", desc: "Relational Queries, Joins, Indexing, Schema Design" }
      ]
    },
    {
      title: "Frontend",
      icon: Terminal,
      color: "bg-teal-800 text-white",
      borderColor: "border-teal-800",
      skills: [
        { name: "React.js", desc: "Component Architecture, Hooks, Context API, State Management" },
        { name: "Tailwind CSS", desc: "Utility-First Styling, Custom Design Systems, Responsive UI" },
        { name: "Vite", desc: "Fast HMR, Build Bundling, Asset Optimization" }
      ]
    },
    {
      title: "Backend",
      icon: Server,
      color: "bg-purple-900 text-white",
      borderColor: "border-purple-900",
      skills: [
        { name: "Node.js", desc: "Event-driven runtime, Non-blocking I/O, Streams" },
        { name: "Express.js", desc: "REST Routing, Middleware, Controller design" },
        { name: "REST API Design", desc: "Resource naming, HTTP verbs, Error handling, Rate limiting" },
        { name: "WebSockets (Socket.io)", desc: "Real-time bi-directional messaging, Rooms, Presence tracking" },
        { name: "JWT / Auth Flows", desc: "Short-lived Access Tokens, Rotating Refresh Cookies, Bcrypt" }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      color: "bg-amber-800 text-white",
      borderColor: "border-amber-800",
      skills: [
        { name: "MongoDB", desc: "Document modelling, Aggregation pipelines, Indexing" },
        { name: "MySQL", desc: "Relational schema design, Query optimisation, Transactions" }
      ]
    },
    {
      title: "Infra & Tooling",
      icon: Wrench,
      color: "bg-red-800 text-white",
      borderColor: "border-red-800",
      skills: [
        { name: "Docker", desc: "Containerization, Dockerfile, Docker Compose multi-service" },
        { name: "Redis", desc: "In-memory caching, Pub/Sub, Socket.IO Redis Adapter" },
        { name: "Git & GitHub", desc: "Version control, Branch management, PR workflows" },
        { name: "Postman", desc: "API testing, Environment collections, Mocking" }
      ]
    },
    {
      title: "CS Core",
      icon: BookOpen,
      color: "bg-emerald-900 text-white",
      borderColor: "border-emerald-900",
      skills: [
        { name: "Data Structures & Algorithms", desc: "150+ LeetCode problems (Graphs, DP, Trees)" },
        { name: "Object-Oriented Programming (OOP)", desc: "Encapsulation, Inheritance, Polymorphism, Abstraction" },
        { name: "System Design", desc: "High-level architecture, Load Balancing, Caching (in progress)" }
      ]
    }
  ];

  return (
    <div className="space-y-6 font-terminal text-black text-base md:text-lg leading-relaxed">
      {/* Banner */}
      <div className="panel-outset p-4 bg-gradient-to-r from-purple-900 to-indigo-900 text-white border-2 border-black flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <div>
          <div className="flex items-center gap-2 font-pixel text-xs text-purple-300">
            <CheckSquare className="w-4 h-4" />
            <span>SKILLS.TXT</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold font-terminal tracking-wider text-white mt-1">
            Technical Arsenal & Competencies
          </h2>
        </div>
        <div className="bg-purple-400 text-black px-2 py-1 font-pixel text-[10px] border border-black font-bold">
          6 CATEGORIES
        </div>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((cat, idx) => {
          const IconComp = cat.icon;
          return (
            <div key={idx} className="panel-outset p-4 bg-win95-surface border-2 border-black space-y-3">
              <div className={`px-2 py-1 font-pixel text-xs flex items-center justify-between border border-black ${cat.color}`}>
                <div className="flex items-center gap-2">
                  <IconComp className="w-4 h-4" />
                  <span>{cat.title.toUpperCase()}</span>
                </div>
                <span className="text-[10px] text-yellow-300">[{cat.skills.length}]</span>
              </div>

              <div className="panel-inset p-3 bg-white space-y-2">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="border-b border-gray-200 pb-1.5 last:border-0 last:pb-0">
                    <div className="font-bold text-gray-900 font-terminal text-base flex items-center gap-2">
                      <span className="text-emerald-700 font-pixel text-[10px]">■</span>
                      <span>{skill.name}</span>
                    </div>
                    <p className="text-xs text-gray-600 pl-4">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
