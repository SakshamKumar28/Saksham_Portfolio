// Web Audio API 8-bit Retro Sound Synthesizer

class SoundManager {
  constructor() {
    this.audioCtx = null;
    this.muted = false;
  }

  init() {
    if (!this.audioCtx && typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    return this.muted;
  }

  isMuted() {
    return this.muted;
  }

  playTone(freq, type = 'square', duration = 0.08, volume = 0.1) {
    if (this.muted) return;
    try {
      this.init();
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      gain.gain.setValueAtTime(volume, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {
      console.warn("Audio Context sound error", e);
    }
  }

  playClick() {
    this.playTone(800, 'square', 0.03, 0.08);
  }

  playBeep() {
    this.playTone(1050, 'square', 0.1, 0.12);
  }

  playOpenWindow() {
    if (this.muted) return;
    const notes = [440, 554, 659, 880];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'triangle', 0.06, 0.1);
      }, idx * 40);
    });
  }

  playCloseWindow() {
    if (this.muted) return;
    const notes = [880, 659, 554, 440];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'triangle', 0.05, 0.08);
      }, idx * 30);
    });
  }

  playError() {
    if (this.muted) return;
    this.playTone(150, 'sawtooth', 0.2, 0.15);
  }

  playStartupChime() {
    if (this.muted) return;
    // Win95 style retro arpeggio
    const chord = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99];
    chord.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'sine', 0.3, 0.12);
      }, idx * 100);
    });
  }
}

export const soundFx = new SoundManager();
