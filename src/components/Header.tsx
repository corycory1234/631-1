import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import Logo from "@/assets/logo.png";

interface NavItem {
  label: string
  href: string
}

interface HeaderProps {
  navItems?: NavItem[]
  ctaLabel?: string
  onCtaClick?: () => void
}

export default function Header(props: HeaderProps) {
  // const {
  //   navItems = [
  //     { label: 'Products', href: '/products' },
  //     { label: 'Collections', href: '/collections' },
  //     { label: 'About', href: '/about' },
  //   ],
  //   ctaLabel = 'Shop Now',
  //   onCtaClick,
  // } = props

  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const handleMenuToggle = () => {
    setMenuOpen(prev => !prev)
  }

  // const handleCtaClick = () => {
  //   onCtaClick?.()
  // }

  const isActive = (href: string) => location.pathname === href

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-lg font-semibold tracking-tight text-neutral-900 w-14 h-14 flex items-center justify-center">
          <img src={Logo} alt="Cherry" />
        </Link>

        {/* Desktop Nav */}
        {/* <nav className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm transition-colors ${
                isActive(item.href)
                  ? 'text-neutral-900 font-medium'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav> */}

        {/* CTA */}
        {/* <div className="hidden md:flex items-center gap-4">
          <button
            onClick={handleCtaClick}
            className="px-5 py-2 text-sm font-medium bg-neutral-900 text-white rounded-full hover:bg-neutral-700 transition-colors"
          >
            {ctaLabel}
          </button>
        </div> */}

        {/* Mobile Hamburger */}
        {/* <button
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
        >
          <span className={`block h-px bg-neutral-900 transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-px bg-neutral-900 transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-px bg-neutral-900 transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button> */}
      </div>

      {/* Mobile Menu */}
      {/* {menuOpen && (
        <div className="md:hidden border-t border-neutral-100 bg-white px-6 py-4 flex flex-col gap-4">
          {navItems.map(item => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm ${
                isActive(item.href)
                  ? 'text-neutral-900 font-medium'
                  : 'text-neutral-500'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={handleCtaClick}
            className="mt-2 px-5 py-2 text-sm font-medium bg-neutral-900 text-white rounded-full w-fit"
          >
            {ctaLabel}
          </button>
        </div>
      )} */}
    </header>
  )
}
