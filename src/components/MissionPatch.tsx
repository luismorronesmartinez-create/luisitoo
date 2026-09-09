interface MissionPatchProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export function MissionPatch({ size = 48, className = '', showText = false }: MissionPatchProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        className="shrink-0"
        aria-label="Hammerhead Aerospace mission patch"
      >
        <circle cx="50" cy="50" r="48" fill="#031a33" stroke="#3b75b5" strokeWidth="2" />
        <circle cx="50" cy="50" r="44" fill="none" stroke="#3b75b5" strokeWidth="0.5" strokeDasharray="2 3" />
        <text x="50" y="16" textAnchor="middle" fill="#bdd4f0" fontFamily="Oswald, sans-serif" fontSize="7" fontWeight="700" letterSpacing="1.5">
          26 · BCN
        </text>
        <g transform="translate(50, 50)">
          <path
            d="M0 -22 L4 -10 L4 5 L0 12 L-4 5 L-4 -10 Z"
            fill="#3b75b5"
          />
          <path
            d="M-16 -2 L-4 -4 L-4 2 L-16 6 Z"
            fill="#bdd4f0"
            opacity="0.7"
          />
          <path
            d="M16 -2 L4 -4 L4 2 L16 6 Z"
            fill="#bdd4f0"
            opacity="0.7"
          />
          <circle cx="0" cy="-5" r="2.5" fill="#031a33" stroke="#bdd4f0" strokeWidth="0.5" />
        </g>
        <path d="M22 78 A 44 44 0 0 1 78 78" fill="none" stroke="#3b75b5" strokeWidth="0.5" />
        <text x="50" y="84" textAnchor="middle" fill="#bdd4f0" fontFamily="Oswald, sans-serif" fontSize="5.5" fontWeight="700" letterSpacing="1">
          HAMMERHEAD
        </text>
        <text x="50" y="91" textAnchor="middle" fill="#3b75b5" fontFamily="Oswald, sans-serif" fontSize="4" fontWeight="500" letterSpacing="2">
          AEROSPACE
        </text>
      </svg>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-headline font-bold uppercase text-sm tracking-wider text-white">Hammerhead</span>
          <span className="font-headline font-medium uppercase text-[10px] tracking-[0.2em] text-sky">Aerospace</span>
        </div>
      )}
    </div>
  );
}
