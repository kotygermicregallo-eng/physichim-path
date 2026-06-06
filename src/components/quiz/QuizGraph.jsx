// QuizGraph — renders inline SVG graphs for quiz questions
import React, { useMemo } from 'react';

// ─── Exponential decay [A](t) = A0 * e^(-k*t) ───────────────────────────────
function ExponentialDecayGraph({ A0 = 1, k = 0.1, xLabel = 't (s)', yLabel = '[A] (mol/L)' }) {
  const width = 320; const height = 200;
  const pad = { top: 20, right: 20, bottom: 40, left: 50 };
  const w = width - pad.left - pad.right; const h = height - pad.top - pad.bottom;
  const tMax = Math.ceil(5 / k); const t12 = Math.log(2) / k;
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 80; i++) { const t = (i / 80) * tMax; pts.push({ t, a: A0 * Math.exp(-k * t) }); }
    return pts;
  }, [A0, k, tMax]);
  const toX = t => pad.left + (t / tMax) * w;
  const toY = a => pad.top + (1 - a / A0) * h;
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.t)},${toY(p.a)}`).join(' ');
  const t12x = toX(t12); const halfY = toY(A0 / 2);
  return (
    <svg width={width} height={height} style={{ fontFamily: 'JetBrains Mono, monospace', overflow: 'visible' }}>
      <line x1={pad.left} y1={pad.top} x2={pad.left} y2={pad.top + h} stroke="#475569" strokeWidth={1.5} />
      <line x1={pad.left} y1={pad.top + h} x2={pad.left + w} y2={pad.top + h} stroke="#475569" strokeWidth={1.5} />
      {[0.25, 0.5, 0.75].map(f => <line key={f} x1={pad.left} y1={pad.top + f * h} x2={pad.left + w} y2={pad.top + f * h} stroke="#1e293b" strokeDasharray="4,3" />)}
      <path d={pathD} fill="none" stroke="#c8902f" strokeWidth={2.5} />
      <circle cx={pad.left} cy={pad.top} r={3} fill="#38bdf8" />
      <text x={pad.left + 6} y={pad.top + 4} fill="#38bdf8" fontSize={10}>[A]₀ = {A0}</text>
      <line x1={pad.left} y1={halfY} x2={t12x} y2={halfY} stroke="#34d399" strokeDasharray="4,3" strokeWidth={1.2} />
      <line x1={t12x} y1={halfY} x2={t12x} y2={pad.top + h} stroke="#34d399" strokeDasharray="4,3" strokeWidth={1.2} />
      <circle cx={t12x} cy={halfY} r={4} fill="#34d399" />
      <text x={t12x + 4} y={halfY - 5} fill="#34d399" fontSize={9}>t½</text>
      <text x={pad.left - 6} y={halfY + 4} fill="#34d399" fontSize={9} textAnchor="end">[A]₀/2</text>
      <text x={pad.left + w / 2} y={height - 4} fill="#64748b" fontSize={10} textAnchor="middle">{xLabel}</text>
      <text x={12} y={pad.top + h / 2} fill="#64748b" fontSize={10} textAnchor="middle" transform={`rotate(-90, 12, ${pad.top + h / 2})`}>{yLabel}</text>
      <text x={pad.left - 4} y={pad.top + 4} fill="#94a3b8" fontSize={9} textAnchor="end">{A0}</text>
      <text x={pad.left - 4} y={pad.top + h + 4} fill="#94a3b8" fontSize={9} textAnchor="end">0</text>
    </svg>
  );
}

// ─── ln[A] vs t (linearization for order 1) ──────────────────────────────────
function LnDecayGraph({ A0 = 1, k = 0.1, xLabel = 't (s)', yLabel = 'ln[A]' }) {
  const width = 320; const height = 200;
  const pad = { top: 20, right: 20, bottom: 40, left: 55 };
  const w = width - pad.left - pad.right; const h = height - pad.top - pad.bottom;
  const tMax = Math.ceil(4 / k);
  const lnA0 = Math.log(A0); const lnMin = lnA0 - k * tMax;
  const toX = t => pad.left + (t / tMax) * w;
  const toY = lnA => pad.top + (1 - (lnA - lnMin) / (lnA0 - lnMin)) * h;
  const x1 = toX(0); const y1 = toY(lnA0); const x2 = toX(tMax); const y2 = toY(lnMin);
  const tmid = tMax / 2;
  return (
    <svg width={width} height={height} style={{ fontFamily: 'JetBrains Mono, monospace', overflow: 'visible' }}>
      <line x1={pad.left} y1={pad.top} x2={pad.left} y2={pad.top + h} stroke="#475569" strokeWidth={1.5} />
      <line x1={pad.left} y1={pad.top + h} x2={pad.left + w} y2={pad.top + h} stroke="#475569" strokeWidth={1.5} />
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f472b6" strokeWidth={2.5} />
      <circle cx={x1} cy={y1} r={4} fill="#38bdf8" />
      <text x={x1 + 6} y={y1 - 4} fill="#38bdf8" fontSize={9}>ln[A]₀ = {lnA0.toFixed(2)}</text>
      {/* Slope annotation */}
      <line x1={toX(tmid)} y1={toY(lnA0 - k * tmid)} x2={toX(tmid + 1 / k)} y2={toY(lnA0 - k * tmid)} stroke="#fbbf24" strokeDasharray="3,2" strokeWidth={1} />
      <line x1={toX(tmid + 1 / k)} y1={toY(lnA0 - k * tmid)} x2={toX(tmid + 1 / k)} y2={toY(lnA0 - k * (tmid + 1 / k))} stroke="#fbbf24" strokeDasharray="3,2" strokeWidth={1} />
      <text x={toX(tmid + 0.5 / k)} y={toY(lnA0 - k * tmid) - 5} fill="#fbbf24" fontSize={8} textAnchor="middle">Δt</text>
      <text x={toX(tmid + 1 / k) + 5} y={toY(lnA0 - k * (tmid + 0.5 / k))} fill="#fbbf24" fontSize={8}>Δln[A]</text>
      <text x={pad.left + w / 2} y={height - 4} fill="#64748b" fontSize={10} textAnchor="middle">{xLabel}</text>
      <text x={12} y={pad.top + h / 2} fill="#64748b" fontSize={10} textAnchor="middle" transform={`rotate(-90, 12, ${pad.top + h / 2})`}>{yLabel}</text>
      <text x={x2 - 60} y={y2 + 14} fill="#f472b6" fontSize={9}>pente = −k</text>
    </svg>
  );
}

// ─── Equilibrium advance ──────────────────────────────────────────────────────
function EquilibriumAdvanceGraph({ xMax = 1, tau = 0.6, xLabel = 't (s)', yLabel = 'x (mol)' }) {
  const width = 320; const height = 200;
  const pad = { top: 20, right: 30, bottom: 40, left: 50 };
  const w = width - pad.left - pad.right; const h = height - pad.top - pad.bottom;
  const xEq = xMax * tau; const k = 3 / 40;
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 80; i++) { const t = (i / 80) * 50; pts.push({ t, x: xEq * (1 - Math.exp(-k * t)) }); }
    return pts;
  }, [xEq, k]);
  const toX = t => pad.left + (t / 50) * w;
  const toY = x => pad.top + (1 - x / xMax) * h;
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.t)},${toY(p.x)}`).join(' ');
  return (
    <svg width={width} height={height} style={{ fontFamily: 'JetBrains Mono, monospace', overflow: 'visible' }}>
      <line x1={pad.left} y1={pad.top} x2={pad.left} y2={pad.top + h} stroke="#475569" strokeWidth={1.5} />
      <line x1={pad.left} y1={pad.top + h} x2={pad.left + w} y2={pad.top + h} stroke="#475569" strokeWidth={1.5} />
      <line x1={pad.left} y1={pad.top} x2={pad.left + w} y2={pad.top} stroke="#f87171" strokeDasharray="5,4" strokeWidth={1} />
      <text x={pad.left + w + 2} y={pad.top + 4} fill="#f87171" fontSize={9}>x_max</text>
      <line x1={pad.left} y1={toY(xEq)} x2={pad.left + w} y2={toY(xEq)} stroke="#a78bfa" strokeDasharray="5,4" strokeWidth={1} />
      <text x={pad.left + w + 2} y={toY(xEq) + 4} fill="#a78bfa" fontSize={9}>x_eq</text>
      <path d={pathD} fill="none" stroke="#c8902f" strokeWidth={2.5} />
      <text x={pad.left + w / 2} y={height - 4} fill="#64748b" fontSize={10} textAnchor="middle">{xLabel}</text>
      <text x={12} y={pad.top + h / 2} fill="#64748b" fontSize={10} textAnchor="middle" transform={`rotate(-90, 12, ${pad.top + h / 2})`}>{yLabel}</text>
    </svg>
  );
}

