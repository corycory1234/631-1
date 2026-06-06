import { Outlet } from 'react-router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Layout() {

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900">
      <Header />

      <main className="flex-1 pt-16">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
