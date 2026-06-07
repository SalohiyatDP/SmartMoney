import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, 
  BookOpen, 
  Target, 
  TrendingUp, 
  FlaskConical, 
  Gamepad2, 
  Search, 
  Award,
  Menu,
  X
} from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const location = useLocation()

  const menuItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/library', icon: BookOpen, label: 'Kutubxona' },
    { path: '/simulator', icon: Target, label: 'Simulyator' },
    { path: '/xauusd', icon: TrendingUp, label: 'XAUUSD' },
    { path: '/tests', icon: FlaskConical, label: 'Testlar' },
    { path: '/playground', icon: Gamepad2, label: 'Playground' },
    { path: '/search', icon: Search, label: 'Qidiruv' },
    { path: '/certificate', icon: Award, label: 'Sertifikat' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="flex h-screen bg-dark-bg text-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-dark-card border-r border-dark-border transition-all duration-300 flex flex-col`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-dark-border">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
              <h1 className="text-xl font-bold gradient-text">
                SMC Academy
              </h1>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-dark-hover rounded-lg transition-colors"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive(item.path)
                  ? 'bg-primary-blue text-white'
                  : 'hover:bg-dark-hover text-gray-400'
              }`}
            >
              <item.icon size={20} />
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-dark-border">
          {sidebarOpen && (
            <div className="text-xs text-gray-500 text-center">
              <p>Version 1.0.0</p>
              <p className="mt-1">100% Offline</p>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}

export default Layout
