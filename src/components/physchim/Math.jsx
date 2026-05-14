import React, { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

export default function Math({ expr, display = false }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      try {
        katex.render(expr, ref.current, {
          displayMode: display,
          throwOnError: false,
          strict: false,
        });
      } catch (e) {
        ref.current.textContent = expr;
      }
    }
  }, [expr, display]);

  return <span ref={ref} />;
}