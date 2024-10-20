"use client"

import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, ChevronRight, Link, Mail, MapPin, Phone, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Input } from "@/components/ui/input"


function ContctSection(){

  return <div className="bg-gray-50">
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
}


function TestimonialsSection() {
  const testimonials = [
    {
      quote: "We were glad to have you as our caterer on the special day such as our wedding! Thank you for your amazing work, we recommend your service to everyone",
      author: "Laura and John Doe, NY",
      image: "/welcome1.jpg"
    },
    // Add more testimonials here
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-[#f9f7f3] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-light text-center mb-12">Clients About Us</h2>
        <div className="relative max-w-3xl mx-auto">
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-20 h-20 mx-auto mb-6">
              <Image
                src={testimonials[currentTestimonial].image}
                alt="Client"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <p className="text-gray-600 mb-4">&quot;{testimonials[currentTestimonial].quote}&quot;</p>
            <p className="text-sm text-gray-500">- {testimonials[currentTestimonial].author}</p>
          </div>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}

function EventPlanningSection() {
  const eventTypes = [
    { title: "WEDDINGS", description: "Our staff will make your special day perfect, with a stunning menu & amazing service." },
    { title: "CORPORATE", description: "From small meetings to large conferences, we've got your corporate event covered." },
    { title: "SPECIAL", description: "Birthday party or special occasion? Let us make it unforgettable." },
    { title: "PICNICS", description: "Enjoy the outdoors with our delicious picnic catering options." },
    { title: "FESTIVALS", description: "We can handle large-scale events with a variety of food options for all tastes." },
    { title: "PRIVATE PARTIES", description: "Intimate gatherings or grand celebrations, we'll make your party a success." },
  ];

  return (
    <section className="bg-[#f9f7f3] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-light text-center mb-12">Planning a Fabulous Event?</h2>
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden">
              <Image
                src="/appetizers.jpg"
                alt="Appetizers"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            {eventTypes.map((event, index) => (
              <div key={index} className={`text-center ${index % 3 === 1 ? 'md:mt-32' : ''}`}>
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-orange-500 text-white px-6 py-2 uppercase text-sm font-semibold tracking-wider">
            View More Services
          </button>
        </div>
      </div>
    </section>
  );
}


function MenuSection() {
  const menuItems = [
    { title: "CANAPES", image: "/gallery_grid1.jpg" },
    { title: "SMALL PLATES", image: "/gallery_grid2.jpg" },
    { title: "SWEETS", image: "/gallery_grid3.jpg" },
    { title: "DRINKS", image: "/gallery_grid4.jpg" },
  ];

  return (
    <section className="bg-[#f9f7f3] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-light text-center mb-12">Our Menu</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {menuItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-full aspect-square mb-2">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p className="text-sm uppercase">{item.title}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 mb-6">
          and much more sensational food & drinks...
        </p>
        <div className="flex justify-center">
          <button className="bg-orange-500 text-white px-6 py-2 uppercase text-sm font-semibold tracking-wider">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}

function WelcomeSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-light text-center mb-12">Welcome to the Best<br />Catering Company</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {['Events', 'Food Delivery', 'Venues'].map((title, index) => (
          <div key={index} className="relative h-64 overflow-hidden">
            <Image
              src={`/gallery_grid${index + 1}.jpg`}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="brightness-75"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-2xl font-light">{title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3 relative h-96 md:h-auto">
          <Image
            src="/gallery_grid5.jpg"
            alt="Shrimp dish"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="md:w-1/3 flex flex-col justify-between">
          <div className="relative h-48 mb-4">
            <Image
              src="/gallery_grid6.jpg"
              alt="Chef plating a dish"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-light mb-4">Our Story</h3>
            <p className="text-gray-600 mb-4">
              A Perfect Blend of Exceptional Food, Inspiring Ideas and Professional Staff
            </p>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet.
            </p>
            <button className="bg-orange-500 text-white px-6 py-2 uppercase text-sm font-semibold tracking-wider">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurStorySection() {
  return (
    <section className="relative h-screen">
      <Image
        src="/12-Dark.jpg"
        alt="Shrimp skewers"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h2 className="text-4xl font-light mb-6">Our Story of Success</h2>
            <div className="flex items-start gap-8">
              <div className="relative w-1/3 h-48">
                <Image
                  src="/gallery_grid5.jpg"
                  alt="Chef plating a dish"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="w-2/3">
                <h3 className="text-xl font-light mb-2">A Perfect Blend of Exceptional Food, Inspiring Ideas and Professional Staff</h3>
                <p className="text-3xl font-bold mb-4">1997</p>
                <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.</p>
                <button className="bg-orange-500 text-white px-6 py-2 uppercase text-sm font-semibold tracking-wider">
                  Read Our Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="relative">
        {/* Top bar */}
        <div className="absolute top-0 right-0 p-4 flex items-center space-x-6 text-white text-xs z-10">
          <span>+1 123 456 7890</span>
          <span>info@royalevent.com</span>
          <a href="#" className="flex items-center text-orange-300 uppercase font-semibold">
            <ShoppingCart className="w-4 h-4 mr-1" />
            Your Cart
          </a>
        </div>

        {/* Logo */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20">
          <Image
            src="/logo_main.png"
            alt="Royal Event Catering"
            width={180}
            height={180}
            className="mt-4"
          />
        </div>

        {/* Header image and text */}
        <div className="relative h-[80vh] overflow-hidden">
          <Image
            src="/12-Dark.jpg"
            alt="Catering appetizers"
            layout="fill"
            objectFit="cover"
            className="brightness-75"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl md:text-5xl font-light text-center leading-tight mb-6 tracking-wider">
              MARKET LEADERS IN<br />CATERING EXCELLENCE
            </h1>
            <div className="w-24 h-1 bg-orange-500 opacity-75 mb-8"></div>
            <button className="bg-orange-500 text-white px-8 py-3 uppercase text-sm font-semibold tracking-wider">
              Discover More
            </button>
          </div>
        </div>

        {/* Bottom curve */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60C240 60 480 0 720 0C960 0 1200 60 1440 60H0Z" fill="white"/>
          </svg>
        </div>
      </div>
      <WelcomeSection />
      <OurStorySection />
      <MenuSection />
      <EventPlanningSection />
      <TestimonialsSection />
      <ContctSection/>
    </div>
  );
}