// ─── Predominance diagram ─────────────────────────────────────────────────────
function PredominanceDiagram({ pKa = 4.8, acidName = 'AH', baseName = 'A⁻' }) {
  const width = 320; const height = 100;
  const pad = { left: 30, right: 30, top: 20, bottom: 30 };
  const w = width - pad.left - pad.right;
  const pKaX = pad.left + ((pKa - 0) / 14) * w;
  return (
    <svg width={width} height={height} style={{ fontFamily: 'JetBrains Mono, monospace' }}>
      <rect x={pad.left} y={35} width={pKaX - pad.left} height={22} fill="rgba(248,113,113,0.25)" stroke="#f87171" strokeWidth={1} rx={4} />
      <rect x={pKaX} y={35} width={pad.left + w - pKaX} height={22} fill="rgba(52,211,153,0.2)" stroke="#34d399" strokeWidth={1} rx={4} />
      <text x={(pad.left + pKaX) / 2} y={50} fill="#f87171" fontSize={11} textAnchor="middle" fontWeight={600}>{acidName}</text>
      <text x={(pKaX + pad.left + w) / 2} y={50} fill="#34d399" fontSize={11} textAnchor="middle" fontWeight={600}>{baseName}</text>
      <line x1={pKaX} y1={30} x2={pKaX} y2={62} stroke="#fbbf24" strokeWidth={2} />
      <text x={pKaX} y={25} fill="#fbbf24" fontSize={10} textAnchor="middle">pKa = {pKa}</text>
      <line x1={pad.left} y1={64} x2={pad.left + w} y2={64} stroke="#475569" strokeWidth={1.5} />
      {[0, 2, 4, 6, 7, 8, 10, 12, 14].map(pH => (
        <g key={pH}>
          <line x1={pad.left + (pH / 14) * w} y1={62} x2={pad.left + (pH / 14) * w} y2={68} stroke="#475569" />
          <text x={pad.left + (pH / 14) * w} y={78} fill="#94a3b8" fontSize={8} textAnchor="middle">{pH}</text>
        </g>
      ))}
      <text x={pad.left + w / 2} y={92} fill="#64748b" fontSize={9} textAnchor="middle">pH</text>
    </svg>
  );
}

