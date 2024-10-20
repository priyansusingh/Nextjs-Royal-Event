import Link from 'next/link'
import { Home } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-gray-100 py-4 px-6 flex justify-center w-full">
      <div className="max-w-6xl w-full">
        <ul className="flex items-center justify-center space-x-8">
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-800 uppercase text-sm">
              <Home/>
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-600 hover:text-gray-800 uppercase text-sm">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/pages" className="text-gray-600 hover:text-gray-800 uppercase text-sm">
              Pages
            </Link>
          </li>
          <li>
            <Link href="" className="text-gray-600 hover:text-gray-800 uppercase text-sm">
              Menu
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-gray-600 hover:text-gray-800 uppercase text-sm">
              Services
            </Link>
          </li>
          <li>
            <Link href="" className="text-gray-600 hover:text-gray-800 uppercase text-sm">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contacts" className="text-gray-600 hover:text-gray-800 uppercase text-sm">
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}