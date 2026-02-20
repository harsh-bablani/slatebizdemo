import { Check, Gem, TrendingUp, Clock, Shield, Smartphone, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function XJewelERP() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyChooseSection />
      <CoreModulesSection />
      <BusinessModelsSection />
      <WhyTrustSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
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
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-20 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-60' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${slide}')` }}
        />
      ))}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Gem className="w-4 h-4" />
            <span className="text-sm font-medium">Jewellery ERP Software</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            JewelBiz – Smart Jewellery ERP Software
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Bring total control to your jewellery business — from metal to sale and karigar management. Track gold, silver, diamonds, gemstones, job work, wastage, and settlements in real time.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-lg mb-8">
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5" />
              <span>100% Traceability</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5" />
              <span>0% Error-Prone Processes</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5" />
              <span>30% Higher Efficiency</span>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-block bg-accent-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-accent-600 transition-all shadow-lg hover:shadow-xl"
          >
            Request Demo
          </a>
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const benefits = [
    {
      icon: Clock,
      title: 'Save Hours Every Week',
      description: 'Automate billing, tagging, reporting, and settlements to reduce manual work and focus on growing your business.',
    },
    {
      icon: TrendingUp,
      title: 'Complete Inventory Control',
      description: 'Track every gram of metal, every stone, every finished item, and every transaction with real-time accuracy.',
    },
    {
      icon: Gem,
      title: 'Flawless Customer Experience',
      description: 'Faster billing, transparent purity reports, and complete order history for higher customer trust and repeat sales.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Jewellers Choose JewelBiz
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Running a jewellery business involves complex inventory, purity control, job work, taxation, and customer management. JewelBiz is an all-in-one jewellery ERP software designed for retailers, wholesalers, and manufacturers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl border border-primary-100">
              <benefit.icon className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-2xl font-bold text-gray-900">
            One Platform. Complete Control.
          </p>
        </div>
      </div>
    </section>
  );
}

function CoreModulesSection() {
  const modules = [
    'Back Office & Inventory Management',
    'POS & Sales Billing',
    'Pricing Rules Engine',
    'Style Master & Catalog',
    'Procurement & Purchase Orders',
    'Barcode & RFID Management',
    'GST, TDS & TCS Automation',
    'CRM Module',
    'Karigar & Job Work Management',
    'Memo / Jangad Management',
    'Multi-Branch & Franchise Control',
    'Integrated Accounting & Ledgers',
    'Stock Valuation & Market Rate Sync',
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Core Modules
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-start space-x-3"
            >
              <Check className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
              <span className="text-gray-700 font-medium">{module}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BusinessModelsSection() {
  const models = [
    {
      title: 'Retail Showrooms',
      description: 'Multi-store inventory, fast billing, customer management, and real-time stock visibility.',
    },
    {
      title: 'Jewellery Manufacturers',
      description: 'Track production, purity, wastage, karigar performance, and job cards with precision.',
    },
    {
      title: 'Wholesalers & B2B Traders',
      description: 'Bulk inventory, approval management, catalog generation, and settlement automation.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Built for Every Jewellery Business Model
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary-500 to-primary-700 text-white p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-4">{model.title}</h3>
              <p className="text-primary-100 leading-relaxed">{model.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyTrustSection() {
  const features = [
    {
      icon: TrendingUp,
      title: 'Maximize Profitability',
      description: 'Identify metal loss, wastage, and leakage. Convert dust and scrap into tracked revenue.',
    },
    {
      icon: Check,
      title: 'Seamless Operations',
      description: 'Every movement from karigar to customer is digitally recorded.',
    },
    {
      icon: Gem,
      title: 'Unbreakable Customer Trust',
      description: 'Purity certificates, transparent billing, and complete transaction history.',
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: '256-bit encryption, secure servers, and role-based access control.',
    },
    {
      icon: Smartphone,
      title: 'Mobile & Cloud Ready',
      description: 'Access your dashboard anytime, anywhere.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Top Jewellers Trust JewelBiz
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <feature.icon className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Simple & Transparent Pricing
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Flexible pricing based on business size, number of branches, and modules.
        </p>
        <div className="bg-primary-50 p-8 rounded-xl">
          <ul className="text-left space-y-3 mb-6">
            <li className="flex items-center space-x-3">
              <Check className="w-5 h-5 text-accent-500 flex-shrink-0" />
              <span className="text-gray-700">No hidden charges</span>
            </li>
            <li className="flex items-center space-x-3">
              <Check className="w-5 h-5 text-accent-500 flex-shrink-0" />
              <span className="text-gray-700">No per-user fees</span>
            </li>
            <li className="flex items-center space-x-3">
              <Check className="w-5 h-5 text-accent-500 flex-shrink-0" />
              <span className="text-gray-700">Complete implementation and training included</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Can I migrate my existing data?',
      answer: 'Yes, we provide complete data migration from your current software or Excel systems.',
    },
    {
      question: 'Is JewelBiz suitable for a single store?',
      answer: 'Absolutely. JewelBiz scales from single showroom to large multi-branch chains.',
    },
    {
      question: 'Do you support barcode and RFID?',
      answer: 'Yes, full barcode and RFID integration is available.',
    },
    {
      question: 'Is my business data secure?',
      answer: 'Your data is protected with enterprise-grade encryption and controlled access.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Jewellery Business?
        </h2>
        <p className="text-xl text-primary-100 mb-8">
          Join hundreds of jewellers who trust JewelBiz for their business
        </p>
        <a
          href="/#contact"
          className="inline-block bg-accent-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-accent-600 transition-all shadow-lg hover:shadow-xl"
        >
          Get Started Today
        </a>
      </div>
    </section>
  );
}
