export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

export const authLinks = {
  signIn: { label: "Sign In", href: "/login" },
  join: { label: "Join Us", href: "/register" },
} as const;

export interface FooterColumn {
  title?: string;
  links: NavLink[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: "Browse",
    links: [
      { label: "Featured Courses", href: "/courses" },
      { label: "Featured Categories", href: "/categories" },
      { label: "Business", href: "/categories/business" },
      { label: "IT", href: "/categories/it" },
      { label: "Design", href: "/categories/design" },
    ],
  },
  {
    links: [
      { label: "Development", href: "/categories/development" },
      { label: "Marketing", href: "/categories/marketing" },
      { label: "Photography", href: "/categories/photography" },
      { label: "Finance", href: "/categories/finance" },
      { label: "Sport", href: "/categories/sport" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Become a Creator", href: "/register" },
      { label: "Affiliate Program", href: "/affiliate" },
      { label: "Contact", href: "/contact" },
      { label: "Help", href: "/help" },
      { label: "About", href: "/about" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies Settings", href: "/cookies" },
];
