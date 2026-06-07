import React from 'react';
import MermaidDiagram from './MermaidDiagram';
import Math from './Math';

// Parse inline $...$ LaTeX in a string
function InlineMath({ text }) {
  if (!text || !String(text).includes('$')) return <span>{text}</span>;
  const parts = String(text).split(/(\$[^$]+\$)/g);
  return (
    <span>
      {parts.map((part, i) =>
        part.startsWith('$') && part.endsWith('$')
          ? <Math key={i} expr={part.slice(1, -1)} />
          : <span key={i}>{part}</span>
      )}
    </span>
  );
}

function HtmlTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto rounded-xl" style={{ border: '1px solid rgba(56,189,248,0.2)' }}>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr style={{ background: 'rgba(56,189,248,0.12)', borderBottom: '1px solid rgba(56,189,248,0.3)' }}>
            {headers.map((h, i) => (
            <th key={i} className="px-4 py-2.5 text-left font-semibold" style={{ color: '#38bdf8', fontFamily: 'Inter, sans-serif' }}><InlineMath text={h} /></th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-2" style={{ color: j === 0 ? '#94a3b8' : '#e2e8f0', fontFamily: j === 0 ? 'JetBrains Mono, monospace' : 'Inter, sans-serif', fontSize: j === 0 ? '0.8rem' : '0.875rem' }}><InlineMath text={cell} /></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SchemaBlock({ schema }) {
  if (schema.type === 'mermaid') {
    return (
      <div>
        {schema.caption && <p className="text-xs mb-2" style={{ color: '#64748b' }}>{schema.caption}</p>}
        <MermaidDiagram chart={schema.chart} />
      </div>
    );
  }
  if (schema.type === 'table') {
    return (
      <div>
        {schema.caption && <p className="text-xs mb-2" style={{ color: '#64748b' }}>{schema.caption}</p>}
        <HtmlTable headers={schema.headers} rows={schema.rows} />
      </div>
    );
  }
  // fallback: plain text schema
  return <div className="schema-box">{schema.text || schema}</div>;
}