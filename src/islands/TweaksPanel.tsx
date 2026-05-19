import { useEffect, useState } from 'react';

const palettes: Record<string, [string, string, string]> = {
  chartreuse: ['oklch(0.86 0.18 130)', 'oklch(0.74 0.17 165)', 'oklch(0.80 0.15 60)'],
  terminal: ['oklch(0.82 0.16 145)', 'oklch(0.74 0.14 175)', 'oklch(0.78 0.13 90)'],
  amber: ['oklch(0.80 0.17 75)', 'oklch(0.74 0.14 30)', 'oklch(0.78 0.13 130)'],
  cyan: ['oklch(0.82 0.13 215)', 'oklch(0.76 0.16 305)', 'oklch(0.80 0.14 160)'],
  magenta: ['oklch(0.78 0.18 340)', 'oklch(0.74 0.15 270)', 'oklch(0.80 0.14 60)'],
};

const fonts: Record<string, { sans: string; mono: string }> = {
  Geist: { sans: 'Geist', mono: 'Geist Mono' },
  'Space Grotesk + JetBrains Mono': { sans: 'Space Grotesk', mono: 'JetBrains Mono' },
  'IBM Plex': { sans: 'IBM Plex Sans', mono: 'IBM Plex Mono' },
};

type TweakState = { accent: string; font: string; density: string; showClock: boolean };

const defaults: TweakState = { accent: 'chartreuse', font: 'Geist', density: 'cozy', showClock: true };

function applyTweaks(t: TweakState) {
  const root = document.documentElement.style;
  const p = palettes[t.accent] ?? palettes.chartreuse;
  const f = fonts[t.font] ?? fonts.Geist;
  root.setProperty('--accent', p[0]);
  root.setProperty('--accent-2', p[1]);
  root.setProperty('--accent-3', p[2]);
  root.setProperty('--font-sans', f.sans);
  root.setProperty('--font-mono', f.mono);
  root.setProperty('--container-max', t.density === 'compact' ? '1180px' : t.density === 'spacious' ? '1320px' : '1240px');
  root.setProperty('--show-clock', t.showClock ? 'inline' : 'none');
}

export default function TweaksPanel() {
  const [state, setState] = useState<TweakState>(defaults);
  useEffect(() => {
    const raw = localStorage.getItem('unglam-tweaks');
    const next = raw ? { ...defaults, ...JSON.parse(raw) } : defaults;
    setState(next);
    applyTweaks(next);
  }, []);
  useEffect(() => {
    applyTweaks(state);
    localStorage.setItem('unglam-tweaks', JSON.stringify(state));
  }, [state]);
  return <details className="tweaks"><summary>tweaks</summary><div className="tweaks-body"><label>accent<select value={state.accent} onChange={(e)=>setState({...state, accent:e.target.value})}>{Object.keys(palettes).map((k)=><option key={k}>{k}</option>)}</select></label></div></details>;
}
