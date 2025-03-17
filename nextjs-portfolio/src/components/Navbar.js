import Link from 'next/link'

export default function Navbar({ toggleDarkMode, darkMode }) {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">MyPortfolio</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/photography">Photography</Link>
        <Link legacyBehavior href="/contact">Contact</Link>
      </div>
      <button
        onClick={toggleDarkMode}
        className="border rounded px-2 py-1 text-sm"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  )
}
