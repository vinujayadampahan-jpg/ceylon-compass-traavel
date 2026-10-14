/**
 * Ceylon Dispatches Ambient Soundscape Engine
 * Pure Web Audio API synthesis for high-fidelity ambient Sri Lankan atmospheres:
 * - Highland Train & Mist (Ella)
 * - Mirissa Ocean Surf (Southern Coast)
 * - Sigiriya Dawn Monastery & Forest (Cultural Triangle)
 */

class CeylonAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private currentTrack: string = 'ella';
  private masterGain: GainNode | null = null;
  private timerId: number | null = null;

  // Active audio nodes
  private noiseNode: AudioNode | null = null;
  private filterNode: BiquadFilterNode | null = null;

  public init() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setVolume(vol: number) {
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(Math.max(0, Math.min(1, vol)), this.ctx.currentTime);
    }
  }

  public play(track: 'ella' | 'mirissa' | 'sigiriya') {
    this.init();
    this.stop();
    this.currentTrack = track;
    this.isPlaying = true;

    if (!this.ctx || !this.masterGain) return;

    if (track === 'ella') {
      this.playEllaMist();
    } else if (track === 'mirissa') {
      this.playMirissaSurf();
    } else {
      this.playSigiriyaDawn();
    }
  }

  public stop() {
    this.isPlaying = false;
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
      this.timerId = null;
    }
    if (this.noiseNode) {
      try {
        (this.noiseNode as AudioBufferSourceNode).stop();
      } catch {
        // ignore
      }
      this.noiseNode = null;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getCurrentTrack(): string {
    return this.currentTrack;
  }

  // Track 1: Ella Highland Mist & Blue Train
  private playEllaMist() {
    if (!this.ctx || !this.masterGain) return;

    // Pink noise wind generator
    const bufferSize = 2 * this.ctx.sampleRate;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      output[i] = (b0 + b1 + b2) * 0.1;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(320, this.ctx.currentTime);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.25, this.ctx.currentTime);

    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    whiteNoise.start();
    this.noiseNode = whiteNoise;

    // Distant train rhythmic chug pulse
    let beat = 0;
    this.timerId = window.setInterval(() => {
      if (!this.ctx || !this.masterGain || !this.isPlaying) return;
      beat++;
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(beat % 2 === 0 ? 82 : 75, this.ctx.currentTime);

      oscGain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      oscGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.18);

      osc.connect(oscGain);
      oscGain.connect(this.masterGain);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.2);

      // Occasional distant chime or whistle
      if (beat % 24 === 0) {
        const whistle = this.ctx.createOscillator();
        const whistleGain = this.ctx.createGain();
        whistle.type = 'sine';
        whistle.frequency.setValueAtTime(440, this.ctx.currentTime);
        whistle.frequency.exponentialRampToValueAtTime(520, this.ctx.currentTime + 0.8);
        whistleGain.gain.setValueAtTime(0.02, this.ctx.currentTime);
        whistleGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.2);
        whistle.connect(whistleGain);
        whistleGain.connect(this.masterGain);
        whistle.start();
        whistle.stop(this.ctx.currentTime + 1.3);
      }
    }, 450);
  }

  // Track 2: Mirissa Sunset Surf
  private playMirissaSurf() {
    if (!this.ctx || !this.masterGain) return;

    const bufferSize = 3 * this.ctx.sampleRate;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = noiseBuffer;
    noise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(250, this.ctx.currentTime);
    filter.Q.setValueAtTime(1.5, this.ctx.currentTime);

    const surfGain = this.ctx.createGain();
    surfGain.gain.setValueAtTime(0.05, this.ctx.currentTime);

    noise.connect(filter);
    filter.connect(surfGain);
    surfGain.connect(this.masterGain);
    noise.start();
    this.noiseNode = noise;

    // Rhythmic ocean swell
    let time = 0;
    this.timerId = window.setInterval(() => {
      if (!this.ctx || !this.isPlaying) return;
      time += 0.2;
      const waveCycle = (Math.sin(time * 0.8) + 1) / 2; // 0 to 1
      filter.frequency.setValueAtTime(180 + waveCycle * 420, this.ctx.currentTime);
      surfGain.gain.setValueAtTime(0.04 + waveCycle * 0.16, this.ctx.currentTime);
    }, 100);
  }

  // Track 3: Sigiriya Dawn Jungle & Temple Bell
  private playSigiriyaDawn() {
    if (!this.ctx || !this.masterGain) return;

    // Gentle forest breeze
    const bufferSize = 2 * this.ctx.sampleRate;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * 0.04;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = noiseBuffer;
    noise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(600, this.ctx.currentTime);

    noise.connect(filter);
    filter.connect(this.masterGain);
    noise.start();
    this.noiseNode = noise;

    // Periodic bird chirps and distant brass singing bowl
    let step = 0;
    this.timerId = window.setInterval(() => {
      if (!this.ctx || !this.masterGain || !this.isPlaying) return;
      step++;

      if (step % 5 === 0) {
        // High soft bird chirp
        const bird = this.ctx.createOscillator();
        const birdGain = this.ctx.createGain();
        bird.type = 'sine';
        const baseFreq = 2200 + Math.random() * 800;
        bird.frequency.setValueAtTime(baseFreq, this.ctx.currentTime);
        bird.frequency.exponentialRampToValueAtTime(baseFreq + 600, this.ctx.currentTime + 0.08);
        birdGain.gain.setValueAtTime(0.04, this.ctx.currentTime);
        birdGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.14);
        bird.connect(birdGain);
        birdGain.connect(this.masterGain);
        bird.start();
        bird.stop(this.ctx.currentTime + 0.15);
      }

      if (step % 18 === 0) {
        // Deep Tibetan singing bowl / monastery gong
        const bowl = this.ctx.createOscillator();
        const bowlGain = this.ctx.createGain();
        bowl.type = 'sine';
        bowl.frequency.setValueAtTime(261.63, this.ctx.currentTime); // C4
        bowlGain.gain.setValueAtTime(0.08, this.ctx.currentTime);
        bowlGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 4.0);
        bowl.connect(bowlGain);
        bowlGain.connect(this.masterGain);
        bowl.start();
        bowl.stop(this.ctx.currentTime + 4.1);
      }
    }, 600);
  }
}

export const ceylonAudio = new CeylonAudioEngine();
