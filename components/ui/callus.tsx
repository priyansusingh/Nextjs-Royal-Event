import { Facebook, Instagram, Phone, Twitter, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CallUs = () => {
  return (
       <div className="bg-[#f5f2ed] py-2 px-4">
       <div className="container mx-auto flex justify-between items-center">
         <div className="flex items-center space-x-2">
           <span className="text-sm text-gray-600">Call Us for Consultation</span>
           <Phone className="h-4 w-4 text-gray-600" />
           <span className="text-sm text-gray-600">123-456-7890</span>
         </div>
         <div className="flex items-center space-x-4">
           <Link href="/login" className="flex items-center text-sm text-gray-600 hover:text-gray-800">
             <User className="h-4 w-4 mr-1" />
             Login
           </Link>
           <Link href="#" className="text-gray-600 hover:text-gray-800">
             <Twitter className="h-4 w-4" />
           </Link>
           <Link href="#" className="text-gray-600 hover:text-gray-800">
             <Facebook className="h-4 w-4" />
           </Link>
           <Link href="#" className="text-gray-600 hover:text-gray-800">
             <Instagram className="h-4 w-4" />
           </Link>
         </div>
       </div>
     </div>
  )
}

export default CallUs