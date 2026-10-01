export const images = {
  avatars: {
    user: "/images/avatars/user.webp",
    creator: "/images/pages/creator-avatar.png",
    enroll: "/images/pages/enroll-avatar.png",
    reviewer1: "/images/pages/reviewer-1.png",
    reviewer2: "/images/pages/reviewer-2.png",
  },
  courses: {
    balancingProductivity: "/images/courses/balancing-productivity.webp",
    buildDigitalAsset: "/images/courses/build-digital-asset.webp",
    fromIdeaToStartupSuccess: "/images/courses/from-idea-to-startup-success.webp",
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
    levelBlue: "/images/icons/level-blue.svg",
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
    authCone: "/images/pages/auth-cone.png",
    authSquiggle: "/images/pages/auth-squiggle.png",
    authTorus: "/images/pages/auth-torus.png",
    sneak1: "/images/pages/sneak-1.png",
    sneak2: "/images/pages/sneak-2.png",
    sneak3: "/images/pages/sneak-3.png",
    sneak4: "/images/pages/sneak-4.png",
  },
  hero: {
    person: "/images/hero/person.png",
    ornaments: {
      springLime: "/images/hero/ornaments/spring-lime.png",
      donutWhite: "/images/hero/ornaments/donut-white.png",
      squiggleSm: "/images/hero/ornaments/squiggle-sm.png",
      coneWhite: "/images/hero/ornaments/cone-white.png",
      squiggleLg: "/images/hero/ornaments/squiggle-lg.png",
      cylinderLime: "/images/hero/ornaments/cylinder-lime.png",
    },
  },
  growth: {
    guy: "/images/growth/guy.png",
    woman: "/images/growth/woman.png",
    squiggleA: "/images/growth/squiggle-a.png",
    squiggleB: "/images/growth/squiggle-b.png",
  },
  cta: {
    ornaments: {
      springLime: "/images/cta/ornaments/spring-lime.png",
      coneWhite: "/images/cta/ornaments/cone-white.png",
      donutLime: "/images/cta/ornaments/donut-lime.png",
      squiggleSm: "/images/cta/ornaments/squiggle-sm.png",
      coneLime: "/images/cta/ornaments/cone-lime.png",
      squiggleLg: "/images/cta/ornaments/squiggle-lg.png",
      cylinderWhite: "/images/cta/ornaments/cylinder-white.png",
    },
  },
} as const;

export function categoryIcon(slug: string): string {
  return `/images/categories/${slug}.svg`;
}

export function partnerLogo(id: number): string {
  return `/images/partners/logo-${id}.svg`;
}
