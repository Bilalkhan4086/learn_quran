import PageTransition from "@/components/ui/PageTransition";

export default function Template({ children }: TemplateProps) {
  return <PageTransition>{children}</PageTransition>;
}

export type TemplateProps = {
  children: React.ReactNode;
};