// ─── Titration curve ──────────────────────────────────────────────────────────
function TitrationCurve({ VE_mL = 20 }) {
  const width = 320; const height = 200;
  const pad = { top: 20, right: 20, bottom: 40, left: 45 };
  const w = width - pad.left - pad.right; const h = height - pad.top - pad.bottom;
  const VMax = 35;
  const pH = (V) => {
    if (V < VE_mL - 2) return 2 + (V / (VE_mL - 2)) * 4;
    if (V < VE_mL + 2) return 6 + ((V - (VE_mL - 2)) / 4) * 6;
    return 12 + ((V - (VE_mL + 2)) / (VMax - VE_mL - 2)) * 1;
  };
  const pts = [];
  for (let i = 0; i <= 70; i++) { const V = (i / 70) * VMax; pts.push({ V, pH: Math.min(13, pH(V)) }); }
  const toX = V => pad.left + (V / VMax) * w;
  const toY = p => pad.top + (1 - (p - 1) / 12) * h;
  const pathD = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.V)},${toY(p.pH)}`).join(' ');
  const VEx = toX(VE_mL); const pHEq = Math.min(13, pH(VE_mL));
  return (
    <svg width={width} height={height} style={{ fontFamily: 'JetBrains Mono, monospace', overflow: 'visible' }}>
      <line x1={pad.left} y1={pad.top} x2={pad.left} y2={pad.top + h} stroke="#475569" strokeWidth={1.5} />
      <line x1={pad.left} y1={pad.top + h} x2={pad.left + w} y2={pad.top + h} stroke="#475569" strokeWidth={1.5} />
      {[3, 5, 7, 9, 11].map(p => (
        <g key={p}>
          <line x1={pad.left} y1={toY(p)} x2={pad.left + w} y2={toY(p)} stroke="#1e293b" strokeDasharray="3,3" />
          <text x={pad.left - 4} y={toY(p) + 4} fill="#64748b" fontSize={8} textAnchor="end">{p}</text>
        </g>
      ))}
      <path d={pathD} fill="none" stroke="#c8902f" strokeWidth={2.5} />
      <line x1={VEx} y1={pad.top} x2={VEx} y2={pad.top + h} stroke="#34d399" strokeDasharray="4,3" strokeWidth={1.5} />
      <text x={VEx + 3} y={pad.top + 12} fill="#34d399" fontSize={9}>V_E ≈ {VE_mL} mL</text>
      <circle cx={VEx} cy={toY(pHEq)} r={5} fill="#34d399" />
      <text x={pad.left + w / 2} y={height - 4} fill="#64748b" fontSize={10} textAnchor="middle">Volume versé (mL)</text>
      <text x={10} y={pad.top + h / 2} fill="#64748b" fontSize={10} textAnchor="middle" transform={`rotate(-90, 10, ${pad.top + h / 2})`}>pH</text>
      <line x1={pad.left} y1={toY(7)} x2={pad.left + w} y2={toY(7)} stroke="#fbbf24" strokeDasharray="3,3" strokeWidth={0.8} />
      <text x={pad.left - 4} y={toY(7) + 4} fill="#fbbf24" fontSize={8} textAnchor="end">7</text>
    </svg>
  );
}

// ─── Conductimetric titration ──────────────────────────────────────────────────
function ConductimetricCurve({ VE_mL = 15 }) {
  const width = 320; const height = 190;
  const pad = { top: 20, right: 20, bottom: 40, left: 50 };
  const w = width - pad.left - pad.right; const h = height - pad.top - pad.bottom;
  const VMax = 30;
  const sigma = V => V < VE_mL ? (4 - (V / VE_mL) * 2.5) : (1.5 + ((V - VE_mL) / (VMax - VE_mL)) * 3.5);
  const sigmaMin = 1.5; const sigmaMax = 4;
  const pts = [];
  for (let i = 0; i <= 60; i++) { const V = (i / 60) * VMax; pts.push({ V, s: sigma(V) }); }
  const toX = V => pad.left + (V / VMax) * w;
  const toY = s => pad.top + (1 - (s - sigmaMin) / (sigmaMax - sigmaMin)) * h;
  const VEx = toX(VE_mL);
  return (
    <svg width={width} height={height} style={{ fontFamily: 'JetBrains Mono, monospace', overflow: 'visible' }}>
      <line x1={pad.left} y1={pad.top} x2={pad.left} y2={pad.top + h} stroke="#475569" strokeWidth={1.5} />
      <line x1={pad.left} y1={pad.top + h} x2={pad.left + w} y2={pad.top + h} stroke="#475569" strokeWidth={1.5} />
      {/* Two half-lines */}
      <line x1={toX(0)} y1={toY(4)} x2={toX(VE_mL)} y2={toY(1.5)} stroke="#38bdf8" strokeWidth={2.2} />
      <line x1={toX(VE_mL)} y1={toY(1.5)} x2={toX(VMax)} y2={toY(5)} stroke="#38bdf8" strokeWidth={2.2} />
      <line x1={VEx} y1={pad.top} x2={VEx} y2={pad.top + h} stroke="#fbbf24" strokeDasharray="4,3" strokeWidth={1.5} />
      <circle cx={VEx} cy={toY(1.5)} r={5} fill="#fbbf24" />
      <text x={VEx + 3} y={pad.top + 12} fill="#fbbf24" fontSize={9}>V_E ≈ {VE_mL} mL</text>
      <text x={pad.left + w / 2} y={height - 4} fill="#64748b" fontSize={10} textAnchor="middle">Volume versé (mL)</text>
      <text x={12} y={pad.top + h / 2} fill="#64748b" fontSize={10} textAnchor="middle" transform={`rotate(-90, 12, ${pad.top + h / 2})`}>σ (mS/cm)</text>
      <text x={toX(VE_mL / 2)} y={toY(2.8)} fill="#94a3b8" fontSize={8}>H₃O⁺→Na⁺</text>
      <text x={toX(VE_mL + 5)} y={toY(3)} fill="#94a3b8" fontSize={8}>excès NaOH</text>
    </svg>
  );
}

// ─── RC Charge curve ──────────────────────────────────────────────────────────
function RCChargeCurve({ E = 10, tau = 1 }) {
  const width = 320; const height = 200;
  const pad = { top: 20, right: 20, bottom: 40, left: 50 };
  const w = width - pad.left - pad.right; const h = height - pad.top - pad.bottom;
  const tMax = 5 * tau;
  const pts = [];
  for (let i = 0; i <= 80; i++) { const t = (i / 80) * tMax; pts.push({ t, u: E * (1 - Math.exp(-t / tau)) }); }
  const toX = t => pad.left + (t / tMax) * w;
  const toY = u => pad.top + (1 - u / E) * h;
  const pathD = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.t)},${toY(p.u)}`).join(' ');
  const tauX = toX(tau); const tauY = toY(E * (1 - Math.exp(-1)));
  return (
    <svg width={width} height={height} style={{ fontFamily: 'JetBrains Mono, monospace', overflow: 'visible' }}>
      <line x1={pad.left} y1={pad.top} x2={pad.left} y2={pad.top + h} stroke="#475569" strokeWidth={1.5} />
      <line x1={pad.left} y1={pad.top + h} x2={pad.left + w} y2={pad.top + h} stroke="#475569" strokeWidth={1.5} />
      {/* Asymptote E */}
      <line x1={pad.left} y1={pad.top} x2={pad.left + w} y2={pad.top} stroke="#fbbf24" strokeDasharray="5,3" strokeWidth={1.2} />
      <text x={pad.left + w + 3} y={pad.top + 4} fill="#fbbf24" fontSize={9}>E = {E} V</text>
      <path d={pathD} fill="none" stroke="#34d399" strokeWidth={2.5} />
      {/* Tangente */}
      <line x1={pad.left} y1={pad.top + h} x2={tauX} y2={pad.top} stroke="#f472b6" strokeDasharray="4,3" strokeWidth={1.5} />
      {/* τ mark */}
      <line x1={tauX} y1={tauY} x2={tauX} y2={pad.top + h} stroke="#a78bfa" strokeDasharray="3,2" strokeWidth={1.2} />
      <line x1={pad.left} y1={tauY} x2={tauX} y2={tauY} stroke="#a78bfa" strokeDasharray="3,2" strokeWidth={1.2} />
      <circle cx={tauX} cy={tauY} r={4} fill="#a78bfa" />
      <text x={tauX} y={pad.top + h + 14} fill="#a78bfa" fontSize={9} textAnchor="middle">τ</text>
      <text x={pad.left - 4} y={tauY + 4} fill="#a78bfa" fontSize={9} textAnchor="end">0,63E</text>
      <text x={pad.left + w / 2} y={height - 4} fill="#64748b" fontSize={10} textAnchor="middle">t (s)</text>
      <text x={12} y={pad.top + h / 2} fill="#64748b" fontSize={10} textAnchor="middle" transform={`rotate(-90, 12, ${pad.top + h / 2})`}>u_C (V)</text>
      <text x={tauX - 30} y={pad.top + 20} fill="#f472b6" fontSize={8}>Tangente origine</text>
    </svg>
  );
}

