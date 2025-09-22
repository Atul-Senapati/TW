import React from "react";
import { Home, User, Settings, Star } from "lucide-react";

// Glassmorphism Icon Card component (Tailwind + React)
// Requirements: TailwindCSS set up with dark mode (class or media) and lucide-react installed.

export default function GlassCard({
  title = "Title",
  subtitle = "",
  Icon = Home,
  size = "sm", // 'sm' | 'md' | 'lg'
//   onClick,
//   ariaLabel,
}) {
  const sizes = {
    sm: {
      card: "p-2 gap-3",
      iconWrap: "p-2",
      title: "text-sm",
      subtitle: "text-xs",
      iconSize: 16,
    },
    md: {
      card: "p-3 gap-4",
      iconWrap: "p-3",
      title: "text-base",
      subtitle: "text-sm",
      iconSize: 20,
    },
    lg: {
      card: "p-4 gap-4",
      iconWrap: "p-4",
      title: "text-lg",
      subtitle: "text-sm",
      iconSize: 24,
    },
  };

  const s = sizes[size] || sizes.sm;

  return (
    <button
    //   onClick={onClick}
      aria-label={title}
      className={`inline-flex items-center ${s.card} rounded-2xl border-[1px] backdrop-blur-md transition-shadow duration-200 ease-in-out shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400
bg-gradient-to-br from-white/70 to-white/40 dark:from-neutral-700/30 dark:to-neutral-800/30 border-white/40 dark:border-white/10`}
      style={{
        WebkitBackdropFilter: "blur(8px)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        className={`flex items-center justify-center ${s.iconWrap} rounded-lg flex-shrink-0
bg-gradient-to-br from-white/80 to-white/40 dark:from-neutral-600/30 dark:to-neutral-700/20 border-[1px] border-white/30 dark:border-white/8`}
        aria-hidden
      >
        <Icon size={s.iconSize} />
      </div>

      <div className="flex flex-col text-left leading-tight">
        <span
          className={`${s.title} font-semibold text-neutral-900 dark:text-neutral-100`}
        >
          {title}
        </span>
        {subtitle ? (
          <span
            className={`${s.subtitle} text-neutral-700 dark:text-neutral-300/80`}
          >
            {subtitle}
          </span>
        ) : null}
      </div>
    </button>
  );
}
