import React from 'react';
import Math from './Math';

/**
 * FormulaBlock — affiche une formule KaTeX en mode display (grande),
 * avec titre, description et couleur d'accentuation.
 *
 * Props:
 *  - expr    : string LaTeX
 *  - title   : titre au-dessus (optionnel)
 *  - desc    : description sous la formule (optionnel)
 *  - color   : couleur hex d'accentuation (défaut #c8902f)
 *  - compact : bool — padding réduit
 */
export default function FormulaBlock({ expr, title, desc, color = '#c8902f', compact = false }) {
  return (
    <div
      className={compact ? 'rounded-lg px-3 py-2' : 'rounded-xl px-4 py-3'}
      style={{
        background: `${color}0d`,
        border: `1px solid ${color}30`,
        borderLeft: `3px solid ${color}`,
      }}
    >
      {title && (
        <div className="text-xs font-bold mb-2" style={{ color, fontFamily: 'Inter, sans-serif' }}>
          {title}
        </div>
      )}
      <div className="overflow-x-auto" style={{ textAlign: 'center' }}>
        <Math expr={expr} display={true} />
      </div>
      {desc && (
        <div className="text-xs mt-2" style={{ color: '#64748b', fontFamily: 'Inter, sans-serif' }}>
          {desc}
        </div>
      )}
    </div>
  );
}

/**
 * InlineF — formule KaTeX inline, petit format
 */
export function InlineF({ e }) {
  return <Math expr={e} display={false} />;
}