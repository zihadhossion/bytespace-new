interface NavLink {
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

interface FooterColumn {
  title?: string;
  links: NavLink[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: "Browse",
    links: [
      { label: "Featured Courses", href: "/courses" },
      { label: "Featured Categories", href: "/courses" },
      { label: "Business", href: "/courses" },
      { label: "IT", href: "/courses" },
      { label: "Design", href: "/courses" },
    ],
  },
  {
    links: [
      { label: "Development", href: "/courses" },
      { label: "Marketing", href: "/courses" },
      { label: "Photography", href: "/courses" },
      { label: "Finance", href: "/courses" },
      { label: "Sport", href: "/courses" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Become a Creator", href: "/register" },
      { label: "Affiliate Program", href: "/register" },
      { label: "Contact", href: "/" },
      { label: "Help", href: "/" },
      { label: "About", href: "/" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/" },
  { label: "Terms of Service", href: "/" },
  { label: "Cookies Settings", href: "/" },
];
