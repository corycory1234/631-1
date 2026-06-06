import { Link } from 'react-router'
import Logo from "@/assets/logo.png";

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">

        <Link to="/" className="text-sm font-semibold tracking-tight text-neutral-900 w-24 h-20 flex items-center justify-center">
          <img src={Logo} alt="Cherry" />
        </Link>

        {/* <nav className="flex items-center gap-6">
          <Link to="/products" className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors">
            Products
          </Link>
          <Link to="/collections" className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors">
            Collections
          </Link>
          <Link to="/about" className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors">
            About
          </Link>
        </nav> */}

        <p className="text-sm text-neutral-400">
          © {year}
        </p>
      </div>
    </footer>
  )
}
