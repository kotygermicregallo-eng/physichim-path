// MathText — renders a string with inline LaTeX ($...$) and block ($$...$$) support
// Also auto-converts common math patterns to LaTeX when no $ markers are present
import React from 'react';
import Math from '../physchim/Math';

// Convert a raw text segment (no $) that looks mathematical into LaTeX
function autoLatex(str) {
  // Patterns to auto-convert to LaTeX
  // e^(...) or e^-kt  →  e^{...}
  // ln(...) → \ln(...)
  // [X]₀ → [X]_0
  // superscripts: ⁻¹ → ^{-1}, etc.
  // subscripts: ₀ → _0, etc.
  let s = str;

  // Superscripts
  const supMap = { '⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9','⁺':'+','⁻':'-','ᵃ':'a','ˣ':'x' };
  // Subscripts
  const subMap = { '₀':'0','₁':'1','₂':'2','₃':'3','₄':'4','₅':'5','₆':'6','₇':'7','₈':'8','₉':'9' };

  // Group consecutive superscripts → ^{...}
  s = s.replace(/([⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ᵃˣ]+)/g, (m) => '^{' + m.split('').map(c => supMap[c] || c).join('') + '}');
  // Group consecutive subscripts → _{...}
  s = s.replace(/([₀₁₂₃₄₅₆₇₈₉]+)/g, (m) => '_{' + m.split('').map(c => subMap[c] || c).join('') + '}');

  // Fix e^{...} patterns that appear like e^(-kt) or e^{-1}
  s = s.replace(/\be\^/g, 'e^');

  // ln, log → \ln, \log
  s = s.replace(/\bln\b/g, '\\ln');
  s = s.replace(/\blog\b/g, '\\log');

  // × → \times
  s = s.replace(/×/g, '\\times');
  // · → \cdot
  s = s.replace(/·/g, '\\cdot');
  // → → \rightarrow
  s = s.replace(/→/g, '\\rightarrow');
  // ≈ → \approx
  s = s.replace(/≈/g, '\\approx');
  // ≤ → \leq, ≥ → \geq
  s = s.replace(/≤/g, '\\leq');
  s = s.replace(/≥/g, '\\geq');
  // Δ → \Delta
  s = s.replace(/Δ/g, '\\Delta ');
  // α → \alpha, β → \beta, etc.
  s = s.replace(/α/g, '\\alpha');
  s = s.replace(/β/g, '\\beta');
  s = s.replace(/λ/g, '\\lambda');
  s = s.replace(/τ/g, '\\tau');
  s = s.replace(/ν/g, '\\nu');
  s = s.replace(/π/g, '\\pi');
  s = s.replace(/σ/g, '\\sigma');
  s = s.replace(/ρ/g, '\\rho');
  s = s.replace(/φ/g, '\\varphi');
  s = s.replace(/ω/g, '\\omega');
  s = s.replace(/θ/g, '\\theta');
  // ½ → \frac{1}{2}
  s = s.replace(/½/g, '\\tfrac{1}{2}');
  // ∞ → \infty
  s = s.replace(/∞/g, '\\infty');

  return s;
}


// Split a raw (non-$) segment into sub-parts: pure-math tokens rendered via KaTeX,
// text tokens rendered as plain spans. We split on word-boundaries where math symbols appear.
function renderSegment(segment, baseKey) {
  // Split on Unicode math symbols to render them inline via KaTeX
  // Pattern: one or more math chars that should be auto-converted
  const tokenRe = /([⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ᵃˣ₀₁₂₃₄₅₆₇₈₉×·≈≤≥ΔαβλτνπσρφωθΠΣ½∞→]+)/g;
  const result = [];
  let last = 0;
  let k = baseKey;
  let m;
  while ((m = tokenRe.exec(segment)) !== null) {
    if (m.index > last) {
      result.push(<span key={k++}>{segment.slice(last, m.index)}</span>);
    }
    result.push(<Math key={k++} expr={autoLatex(m[0])} display={false} />);
    last = m.index + m[0].length;
  }
  if (last < segment.length) {
    result.push(<span key={k++}>{segment.slice(last)}</span>);
  }
  return result;
}

export default function MathText({ text, className = '', style = {} }) {
  if (!text) return null;
  const str = String(text);

  // Split on $$...$$ (display) and $...$ (inline) markers
  const re = /(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/g;
  const parts = [];
  let last = 0;
  let key = 0;
  let match;

  while ((match = re.exec(str)) !== null) {
    if (match.index > last) {
      const segment = str.slice(last, match.index);
      parts.push(...renderSegment(segment, key));
      key += 10;
    }
    const raw = match[0];
    if (raw.startsWith('$$')) {
      parts.push(<Math key={key++} expr={raw.slice(2, -2).trim()} display={true} />);
    } else {
      parts.push(<Math key={key++} expr={raw.slice(1, -1).trim()} display={false} />);
    }
    last = match.index + raw.length;
  }

  if (last < str.length) {
    parts.push(...renderSegment(str.slice(last), key));
  }

  return (
    <span className={className} style={style}>
      {parts}
    </span>
  );
}