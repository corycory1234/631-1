import { Link } from 'react-router'
import Logo from "@/assets/logo.png";

export default function Header() {

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-lg font-semibold tracking-tight text-neutral-900 w-14 h-14 flex items-center justify-center">
          <img src={Logo} alt="Cherry" />
        </Link>
      </div>

    </header>
  )
}
