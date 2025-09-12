import React from "react";

// InfiniteHorizontalBrand.jsx
// Single-file React component using PNG logos, inline keyframes and a light-mode design.
// - Replace `images` array with your actual PNG paths or pass `images` as a prop
// - Duplicates items for seamless infinite scroll
// - Uses inline <style> for keyframes and edge mask so no tailwind.config edits are required

export default function InfiniteHorizontalBrandDark() {
  // sensible defaults — replace these paths with your real PNGs or pass `images` prop
  const defaultImages = [
    "slider.png",
    "slider1.png",
    "slider2.png",
    "slider3.png",
    "slider4.png",
    "slider6.png",
    "slider5.png",
  ];

  const logos =  defaultImages;
  const doubled = [...logos, ...logos];

  return (
    <div className="w-full py-8 bg-transparent">
      <style>{`
@keyframes infiniteScroll {
0% { transform: translateX(0); }
100% { transform: translateX(-50%); }
}


.infinite-scroll-track {
display: flex;
align-items: center;
gap: 1rem;
white-space: nowrap;
will-change: transform;
animation: infiniteScroll 25s linear infinite;
}


.brand-item {
display: inline-flex;
align-items: center;
justify-content: center;
padding: 0.5rem 1rem;
border-radius: 12px;
background: transparent;
flex-shrink: 0;
}


.brand-item img {
height: 30px; /* reduced height */
width: auto;
display: block;


object-fit: contain;
}


@media (prefers-reduced-motion: reduce) {
.infinite-scroll-track { animation: none; }
}
`}</style>

      <div
        className="w-full overflow-hidden"
        style={{
          backgroundColor: "transparent",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0px, black 96px, black calc(100% - 96px), transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0px, black 96px, black calc(100% - 96px), transparent 100%)",
        }}
      >
        <ul
          className="infinite-scroll-track"
          style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
        >
          {doubled.map((src, idx) => (
            <li
              key={idx}
              className="brand-item mx-4"
              aria-hidden={idx >= logos.length ? "true" : "false"}
            >
              <img
                src={src}
                alt={`brand-${idx % logos.length}`}
                className="opacity-90 grayscale-100 invert brightness-0"
              />
            </li>
          ))}
        </ul>
      </div>

      <span className="sr-only">Scrolling list of partner brand logos</span>
    </div>
  );
}