// ─── RC Discharge curve ──────────────────────────────────────────────────────
function RCDischargeCurve({ E = 10, tau = 1 }) {
  const width = 320; const height = 200;
  const pad = { top: 20, right: 20, bottom: 40, left: 50 };
  const w = width - pad.left - pad.right; const h = height - pad.top - pad.bottom;
  const tMax = 5 * tau;
  const pts = [];
  for (let i = 0; i <= 80; i++) { const t = (i / 80) * tMax; pts.push({ t, u: E * Math.exp(-t / tau) }); }
  const toX = t => pad.left + (t / tMax) * w;
  const toY = u => pad.top + (1 - u / E) * h;
  const pathD = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.t)},${toY(p.u)}`).join(' ');
  const tauX = toX(tau); const tauY = toY(E * Math.exp(-1));
  return (
    <svg width={width} height={height} style={{ fontFamily: 'JetBrains Mono, monospace', overflow: 'visible' }}>
      <line x1={pad.left} y1={pad.top} x2={pad.left} y2={pad.top + h} stroke="#475569" strokeWidth={1.5} />
      <line x1={pad.left} y1={pad.top + h} x2={pad.left + w} y2={pad.top + h} stroke="#475569" strokeWidth={1.5} />
      <path d={pathD} fill="none" stroke="#f87171" strokeWidth={2.5} />
      {/* Tangente */}
      <line x1={pad.left} y1={pad.top} x2={tauX} y2={pad.top + h} stroke="#f472b6" strokeDasharray="4,3" strokeWidth={1.5} />
      {/* τ mark */}
      <line x1={tauX} y1={tauY} x2={tauX} y2={pad.top + h} stroke="#a78bfa" strokeDasharray="3,2" strokeWidth={1.2} />
      <line x1={pad.left} y1={tauY} x2={tauX} y2={tauY} stroke="#a78bfa" strokeDasharray="3,2" strokeWidth={1.2} />
      <circle cx={tauX} cy={tauY} r={4} fill="#a78bfa" />
      <text x={tauX} y={pad.top + h + 14} fill="#a78bfa" fontSize={9} textAnchor="middle">τ</text>
      <text x={pad.left - 4} y={tauY + 4} fill="#a78bfa" fontSize={9} textAnchor="end">0,37E</text>
      <text x={pad.left + 4} y={pad.top + 4} fill="#f87171" fontSize={9}>E = {E} V</text>
      <text x={pad.left + w / 2} y={height - 4} fill="#64748b" fontSize={10} textAnchor="middle">t (s)</text>
      <text x={12} y={pad.top + h / 2} fill="#64748b" fontSize={10} textAnchor="middle" transform={`rotate(-90, 12, ${pad.top + h / 2})`}>u_C (V)</text>
    </svg>
  );
}

// ─── Radioactive decay N(t) ───────────────────────────────────────────────────
function RadioactiveDecay({ N0 = 1000, t12 = 10 }) {
  const width = 320; const height = 200;
  const pad = { top: 20, right: 20, bottom: 40, left: 55 };
  const w = width - pad.left - pad.right; const h = height - pad.top - pad.bottom;
  const tMax = 4 * t12; const k = Math.log(2) / t12;
  const pts = [];
  for (let i = 0; i <= 80; i++) { const t = (i / 80) * tMax; pts.push({ t, N: N0 * Math.exp(-k * t) }); }
  const toX = t => pad.left + (t / tMax) * w;
  const toY = N => pad.top + (1 - N / N0) * h;
  const pathD = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.t)},${toY(p.N)}`).join(' ');
  return (
    <svg width={width} height={height} style={{ fontFamily: 'JetBrains Mono, monospace', overflow: 'visible' }}>
      <line x1={pad.left} y1={pad.top} x2={pad.left} y2={pad.top + h} stroke="#475569" strokeWidth={1.5} />
      <line x1={pad.left} y1={pad.top + h} x2={pad.left + w} y2={pad.top + h} stroke="#475569" strokeWidth={1.5} />
      <path d={pathD} fill="none" stroke="#f472b6" strokeWidth={2.5} />
      {/* t½ markers */}
      {[1, 2, 3].map(n => {
        const tx = toX(n * t12); const Ny = toY(N0 / Math.pow(2, n));
        return (
          <g key={n}>
            <line x1={pad.left} y1={Ny} x2={tx} y2={Ny} stroke="#fbbf24" strokeDasharray="3,2" strokeWidth={1} />
            <line x1={tx} y1={Ny} x2={tx} y2={pad.top + h} stroke="#fbbf24" strokeDasharray="3,2" strokeWidth={1} />
            <circle cx={tx} cy={Ny} r={3} fill="#fbbf24" />
            <text x={tx} y={pad.top + h + 14} fill="#fbbf24" fontSize={8} textAnchor="middle">{n}t½</text>
            <text x={pad.left - 4} y={Ny + 4} fill="#fbbf24" fontSize={8} textAnchor="end">N₀/{Math.pow(2, n)}</text>
          </g>
        );
      })}
      <text x={pad.left + 5} y={pad.top + 10} fill="#f472b6" fontSize={9}>N₀ = {N0}</text>
      <text x={pad.left + w / 2} y={height - 4} fill="#64748b" fontSize={10} textAnchor="middle">t (unité de t½)</text>
      <text x={12} y={pad.top + h / 2} fill="#64748b" fontSize={10} textAnchor="middle" transform={`rotate(-90, 12, ${pad.top + h / 2})`}>N(t)</text>
    </svg>
  );
}

