import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'
import { siteConfig } from '@/lib/constants'
import { ThemeToggle } from '@/components/ThemeToggle'

export function Header() {
  const { user, signOut } = useAuth()

  return (
    <header className="w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold font-display">{siteConfig.name}</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/rentals" className="text-sm font-medium">
            Our Rentals
          </Link>
          <Link to="/services" className="text-sm font-medium">
            Event Services
          </Link>
          <Link to="/contact" className="text-sm font-medium">
            Contact
          </Link>
          {user ? (
            <>
              <Link to="/dashboard" className="text-sm font-medium">
                Dashboard
              </Link>
              <Button variant="outline" onClick={signOut}>
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link to="/register">
                <Button>Get Started</Button>
              </Link>
            </>
          )}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
