"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sophie",
    title: "Concert Goer",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c4a0e?auto=format&fit=crop&w=200&q=80",
    quote:
      "Finding concert tickets used to be such a hassle, but TicketWhiz made it super easy! I booked front-row tickets to my favorite band's show in just a few clicks.",
  },
  {
    id: 2,
    name: "David",
    title: "Sports Enthusiast",
    avatar:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=200&q=80",
    quote:
      "TicketWhiz saved me time by aggregating ticket options from various marketplaces. I got great seats for the football match at a competitive price!",
  },
  {
    id: 3,
    name: "Priya",
    title: "Theater Lover",
    avatar:
      "https://images.unsplash.com/photo-1590080875044-92f3eb31450b?auto=format&fit=crop&w=200&q=80",
    quote:
      "I love watching plays, but booking tickets was always confusing. TicketWhiz made it seamless by showing all available shows and allowing easy booking.",
  },
  {
    id: 4,
    name: "Rohan",
    title: "Festival Attendee",
    avatar:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=200&q=80",
    quote:
      "Attending music festivals became effortless. I compared multiple ticket vendors on TicketWhiz and got the best deal without any worries.",
  },
  {
    id: 5,
    name: "Anjali",
    title: "Workshop Participant",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=80",
    quote:
      "TicketWhiz helped me find and book a creative writing workshop in minutes. The user-friendly interface made everything so simple!",
  },
  {
    id: 6,
    name: "Vikram",
    title: "Exhibition Visitor",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c4a0e?auto=format&fit=crop&w=200&q=80",
    quote:
      "I was able to easily browse and book tickets for the latest tech exhibition. TicketWhiz gave me multiple options from trusted marketplaces.",
  },
  {
    id: 7,
    name: "Neha",
    title: "Online Webinar Attendee",
    avatar:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=200&q=80",
    quote:
      "TicketWhiz helped me book tickets for a live webinar with industry experts. I loved the instant confirmation and hassle-free process.",
  },
  {
    id: 8,
    name: "Aditya",
    title: "Live Comedy Show Fan",
    avatar:
      "https://images.unsplash.com/photo-1590080875044-92f3eb31450b?auto=format&fit=crop&w=200&q=80",
    quote:
      "Booking tickets for a comedy night was never this easy. TicketWhiz gave me a clear view of available shows and quick booking options.",
  },
  {
    id: 9,
    name: "Pooja",
    title: "Cultural Event Explorer",
    avatar:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=200&q=80",
    quote:
      "From cultural exhibitions to local festivals, TicketWhiz always had ticket options from multiple vendors. It’s my go-to platform now!",
  },
];

// NOTE: This version adds infinite looping by cloning slides at the start/end.
// Strategy:
// - clones = 1 (prepend last, append first). The track contains: [last, ...originals, first]
// - Maintain `indexInTrack` state that points to an index in the *extended* array.
// - Start at `clones` (first real slide). When we advance into a cloned slide, we
//   animate as usual then immediately snap (without animation) to the corresponding
//   real slide index to create a seamless wrap.
// - We approximate the spring duration and snap after the animation completes using a small timeout.