// ─── Parabolic trajectory ─────────────────────────────────────────────────────
function ParabolicTrajectory({ v0 = 15, angle_deg = 30, label = 'Trajectoire parabolique' }) {
  const width = 320; const height = 200;
  const pad = { top: 20, right: 20, bottom: 40, left: 40 };
  const w = width - pad.left - pad.right; const h = height - pad.top - pad.bottom;
  const g = 9.81; const ang = (angle_deg * Math.PI) / 180;
  const vx = v0 * Math.cos(ang); const vy = v0 * Math.sin(ang);
  const tFlight = (2 * vy) / g;
  const xMax = vx * tFlight; const yMax = vy * vy / (2 * g);
  const pts = [];
  for (let i = 0; i <= 50; i++) {
    const t = (i / 50) * tFlight;
    pts.push({ x: vx * t, y: vy * t - 0.5 * g * t * t });
  }
  const toX = x => pad.left + (x / xMax) * w;
  const toY = y => pad.top + h - (y / yMax) * h * 0.85;
  const pathD = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.x)},${toY(p.y)}`).join(' ');
  const tmid = vy / g;
  const xTop = toX(vx * tmid); const yTop = toY(yMax);
  return (
    <svg width={width} height={height} style={{ fontFamily: 'JetBrains Mono, monospace', overflow: 'visible' }}>
      <line x1={pad.left} y1={pad.top} x2={pad.left} y2={pad.top + h} stroke="#475569" strokeWidth={1.5} />
      <line x1={pad.left} y1={pad.top + h} x2={pad.left + w} y2={pad.top + h} stroke="#475569" strokeWidth={1.5} />
      <path d={pathD} fill="none" stroke="#c8902f" strokeWidth={2.5} />
      {/* Apex */}
      <line x1={xTop} y1={yTop} x2={xTop} y2={pad.top + h} stroke="#38bdf8" strokeDasharray="4,3" strokeWidth={1} />
      <circle cx={xTop} cy={yTop} r={4} fill="#38bdf8" />
      <text x={xTop + 5} y={yTop - 4} fill="#38bdf8" fontSize={9}>h_max</text>
      {/* v0 arrow */}
      <line x1={pad.left} y1={pad.top + h} x2={pad.left + 18} y2={pad.top + h - 12} stroke="#34d399" strokeWidth={2} markerEnd="url(#arrowG)" />
      <text x={pad.left + 5} y={pad.top + h - 16} fill="#34d399" fontSize={8}>v₀</text>
      <text x={pad.left + 10} y={pad.top + h - 4} fill="#64748b" fontSize={8}>α={angle_deg}°</text>
      <text x={pad.left + w / 2} y={height - 4} fill="#64748b" fontSize={10} textAnchor="middle">x (m)</text>
      <text x={12} y={pad.top + h / 2} fill="#64748b" fontSize={10} textAnchor="middle" transform={`rotate(-90, 12, ${pad.top + h / 2})`}>y (m)</text>
    </svg>
  );
}

// ─── Cooling curve T(t) ──────────────────────────────────────────────────────
function CoolingCurve({ T0 = 80, Text = 20, tau = 15 }) {
  const width = 320; const height = 200;
  const pad = { top: 20, right: 20, bottom: 40, left: 50 };
  const w = width - pad.left - pad.right; const h = height - pad.top - pad.bottom;
  const tMax = 5 * tau;
  const pts = [];
  for (let i = 0; i <= 80; i++) { const t = (i / 80) * tMax; pts.push({ t, T: Text + (T0 - Text) * Math.exp(-t / tau) }); }
  const toX = t => pad.left + (t / tMax) * w;
  const toY = T => pad.top + (1 - (T - Text) / (T0 - Text)) * h;
  const pathD = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.t)},${toY(p.T)}`).join(' ');
  const tauX = toX(tau); const tauT = Text + (T0 - Text) * Math.exp(-1); const tauY = toY(tauT);
  return (
    <svg width={width} height={height} style={{ fontFamily: 'JetBrains Mono, monospace', overflow: 'visible' }}>
      <line x1={pad.left} y1={pad.top} x2={pad.left} y2={pad.top + h} stroke="#475569" strokeWidth={1.5} />
      <line x1={pad.left} y1={pad.top + h} x2={pad.left + w} y2={pad.top + h} stroke="#475569" strokeWidth={1.5} />
      {/* Asymptote Text */}
      <line x1={pad.left} y1={pad.top + h} x2={pad.left + w} y2={pad.top + h} stroke="#38bdf8" strokeDasharray="5,3" strokeWidth={1} />
      <text x={pad.left + w + 3} y={pad.top + h + 4} fill="#38bdf8" fontSize={9}>T_ext = {Text}°C</text>
      <path d={pathD} fill="none" stroke="#fb923c" strokeWidth={2.5} />
      {/* Tangent at origin */}
      <line x1={pad.left} y1={pad.top} x2={tauX} y2={pad.top + h} stroke="#f472b6" strokeDasharray="4,3" strokeWidth={1.5} />
      {/* τ */}
      <line x1={tauX} y1={tauY} x2={tauX} y2={pad.top + h} stroke="#a78bfa" strokeDasharray="3,2" strokeWidth={1.2} />
      <line x1={pad.left} y1={tauY} x2={tauX} y2={tauY} stroke="#a78bfa" strokeDasharray="3,2" strokeWidth={1.2} />
      <circle cx={tauX} cy={tauY} r={4} fill="#a78bfa" />
      <text x={tauX} y={pad.top + h + 14} fill="#a78bfa" fontSize={9} textAnchor="middle">τ</text>
      <text x={pad.left - 4} y={tauY + 4} fill="#a78bfa" fontSize={9} textAnchor="end">{tauT.toFixed(0)}°C</text>
      <text x={pad.left + 4} y={pad.top + 14} fill="#fb923c" fontSize={9}>T₀ = {T0}°C</text>
      <text x={pad.left + w / 2} y={height - 4} fill="#64748b" fontSize={10} textAnchor="middle">t (s)</text>
      <text x={12} y={pad.top + h / 2} fill="#64748b" fontSize={10} textAnchor="middle" transform={`rotate(-90, 12, ${pad.top + h / 2})`}>T (°C)</text>
    </svg>
  );
}

