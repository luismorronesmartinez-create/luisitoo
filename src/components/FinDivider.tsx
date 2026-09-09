export function FinDivider({ className = '', flip = false }: { className?: string; flip?: boolean }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className={`w-full h-full ${flip ? 'rotate-180' : ''}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0 L1440 0 L1440 20 L760 20 L720 55 L680 20 L0 20 Z"
          fill="currentColor"
          className="text-sky/30"
        />
        <path
          d="M0 0 L1440 0 L1440 8 L760 8 L720 42 L680 8 L0 8 Z"
          fill="currentColor"
          className="text-sky/15"
        />
      </svg>
    </div>
  );
}
