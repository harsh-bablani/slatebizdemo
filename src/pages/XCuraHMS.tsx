import { Check, Heart, Activity, Shield, Database, Globe, FileText, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function XCuraHMS() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyChooseSection />
      <CoreModulesSection />
      <TechnologySection />
      <BusinessModelsSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/H1.jpeg',
    '/H2.jpeg',
    '/H3.jpeg',
    '/H4.jpeg',
    '/H5.jpeg',
    '/H6.jpeg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-accent-600 via-accent-700 to-accent-900 text-white py-20 overflow-hidden">
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
            <Heart className="w-4 h-4" />
            <span className="text-sm font-medium">Hospital Management System</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            CuraBiz – Next-Generation Hospital Management Software
          </h1>
          <p className="text-xl md:text-2xl text-accent-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Healthcare, Intelligently Managed. A complete Hospital ERP solution for multi-chain hospitals, clinics, and diagnostic labs.
          </p>

          <p className="text-lg text-accent-100 mb-8">
            Secure, scalable, and designed to streamline clinical, operational, and financial workflows with real-time intelligence.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-lg mb-8">
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5" />
              <span>Cloud-ready</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5" />
              <span>Enterprise-secure</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5" />
              <span>High-volume ready</span>
            </div>
          </div>

          <a
            href="/#contact"
            className="inline-block bg-white text-accent-600 font-semibold px-8 py-4 rounded-lg hover:bg-accent-50 transition-all shadow-lg hover:shadow-xl"
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
      icon: Activity,
      title: 'Improve Clinical Efficiency',
      description: 'Automate OPD, IPD, lab, pharmacy, and doctor workflows with zero data duplication.',
    },
    {
      icon: Users,
      title: 'Enhance Patient Experience',
      description: 'Faster registration, smart queues, online appointments, and digital reports.',
    },
    {
      icon: FileText,
      title: 'Strengthen Financial Control',
      description: 'Integrated billing, insurance, GST, receivables, and doctor payouts.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Healthcare Leaders Choose CuraBiz
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            CuraBiz is a comprehensive hospital management system that integrates patient care, administration, diagnostics, pharmacy, billing, and financials into a single intelligent platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gradient-to-br from-accent-50 to-white p-8 rounded-xl border border-accent-100">
              <benefit.icon className="w-12 h-12 text-accent-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoreModulesSection() {
  const modules = [
    {
      title: 'Patient Management',
      description: 'Complete registration, EMR, vitals, pediatric growth charts (0-2 years), and visit history.',
    },
    {
      title: 'Appointment & Queue System',
      description: 'Online booking, smart token management, patient portal, SMS & email alerts.',
    },
    {
      title: 'OPD Management',
      description: 'Consultation billing, diagnostics, Panchkarma, and daily transaction tracking.',
    },
    {
      title: 'IPD Management',
      description: 'ADT (Admission-Discharge-Transfer), bed & ward control, package billing, insurance cycles.',
    },
    {
      title: 'Laboratory & Diagnostics',
      description: 'Integrated LIS, sample tracking, automated PDF reports, and radiology workflows.',
    },
    {
      title: 'Pharmacy Management',
      description: 'Inventory control, batch & expiry tracking, billing, and multi-store pharmacy operations.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Core Modules
          </h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-3 mb-3">
                <Check className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                <h3 className="text-lg font-semibold text-gray-900">{module.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed ml-8">{module.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnologySection() {
  const securityFeatures = [
    'SHA-512 Encryption',
    'Apache Shiro Security Framework',
    'OWASP Compliant Architecture',
  ];

  const infrastructureFeatures = [
    'Java-based Microservice Architecture',
    'Oracle Enterprise Database',
    'Supports LAN, WAN, Cloud, and Hybrid Deployments',
  ];

  const complianceStandards = [
    'ISO-8583',
    'ISO-20022',
    'PCI PA-DSS Security Standards',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Enterprise Technology & Security
          </h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-accent-500 to-accent-700 text-white p-8 rounded-xl">
            <Shield className="w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold mb-6">Banking-Grade Data Protection</h3>
            <ul className="space-y-3">
              {securityFeatures.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-accent-100">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white p-8 rounded-xl">
            <Database className="w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold mb-6">Scalable Infrastructure</h3>
            <ul className="space-y-3">
              {infrastructureFeatures.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-primary-100">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-cyan-600 to-cyan-800 text-white p-8 rounded-xl">
            <Globe className="w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold mb-6">Global Compliance</h3>
            <ul className="space-y-3">
              {complianceStandards.map((standard, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-cyan-100">{standard}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function BusinessModelsSection() {
  const models = [
    {
      title: 'Multi-Specialty Hospitals',
      description: 'Centralized operations, multi-branch visibility, and clinical analytics.',
    },
    {
      title: 'Clinics & Day Care Centers',
      description: 'Fast OPD, smart queues, pharmacy, and diagnostics.',
    },
    {
      title: 'Diagnostic Labs',
      description: 'Sample lifecycle, machine integration, reporting, and billing automation.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Built for Every Healthcare Model
          </h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-accent-500"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{model.title}</h3>
              <p className="text-gray-600 leading-relaxed">{model.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-accent-500 to-accent-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Healthcare Operations?
        </h2>
        <p className="text-xl text-accent-100 mb-8">
          Join leading hospitals who trust CuraBiz for intelligent healthcare management
        </p>
        <a
          href="/#contact"
          className="inline-block bg-white text-accent-600 font-semibold px-8 py-4 rounded-lg hover:bg-accent-50 transition-all shadow-lg hover:shadow-xl"
        >
          Get Started Today
        </a>
      </div>
    </section>
  );
}
