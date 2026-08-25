export default function PageTransition({ children }: PageTransitionProps) {
  return <div className="page-enter">{children}</div>;
}

export type PageTransitionProps = {
  children: React.ReactNode;
};
