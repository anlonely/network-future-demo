import type { CSSProperties } from 'react';
import type { LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  className?: string;
  style?: CSSProperties;
}

export function Card({ title, description, Icon, className = '', style }: CardProps) {
  return (
    <div
      className={`glow-card relative z-10 flex h-full flex-col rounded-[24px] border border-white/10 bg-[#111111] p-7 md:p-8 ${className}`.trim()}
      style={style}
    >
      <div className="icon-container mb-6 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#0a0a0a]">
        <Icon className="h-5 w-5 text-[#a7f069]" />
      </div>
      <h3 className="mb-3 text-xl font-medium tracking-wide text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-white/50">{description}</p>
    </div>
  );
}

