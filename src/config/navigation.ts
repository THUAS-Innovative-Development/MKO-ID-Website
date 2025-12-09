// src/config/navigation.ts
export type NavigationItem = {
  label: string;
  href: string;
};

export const navigationItems: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Wat is ID?", href: "/watIsID" },
  { label: "Contact", href: "#" },
  { label: "Artikelen", href: "/articles" },
];
