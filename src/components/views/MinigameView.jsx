import React, { useState } from 'react';
import { Gamepad2, RotateCcw, Award, Check, Sparkles } from 'lucide-react';
import { soundFx } from '../../utils/soundFx';

const TECH_WORDS = ['REACT', 'REDIS', 'NODES', 'DOCKER', 'SOCKET', 'WEBRTC', 'MONGO', 'POSTMAN'];

export default function MinigameView() {
  const [solution, setSolution] = useState(() => {
    return TECH_WORDS[Math.floor(Math.random() * TECH_WORDS.length)];
  });
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameStatus, setGameStatus] = useState('PLAYING'); // PLAYING, WON, LOST

  const maxAttempts = 6;
  const wordLength = solution.length;

  const handleKeyPress = (key) => {
    if (gameStatus !== 'PLAYING') return;

    soundFx.playClick();

    if (key === 'ENTER') {
      if (currentGuess.length !== wordLength) {
        soundFx.playError();
        return;
      }

      const newGuesses = [...guesses, currentGuess];
      setGuesses(newGuesses);

      if (currentGuess === solution) {
        setGameStatus('WON');
        soundFx.playStartupChime();
      } else if (newGuesses.length >= maxAttempts) {
        setGameStatus('LOST');
        soundFx.playError();
      }
      setCurrentGuess('');
    } else if (key === 'BACK') {
      setCurrentGuess((prev) => prev.slice(0, -1));
    } else if (currentGuess.length < wordLength && /^[A-Z]$/.test(key)) {
      setCurrentGuess((prev) => prev + key);
    }
  };

  const restartGame = () => {
    soundFx.playClick();
    const nextWord = TECH_WORDS[Math.floor(Math.random() * TECH_WORDS.length)];
    setSolution(nextWord);
    setGuesses([]);
    setCurrentGuess('');
    setGameStatus('PLAYING');
  };

  const getCharStatus = (guessWord, charIdx) => {
    const char = guessWord[charIdx];
    if (solution[charIdx] === char) {
      return 'bg-emerald-600 text-white border-emerald-800';
    }
    if (solution.includes(char)) {
      return 'bg-amber-500 text-black border-amber-700';
    }
    return 'bg-gray-500 text-white border-gray-700';
  };

  return (
    <div className="space-y-4 font-terminal text-black text-base md:text-lg flex flex-col items-center justify-between min-h-[420px]">
      {/* Banner */}
      <div className="w-full panel-outset p-3 bg-gradient-to-r from-red-900 to-amber-900 text-white border-2 border-black flex justify-between items-center">
        <div className="flex items-center gap-2 font-pixel text-xs text-yellow-300">
          <Gamepad2 className="w-4 h-4" />
          <span>WORDLE_BATTLE.EXE</span>
        </div>
        <button 
          onClick={restartGame}
          className="btn-win95 px-2 py-1 font-pixel text-[10px] text-black flex items-center gap-1 hover:bg-gray-200"
        >
          <RotateCcw className="w-3 h-3 text-red-700" />
          <span>New Game</span>
        </button>
      </div>

      <p className="text-xs font-pixel text-center text-gray-700">
        Guess the <span className="text-red-700 font-bold">{wordLength}-LETTER</span> tech keyword from Saksham's stack!
      </p>

      {/* Word Grid */}
      <div className="space-y-1.5 my-2">
        {Array.from({ length: maxAttempts }).map((_, rowIdx) => {
          const guess = guesses[rowIdx];
          const isCurrentRow = rowIdx === guesses.length && gameStatus === 'PLAYING';

          return (
            <div key={rowIdx} className="flex gap-1.5 justify-center">
              {Array.from({ length: wordLength }).map((_, colIdx) => {
                let char = '';
                let statusStyle = 'panel-inset bg-white border-gray-400 text-black';

                if (guess) {
                  char = guess[colIdx] || '';
                  statusStyle = getCharStatus(guess, colIdx);
                } else if (isCurrentRow) {
                  char = currentGuess[colIdx] || '';
                  if (char) statusStyle = 'panel-inset bg-yellow-100 border-yellow-500 text-black font-bold scale-105';
                }

                return (
                  <div 
                    key={colIdx} 
                    className={`w-10 h-10 md:w-11 md:h-11 flex items-center justify-center font-pixel text-sm md:text-base border-2 font-bold transition-all shadow-inner ${statusStyle}`}
                  >
                    {char}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Game Over Message */}
      {gameStatus !== 'PLAYING' && (
        <div className={`w-full panel-outset p-3 border-2 border-black text-center ${gameStatus === 'WON' ? 'bg-emerald-100 text-emerald-900' : 'bg-red-100 text-red-900'}`}>
          <div className="font-pixel text-sm font-bold flex items-center justify-center gap-2">
            {gameStatus === 'WON' ? (
              <>
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>VICTORY! WORD MATCHED: {solution}</span>
              </>
            ) : (
              <span>GAME OVER! WORD WAS: {solution}</span>
            )}
          </div>
          <button 
            onClick={restartGame}
            className="mt-2 btn-win95 px-3 py-1 font-pixel text-xs bg-white hover:bg-gray-100"
          >
            Play Again ↺
          </button>
        </div>
      )}

      {/* On-screen Keyboard */}
      <div className="w-full space-y-1 max-w-md pt-2">
        {['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'].map((row, rIdx) => (
          <div key={rIdx} className="flex justify-center gap-1">
            {rIdx === 2 && (
              <button 
                onClick={() => handleKeyPress('ENTER')}
                className="btn-win95 px-2 py-1.5 font-pixel text-[10px] bg-emerald-200 text-emerald-900"
              >
                ENTER
              </button>
            )}
            {row.split('').map((letter) => (
              <button
                key={letter}
                onClick={() => handleKeyPress(letter)}
                className="btn-win95 w-7 h-8 md:w-8 md:h-9 font-pixel text-xs hover:bg-gray-200"
              >
                {letter}
              </button>
            ))}
            {rIdx === 2 && (
              <button 
                onClick={() => handleKeyPress('BACK')}
                className="btn-win95 px-2 py-1.5 font-pixel text-[10px] bg-red-200 text-red-900"
              >
                DEL
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
