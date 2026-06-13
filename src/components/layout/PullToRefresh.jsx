import React, { useRef, useState, useCallback } from 'react';

const THRESHOLD = 70;

export default function PullToRefresh({ onRefresh, children }) {
  const [pulling, setPulling] = useState(false);
  const [pullY, setPullY] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const startY = useRef(null);
  const containerRef = useRef(null);

  const handleTouchStart = useCallback((e) => {
    const el = containerRef.current;
    if (el && el.scrollTop === 0) {
      startY.current = e.touches[0].clientY;
    }
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (startY.current === null) return;
    const delta = e.touches[0].clientY - startY.current;
    if (delta > 0 && containerRef.current?.scrollTop === 0) {
      setPulling(true);
      setPullY(Math.min(delta * 0.5, THRESHOLD + 20));
    }
  }, []);

  const handleTouchEnd = useCallback(async () => {
    if (pullY >= THRESHOLD) {
      setRefreshing(true);
      setPullY(THRESHOLD * 0.6);
      await onRefresh?.();
      setRefreshing(false);
    }
    setPulling(false);
    setPullY(0);
    startY.current = null;
  }, [pullY, onRefresh]);

  const progress = Math.min(pullY / THRESHOLD, 1);

  return (
    <div
      ref={containerRef}
      className="overflow-y-auto flex-1"
      style={{ overscrollBehavior: 'none' }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}>
      {/* Pull indicator */}
      <div
        className="flex justify-center items-center transition-all duration-200 overflow-hidden"
        style={{ height: pulling || refreshing ? `${pullY}px` : '0px' }}>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{
            background: 'rgba(79,209,197,0.12)',
            border: '1px solid rgba(79,209,197,0.3)',
            transform: refreshing ? 'rotate(360deg)' : `rotate(${progress * 180}deg)`,
            transition: refreshing ? 'transform 0.6s linear infinite' : 'transform 0.1s',
            opacity: progress,
          }}>
          <span style={{ color: '#4fd1c5', fontSize: '14px' }}>{refreshing ? '↻' : '↓'}</span>
        </div>
      </div>
      {children}
    </div>
  );
}