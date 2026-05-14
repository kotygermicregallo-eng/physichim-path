import React, { useEffect, useRef, useState } from 'react';

let mermaidInitialized = false;

export default function MermaidDiagram({ chart }) {
  const ref = useRef(null);
  const [svg, setSvg] = useState('');
  const id = useRef(`mermaid-${Math.random().toString(36).slice(2)}`);

  useEffect(() => {
    let cancelled = false;
    async function render() {
      const mermaid = (await import('mermaid')).default;
      if (!mermaidInitialized) {
        mermaid.initialize({
          startOnLoad: false,
          theme: 'base',
          themeVariables: {
            primaryColor: '#1e293b',
            primaryTextColor: '#e2e8f0',
            primaryBorderColor: '#38bdf8',
            lineColor: '#38bdf8',
            secondaryColor: '#0f172a',
            tertiaryColor: '#1e293b',
            background: 'transparent',
            mainBkg: '#1e293b',
            nodeBorder: '#38bdf8',
            clusterBkg: '#0f172a',
            titleColor: '#38bdf8',
            edgeLabelBackground: '#1e293b',
            fontFamily: 'Inter, sans-serif',
          },
          flowchart: { curve: 'basis', htmlLabels: true },
        });
        mermaidInitialized = true;
      }
      try {
        const { svg: rendered } = await mermaid.render(id.current, chart);
        if (!cancelled) setSvg(rendered);
      } catch (e) {
        if (!cancelled) setSvg(`<pre style="color:#f87171;font-size:0.75rem">${e.message}</pre>`);
      }
    }
    render();
    return () => { cancelled = true; };
  }, [chart]);

  return (
    <div
      ref={ref}
      className="rounded-xl overflow-auto p-4"
      style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(56,189,248,0.2)', minHeight: '80px' }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}