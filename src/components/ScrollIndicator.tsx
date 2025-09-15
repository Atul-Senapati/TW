import React from "react";

/**
 * MouseScroll.jsx
 * A small React component that reproduces the mouse + scrolling arrows animation.
 * Props:
 *  - color: arrow / outline color (default: '#fff')
 *  - bg: background color of the container (default: '#333')
 *  - size: scale of the widget (1 = original size)
 *  - style / className: additional wrapper style/className
 */

export default function MouseScroll({
  color = "#fff",
  bg = "#333",
  size = 1,
  className = "",
  style = {},
}) {
  const wrapperStyle = {
    background: bg,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "40px 0",
    // allow user scale
    transform: `scale(${size})`,
    transformOrigin: "top center",
    width: "100%",
    boxSizing: "border-box",
    ...style,
  };

  return (
    <div style={wrapperStyle} className={className} aria-hidden="false">
      {/* Scoped stylesheet so this component doesn't leak styles globally */}
      <style>{`
        .ms_wrapper * { box-sizing: border-box; }
        .ms_wrapper { width: 24px; }

        .ms_mouse_scroll { display: block; margin: 0 auto; width: 24px; height: 100px; }

        .ms_m_scroll_arrows {
          display: block;
          -ms-transform: rotate(45deg);
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
          border-right: 2px solid var(--ms-color);
          border-bottom: 2px solid var(--ms-color);
          margin: 0 0 3px 4px;
          width: 16px;
          height: 16px;
        }

        .ms_unu, .ms_doi, .ms_trei {
          animation: ms-mouse-scroll 1s infinite;
          -webkit-animation: ms-mouse-scroll 1s infinite;
          -moz-animation: ms-mouse-scroll 1s infinite;
          -o-animation: ms-mouse-scroll 1s infinite;
        }

        .ms_unu { animation-delay: .1s; -webkit-animation-delay: .1s; animation-direction: alternate; }
        .ms_doi { animation-delay: .2s; -webkit-animation-delay: .2s; animation-direction: alternate; margin-top: -6px; }
        .ms_trei { animation-delay: .3s; -webkit-animation-delay: .3s; animation-direction: alternate; margin-top: -6px; }

        .ms_mouse {
          height: 42px;
          width: 24px;
          border-radius: 14px;
          border: 2px solid var(--ms-color);
          position: relative;
        }

        .ms_wheel {
          height: 4px;
          width: 4px;
          display: block;
          margin: 5px auto;
          position: relative;
          border: 2px solid var(--ms-color);
          border-radius: 8px;
          animation: ms-mouse-wheel 0.6s linear infinite;
          -webkit-animation: ms-mouse-wheel 0.6s linear infinite;
          -moz-animation: ms-mouse-wheel 0.6s linear infinite;
          -o-animation: ms-mouse-wheel 0.6s linear infinite;
        }

        @keyframes ms-mouse-wheel {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(6px); }
        }

        @keyframes ms-mouse-scroll {
          0% { opacity: 0; }
          50% { opacity: .5; }
          100% { opacity: 1; }
        }

        /* small responsive tweak: keep the widget centered */
        @media (max-width: 320px) {
          .ms_wrapper { transform: scale(0.9); }
        }
      `}</style>

      <div
        className="ms_wrapper"
        style={{ ["--ms-color"]: color }}
        aria-label="Scroll indicator"
        role="img"
      >
        <div className="ms_mouse_scroll">
          <div className="ms_mouse">
            <div className="ms_wheel" />
          </div>
          <div style={{ marginTop: 8 }}>
            <span className="ms_m_scroll_arrows ms_unu" />
            <span className="ms_m_scroll_arrows ms_doi" />
            <span className="ms_m_scroll_arrows ms_trei" />
          </div>
        </div>
      </div>
    </div>
  );
}


 {
   /* <div className="absolute min-h-[300px] min-w-[380px] opacity-90 rounded-full blur-2xl bg-gradient-to-tr  from-amber-400 via-orange-300 to-yellow-400 top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2 z-0">
          {" "}rw frwfrew
        </div>
        <img
          src={"Starlight.svg"}
          className="absolute h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        />
        <div
          //   src={"Asset 1.svg"}
          className="absolute min-h-[250px] w-[390px] bg-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        >
          ewf
        </div>
        <img
          src={"Asset 1.svg"}
          className="absolute h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
        />
      </div> */
 }