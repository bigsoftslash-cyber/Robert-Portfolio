import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { defaultNav, experienceNav, getRouteByPath, pagerRoutes } from '../routes.js'

const socials = [
  { id: 'facebook', label: 'Facebook', href: 'https://facebook.com', Icon: FaFacebookF },
  { id: 'twitter', label: 'Twitter', href: 'https://twitter.com', Icon: FaTwitter },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com', Icon: FaLinkedinIn },
]

export function AppLayout() {
  const { pathname } = useLocation()
  const section = getRouteByPath(pathname)
  const items = section.navbarVariant === 'experience' ? experienceNav : defaultNav
  const currentId = section.pagerId ?? section.id

  return (
    <div className="min-h-dvh bg-base">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="navbar">
        <div className="flex items-center gap-7 pl-7">
          <Link to="/" className="font-heading text-[38px] leading-[0.85] font-light" aria-label="Pattison home">
            P
          </Link>
          <ul className="flex items-center gap-8 text-[15px] list-none m-0 p-0">
            {socials.map((social) => (
              <li key={social.id}>
                <a href={social.href} aria-label={social.label} target="_blank" rel="noreferrer">
                  <social.Icon aria-hidden="true" size={16} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <nav className="navbar-menu" aria-label="Primary">
          {items.map((item) => (
            <NavLink
              key={`${item.path}-${item.label}`}
              to={item.path}
              className={({ isActive }) => (isActive ? 'text-accent' : 'text-cream')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <p className="navbar-phone">
          {section.navbarVariant === 'experience'
            ? '© Paul 2021. All Rights Resevered'
            : '+2(315) 590 83 68'}
        </p>
      </header>
      <div className="relative grid grid-cols-[82px_minmax(0,1fr)] min-h-[calc(100dvh-89px)]">
        <aside
          className={section.id === 'experience' ? 'left-panel bg-panel' : 'left-panel'}
          aria-label="Section label"
        >
          <span className="left-panel-text">{section.number}</span>
          <span className="left-panel-text">{section.panelLabel}</span>
        </aside>
        <main id="main" className="min-w-0 min-h-[calc(100dvh-89px)] page-enter" key={pathname}>
          <Outlet />
        </main>
        <nav className="dots" aria-label="Section pager">
          {pagerRoutes.map((route) => (
            <NavLink
              key={route.id}
              to={route.path}
              className={
                currentId === route.id
                  ? 'block size-3 rounded-full bg-accent'
                  : 'block size-3 rounded-full bg-cream'
              }
              aria-label={route.pagerLabel}
              aria-current={currentId === route.id ? 'true' : undefined}
            />
          ))}
        </nav>
      </div>
    </div>
  )
}
