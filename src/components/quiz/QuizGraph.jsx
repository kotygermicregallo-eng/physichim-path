// QuizGraph — renders inline SVG graphs for quiz questions
import React, { useMemo } from 'react';

// Exponential decay [A](t) = A0 * e^(-k*t)
function ExponentialDecayGraph({ A0 = 1, k = 0.1, xLabel = 't (s)', yLabel = '[A] (mol/L)', width = 320, height = 200 }) {
  const pad = { top: 20, right: 20, bottom: 40, left: 50 };
  const w = width - pad.left - pad.right;
  const h = height - pad.top - pad.bottom;
  const tMax = Math.ceil(5 / k);
  const t12 = Math.log(2) / k;

  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 80; i++) {
      const t = (i / 80) * tMax;
      const a = A0 * Math.exp(-k * t);
      pts.push({ t, a });
    }
    return pts;
  }, [A0, k, tMax]);

  const toX = t => pad.left + (t / tMax) * w;
  const toY = a => pad.top + (1 - a / A0) * h;

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.t)},${toY(p.a)}`).join(' ');

  const t12x = toX(t12);
  const halfY = toY(A0 / 2);

  return (
    <svg width={width} height={height} style={{ fontFamily: 'JetBrains Mono, monospace', overflow: 'visible' }}>
      {/* Axes */}
      <line x1={pad.left} y1={pad.top} x2={pad.left} y2={pad.top + h} stroke="#475569" strokeWidth={1.5} />
      <line x1={pad.left} y1={pad.top + h} x2={pad.left + w} y2={pad.top + h} stroke="#475569" strokeWidth={1.5} />

      {/* Gridlines */}
      {[0.25, 0.5, 0.75].map(f => (
        <line key={f} x1={pad.left} y1={pad.top + f * h} x2={pad.left + w} y2={pad.top + f * h} stroke="#1e293b" strokeDasharray="4,3" />
      ))}

      {/* Curve */}
      <path d={pathD} fill="none" stroke="#c8902f" strokeWidth={2.5} />

      {/* A0 label */}
      <circle cx={pad.left} cy={pad.top} r={3} fill="#38bdf8" />
      <text x={pad.left + 6} y={pad.top + 4} fill="#38bdf8" fontSize={10}>[A]₀ = {A0}</text>

      {/* t½ construction */}
      <line x1={pad.left} y1={halfY} x2={t12x} y2={halfY} stroke="#34d399" strokeDasharray="4,3" strokeWidth={1.2} />
      <line x1={t12x} y1={halfY} x2={t12x} y2={pad.top + h} stroke="#34d399" strokeDasharray="4,3" strokeWidth={1.2} />
      <circle cx={t12x} cy={halfY} r={4} fill="#34d399" />
      <text x={t12x + 4} y={halfY - 5} fill="#34d399" fontSize={9}>t½</text>
      <text x={pad.left - 6} y={halfY + 4} fill="#34d399" fontSize={9} textAnchor="end">[A]₀/2</text>

      {/* Axis labels */}
      <text x={pad.left + w / 2} y={height - 4} fill="#64748b" fontSize={10} textAnchor="middle">{xLabel}</text>
      <text x={12} y={pad.top + h / 2} fill="#64748b" fontSize={10} textAnchor="middle" transform={`rotate(-90, 12, ${pad.top + h / 2})`}>{yLabel}</text>

      {/* Tick values */}
      <text x={pad.left - 4} y={pad.top + 4} fill="#94a3b8" fontSize={9} textAnchor="end">{A0}</text>
      <text x={pad.left - 4} y={pad.top + h + 4} fill="#94a3b8" fontSize={9} textAnchor="end">0</text>
    </svg>
  );
}

// Equilibrium advance x(t) approaching x_eq
function EquilibriumAdvanceGraph({ xMax = 1, tau = 0.6, xLabel = 't (s)', yLabel = 'x (mol)' }) {
  const width = 320; const height = 200;
  const pad = { top: 20, right: 20, bottom: 40, left: 50 };
  const w = width - pad.left - pad.right;
  const h = height - pad.top - pad.bottom;
  const xEq = xMax * tau;
  const k = 3 / 40;

  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 80; i++) {
      const t = (i / 80) * 50;
      const x = xEq * (1 - Math.exp(-k * t));
      pts.push({ t, x });
    }
    return pts;
  }, [xEq, k]);

  const toX = t => pad.left + (t / 50) * w;
  const toY = x => pad.top + (1 - x / xMax) * h;
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.t)},${toY(p.x)}`).join(' ');

  return (
    <svg width={width} height={height} style={{ fontFamily: 'JetBrains Mono, monospace', overflow: 'visible' }}>
      <line x1={pad.left} y1={pad.top} x2={pad.left} y2={pad.top + h} stroke="#475569" strokeWidth={1.5} />
      <line x1={pad.left} y1={pad.top + h} x2={pad.left + w} y2={pad.top + h} stroke="#475569" strokeWidth={1.5} />
      {/* x_max dashed */}
      <line x1={pad.left} y1={pad.top} x2={pad.left + w} y2={pad.top} stroke="#f87171" strokeDasharray="5,4" strokeWidth={1} />
      <text x={pad.left + w + 2} y={pad.top + 4} fill="#f87171" fontSize={9}>x_max</text>
      {/* x_eq line */}
      <line x1={pad.left} y1={toY(xEq)} x2={pad.left + w} y2={toY(xEq)} stroke="#a78bfa" strokeDasharray="5,4" strokeWidth={1} />
      <text x={pad.left + w + 2} y={toY(xEq) + 4} fill="#a78bfa" fontSize={9}>x_eq</text>
      <path d={pathD} fill="none" stroke="#c8902f" strokeWidth={2.5} />
      <text x={pad.left + w / 2} y={height - 4} fill="#64748b" fontSize={10} textAnchor="middle">{xLabel}</text>
      <text x={12} y={pad.top + h / 2} fill="#64748b" fontSize={10} textAnchor="middle" transform={`rotate(-90, 12, ${pad.top + h / 2})`}>{yLabel}</text>
    </svg>
  );
}

