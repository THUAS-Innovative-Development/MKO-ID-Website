export type NavigationItem = {
  label: string;
  href: string;
};

export const navigationItems: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Wat is ID?", href: "/wat-is-id" },
  { label: "Contact", href: "/contact" },
  { label: "Projecten", href: "/projects" },
];