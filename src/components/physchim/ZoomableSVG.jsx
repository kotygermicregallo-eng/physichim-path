import React, { useState, useRef, useCallback } from 'react';
import { ZoomIn, ZoomOut, Maximize2, X } from 'lucide-react';

/**
 * ZoomableSVG — wraps any SVG with pinch/scroll zoom + fullscreen modal.
 * Props:
 *  - children : the <svg> element
 *  - caption  : optional legend text
 *  - maxHeight: max height in px (default 260)
 */
export default function ZoomableSVG({ children, caption, maxHeight = 260 }) {
  const [scale, setScale] = useState(1);
  const [fullscreen, setFullscreen] = useState(false);
  const containerRef = useRef(null);

  const zoom = useCallback((delta) => {
    setScale(prev => Math.min(3, Math.max(0.5, prev + delta)));
  }, []);

  const handleWheel = useCallback((e) => {
    e.preventDefault();
    zoom(e.deltaY < 0 ? 0.15 : -0.15);
  }, [zoom]);

  return (
    <>
      {/* Normal view */}
      <div className="relative group rounded-xl overflow-hidden"
        style={{ border: '1px solid rgba(200,144,47,0.1)', background: 'rgba(0,0,0,0.15)' }}>

        {/* Controls */}
        <div className="absolute top-2 right-2 z-10 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={() => zoom(0.2)}
            className="w-7 h-7 rounded-lg flex items-center justify-center transition-all"
            style={{ background: 'rgba(200,144,47,0.18)', border: '1px solid rgba(200,144,47,0.3)', color: '#c8902f' }}>
            <ZoomIn size={13} />
          </button>
          <button onClick={() => zoom(-0.2)}
            className="w-7 h-7 rounded-lg flex items-center justify-center transition-all"
            style={{ background: 'rgba(200,144,47,0.18)', border: '1px solid rgba(200,144,47,0.3)', color: '#c8902f' }}>
            <ZoomOut size={13} />
          </button>
          <button onClick={() => { setScale(1); setFullscreen(true); }}
            className="w-7 h-7 rounded-lg flex items-center justify-center transition-all"
            style={{ background: 'rgba(200,144,47,0.18)', border: '1px solid rgba(200,144,47,0.3)', color: '#c8902f' }}>
            <Maximize2 size={13} />
          </button>
        </div>

        {/* SVG container */}
        <div
          ref={containerRef}
          onWheel={handleWheel}
          className="overflow-auto cursor-grab active:cursor-grabbing"
          style={{ maxHeight, padding: '8px' }}
        >
          <div style={{ transform: `scale(${scale})`, transformOrigin: 'top center', transition: 'transform 0.15s ease' }}>
            {children}
          </div>
        </div>

        {/* Scale indicator */}
        {scale !== 1 && (
          <div className="absolute bottom-2 left-2 text-xs px-1.5 py-0.5 rounded"
            style={{ background: 'rgba(200,144,47,0.2)', color: '#c8902f', fontFamily: 'JetBrains Mono, monospace' }}>
            {Math.round(scale * 100)}%
          </div>
        )}
      </div>

      {/* Caption */}
      {caption && (
        <p className="text-xs mt-1.5 px-1" style={{ color: '#64748b', fontStyle: 'italic' }}>{caption}</p>
      )}

      {/* Fullscreen modal */}
      {fullscreen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(14,20,24,0.95)', backdropFilter: 'blur(8px)' }}
          onClick={() => setFullscreen(false)}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl overflow-auto"
            style={{ background: '#12191f', border: '1px solid rgba(200,144,47,0.25)', maxHeight: '90vh', padding: '2rem' }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setFullscreen(false)}
              className="absolute top-3 right-3 w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'rgba(248,113,113,0.15)', border: '1px solid rgba(248,113,113,0.3)', color: '#f87171' }}>
              <X size={15} />
            </button>
            <div className="flex items-center justify-center">
              {children}
            </div>
            {caption && (
              <p className="text-xs text-center mt-4" style={{ color: '#64748b', fontStyle: 'italic' }}>{caption}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}