// Predominance diagram
function PredominanceDiagram({ pKa = 4.8, acidName = 'AH', baseName = 'A⁻' }) {
  const width = 320; const height = 100;
  const pad = { left: 30, right: 30, top: 20, bottom: 30 };
  const w = width - pad.left - pad.right;
  const pH_min = 0; const pH_max = 14;
  const pKaX = pad.left + ((pKa - pH_min) / (pH_max - pH_min)) * w;

  return (
    <svg width={width} height={height} style={{ fontFamily: 'JetBrains Mono, monospace' }}>
      {/* Bar */}
      <rect x={pad.left} y={35} width={(pKaX - pad.left)} height={22} fill="rgba(248,113,113,0.25)" stroke="#f87171" strokeWidth={1} rx={4} />
      <rect x={pKaX} y={35} width={(pad.left + w - pKaX)} height={22} fill="rgba(52,211,153,0.2)" stroke="#34d399" strokeWidth={1} rx={4} />
      <text x={(pad.left + pKaX) / 2} y={50} fill="#f87171" fontSize={11} textAnchor="middle" fontWeight={600}>{acidName}</text>
      <text x={(pKaX + pad.left + w) / 2} y={50} fill="#34d399" fontSize={11} textAnchor="middle" fontWeight={600}>{baseName}</text>
      {/* pKa marker */}
      <line x1={pKaX} y1={30} x2={pKaX} y2={62} stroke="#fbbf24" strokeWidth={2} />
      <text x={pKaX} y={25} fill="#fbbf24" fontSize={10} textAnchor="middle">pKa = {pKa}</text>
      {/* pH axis */}
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

// Titration curve
function TitrationCurve({ isAcidBase = true }) {
  const width = 320; const height = 200;
  const pad = { top: 20, right: 20, bottom: 40, left: 45 };
  const w = width - pad.left - pad.right;
  const h = height - pad.top - pad.bottom;
  const VE = 20;
  const VMax = 35;

  const pH = (V) => {
    if (V < VE - 2) return 2 + (V / (VE - 2)) * 4;
    if (V < VE + 2) return 6 + ((V - (VE - 2)) / 4) * 6;
    return 12 + ((V - (VE + 2)) / (VMax - VE - 2)) * 1;
  };

  const pts = [];
  for (let i = 0; i <= 70; i++) {
    const V = (i / 70) * VMax;
    pts.push({ V, pH: Math.min(13, pH(V)) });
  }

  const toX = V => pad.left + (V / VMax) * w;
  const toY = pH => pad.top + (1 - (pH - 1) / 12) * h;
  const pathD = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.V)},${toY(p.pH)}`).join(' ');
  const VEx = toX(VE);
  const pHEq = pH(VE);

  return (
    <svg width={width} height={height} style={{ fontFamily: 'JetBrains Mono, monospace', overflow: 'visible' }}>
      <line x1={pad.left} y1={pad.top} x2={pad.left} y2={pad.top + h} stroke="#475569" strokeWidth={1.5} />
      <line x1={pad.left} y1={pad.top + h} x2={pad.left + w} y2={pad.top + h} stroke="#475569" strokeWidth={1.5} />
      {[3, 5, 7, 9, 11].map(pH => (
        <g key={pH}>
          <line x1={pad.left} y1={toY(pH)} x2={pad.left + w} y2={toY(pH)} stroke="#1e293b" strokeDasharray="3,3" />
          <text x={pad.left - 4} y={toY(pH) + 4} fill="#64748b" fontSize={8} textAnchor="end">{pH}</text>
        </g>
      ))}
      <path d={pathD} fill="none" stroke="#c8902f" strokeWidth={2.5} />
      {/* VE marker */}
      <line x1={VEx} y1={pad.top} x2={VEx} y2={pad.top + h} stroke="#34d399" strokeDasharray="4,3" strokeWidth={1.5} />
      <text x={VEx + 3} y={pad.top + 12} fill="#34d399" fontSize={9}>VE ≈ {VE} mL</text>
      {/* Equivalence dot */}
      <circle cx={VEx} cy={toY(pHEq)} r={5} fill="#34d399" />
      {/* Axis labels */}
      <text x={pad.left + w / 2} y={height - 4} fill="#64748b" fontSize={10} textAnchor="middle">Volume versé (mL)</text>
      <text x={10} y={pad.top + h / 2} fill="#64748b" fontSize={10} textAnchor="middle" transform={`rotate(-90, 10, ${pad.top + h / 2})`}>pH</text>
      {/* pH=7 line */}
      <line x1={pad.left} y1={toY(7)} x2={pad.left + w} y2={toY(7)} stroke="#fbbf24" strokeDasharray="3,3" strokeWidth={0.8} />
      <text x={pad.left - 4} y={toY(7) + 4} fill="#fbbf24" fontSize={8} textAnchor="end">7</text>
    </svg>
  );
}

const GRAPH_RENDERERS = {
  exponential_decay: ExponentialDecayGraph,
  equilibrium_advance: EquilibriumAdvanceGraph,
  predominance_diagram: PredominanceDiagram,
  titration_curve: TitrationCurve,
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