// ─── Young fringes ────────────────────────────────────────────────────────────
function YoungFringes({ n_fringes = 7, i_mm = 2 }) {
  const width = 320; const height = 130;
  const pad = { top: 20, right: 20, bottom: 40, left: 30 };
  const w = width - pad.left - pad.right; const h = height - pad.top - pad.bottom - 10;
  const fringe_w = w / (n_fringes + 0.5);
  return (
    <svg width={width} height={height} style={{ fontFamily: 'JetBrains Mono, monospace' }}>
      {/* Screen */}
      <rect x={pad.left} y={pad.top} width={w} height={h} fill="rgba(0,0,0,0.5)" rx={4} />
      {/* Fringes */}
      {Array.from({ length: n_fringes }).map((_, idx) => {
        const x = pad.left + (idx + 0.25) * fringe_w;
        const isCentral = idx === Math.floor(n_fringes / 2);
        return (
          <rect key={idx} x={x} y={pad.top + 2} width={fringe_w * 0.55} height={h - 4}
            fill={isCentral ? 'rgba(255,255,200,0.95)' : 'rgba(255,240,150,0.65)'}
            rx={2}
          />
        );
      })}
      {/* i annotation */}
      {(() => {
        const cx = Math.floor(n_fringes / 2);
        return (<>
          <line x1={pad.left + (cx + 0.25) * fringe_w + fringe_w * 0.55} y1={pad.top + h + 5} x2={pad.left + (cx + 1 + 0.25) * fringe_w} y2={pad.top + h + 5} stroke="#a78bfa" strokeWidth={1.5} />
          <line x1={pad.left + (cx + 0.25) * fringe_w + fringe_w * 0.55} y1={pad.top + h + 2} x2={pad.left + (cx + 0.25) * fringe_w + fringe_w * 0.55} y2={pad.top + h + 8} stroke="#a78bfa" strokeWidth={1} />
          <line x1={pad.left + (cx + 1 + 0.25) * fringe_w} y1={pad.top + h + 2} x2={pad.left + (cx + 1 + 0.25) * fringe_w} y2={pad.top + h + 8} stroke="#a78bfa" strokeWidth={1} />
          <text x={pad.left + (cx + 0.75 + 0.25) * fringe_w} y={pad.top + h + 20} fill="#a78bfa" fontSize={9} textAnchor="middle">i = {i_mm} mm</text>
        </>);
      })()}
      <text x={pad.left + w / 2} y={pad.top + h + 35} fill="#64748b" fontSize={9} textAnchor="middle">Franges d'interférence (trous de Young)</text>
    </svg>
  );
}

