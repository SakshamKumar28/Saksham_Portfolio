# 🕹️ Saksham Kumar — Retro 90s OS Developer Portfolio (v95.2)

> A pixelated, 90s Operating System (Windows 95 / Classic Mac System 7 aesthetic) single-page developer portfolio for **Saksham Kumar**, built with **Next.js (App Router)**, **React 19**, **GSAP**, **Framer Motion**, **Lenis**, and **Tailwind CSS**.

---

## 🌟 Key Features

- **🖥️ GSAP BIOS Bootloader Screen (`BootSequence.jsx`)**: Initial load simulates a 90s BIOS boot sequence with high-speed green terminal output, RAM check, driver loading, ESC skip, and retro boot sound effects.
- **🪟 Framer Motion Draggable Windows (`WindowWrapper.jsx`)**: Every section (`Experience.exe`, `Projects.folder`, `Skills.txt`, `About_Me.info`, `Terminal.exe`, `Display.cpl`, `My_Resume.pdf`, `Wordle_Battle.game`) opens as a draggable 90s window with working **Minimize (`_`)**, **Maximize/Restore (`□`/`❐`)**, and **Close (`X`)** controls.
- **🎨 Desktop Wallpaper Switcher (`Display.cpl`)**: Features 6 retro wallpapers (Windows 95 Teal, 90s Sky Blue, Matrix Rain, Synthwave Grid, Mac System 7, Midnight Blue) with a real-time CRT monitor preview and `localStorage` persistence.
- **💻 Interactive Retro CLI (`Terminal.exe`)**: Functional terminal prompt (`C:\SAKSHAM>`) supporting commands: `help`, `whoami`, `exp`, `projects`, `skills`, `contact`, `cat resume`, `game`, `clear`, `date`, `matrix`, and `sudo`.
- **🎮 Playable 8-Bit Minigame (`Wordle_Battle.game`)**: Playable tech-keyword guessing game inspired by Saksham's featured project `WORDLE.BATTLE`.
- **🎵 Web Audio API Synthesizer (`soundFx.js`)**: Generates 8-bit sound effects (boot beep, button click, window open/close arpeggios, error buzz, startup chime) without external MP3 files.
- **📜 Lenis Smooth Scrolling (`LenisProvider.jsx`)**: Fluid global smooth scrolling for canvas and overflow windows.
- **📄 Resume PDF Viewer & Downloader (`My_Resume.pdf`)**: Embedded resume viewer and quick download link for `Saksham_Kumar_Resume.pdf`.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/) + React 19
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Custom 3D inset/outset bevel shadows & Win95 color palette)
- **Animations & Physics**:
  - [GSAP](https://greensock.com/gsap/) for BIOS boot sequence timelines.
  - [Framer Motion](https://www.framer.com/motion/) for window dragging, physics, and state transitions.
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/) (`lenis`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts loaded via `next/font/google`:
  - `Press Start 2P`: Chunky 8-bit headers & desktop icons
  - `VT323`: Readable terminal font for resume text
  - `Silkscreen`: Micro-pixel UI font for window title bars & buttons

---

## 📁 Content & Resume Mapping

- **User Profile**: Saksham Kumar — Software Engineering Student | Full-Stack MERN Developer
- **Location & Education**: Agra, Uttar Pradesh | B.Tech in CSE @ GLA University, Mathura (2023 - 2027)
- **Experience**: Full-Stack Developer Intern @ **InstanDev** (Jun 2026 – Aug 2026), featuring **WORDLE.BATTLE** (React 19, Node.js, Socket.IO, Redis adapter, httpOnly JWT cookies, Zod, Docker Compose).
- **Projects**:
  - **DOXY — Telemedicine Platform** (Smart India Hackathon 2025 Finalist): Sustained 1,000+ concurrent users under Artillery load tests, WebRTC peer video + Socket.IO signaling layer.
  - **Chatifyy — Real-Time Messaging Platform**: MERN Stack, Socket.IO event-driven chat, group/private rooms, JWT RBAC middleware.
- **Skills**: Languages (JavaScript, Java, SQL), Frontend (React, Tailwind, Vite), Backend (Node, Express, REST APIs, WebSockets, JWT), Databases (MongoDB, MySQL), Infra & Tooling (Docker, Redis, Git, GitHub, Postman), CS Core (150+ LeetCode solved).
- **Social Connections**:
  - LinkedIn: [linkedin.com/in/saksham-kumar-863a97308](https://www.linkedin.com/in/saksham-kumar-863a97308)
  - GitHub: [github.com/SakshamKumar28](https://github.com/SakshamKumar28)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/SakshamKumar28/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to start Saksham OS.

### 4. Build for production
```bash
npm run build
npm run start
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
