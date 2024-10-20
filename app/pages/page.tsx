import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import CallUs from "@/components/ui/callus"
import Navbar2 from "@/components/ui/Navbar2"

export default function GalleryGrid() {
  return (
    <div className="flex flex-col min-h-screen">
      <CallUs/>
      <Navbar2/>
      <header className="relative h-[50vh] overflow-hidden">
        <Image
          src="/12-Dark.jpg"
          alt="Header background"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-4xl font-light">Gallery Grid</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-light text-center mb-8">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="aspect-square overflow-hidden">
              <Image
                src={`/gallery_grid${i + 1}.jpg`}
                alt={`gallery Item${i + 1}`}
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </main>
      {/* New footer section */}
      <footer className="bg-white py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Image
                src="/logo_main.png"
                alt="Royal Event Catering"
                width={200}
                height={100}
                className="mb-4"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">CONTACT INFO</h3>
                <p>125 New Lenox, Chicago, IL 60606</p>
                <p>Phone: +800-123-4567</p>
                <p>Fax: +800-123-4567</p>
                <p className="text-orange-500">info@yoursite.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">NEWSLETTER SIGNUP</h3>
                <p className="mb-2">Stay Tuned with Our Updates</p>
                <div className="flex">
                  <Input type="email" placeholder="ENTER EMAIL" className="rounded-r-none" />
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-l-none">SUBMIT</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">ThemeREX © 2024 All Rights Reserved</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}