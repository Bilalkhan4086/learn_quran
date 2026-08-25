export default function Reveal({
  children,
  className,
  delay = 0,
}: RevealProps) {
  return (
    <div
      className={`reveal-in ${className ?? ""}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

export type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};
