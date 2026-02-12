import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, TrendingUp, Users, Award, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <BrandSlider />
      <ContactSection />
      <ReviewsSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

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

function AboutSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About SlateBiz
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              SlateBiz is a leading enterprise software development company specializing in building intelligent, scalable, and secure digital ecosystems for modern businesses. We design industry-focused ERP solutions and digital platforms that help organizations automate operations, improve productivity, and achieve sustainable growth.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              With expertise in Jewellery ERP, Hospital Management Systems, and enterprise-grade digital solutions, SlateBiz empowers companies with cutting-edge technology, robust architecture, and data-driven intelligence.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Our solutions are trusted by businesses across retail, manufacturing, healthcare, and service sectors, making SlateBiz a reliable partner for digital transformation and business automation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
              <Shield className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Secure</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Enterprise-grade security and compliance</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
              <TrendingUp className="w-12 h-12 text-green-600 dark:text-green-400 mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Scalable</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Built to grow with your business</p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl">
              <Sparkles className="w-12 h-12 text-orange-600 dark:text-orange-400 mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Intelligent</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">AI-driven insights and automation</p>
            </div>
            <div className="bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-xl">
              <Users className="w-12 h-12 text-cyan-600 dark:text-cyan-400 mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Dedicated</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Customer-first approach always</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Vision</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To become a globally trusted technology partner delivering world-class ERP software and digital solutions that redefine how industries operate, scale, and innovate.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Mission</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To build powerful, user-centric, and secure software platforms that simplify complex business processes, enable real-time insights, and drive operational excellence.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Values</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Innovation, industry-specific solutions, enterprise-grade security, scalable performance, and a customer-first approach in everything we do.
            </p>
          </div>
        </div>
      </div>
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
                <h3 className="text-3xl font-bold">xJewel ERP</h3>
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
                <h3 className="text-3xl font-bold">xCura HMS</h3>
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

function BrandSlider() {
  const brands = [
    'Enterprise Partner',
    'Trusted by Industry Leaders',
    'Global Solutions',
    'Innovation Award',
    'Best ERP Provider',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % brands.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [brands.length]);

  return (
    <section className="py-12 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">
            Trusted By Industry Leaders
          </p>
        </div>
        <div className="flex justify-center items-center overflow-hidden">
          <div className="flex space-x-12 animate-pulse">
            {brands.map((brand, index) => (
              <div
                key={index}
                className={`text-2xl font-bold text-gray-400 transition-opacity ${
                  index === currentIndex ? 'opacity-100' : 'opacity-30'
                }`}
              >
                {brand}
              </div>
            ))}
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
                <p className="text-gray-600">
                  DH-079, 1st Floor Ansal Sushant City -1,<br />
                  Kalwar Road, Jaipur, Rajasthan 303706, India
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Contact</h4>
                <p className="text-gray-600">925737668</p>
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
  const reviews = [
    {
      name: 'Rajesh Kumar',
      company: 'Kumar Jewellers',
      rating: 5,
      text: 'xJewel ERP has completely transformed our inventory management. The RFID tracking and karigar management features are exceptional.',
    },
    {
      name: 'Dr. Priya Sharma',
      company: 'City Care Hospital',
      rating: 5,
      text: 'xCura HMS streamlined our entire hospital operations. Patient management and billing have never been this efficient.',
    },
    {
      name: 'Amit Patel',
      company: 'Patel Diamonds',
      rating: 5,
      text: 'The best jewellery software we have used. Real-time reporting and accurate stock valuation have improved our profitability significantly.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Customer Reviews
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Trusted by businesses across industries
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">"{review.text}"</p>
              <div>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-500">{review.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
