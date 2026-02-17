import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductsSection />
      <ReviewsSection />
      <ContactSection />
    </div>
  );
}

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/H1.jpeg',
    '/H2.jpeg',
    '/H3.jpeg',
    '/J1.jpeg',
    '/J2.jpeg',
    '/J3.jpeg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-20' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${slide}')` }}
        />
      ))}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-48 lg:py-56">
        <div className="max-w-3xl mx-auto text-center">


          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-center">
            Intelligent Solutions<br />
            for Modern Business
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed text-center">
            Smart Ecosystems. Seamless Operations. Scalable Growth
          </p>

          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
            >
              Book a free demo
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Products & Ecosystem
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-specific solutions built for excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
              <div className="text-white text-center p-8">
                <Award className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-3xl font-bold">JewelBiz</h3>
              </div>
            </div>
            <div className="p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Jewellery Business Management Software
              </h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                An advanced Jewellery ERP solution designed for retailers, wholesalers, and manufacturers to manage inventory, billing, RFID tracking, karigar workflow, and real-time reporting with complete accuracy and control.
              </p>
              <Link
                to="/xjewel-erp"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 group-hover:gap-2 transition-all"
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
            <div className="h-48 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
              <div className="text-white text-center p-8">
                <Award className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-3xl font-bold">CuraBiz</h3>
              </div>
            </div>
            <div className="p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Integrated Hospital ERP
              </h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive hospital management system streamlining patient care, billing, pharmacy, and administrative operations with real-time intelligence and enterprise-grade security.
              </p>
              <Link
                to="/xcura-hms"
                className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 group-hover:gap-2 transition-all"
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to streamline your business? Fill out the form and our team will contact you within 24 hours.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">SlateBiz Softwares</h3>
                <a
                  href="https://maps.app.goo.gl/iq89dhBchA9J3fxi8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors block"
                >
                  DH-079, 1st Floor Ansal Sushant City -1,<br />
                  Kalwar Road, Jaipur, Rajasthan 303706, India
                </a>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Contact</h4>
                <p className="text-gray-600">+91 925 737 3668</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Support</h4>
                <p className="text-gray-600">+91 993 093 9903</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                <p className="text-gray-600">
                  info@slatebiz.com
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const clients = [
    {
      name: 'Rajesh Hissaria',
      company: 'B.L.Hissaria Jewellers Pvt. Ltd.',
      location: 'Hanumangarh',
      product: 'JewelBiz',
      text: "JewelBiz has revolutionized our inventory tracking. The precision and ease of use are unmatched in the industry.",
    },
    {
      name: 'Sandeep Hissaria',
      company: 'B.L.Hissaria Jewellers Pvt. Ltd.',
      location: 'Hanumangarh',
      product: 'JewelBiz',
      text: "Managing multiple branches has never been easier. Real-time data synchronization keeps us ahead of the competition.",
    },
    {
      name: 'Sachin Hissaria',
      company: 'B.L.Hissaria Jewellers Pvt. Ltd.',
      location: 'Hanumangarh',
      product: 'JewelBiz',
      text: "The karigar management module is a game-changer. We now have complete visibility over our gold wastage and job work.",
    },
    {
      name: 'Aditya Hissaria',
      company: 'Hissaria Art Palace Pvt Ltd',
      location: 'Hanumangarh',
      product: 'JewelBiz',
      text: "Excellent support and a robust platform. It handles our complex billing requirements effortlessly.",
    },
    {
      name: 'Kalpit Hissaria',
      company: 'Hissaria Art Palace Pvt Ltd',
      location: 'Hanumangarh',
      product: 'JewelBiz',
      text: "From procurement to sales, everything is streamlined. Highly recommended for any growing jewellery business.",
    },
    {
      name: 'Mudit Hissaria',
      company: 'Hissaria Gems Private Limited',
      location: 'Hanumangarh',
      product: 'JewelBiz',
      text: "The reporting features give us deep insights into our business performance. A must-have tool for modern jewellers.",
    },
    {
      name: 'Abhishek Jain',
      company: 'BTR & SONS',
      location: 'Jaipur',
      product: 'JewelBiz',
      text: "JewelBiz is intuitive and powerful. It has significantly reduced our manual errors and improved operational efficiency.",
    },
    {
      name: 'Manoj Bansal',
      company: 'Mahalaxmi Refinery',
      location: 'Hanumangarh',
      product: 'JewelBiz',
      text: "Security and reliability were our top priorities, and JewelBiz delivers on both fronts perfectly.",
    },
    {
      name: 'Manoj Bihani',
      company: 'GS Bihani Jeweller',
      location: 'Rawatsar, Hanumangarh',
      product: 'JewelBiz',
      text: "The customer management features have helped us build stronger relationships with our clients. Truly exceptional software.",
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 50) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Powering businesses with intelligent solutions
          </p>
        </div>

        <div className="relative group">
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white p-3 rounded-full shadow-lg text-gray-600 hover:text-blue-600 transition-all opacity-0 group-hover:opacity-100 hidden md:block"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white p-3 rounded-full shadow-lg text-gray-600 hover:text-blue-600 transition-all opacity-0 group-hover:opacity-100 hidden md:block"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
            {clients.map((client, index) => (
            <div
              key={index}
              className="min-w-[260px] md:min-w-[320px] flex-shrink-0 snap-center bg-gray-50 rounded-xl p-5 hover:shadow-lg transition-all border border-gray-100 group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {client.name.charAt(0)}
                </div>
                <div className="flex items-center space-x-1 bg-white px-2 py-1 rounded-full border border-gray-200 shadow-sm">
                  <Award className="w-3 h-3 text-blue-600" />
                  <span className="text-[10px] font-medium text-gray-700">{client.product}</span>
                </div>
              </div>
              
              <h3 className="text-base font-bold text-gray-900 mb-0.5">{client.name}</h3>
              <p className="text-blue-600 font-medium mb-2 text-xs">{client.company}</p>
              <p className="text-gray-600 text-xs italic mb-3 leading-relaxed line-clamp-2">"{client.text}"</p>
              
              <div className="flex items-center text-gray-500 text-xs pt-3 border-t border-gray-200">
                <MapPin className="w-3 h-3 mr-1.5 text-gray-400" />
                {client.location}
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
