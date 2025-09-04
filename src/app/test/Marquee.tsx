import { cn } from '@/lib/utils';

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  speed?: number; // ✅ New prop for controlling speed (seconds)
  gap?: string;   // ✅ New prop for gap size
  [key: string]: any;
}

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  speed = 40,   // default same as before
  gap = "1rem", // default gap
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      style={{
        // dynamically pass CSS vars for animation + spacing
        ['--duration' as any]: `${speed}s`,
        ['--gap' as any]: gap,
      }}
      className={cn(
        'group flex overflow-hidden p-2 [gap:var(--gap)]',
        {
          'flex-row': !vertical,
          'flex-col': vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn('flex shrink-0 justify-around [gap:var(--gap)]', {
              'animate-marquee flex-row': !vertical,
              'animate-marquee-vertical flex-col': vertical,
              'group-hover:[animation-play-state:paused]': pauseOnHover,
              '[animation-direction:reverse]': reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
