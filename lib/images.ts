export const images = {
  avatars: {
    user: "/images/avatars/user.webp",
  },
  courses: {
    balancingProductivity: "/images/courses/balancing-productivity.webp",
    buildDigitalAsset: "/images/courses/build-digital-asset.webp",
    fromIdeaToStartupSuccess:
      "/images/courses/from-idea-to-startup-success.webp",
    learnFigmaFromBasic: "/images/courses/learn-figma-from-basic.webp",
    masteringMoneyManagement: "/images/courses/mastering-money-management.webp",
    powerOfBigData: "/images/courses/power-of-big-data.webp",
  },
  icons: {
    arrowLeft: "/images/icons/arrow-left.svg",
    arrowRight: "/images/icons/arrow-right.svg",
    category: "/images/icons/category.svg",
    check: "/images/icons/check.svg",
    checkBlue: "/images/icons/check-blue.svg",
    chevronDown: "/images/icons/chevron-down.svg",
    facebook: "/images/icons/facebook.svg",
    filter: "/images/icons/filter.svg",
    filterCreator: "/images/icons/filter-creator.svg",
    google: "/images/icons/google.svg",
    heroLevel: "/images/icons/hero-level.svg",
    heroStar: "/images/icons/hero-star.svg",
    heroUsers: "/images/icons/hero-users.svg",
    includeCertificate: "/images/icons/include-certificate.svg",
    includeConsultation: "/images/icons/include-consultation.svg",
    includeResources: "/images/icons/include-resources.svg",
    includeVideo: "/images/icons/include-video.svg",
    level: "/images/icons/level.svg",
    levelDark: "/images/icons/level-dark.svg",
    logoMark: "/images/icons/logo-mark.svg",
    moduleVideo: "/images/icons/module-video.svg",
    playIcon: "/images/icons/play-icon.svg",
    search: "/images/icons/search.svg",
    searchGray: "/images/icons/search-gray.svg",
    share: "/images/icons/share.svg",
    sort: "/images/icons/sort.svg",
    star: "/images/icons/star.svg",
    starDark: "/images/icons/star-dark.svg",
    starLime: "/images/icons/star-lime.svg",
    starSm: "/images/icons/star-sm.svg",
  },
  logo: {
    footer: "/images/logo/footer_logo.svg",
    header: "/images/logo/header_logo.svg",
  },
  pages: {
    authCone: "/images/pages/auth-cone.webp",
    authSquiggle: "/images/pages/auth-squiggle.webp",
    authTorus: "/images/pages/auth-torus.webp",
    sneak1: "/images/pages/sneak-1.webp",
    sneak2: "/images/pages/sneak-2.webp",
    sneak3: "/images/pages/sneak-3.webp",
    sneak4: "/images/pages/sneak-4.webp",
  },
  hero: {
    person: "/images/hero/person.webp",
    ornaments: {
      springLime: "/images/hero/ornaments/spring-lime.webp",
      donutWhite: "/images/hero/ornaments/donut-white.webp",
      squiggleSm: "/images/hero/ornaments/squiggle-sm.webp",
      coneWhite: "/images/hero/ornaments/cone-white.webp",
      squiggleLg: "/images/hero/ornaments/squiggle-lg.webp",
      cylinderLime: "/images/hero/ornaments/cylinder-lime.webp",
    },
  },
  growth: {
    guy: "/images/growth/guy.webp",
    woman: "/images/growth/woman.webp",
    squiggleA: "/images/growth/squiggle-a.webp",
    squiggleB: "/images/growth/squiggle-b.webp",
  },
  cta: {
    ornaments: {
      springLime: "/images/cta/ornaments/spring-lime.webp",
      coneWhite: "/images/cta/ornaments/cone-white.webp",
      donutLime: "/images/cta/ornaments/donut-lime.webp",
      squiggleSm: "/images/cta/ornaments/squiggle-sm.webp",
      coneLime: "/images/cta/ornaments/cone-lime.webp",
      squiggleLg: "/images/cta/ornaments/squiggle-lg.webp",
      cylinderWhite: "/images/cta/ornaments/cylinder-white.webp",
    },
  },
} as const;

export function categoryIcon(slug: string): string {
  return `/images/categories/${slug}.svg`;
}

export function partnerLogo(id: number): string {
  return `/images/partners/logo-${id}.svg`;
}
