
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar2 = () => {
  return (
     <header className="bg-white shadow-sm">
     <div className="container mx-auto py-4 px-4">
       <div className="flex justify-between items-center">
         <Link href="/" className="flex items-center space-x-4">
           <Image src="/logo_main.png" alt="Royal event logo" width={60} height={60} />
           <h1 className="text-2xl font-serif font-bold text-gray-800">Royal event</h1>
         </Link>
         <nav>
           <ul className="flex space-x-6 text-sm uppercase">
             <li><Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link></li>
             <li><Link href="/about" className="text-gray-600 hover:text-gray-800">About Us</Link></li>
             <li><Link href="/pages" className="text-gray-600 hover:text-gray-800">Pages</Link></li>
             <li><Link href="/menu" className="text-gray-600 hover:text-gray-800">Menu</Link></li>
             <li><Link href="/services" className="text-gray-600 hover:text-gray-800">Services</Link></li>
             <li><Link href="/blog" className="text-gray-600 hover:text-gray-800">Blog</Link></li>
             <li><Link href="/contacts" className="text-gray-600 hover:text-gray-800">Contacts</Link></li>
           </ul>
         </nav>
       </div>
     </div>
   </header>

  )
}

export default Navbar2