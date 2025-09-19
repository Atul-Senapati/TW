"use client"
import React, { useEffect, useRef, useState } from "react";

// TicketWhizExtensionSection.jsx
// Single-file React + Tailwind component. Drop into your app.
// - Replace CHROME_WEB_STORE_URL with your real store link
// - Replace logo/svg assets as needed
// - Uses Tailwind utility classes (Tailwind must be configured in your project)

const CHROME_WEB_STORE_URL = "{CHROME_WEB_STORE_URL}";

export default function TicketWhizExtensionSection() {
  const [showToast, setShowToast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const installsRef = useRef(null);
  const yearsRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener && mq.addListener(handler);
    return () => {
      mq.removeEventListener && mq.removeEventListener("change", handler);
      mq.removeListener && mq.removeListener(handler);
    };
  }, []);

  // simple animated counters (respects reduced-motion)
  useEffect(() => {
    if (reducedMotion) return;
    let rafId;
    const animate = (el, from, to, ms = 900) => {
      if (!el) return;
      const start = performance.now();
      const step = (t) => {
        const p = Math.min(1, (t - start) / ms);
        const v = Math.floor(from + (to - from) * easeOutCubic(p));
        el.textContent = v + (to > 99 ? "+" : "");
        if (p < 1) rafId = requestAnimationFrame(step);
      };
      rafId = requestAnimationFrame(step);
    };
    animate(installsRef.current, 0, 500);
    animate(yearsRef.current, 0, 15);
    return () => cancelAnimationFrame(rafId);
  }, [reducedMotion]);

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function handleInstallClick() {
    // analytics hook - replace with your analytics call
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "extension_install_click",
        location: "hero",
      });
    } catch (e) {
      /*ignore*/
    }

    setShowToast(true);
    setTimeout(() => setShowToast(false), 2600);
    // link opens naturally (anchor) so don't prevent default
  }

  return (
    <section className="w-full bg-gradient-to-b from-[#0b0b0b] via-[#0f0f10] to-[#0b0b0b] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left - Mock browser + extension preview */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative" aria-hidden="true">
            {/* Glow behind mock */}
            <div
              className="absolute inset-0 -z-10 rounded-2xl blur-3xl opacity-60"
              style={{
                background:
                  "radial-gradient(600px 200px at 10% 40%, rgba(255,204,51,0.12), transparent)",
              }}
            />

            {/* Browser mock */}
            <div
              className="rounded-2xl overflow-hidden shadow-2xl border border-[#222] bg-[#050505]"
              style={{ width: 520, height: 320 }}
            >
              {/* Tab row */}
              <div className="flex items-center gap-3 px-4 py-3 bg-[#0c0c0c] border-b border-[#111]">
                <div className="w-3 h-3 rounded-full bg-[#c0392b]" />
                <div className="w-3 h-3 rounded-full bg-[#f39c12]" />
                <div className="w-3 h-3 rounded-full bg-[#2ecc71]" />

                <div className="flex-1 mx-4 rounded-md bg-[#0a0a0a] h-8 flex items-center px-3 text-[#9ca3af] text-sm">
                  https://example.com/search?q=concert
                </div>

                {/* extension icon */}
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shadow-inner"
                    style={{
                      background: "linear-gradient(180deg,#111,#0b0b0b)",
                    }}
                  >
                    {/* simple 't' mark */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="11" fill="#ffd54a" />
                      <path
                        d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4v3h-2v-3c0-1.1-.9-2-2-2s-2 .9-2 2v3H8v-3z"
                        fill="#0b0b0b"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content area: mini list of ticket matches */}
              <div className="p-6 h-[220px] overflow-hidden bg-black">
                <div className="grid grid-cols-1 gap-3">
                  <TicketRow
                    title="Coldplay - 2x Floor"
                    price="$220"
                    vendor="SeatMart"
                  />
                  <TicketRow
                    title="Adele - 1x Rear"
                    price="$160"
                    vendor="TixHub"
                  />
                  <TicketRow
                    title="Imagine Dragons - 3x GA"
                    price="$95"
                    vendor="StubSpot"
                  />
                </div>
              </div>
            </div>

            {/* subtle badge at bottom-left */}
            <div className="absolute -bottom-3 left-4 bg-[#111] border border-[#1c1c1c] px-3 py-2 rounded-full text-xs text-[#cbd5e1] shadow">
              Live preview
            </div>
          </div>
        </div>

        {/* Right - Copy, CTA, stats */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Smarter Browsing with{" "}
            <span className="text-[#ffd54a]">TicketWhiz Extension</span>
          </h3>
          <p className="mt-4 text-[#cbd5e1] max-w-xl">
            Download our free extension to discover ticket listings while you
            search. No need to open multiple tabs — we do the hard work.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a
              href={CHROME_WEB_STORE_URL}
              onClick={handleInstallClick}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-b from-[#ffffff] to-[#d7dbe0] text-black font-semibold shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-[#ffd54a]/30 transition-transform"
            >
              {/* Chrome badge svg */}
              <ChromeBadge className="w-5 h-5" />
              <span>Add to Chrome — Free</span>
            </a>

            <a
              href="#how-it-works"
              className="px-4 py-2 rounded-full bg-[#111] border border-[#222] text-[#e5e7eb] font-medium hover:bg-[#141414] focus:outline-none focus:ring-2 focus:ring-[#ffd54a]/20"
            >
              Learn more
            </a>
          </div>

          {/* Accessible toast */}
          <div aria-live="polite" className="mt-3">
            {showToast && (
              <div className="inline-block rounded-md bg-[#111] px-4 py-2 border border-[#222] text-sm text-[#ffd54a] shadow">
                Opening Chrome Web Store…
              </div>
            )}
          </div>

          {/* Trust / stats */}
          <div className="mt-10 grid grid-cols-2 gap-6 max-w-sm">
            <div className="flex flex-col">
              <div className="text-4xl font-extrabold" ref={installsRef}>
                {reducedMotion ? "500+" : "0"}
              </div>
              <div className="text-sm text-[#94a3b8]">Trusted brands</div>
            </div>

            <div className="flex flex-col border-l border-[#1f2937] pl-6">
              <div className="text-4xl font-extrabold" ref={yearsRef}>
                {reducedMotion ? "15+" : "0"}
              </div>
              <div className="text-sm text-[#94a3b8]">yrs expertise in AI</div>
            </div>
          </div>

          {/* microcopy */}
          <div className="mt-6 text-xs text-[#94a3b8] max-w-lg">
            No tracking. Minimal permissions. Rated <strong>4.8★</strong> on
            Chrome Web Store.
          </div>
        </div>
      </div>
    </section>
  );
}

export function TicketRow({ title, price, vendor }) {
  return (
    <div className="flex items-center justify-between gap-4 bg-[#070707] rounded-md p-3 border border-[#111]">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-md bg-gradient-to-b from-[#222] to-[#0b0b0b] flex items-center justify-center text-sm font-semibold text-[#ffd54a]">
          <img src={"Asset7.png"} className="w-3 opacity-70"/>
        </div>
        <div>
          <div className="text-sm font-semibold">{title}</div>
          <div className="text-xs text-[#94a3b8]">{vendor}</div>
        </div>
      </div>
      <div className="text-sm font-semibold text-[#e6e6e6]">{price}</div>
    </div>
  );
}

function ChromeBadge({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="24" cy="24" r="22" fill="#fff" />
      <path d="M24 24l11-6.5A17.5 17.5 0 0124 7" fill="#e33f3f" />
      <path d="M24 24L13 17.5A17.5 17.5 0 0111.5 24" fill="#f4b400" />
      <path d="M24 24l.2 13.5A17.5 17.5 0 0136 31" fill="#0f9d58" />
      <circle cx="24" cy="24" r="6" fill="#0b0b0b" />
    </svg>
  );
}
