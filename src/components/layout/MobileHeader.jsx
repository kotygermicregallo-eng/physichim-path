import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MobileHeader({ title, subtitle, onBack }) {
  const navigate = useNavigate();
  const handleBack = onBack || (() => navigate(-1));

  return (
    <div
      className="md:hidden sticky top-0 z-40 flex items-center gap-3 px-4 py-3"
      style={{
        background: 'rgba(10,12,34,0.92)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(79,209,197,0.12)',
        paddingTop: 'calc(env(safe-area-inset-top) + 0.75rem)',
      }}>
      <button
        onClick={handleBack}
        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 select-none glass"
        style={{ border: '1px solid rgba(79,209,197,0.25)', color: '#4fd1c5', WebkitUserSelect: 'none', userSelect: 'none' }}>
        ←
      </button>
      <div className="min-w-0">
        <div className="text-sm font-bold truncate" style={{ color: '#e2e8f0', fontFamily: 'Space Grotesk, sans-serif' }}>
          {title}
        </div>
        {subtitle && (
          <div className="text-[10px] truncate" style={{ color: '#64748b', fontFamily: 'JetBrains Mono, monospace' }}>
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
}