// ─── Kepler orbit ─────────────────────────────────────────────────────────────
function KeplerOrbit({ label = 'Orbite elliptique' }) {
  const width = 320; const height = 200;
  const cx = 160; const cy = 100; const a = 100; const b = 65; const c = Math.sqrt(a * a - b * b);
  const periX = cx - a + c; const aphX = cx + a - c + a; // approx
  return (
    <svg width={width} height={height} style={{ fontFamily: 'JetBrains Mono, monospace' }}>
      {/* Orbit ellipse */}
      <ellipse cx={cx} cy={cy} rx={a} ry={b} fill="none" stroke="#38bdf8" strokeWidth={2} strokeDasharray="6,3" />
      {/* Sun at focus */}
      <circle cx={cx - c} cy={cy} r={7} fill="#fbbf24" />
      <text x={cx - c} y={cy + 18} fill="#fbbf24" fontSize={9} textAnchor="middle">Astre central</text>
      {/* Planet */}
      <circle cx={cx + a} cy={cy} r={5} fill="#38bdf8" />
      <text x={cx + a + 8} y={cy + 4} fill="#38bdf8" fontSize={9}>Planète</text>
      {/* Perihelion / Aphelion */}
      <text x={cx - a + 2} y={cy + 14} fill="#f87171" fontSize={9}>Périhélie</text>
      <text x={cx + a - 45} y={cy + 14} fill="#34d399" fontSize={9}>Aphélie</text>
      {/* Semi-major axis */}
      <line x1={cx - c} y1={cy} x2={cx + a} y2={cy} stroke="#a78bfa" strokeWidth={1.5} strokeDasharray="4,2" />
      <text x={cx + (a - c) / 2} y={cy - 8} fill="#a78bfa" fontSize={9} textAnchor="middle">a</text>
      {/* Sweep areas annotation */}
      <path d={`M${cx - c},${cy} L${cx + 30},${cy - 55} L${cx + 65},${cy - 25} Z`} fill="rgba(52,211,153,0.2)" stroke="#34d399" strokeWidth={1} />
      <path d={`M${cx - c},${cy} L${cx - 95},${cy - 18} L${cx - 100},${cy + 18} Z`} fill="rgba(52,211,153,0.2)" stroke="#34d399" strokeWidth={1} />
      <text x={cx - 100} y={cy + 55} fill="#34d399" fontSize={8}>Aires égales (2ème loi)</text>
    </svg>
  );
}

// ─── Bernoulli venturi ────────────────────────────────────────────────────────
function BernoulliVenturi() {
  const width = 320; const height = 160;
  return (
    <svg width={width} height={height} style={{ fontFamily: 'JetBrains Mono, monospace' }}>
      {/* Tube */}
      <path d="M10,55 L100,55 L130,75 L190,75 L220,55 L310,55" fill="none" stroke="#38bdf8" strokeWidth={2} />
      <path d="M10,105 L100,105 L130,85 L190,85 L220,105 L310,105" fill="none" stroke="#38bdf8" strokeWidth={2} />
      <rect x={10} y={55} width={2} height={50} fill="#38bdf8" />
      <rect x={308} y={55} width={2} height={50} fill="#38bdf8" />
      {/* Flow arrows */}
      {[65, 75, 85].map(y => (
        <line key={y} x1={20} y1={y} x2={95} y2={y} stroke="rgba(56,189,248,0.6)" strokeWidth={1.5} markerEnd="url(#arrowB)" />
      ))}
      {[78, 80, 82].map(y => (
        <line key={y} x1={140} y1={y} x2={185} y2={y} stroke="rgba(56,189,248,0.9)" strokeWidth={2} markerEnd="url(#arrowB)" />
      ))}
      {/* Labels */}
      <text x={55} y={50} fill="#38bdf8" fontSize={9} textAnchor="middle">v₁, S₁, P₁</text>
      <text x={160} y={72} fill="#fbbf24" fontSize={9} textAnchor="middle">v₂↑, S₂↓</text>
      <text x={160} y={100} fill="#f87171" fontSize={9} textAnchor="middle">P₂ ↓</text>
      <text x={265} y={50} fill="#38bdf8" fontSize={9} textAnchor="middle">v₁, P₁</text>
      {/* Bernoulli */}
      <text x={160} y={140} fill="#64748b" fontSize={9} textAnchor="middle">P + ½ρv² + ρgz = cste</text>
      <text x={160} y={152} fill="#a78bfa" fontSize={9} textAnchor="middle">v ↑ → P ↓ (Effet Venturi)</text>
    </svg>
  );
}

