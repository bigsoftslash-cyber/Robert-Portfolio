export const routes = [
  {
    id: 'home',
    path: '/',
    navLabel: 'HOME',
    panelLabel: 'MY NAME IS ROBERT',
    number: '1.0',
    pagerLabel: 'Go to Home',
    inPager: true,
    navbarVariant: 'default',
  },
  {
    id: 'projects',
    path: '/projects',
    navLabel: 'PROJECTS',
    panelLabel: 'PORTFOLIO',
    number: '2.0',
    pagerLabel: 'Go to Projects',
    inPager: true,
    navbarVariant: 'default',
  },
  {
    id: 'awwards',
    path: '/awwards',
    navLabel: 'AWWARDS',
    panelLabel: 'MY AWWARDS',
    number: '3.0',
    pagerLabel: 'Go to Awwards',
    inPager: true,
    navbarVariant: 'default',
  },
  {
    id: 'testimonials',
    path: '/testimonials',
    navLabel: 'TESTIMONIALS',
    panelLabel: 'testimonials',
    number: '4.0',
    pagerLabel: 'Go to Testimonials',
    inPager: true,
    navbarVariant: 'default',
  },
  {
    id: 'experience',
    path: '/experience',
    navLabel: 'EXPERIENCE',
    panelLabel: 'WORKING EXPERIENCE',
    number: '5.0',
    pagerLabel: 'Go to Experience',
    inPager: true,
    navbarVariant: 'experience',
  },
  {
    id: 'blog',
    path: '/blog',
    navLabel: 'BLOG',
    panelLabel: 'from the blog',
    number: '5.0',
    pagerLabel: 'Go to Blog',
    inPager: false,
    navbarVariant: 'default',
    pagerId: 'experience',
  },
  {
    id: 'contact',
    path: '/contact',
    navLabel: 'CONTACT',
    panelLabel: 'contact',
    number: '6.0',
    pagerLabel: 'Go to Contact',
    inPager: false,
    navbarVariant: 'default',
  },
]

export const defaultNav = [
  { label: 'HOME', path: '/' },
  { label: 'PROJECTS', path: '/projects' },
  { label: 'AWWARDS', path: '/awwards' },
  { label: 'TESTIMONIALS', path: '/testimonials' },
  { label: 'BLOG', path: '/blog' },
  { label: 'CONTACT', path: '/contact' },
]

export const experienceNav = [
  { label: 'awwards', path: '/awwards' },
  { label: 'clients', path: '/testimonials' },
  { label: 'experience', path: '/experience' },
  { label: 'blog', path: '/blog' },
  { label: 'HOME', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'contact', path: '/contact' },
]

export function getRouteByPath(pathname) {
  return routes.find((route) => route.path === pathname) ?? routes[0]
}

export const pagerRoutes = routes.filter((route) => route.inPager)
