import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Calendar, Gift, Music, Utensils, Users, Wine, Star } from 'lucide-react'
import { Input } from "@/components/ui/input"
import CallUs from '@/components/ui/callus'
import Navbar2 from '@/components/ui/Navbar2'

export default function ServicesPage() {
  return (
    <div className="bg-white">
        <CallUs/>
        <Navbar2/>
      <section className="relative h-64">
        <Image
          src="/12-Dark.jpg"
          alt="Seafood dish"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-2">Our Services</h1>
          <div className="text-sm">
            <Link href="/" className="hover:underline">HOME</Link>
            <span className="mx-2">|</span>
            <span>OUR SERVICES</span>
          </div>
        </div>
      </section>

      {/* Planning a Fabulous Event? Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Planning a Fabulous Event?</h2>
          <div className="relative">
            <div className="flex justify-center mb-8">
              <Image
                src="/bg_services.png"
                alt="Event food"
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { icon: Users, title: "Weddings", description: "We cater to your special day with elegance" },
                { icon: Utensils, title: "Corporate", description: "Impress your clients with our professional service" },
                { icon: Wine, title: "Socials", description: "From cocktail parties to gala dinners, we've got you covered" },
                { icon: Gift, title: "Picnics", description: "Enjoy the outdoors with our delicious picnic spreads" },
                { icon: Music, title: "Festivals", description: "We can handle large-scale events with ease" },
                { icon: Calendar, title: "Private Parties", description: "Celebrate your milestones with our exquisite catering" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-orange-400" />
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Button className="bg-orange-300 text-white hover:bg-orange-400">
              View Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* Clients About Us Section */}
      <section className="relative py-24">
        <Image
          src="/slide3-1.jpg"
          alt="Appetizers background"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-8">Clients About Us</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
          &rdquo;The experience was just fantastic. The food and the catering staff were brilliant. We couldn&lsquo;t have asked for a better service.&rdquo; </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/placeholder.svg?height=60&width=60"
              alt="Client"
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>
          <p className="font-bold mb-2">John Doe</p>
          <div className="flex justify-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <Image src="/logo_main.png" alt="Royal event logo" width={120} height={60} />
            </div>
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h3 className="font-bold text-lg mb-4">Contact Info</h3>
              <p className="text-gray-600 mb-2">123 Main Street, Anytown, USA</p>
              <p className="text-gray-600 mb-2">Phone: (123) 456-7890</p>
              <p className="text-gray-600">Email: info@royalevent.com</p>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="font-bold text-lg mb-4">Newsletter Signup</h3>
              <form className="flex">
                <Input type="email" placeholder="Your email address" className="mr-2" />
                <Button className="bg-orange-300 text-white hover:bg-orange-400">
                  Submit
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">&copy; 2023 Royal Event. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}