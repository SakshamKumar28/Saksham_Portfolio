import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { soundFx } from '../utils/soundFx';

export default function WindowWrapper({
  id,
  title,
  icon: IconComponent,
  isOpen,
  isMinimized,
  isMaximized,
  isActive,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  initialPos = { x: 50, y: 50 },
  defaultWidth = 'w-[90vw] md:w-[700px]',
  defaultHeight = 'h-[75vh] md:h-[500px]',
  children
}) {
  const windowRef = useRef(null);
  const [screenSize, setScreenSize] = useState({ width: 1024, height: 768 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
      const handleResize = () => {
        setScreenSize({ width: window.innerWidth, height: window.innerHeight });
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  if (!isOpen || isMinimized) return null;

  const handleTitlebarClick = (e) => {
    e.stopPropagation();
    onFocus(id);
  };

  return (
    <motion.div
      ref={windowRef}
      drag={!isMaximized}
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={{ 
        left: 0, 
        top: 0, 
        right: Math.max(0, screenSize.width - 300), 
        bottom: Math.max(0, screenSize.height - 100) 
      }}
      initial={{ x: initialPos.x, y: initialPos.y, scale: 0.95, opacity: 0 }}
      animate={{ 
        x: isMaximized ? 0 : initialPos.x, 
        y: isMaximized ? 0 : initialPos.y,
        scale: 1, 
        opacity: 1 
      }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.15 }}
      onMouseDown={() => onFocus(id)}
      style={{
        zIndex: isActive ? 50 : 20,
        position: 'absolute',
      }}
      className={`
        ${isMaximized ? 'fixed inset-0 top-0 bottom-9 left-0 right-0 w-full h-[calc(100vh-36px)]' : `${defaultWidth} ${defaultHeight}`}
        panel-outset p-[3px] flex flex-col shadow-2xl select-none font-system text-win95-text border-2 border-black
      `}
    >
      {/* 90s Title Bar */}
      <div 
        onClick={handleTitlebarClick}
        className={`
          flex items-center justify-between px-2 py-1 cursor-move select-none font-bold text-xs md:text-sm tracking-wider
          ${isActive 
            ? 'bg-gradient-to-r from-win95-titlebar via-[#0000a0] to-[#1084d0] text-white' 
            : 'bg-win95-titlebarInactive text-gray-300'
          }
        `}
      >
        <div className="flex items-center gap-2 truncate">
          {IconComponent && <IconComponent className="w-4 h-4 shrink-0 text-yellow-300" />}
          <span className="truncate font-pixel text-[10px] md:text-xs tracking-normal">{title}</span>
        </div>

        {/* Window Controls: Minimize, Maximize, Close */}
        <div className="flex items-center gap-1 shrink-0">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              soundFx.playClick();
              onMinimize(id);
            }}
            className="w-5 h-5 md:w-6 md:h-6 btn-win95 flex items-center justify-center font-bold text-black text-xs hover:bg-gray-200"
            title="Minimize"
          >
            _
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              soundFx.playClick();
              onMaximize(id);
            }}
            className="w-5 h-5 md:w-6 md:h-6 btn-win95 flex items-center justify-center font-bold text-black text-[10px] hover:bg-gray-200"
            title={isMaximized ? "Restore" : "Maximize"}
          >
            {isMaximized ? '❐' : '□'}
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              soundFx.playCloseWindow();
              onClose(id);
            }}
            className="w-5 h-5 md:w-6 md:h-6 btn-win95 bg-red-200 flex items-center justify-center font-pixel text-[9px] text-red-900 hover:bg-red-600 hover:text-white"
            title="Close"
          >
            X
          </button>
        </div>
      </div>

      {/* Menu / Toolbar Strip */}
      <div className="bg-win95-surface px-2 py-1 text-xs border-b border-gray-400 flex gap-4 text-gray-800 font-terminal tracking-wider">
        <span className="hover:underline cursor-pointer">File</span>
        <span className="hover:underline cursor-pointer">Edit</span>
        <span className="hover:underline cursor-pointer">View</span>
        <span className="hover:underline cursor-pointer">Help</span>
      </div>

      {/* Window Body Container */}
      <div className="flex-1 panel-inset m-[2px] p-3 md:p-4 overflow-y-auto bg-white font-terminal text-base md:text-lg text-black">
        {children}
      </div>

      {/* Window Status Bar */}
      <div className="bg-win95-surface px-2 py-0.5 text-[11px] font-terminal text-gray-700 flex justify-between items-center border-t border-gray-400">
        <span>Ready</span>
        <span>Saksham OS v95.2</span>
      </div>
    </motion.div>
  );
}
