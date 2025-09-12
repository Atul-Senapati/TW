import React from "react";

/**
 * ChevronScroll.jsx
 * A React component that shows animated chevrons moving down (scroll indicator).
 * Props:
 *  - color: Chevron color (default: '#2c3e50')
 *  - size: Base size in rem (default: 0.6)
 *  - className / style: Custom wrapper styling
 */

export default function ChevronScroll({
  color = "#2c3e50",
  size = 0.6,
  className = "",
  style = {},
}) {
  const cssVars = {
    "--base": `${size}rem`,
    "--chevron-color": color,
  };

  return (
    <div
      className={`chevron_container ${className}`}
      style={{ ...style, ...cssVars }}
      aria-label="Scroll indicator"
      role="img"
    >
      <style>{`
        .chevron_container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100vh;
          position: relative;
        }

        .chevron {
          position: absolute;
          width: calc(var(--base) * 3.5);
          height: calc(var(--base) * 0.8);
          opacity: 0;
          transform: scale(0.3);
          animation: move-chevron 3s ease-out infinite;
        }

        .chevron:first-child {
          animation-delay: 1s;
        }
        .chevron:nth-child(2) {
          animation-delay: 2s;
        }

        .chevron::before,
        .chevron::after {
          content: '';
          position: absolute;
          top: 0;
          height: 100%;
          width: 50%;
          background: var(--chevron-color);
        }

        .chevron::before {
          left: 0;
          transform: skewY(30deg);
        }

        .chevron::after {
          right: 0;
          transform: skewY(-30deg);
        }

        @keyframes move-chevron {
          25% { opacity: 1; }
          33.3% {
            opacity: 1;
            transform: translateY(calc(var(--base) * 3.8));
          }
          66.6% {
            opacity: 1;
            transform: translateY(calc(var(--base) * 5.2));
          }
          100% {
            opacity: 0;
            transform: translateY(calc(var(--base) * 8)) scale(0.5);
          }
        }
      `}</style>

      <div className="chevron" />
      <div className="chevron" />
      <div className="chevron" />
    </div>
  );
}
