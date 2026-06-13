import React from 'react';
import { Drawer } from 'vaul';
import { chapters } from '../physchim/chaptersData';

export default function ChapterDrawer({ open, onOpenChange, activeId, onSelect }) {
  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-40" style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }} />
        <Drawer.Content
          className="fixed bottom-0 left-0 right-0 z-50 flex flex-col rounded-t-3xl outline-none"
          style={{
            background: 'rgba(10,12,34,0.98)',
            border: '1px solid rgba(79,209,197,0.2)',
            borderBottom: 'none',
            maxHeight: '80vh',
            paddingBottom: 'env(safe-area-inset-bottom)',
          }}>
          {/* Handle */}
          <div className="flex justify-center pt-3 pb-1 shrink-0">
            <div className="w-10 h-1 rounded-full" style={{ background: 'rgba(79,209,197,0.3)' }} />
          </div>
          <div className="px-4 pb-3 shrink-0" style={{ borderBottom: '1px solid rgba(79,209,197,0.1)' }}>
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#475569', fontFamily: 'JetBrains Mono, monospace' }}>
              ◢ Chapitres
            </p>
          </div>
          {/* Scrollable list */}
          <div className="overflow-y-auto flex-1 p-3">
            <div className="grid grid-cols-2 gap-2">
              {chapters.map((ch) => {
                const active = activeId === ch.id;
                return (
                  <button
                    key={ch.id}
                    onClick={() => { onSelect(ch); onOpenChange(false); }}
                    className="text-left px-3 py-2.5 rounded-xl transition-all select-none"
                    style={{
                      background: active ? 'linear-gradient(135deg, rgba(79,209,197,0.12), rgba(238,127,157,0.08))' : 'rgba(255,255,255,0.02)',
                      border: active ? '1px solid rgba(79,209,197,0.4)' : '1px solid rgba(255,255,255,0.06)',
                      WebkitUserSelect: 'none',
                      userSelect: 'none',
                    }}>
                    <div className="text-base mb-0.5">{ch.icon}</div>
                    <div className="text-[10px] font-semibold" style={{ color: active ? '#4fd1c5' : '#64748b', fontFamily: 'JetBrains Mono, monospace' }}>
                      Ch.{ch.id}
                    </div>
                    <div className="text-xs leading-tight" style={{ color: active ? '#e2e8f0' : '#475569' }}>{ch.title}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}