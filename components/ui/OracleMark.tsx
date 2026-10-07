export default function OracleMark({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size * 0.62} viewBox="0 0 48 30" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="42" height="24" rx="12" stroke="currentColor" strokeWidth="6" />
    </svg>
  );
}
