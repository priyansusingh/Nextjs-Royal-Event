import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Calendar, Gift, Music, Utensils, Users, Wine, Facebook, Twitter, Instagram} from 'lucide-react'
import { Input } from "@/components/ui/input"
import CallUs from '@/components/ui/callus'
import Navbar2 from '@/components/ui/Navbar2'

export default function AboutPage() {
  return (
    <div className="bg-gray-50">
     <CallUs/>
     <Navbar2/>
      {/* Hero Section */}
      <div className="relative h-64">
        <Image
          src="/bg3.jpg"
          alt="Food background"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h2 className="text-4xl font-bold mb-2">About Style 2</h2>
          <div className="text-sm">
            <Link href="/" className="hover:underline">HOME</Link>
            <span className="mx-2">|</span>
            <span>ABOUT STYLE 2</span>
          </div>
        </div>
      </div>

      {/* Our Story of Success Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-sm uppercase text-gray-600 mb-2">ABOUT US</h3>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story of Success</h2>
            <div className="w-16 h-1 bg-gray-400 mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <Image
                src="/menu_img1.jpg"
                alt="Hands holding a plate with food"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                A Perfect Blend of Sensational Food, Inspiring Ideas and Professional Staff
              </h3>
              <p className="text-gray-600 mb-4">
                <span className="font-bold">1997</span> - Our journey started in a small kitchen with a big dream. 
                We began by catering intimate family gatherings, pouring our passion into every dish we created. 
                As word spread about our delectable creations and impeccable service, we soon found ourselves 
                catering for larger events, each one an opportunity to showcase our culinary artistry and 
                attention to detail.
              </p>
              <Button variant="outline" className="bg-orange-300 text-white hover:bg-orange-400">
                READ MORE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Planning a Fabulous Event? Section */}
      <section className="py-16 bg-white">
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
            <Button variant="outline" className="bg-orange-300 text-white hover:bg-orange-400">
              View Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* Book Your Tasting Session Section */}
      <section className="relative h-96">
        <Image
          src="/12-Dark.jpg"
          alt="Tasting session background"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Book Your Tasting Session<br />or Discuss Your Project
          </h2>
          <Button variant="outline" className="bg-orange-300 text-white hover:bg-orange-400">
            Book Tasting Session
          </Button>
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "/slide1-1.jpg",
                date: "APRIL 23, 2023",
                title: "We Can Help Find a Location that's Right for You"
              },
              {
                image: "/story_img.jpg",
                date: "APRIL 23, 2023",
                title: "Catering Services for Fabulous Corporate Events"
              },
              {
                image: "/welcome_img3.jpg",
                date: "APRIL 3, 2023",
                title: "Planning a Wedding Menu Can Be Daunting"
              }
            ].map((article, index) => (
              <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                <Image src={article.image} alt={article.title} width={300} height={200} className="w-full" />
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-2">{article.date}</p>
                  <h3 className="font-bold text-lg mb-2">{article.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="bg-orange-300 text-white hover:bg-orange-400">
              Read More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <Image src="/bg3.jpg" alt="Royal event logo" width={120} height={60} />
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
                <Button variant="outline" className="bg-orange-300 text-white hover:bg-orange-400">
                  Submit
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 flex justify-between items-center">
            <p className="text-sm text-gray-600">&copy; 2023 Royal Event. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-gray-800">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}