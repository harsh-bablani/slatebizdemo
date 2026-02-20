import { useState, useEffect, useRef } from 'react';
import { Target, Lightbulb, Heart, Shield, TrendingUp, Users, Globe, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <WhoWeAreSection />
      <FoundersSection />
      <WhatWeDoSection />
      <OurApproachSection />
      <WhyChooseSection />
      <VisionMissionSection />
      <CommitmentSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">About SlateBiz</h1>
        <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
          Building intelligent digital ecosystems for modern businesses
        </p>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-20 bg-primary-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-500 rounded-full blur-3xl opacity-20"></div>
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
      <p className="text-primary-100 font-medium leading-relaxed">
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

function FoundersSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Meet Our Founders</h2>
        <div className="flex flex-wrap justify-center gap-16">
          <div className="flex flex-col items-center">
            <img
              src="/Lokesh Sharma.png"
              alt="Lokesh Sharma"
              className="w-52 h-52 rounded-full object-cover shadow-lg mb-6 border-4 border-white"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Lokesh Verma</h3>
            <p className="text-lg text-primary-500 font-medium">Founder</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/Umang Garg.jpeg"
              alt="Umang Garg"
              className="w-52 h-52 rounded-full object-cover shadow-lg mb-6 border-4 border-white"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Umang Garg</h3>
            <p className="text-lg text-primary-500 font-medium">Co-founder</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoWeAreSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Who We Are</h2>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              SlateBiz is a premium enterprise software and digital transformation company delivering intelligent, scalable, and secure technology solutions for modern businesses. We specialize in building industry-specific ERP systems and digital platforms that simplify operations, improve efficiency, and accelerate growth.
            </p>

            <p>
              With a strong foundation in innovation and domain expertise, SlateBiz creates powerful software ecosystems that help organizations streamline workflows, manage data intelligently, and make faster, smarter business decisions.
            </p>

            <p>
              Our solutions are trusted by enterprises across jewellery, healthcare, retail, manufacturing, and service industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeDoSection() {
  const services = [
    'Enterprise Resource Planning (ERP) Systems',
    'Jewellery Management Software (JewelBiz)',
    'Hospital Management Systems (CuraBiz)',
    'Custom Business Automation Platforms',
    'Digital Transformation & Growth Solutions',
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">What We Do</h2>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            At SlateBiz, we design and develop:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm"
              >
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            Our platforms are built using modern technologies, cloud infrastructure, and enterprise-grade security to ensure high performance, reliability, and scalability.
          </p>
        </div>
      </div>
    </section>
  );
}

function OurApproachSection() {
  const steps = [
    {
      title: 'Understand the Industry',
      description: 'Deep domain research and workflow analysis',
      icon: Target,
    },
    {
      title: 'Design Intelligent Systems',
      description: 'User-friendly, automation-ready platforms',
      icon: Lightbulb,
    },
    {
      title: 'Build Secure & Scalable Solutions',
      description: 'Enterprise-grade architecture',
      icon: Shield,
    },
    {
      title: 'Deliver Measurable Results',
      description: 'Productivity, efficiency, and growth',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We follow a consultative and innovation-driven approach
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-500 rounded-full mb-4">
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const reasons = [
    {
      icon: Award,
      title: 'Industry-Specific ERP Expertise',
      description: 'Deep domain knowledge across multiple sectors',
    },
    {
      icon: Shield,
      title: 'Secure & Compliance-Ready Architecture',
      description: 'Enterprise-grade security standards',
    },
    {
      icon: Globe,
      title: 'Scalable Cloud-Based Solutions',
      description: 'Built to grow with your business',
    },
    {
      icon: TrendingUp,
      title: 'High Performance & Real-Time Analytics',
      description: 'Instant insights for faster decisions',
    },
    {
      icon: Users,
      title: 'Dedicated Support & Long-Term Partnership',
      description: 'We are with you every step of the way',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose SlateBiz</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <reason.icon className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisionMissionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white p-10 rounded-2xl">
            <Target className="w-12 h-12 mb-6" />
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg leading-relaxed text-primary-50">
              To become a global leader in intelligent enterprise software, enabling businesses to transform digitally and operate with speed, accuracy, and confidence.
            </p>
          </div>

          <div className="bg-gradient-to-br from-accent-500 to-accent-700 text-white p-10 rounded-2xl">
            <Heart className="w-12 h-12 mb-6" />
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed text-accent-50">
              To deliver world-class ERP and digital solutions that empower organizations with automation, data intelligence, and seamless integration, driving sustainable business growth and operational excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommitmentSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Commitment</h2>
        <p className="text-xl leading-relaxed text-gray-300">
          SlateBiz is committed to building future-ready digital ecosystems that combine technology, innovation, and business intelligence. We aim to be a trusted technology partner for enterprises looking to modernize operations, enhance customer experience, and achieve long-term success in a digital-first world.
        </p>
      </div>
    </section>
  );
}
