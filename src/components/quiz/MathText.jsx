// MathText — renders a string with inline LaTeX ($...$) and block ($$...$$) support
import React from 'react';
import Math from '../physchim/Math';

export default function MathText({ text, className = '', style = {} }) {
  if (!text) return null;
  const str = String(text);

  // Split on $$...$$ first (display), then $...$  (inline)
  const parts = [];
  let remaining = str;
  let key = 0;

  // Regex: match $$ first, then $
  const re = /(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/g;
  let last = 0;
  let match;

  while ((match = re.exec(str)) !== null) {
    if (match.index > last) {
      parts.push(<span key={key++}>{str.slice(last, match.index)}</span>);
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
    parts.push(<span key={key++}>{str.slice(last)}</span>);
  }

  return (
    <span className={className} style={style}>
      {parts}
    </span>
  );
}