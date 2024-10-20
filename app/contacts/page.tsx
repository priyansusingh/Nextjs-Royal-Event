import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from 'lucide-react'
import CallUs from '@/components/ui/callus'
import Navbar2 from '@/components/ui/Navbar2'

export default function ContactsPage() {
  return (
    <div className="bg-gray-50">
        <CallUs/>
        <Navbar2/>
      {/* Hero Section */}
      <section className="relative h-64">
        <Image
          src="/12-Dark.jpg"
          alt="Food background"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-2">Contacts</h1>
          <div className="text-sm">
            <Link href="/" className="hover:underline">HOME</Link>
            <span className="mx-2">|</span>
            <span>CONTACTS</span>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1579767936160!5m2!1sen!2sus"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen={true}
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </section>

      {/* Contact Info Boxes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {[
              { icon: MapPin, title: "Address", content: "123 Main St, Anytown, USA" },
              { icon: Phone, title: "Phone", content: "+1 (123) 456-7890" },
              { icon: Mail, title: "Email", content: "info@royalevent.com" },
            ].map((item, index) => (
              <div key={index} className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-white p-6 text-center shadow-md">
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-orange-400" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Leave a Feedback or Ask a Question</h2>
          <form className="max-w-2xl mx-auto">
            <div className="flex flex-wrap -mx-2 mb-4">
              <div className="w-full md:w-1/2 px-2 mb-4">
                <Input type="text" placeholder="Name" className="w-full" />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <Input type="email" placeholder="Email" className="w-full" />
              </div>
            </div>
            <div className="mb-4">
              <Textarea placeholder="Message" className="w-full" rows={6} />
            </div>
            <div className="text-center">
              <Button className="bg-orange-300 text-white hover:bg-orange-400">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}