// ─── Energy levels hydrogen ───────────────────────────────────────────────────
function EnergyLevels() {
  const width = 300; const height = 210;
  const levels = [
    { n: '∞', E: '0',     y: 15,  color: '#94a3b8' },
    { n: '4', E: '−0,85', y: 60,  color: '#fb923c' },
    { n: '3', E: '−1,51', y: 100, color: '#fbbf24' },
    { n: '2', E: '−3,40', y: 140, color: '#38bdf8' },
    { n: '1', E: '−13,6', y: 195, color: '#a78bfa' },
  ];
  return (
    <svg width={width} height={height} style={{ fontFamily: 'JetBrains Mono, monospace' }}>
      <line x1={45} y1={210} x2={45} y2={5} stroke="#64748b" strokeWidth={1.5} />
      <text x={20} y={10} fontSize={8} fill="#94a3b8" transform="rotate(-90,20,10)">E (eV)</text>
      {levels.map(({ n, E, y, color }) => (
        <g key={n}>
          <line x1={50} y1={y} x2={220} y2={y} stroke={color} strokeWidth={n === '1' ? 2.5 : 1.8} />
          <text x={46} y={y + 3} fontSize={8} fill={color} textAnchor="end">{E}</text>
          <text x={224} y={y + 4} fontSize={9} fill={color}>n = {n}</text>
        </g>
      ))}
      {/* Transition arrow absorption */}
      <line x1={130} y1={195} x2={130} y2={140} stroke="#34d399" strokeWidth={2} markerEnd="url(#arrowG)" />
      <text x={140} y={170} fontSize={8} fill="#34d399">Absorption</text>
      {/* Transition emission */}
      <line x1={165} y1={100} x2={165} y2={140} stroke="#f87171" strokeWidth={2} markerEnd="url(#arrowR)" />
      <text x={175} y={120} fontSize={8} fill="#f87171">Émission</text>
      <text x={175} y={130} fontSize={8} fill="#fbbf24">hν = ΔE</text>
      <text x={65} y={75} fontSize={7.5} fill="#64748b">// (coupure échelle)</text>
    </svg>
  );
}

// ─── Diffraction pattern ──────────────────────────────────────────────────────
function DiffractionPattern({ a_um = 0.1, lambda_nm = 500 }) {
  const width = 320; const height = 150;
  const pad = { top: 20, right: 15, bottom: 30, left: 15 };
  const w = width - pad.left - pad.right;
  const h = height - pad.top - pad.bottom;
  const cx = pad.left + w / 2;
  // sinc² pattern
  const intensity = x => {
    const u = x === 0 ? 0.0001 : x;
    return Math.pow(Math.sin(u) / u, 2);
  };
  const xMax = 3 * Math.PI;
  const pts = [];
  for (let i = 0; i <= 100; i++) {
    const xVal = (i / 100) * 2 * xMax - xMax;
    pts.push({ x: pad.left + ((xVal + xMax) / (2 * xMax)) * w, y: pad.top + (1 - intensity(xVal)) * h });
  }
  const pathD = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ');
  return (
    <svg width={width} height={height} style={{ fontFamily: 'JetBrains Mono, monospace' }}>
      <rect x={pad.left} y={pad.top} width={w} height={h} fill="rgba(0,0,0,0.4)" rx={4} />
      <path d={pathD} fill="rgba(255,220,100,0.4)" stroke="#fbbf24" strokeWidth={2} />
      {/* Central fringe highlight */}
      <rect x={cx - w * 0.16} y={pad.top + 2} width={w * 0.32} height={h - 4} fill="rgba(255,220,50,0.2)" />
      <text x={cx} y={pad.top + h + 18} fill="#fbbf24" fontSize={9} textAnchor="middle">Tache centrale (largeur = 2Dλ/a)</text>
      <text x={pad.left + 5} y={pad.top + h + 18} fill="#f87171" fontSize={8}>1ère ext.</text>
      <text x={pad.left + w - 40} y={pad.top + h + 18} fill="#f87171" fontSize={8}>1ère ext.</text>
      <line x1={cx - w * 0.16} y1={pad.top + h + 4} x2={cx - w * 0.16} y2={pad.top + h + 8} stroke="#f87171" strokeWidth={1} />
      <line x1={cx + w * 0.16} y1={pad.top + h + 4} x2={cx + w * 0.16} y2={pad.top + h + 8} stroke="#f87171" strokeWidth={1} />
    </svg>
  );
}

const GRAPH_RENDERERS = {
  exponential_decay: ExponentialDecayGraph,
  ln_decay: LnDecayGraph,
  equilibrium_advance: EquilibriumAdvanceGraph,
  predominance_diagram: PredominanceDiagram,
  titration_curve: TitrationCurve,
  conductimetric_curve: ConductimetricCurve,
  rc_charge: RCChargeCurve,
  rc_discharge: RCDischargeCurve,
  radioactive_decay: RadioactiveDecay,
  parabolic_trajectory: ParabolicTrajectory,
  cooling_curve: CoolingCurve,
  young_fringes: YoungFringes,
  kepler_orbit: KeplerOrbit,
  bernoulli_venturi: BernoulliVenturi,
  energy_levels: EnergyLevels,
  diffraction_pattern: DiffractionPattern,
};

export default function QuizGraph({ graphData }) {
  if (!graphData) return null;
  const Renderer = GRAPH_RENDERERS[graphData.type];
  if (!Renderer) return null;
  return (
    <div className="my-3 flex justify-center">
      <div className="rounded-xl p-3 inline-block" style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(200,144,47,0.2)' }}>
        <Renderer {...graphData} />
      </div>
    </div>
  );
}