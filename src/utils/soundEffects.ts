// Lightweight Web Audio API Synthesizer for P3R & WD2 UI Sound Effects + Ambient Lo-Fi Player
// Zero external audio files required, zero latency.

class SoundManager {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private isPlayingAmbient: boolean = false;
  private ambientInterval: number | null = null;
  private chordIndex: number = 0;

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.isMuted && this.isPlayingAmbient) {
      this.stopAmbient();
    }
    return this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public getIsPlayingAmbient(): boolean {
    return this.isPlayingAmbient;
  }

  // Snappy menu hover tick
  public playHover() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(880, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1320, this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch {
      // AudioContext blocked
    }
  }

  // Select click
  public playSelect() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1040, this.ctx.currentTime + 0.07);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.07);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.07);
    } catch {
      // AudioContext blocked
    }
  }

  // Operation open confirm sound
  public playConfirm() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.setValueAtTime(660, now + 0.04);
      osc.frequency.setValueAtTime(880, now + 0.08);

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(now + 0.14);
    } catch {
      // AudioContext blocked
    }
  }

  // Back / Close sound
  public playBack() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(660, now);
      osc.frequency.exponentialRampToValueAtTime(330, now + 0.08);

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(now + 0.08);
    } catch {
      // AudioContext blocked
    }
  }

  // Ambient Lo-Fi Synth chords (Atmospheric night mood inspired by P3R Full Moon)
  public toggleAmbient(): boolean {
    if (this.isPlayingAmbient) {
      this.stopAmbient();
      return false;
    } else {
      this.startAmbient();
      return true;
    }
  }

  public startAmbient() {
    this.initContext();
    if (!this.ctx) return;
    this.isPlayingAmbient = true;

    // Harmonic chord progressions (Fmaj7 -> G6 -> Em7 -> Am7)
    const chords = [
      [349.23, 440.00, 523.25, 659.25], // Fmaj7
      [392.00, 493.88, 587.33, 659.25], // G6
      [329.63, 392.00, 493.88, 587.33], // Em7
      [440.00, 523.25, 659.25, 783.99], // Am7
    ];

    const playChordStep = () => {
      if (!this.isPlayingAmbient || !this.ctx) return;
      const now = this.ctx.currentTime;
      const chord = chords[this.chordIndex % chords.length];
      this.chordIndex++;

      chord.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq / 2, now); // low octave warmth

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(600, now);
        filter.frequency.linearRampToValueAtTime(900, now + 1.2);
        filter.frequency.linearRampToValueAtTime(500, now + 2.8);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.035, now + 0.8);
        gain.gain.linearRampToValueAtTime(0.001, now + 2.9);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 3.0);
      });
    };

    playChordStep();
    this.ambientInterval = window.setInterval(playChordStep, 2800);
  }

  public stopAmbient() {
    this.isPlayingAmbient = false;
    if (this.ambientInterval !== null) {
      clearInterval(this.ambientInterval);
      this.ambientInterval = null;
    }
  }
}

export const soundManager = new SoundManager();
