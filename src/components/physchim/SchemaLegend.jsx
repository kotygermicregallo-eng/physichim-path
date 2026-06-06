import React from 'react';

/**
 * SchemaLegend — légende compacte et harmonisée pour les SVG.
 *
 * Props:
 *  - items : [{ color, icon?, label, detail? }]
 *  - cols  : nb colonnes (défaut 2, md:4)
 *  - title : titre optionnel
 */
export default function SchemaLegend({ items, cols = 2, title }) {
  const gridClass = cols === 4
    ? 'grid grid-cols-2 md:grid-cols-4 gap-2'
    : cols === 3
      ? 'grid grid-cols-2 md:grid-cols-3 gap-2'
      : 'grid grid-cols-2 gap-2';

  return (
    <div className="mt-3">
      {title && (
        <div className="text-xs font-semibold mb-2 px-1"
          style={{ color: '#64748b', fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {title}
        </div>
      )}
      <div className={gridClass}>
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-2 rounded-xl px-2.5 py-2"
            style={{ background: `${item.color}0a`, border: `1px solid ${item.color}25` }}>
            {/* Colour swatch */}
            <div className="shrink-0 w-2.5 h-2.5 rounded-sm mt-0.5" style={{ background: item.color }} />
            <div className="min-w-0">
              {item.icon && <span className="mr-1">{item.icon}</span>}
              <span className="text-xs font-semibold" style={{ color: item.color }}>{item.label}</span>
              {item.detail && (
                <div className="text-xs mt-0.5" style={{ color: '#64748b' }}>{item.detail}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}