export default function TestimonialsCarousel() {
  const clones = 1;
  const originals = TESTIMONIALS;
  const count = originals.length;

  // build extended array: [last, ...originals, first]
  const extended = [originals[count - 1], ...originals, originals[0]];
  const extendedCount = extended.length; // count + 2

  // indexInTrack points into `extended`. Start at `clones` (the first real slide)
  const [indexInTrack, setIndexInTrack] = useState(clones);
  // expose logical index for UI (0..count-1)
  const logicalIndex = (indexInTrack - clones + count) % count;

  const containerRef = useRef<any>(null);
  const slideRef = useRef<any>(null);
  const x = useMotionValue<any>(0);
  const autoplayRef = useRef<any>(null);
  const [isHover, setIsHover] = useState(false);

  // gap used in layout (keep in sync with DOM gap)
  const GAP = 24;

  // computeOffset expects an index in the extended array
  const computeOffset = useCallback(
    (i: any) => {
      const container = containerRef.current;
      const slide = slideRef.current;
      if (!container || !slide) return 0;

      const containerW = container.clientWidth;
      const slideW = slide.clientWidth;
      const center = (containerW - slideW) / 2;
      // i * (slideW + GAP) positions the i-th slide from the starting edge
      return -i * (slideW + GAP) + center;
    },
    [GAP]
  );

  // animate to target when indexInTrack changes
  useEffect(() => {
    const target = computeOffset(indexInTrack);

    // animate and then if we landed on a clone, snap to the correct real index
    const controls = animate(x, target, {
      type: "spring",
      stiffness: 120,
      damping: 18,
    });

    // If we moved into a cloned frame, schedule a snap to the corresponding real index
    // cloned at start -> index 0 corresponds to last clone (extend[0])
    // cloned at end -> index extendedCount - 1 corresponds to first clone (extend[last])
    const landedOnStartClone = indexInTrack === 0;
    const landedOnEndClone = indexInTrack === extendedCount - 1;

    if (landedOnStartClone || landedOnEndClone) {
      // approximate time for spring to settle; tweak if you change stiffness/damping
      const SNAP_DELAY = 380;
      const targetRealIndex = landedOnStartClone ? count : clones;

      const t = setTimeout(() => {
        // stop any ongoing animation then snap instantly (no animation) to the real index
        controls.stop();
        const snapTo = computeOffset(targetRealIndex);
        x.set(snapTo);
        setIndexInTrack(targetRealIndex);
      }, SNAP_DELAY);

      return () => {
        clearTimeout(t);
        controls.stop();
      };
    }

    return () => controls.stop();
  }, [indexInTrack, computeOffset, x, clones, count, extendedCount]);

  // set initial position on mount
  useEffect(() => {
    const initial = computeOffset(indexInTrack);
    x.set(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // autoplay
  useEffect(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    if (!isHover) {
      autoplayRef.current = setInterval(() => {
        setIndexInTrack((i) => i + 1);
      }, 520000);
    }
    return () => clearInterval(autoplayRef.current);
  }, [isHover]);

  // resize -> snap to current logical
  useEffect(() => {
    const onResize = () => {
      const target = computeOffset(indexInTrack);
      x.set(target);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [computeOffset, indexInTrack, x]);

  function handlePrev() {
    setIndexInTrack((i) => i - 1);
  }
  function handleNext() {
    setIndexInTrack((i) => i + 1);
  }

  // Drag-to-swipe behavior: update indexInTrack based on drag end velocity/offset
  const handleDragEnd = (event: any, info: any) => {
    const velocity = info.velocity.x;
    const offset = info.offset.x;
    if (offset < -80 || velocity < -300) {
      handleNext();
    } else if (offset > 80 || velocity > 300) {
      handlePrev();
    } else {
      // small movement -> snap back to the current index
      setIndexInTrack((i) => i);
    }
  };

  // helper to render a slide
  const Slide = ({ t, large = false, innerRef = null }) => {
    return (
      <article
        ref={innerRef}
        className={`w-72 md:w-80 lg:w-[28rem] flex-shrink-0 transform transition-all duration-500 ${
          large ? "scale-100" : "scale-95 opacity-50"
        }`}
      >
        <div className={`bg-white rounded-2xl p-6 lg:p-10  h-full`}>
          <div className="flex items-center gap-4">
            <img
              src={t.avatar}
              alt={t.name}
              className={`w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover`}
            />
            <div className="text-left">
              <div className="text-lg lg:text-2xl font-semibold text-[#000065]">
                {t.name}
              </div>
              {/* <div className="text-sm text-gray-400">{t.title}</div> */}
            </div>
          </div>

          <blockquote className="mt-4 text-sm lg:text-base text-gray-600 leading-relaxed">
            “{t.quote}”
          </blockquote>
        </div>
      </article>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#E9E9E9]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#000065] leading-tight">
          Trusted by Thousands of <br />
          <span className="bg-gradient-to-tr from-amber-400 via-amber-500 to-amber-600 text-transparent bg-clip-text">
            {" "}
            Happly Event-Goers{" "}
          </span>
        </h2>
        <p className="mt-4 text-lg text-amber-300/80">
          {/* <span className="hidden md:inline">Happy Travelers</span> */}
        </p>
      </div>

      <div className="relative mt-12">
        <div className="max-w-5xl mx-auto px-6" ref={containerRef}>
          {/* Motion track: we animate x to glide */}
          <motion.div
            className="flex items-stretch gap-6 cursor-grab"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            {/* Render extended slides */}
            {extended.map((t, i) => (
              <div key={i + "-" + (t.id || i)} className={`flex items-stretch`}>
                <Slide
                  t={t}
                  large={i === indexInTrack}
                  innerRef={i === indexInTrack ? slideRef : null}
                />
              </div>
            ))}
          </motion.div>

          {/* Controls */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={handlePrev}
              aria-label="Previous"
              className="w-12 h-12 rounded-full bg-[#000065]/80 text-white flex items-center justify-center shadow hover:scale-105 transform transition"
            >
              <ChevronLeft className="size-8" />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next"
              className="w-12 h-12 rounded-full bg-[#000065]/80 text-white flex items-center justify-center shadow hover:scale-105 transform transition"
            >
              <ChevronRight className="size-8" />
            </button>
          </div>

          {/* Dots */}
          {/* <div className="flex justify-center mt-6">
            <div className="flex items-center gap-3">
              {originals.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setIndexInTrack(i + clones)}
                  className={`w-3 h-3 rounded-full ${
                    i === logicalIndex ? "bg-teal-900" : "bg-teal-900/30"
                  }`}
                />
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
