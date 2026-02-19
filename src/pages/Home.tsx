import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, MapPin, ChevronLeft, ChevronRight, Quote, Phone, Mail, ChevronDown, Check } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductsSection />
      <ReviewsSection />
      <StatsSection />
      <ContactSection />
    </div>
  );
}

function StatsSection() {
  return (
    <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <StatCard end={10} label="Year-Old Company" />
          <StatCard end={20} suffix="+" label="Years Client Experience in Jewellery Industry" />
          <StatCard end={1.5} suffix=" Lakh+" decimals={1} label="Invoices Handled" />
          <StatCard end={50} suffix="+" label="Business Users" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ end, suffix = '', decimals = 0, label }: { end: number, suffix?: string, decimals?: number, label: string }) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
      <div className="text-4xl md:text-5xl font-bold text-white mb-3">
        <CountUp end={end} suffix={suffix} decimals={decimals} />
      </div>
      <p className="text-blue-100 font-medium leading-relaxed">
        {label}
      </p>
    </div>
  );
}

function CountUp({ end, duration = 2000, suffix = '', decimals = 0 }: { end: number, duration?: number, suffix?: string, decimals?: number }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const ease = 1 - Math.pow(1 - percentage, 4);
      
      setCount(end * ease);

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return (
    <span ref={countRef}>
      {count.toFixed(decimals)}{suffix}
    </span>
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Replace this URL with your Google Apps Script Web App URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyXR8NMI65IjoyjImSGBYXhIuXMG618qlmpbLAVRpKWKSuo5aUTeqkDgvRwjCdLjH1sUw/exec';

    try {
      await fetch(scriptURL, { method: 'POST', body: formData, mode: 'no-cors' });
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      console.error('Error!', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-full text-blue-600 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Contact Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Let's Start a Conversation
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Ready to transform your business operations? Our team is here to help you find the perfect solution for your needs.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Visit Us</h3>
                  <a
                    href="https://maps.app.goo.gl/iq89dhBchA9J3fxi8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors leading-relaxed"
                  >
                    DH-079, 1st Floor Ansal Sushant City -1,<br />
                    Kalwar Road, Jaipur, Rajasthan 303706, India
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                  <p className="text-gray-600 mb-1">Sales: +91 925 737 3668</p>
                  <p className="text-gray-600">Support: +91 993 093 9903</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                  <a href="mailto:info@slatebiz.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                    info@slatebiz.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full -z-10"></div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Callback</h3>
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-600">We'll get back to you shortly.</p>
                <button onClick={() => setIsSubmitted(false)} className="mt-6 text-blue-600 font-medium hover:text-blue-700">
                  Send another message
                </button>
              </div>
            ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Interested Product
                </label>
                <div className="relative">
                  <select
                    id="product"
                    name="product"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none appearance-none cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a product</option>
                    <option value="jewelbiz">JewelBiz (Jewellery ERP)</option>
                    <option value="curabiz">CuraBiz (Hospital ERP)</option>
                    <option value="others">Others</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-blue-500/30 mt-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              <p className="text-xs text-center text-gray-500 mt-4">
                By submitting this form, you agree to our privacy policy.
              </p>
            </form>
            )}
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
      text: "JewelBiz has revolutionized our inventory tracking. The precision and ease of use are unmatched in the industry.",
    },
    {
      name: 'Sandeep Hissaria',
      company: 'B.L.Hissaria Jewellers Pvt. Ltd.',
      text: "Managing multiple branches has never been easier. Real-time data synchronization keeps us ahead of the competition.",
    },
    {
      name: 'Sachin Hissaria',
      company: 'B.L.Hissaria Jewellers Pvt. Ltd.',
      text: "The karigar management module is a game-changer. We now have complete visibility over our gold wastage and job work.",
    },
    {
      name: 'Aditya Hissaria',
      company: 'Hissaria Art Palace Pvt Ltd',
      text: "Excellent support and a robust platform. It handles our complex billing requirements effortlessly.",
    },
    {
      name: 'Kalpit Hissaria',
      company: 'Hissaria Art Palace Pvt Ltd',
      text: "From procurement to sales, everything is streamlined. Highly recommended for any growing jewellery business.",
    },
    {
      name: 'Mudit Hissaria',
      company: 'Hissaria Gems Private Limited',
      text: "The reporting features give us deep insights into our business performance. A must-have tool for modern jewellers.",
    },
    {
      name: 'Abhishek Jain',
      company: 'BTR & SONS',
      text: "JewelBiz is intuitive and powerful. It has significantly reduced our manual errors and improved operational efficiency.",
    },
    {
      name: 'Manoj Bansal',
      company: 'Mahalaxmi Refinery',
      text: "Security and reliability were our top priorities, and JewelBiz delivers on both fronts perfectly.",
    },
    {
      name: 'Manoj Bihani',
      company: 'GS Bihani Jeweller',
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
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
            {clients.map((client, index) => (
            <div
              key={index}
              className="min-w-[260px] w-[260px] h-[260px] flex-shrink-0 snap-center bg-white rounded-xl p-6 hover:shadow-xl transition-all border border-gray-200 flex flex-col relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-100" />
              <div className="flex-1 flex items-center">
                <p className="text-gray-700 text-lg italic leading-relaxed">"{client.text}"</p>
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-1">{client.name}</h3>
                <p className="text-blue-600 font-medium text-sm">{client.company}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
