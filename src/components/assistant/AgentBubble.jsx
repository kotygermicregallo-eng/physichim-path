import React from 'react';
import ReactMarkdown from 'react-markdown';
import Math from '../physchim/Math';

// Transforme les segments $...$ et $$...$$ d'un texte en composants KaTeX
function mathify(children) {
  return React.Children.map(children, (child) => {
    if (typeof child !== 'string') return child;
    const parts = child.split(/(\$\$[^$]+\$\$|\$[^$\n]+\$)/g);
    return parts.map((p, i) => {
      if (p.startsWith('$$') && p.endsWith('$$') && p.length > 4) {
        return <Math key={i} expr={p.slice(2, -2)} display />;
      }
      if (p.startsWith('$') && p.endsWith('$') && p.length > 2) {
        return <Math key={i} expr={p.slice(1, -1)} />;
      }
      return p;
    });
  });
}

export default function AgentBubble({ message }) {
  const isUser = message.role === 'user';
  if (!message.content) return null;

  return (
    <div className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="h-8 w-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
          style={{ background: 'linear-gradient(135deg, rgba(79,209,197,0.2), rgba(238,127,157,0.15))', border: '1px solid rgba(79,209,197,0.3)' }}>
          ⚛
        </div>
      )}
      <div
        className="max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed"
        style={isUser
          ? { background: 'linear-gradient(135deg, rgba(79,209,197,0.18), rgba(238,127,157,0.12))', border: '1px solid rgba(79,209,197,0.3)', color: '#e2e8f0' }
          : { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: '#cbd5e1' }}>
        {isUser ? (
          <p className="whitespace-pre-wrap">{message.content}</p>
        ) : (
          <ReactMarkdown
            className="prose prose-sm prose-invert max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
            components={{
              p: ({ children }) => <p className="my-1.5">{mathify(children)}</p>,
              li: ({ children }) => <li className="my-0.5">{mathify(children)}</li>,
              strong: ({ children }) => <strong>{mathify(children)}</strong>,
              em: ({ children }) => <em>{mathify(children)}</em>,
              h1: ({ children }) => <h1 className="text-base font-semibold my-2">{mathify(children)}</h1>,
              h2: ({ children }) => <h2 className="text-base font-semibold my-2">{mathify(children)}</h2>,
              h3: ({ children }) => <h3 className="text-sm font-semibold my-2">{mathify(children)}</h3>,
              ul: ({ children }) => <ul className="my-1.5 ml-4 list-disc">{children}</ul>,
              ol: ({ children }) => <ol className="my-1.5 ml-4 list-decimal">{children}</ol>,
              code: ({ children }) => <code className="px-1 py-0.5 rounded text-xs" style={{ background: 'rgba(79,209,197,0.12)', color: '#4fd1c5' }}>{children}</code>,
            }}>
            {message.content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
}