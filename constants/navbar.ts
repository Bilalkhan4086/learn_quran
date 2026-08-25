export const navbar = [
  { link: "/", label: "Home" },
  { link: "/courses", label: "Courses" },
  { link: "/fee-structure", label: "Fees" },
  { link: "/about", label: "About" },
] satisfies NavigationItem[];

export type NavigationItem = {
  link: string;
  label: string;
};
