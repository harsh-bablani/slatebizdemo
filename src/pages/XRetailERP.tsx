import React from 'react';
import { Shield, Database, Globe, FileText, Users, Package, ShoppingCart, Building2, Receipt, BarChart3, Store, TrendingUp, Smartphone, CreditCard } from 'lucide-react';
import { useState } from 'react';

export default function XRetailERP() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BusinessModelSection />
      <ComparisonSection />
      <FeaturesSection />
      <FeaturesGridSection />
      <FeatureHighlightSection />
      <CTAFAQSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '80vh' }}>
      {/* Background Image - Use herobg.png */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/herobg.png)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          
          {/* Empty space where tagline was */}
          <div style={{ height: '40px' }}></div>

          {/* Main Heading */}
          <h1 
            className="font-semibold"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: '1.1',
              fontFamily: 'Inter, system-ui, sans-serif',
              animation: 'fadeInUp 0.8s ease-out both',
              marginTop: '0px'
            }}
          >
            <span style={{ color: '#000000' }}>Complete Retail Management Software</span>
          </h1>

          {/* Additional Heading */}
          <h2 
            className="font-semibold"
            style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
              lineHeight: '1.2',
              fontFamily: 'Inter, system-ui, sans-serif',
              animation: 'fadeInUp 0.8s ease-out 0.2s both',
              marginTop: '16px',
              color: '#0d3b75'
            }}
          >
            Retail Management Software Built to Sell, Manage & Scale
          </h2>

          {/* Subheading */}
          <p 
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              color: '#808080',
              animation: 'fadeInUp 0.8s ease-out 0.4s both',
              marginBottom: '40px'
            }}
          >
            Retail Excellence, Intelligently Managed. A complete Retail ERP solution for multi-chain stores, supermarkets, and retail outlets.
          </p>

          {/* Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            style={{
              animation: 'fadeInUp 0.8s ease-out 0.6s both'
            }}
          >
            <button 
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors shadow-lg"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Book Demo
            </button>
            <button 
              className="px-8 py-3 rounded-md font-medium transition-colors hover:bg-[#0a2d5a]"
              style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                backgroundColor: '#0d3b75',
                color: '#ffffff',
                border: 'none'
              }}
            >
              Start Free Trial
            </button>
          </div>

          {/* Dashboard Image */}
          <div 
            className="flex justify-center mt-12"
            style={{
              animation: 'fadeInUp 0.8s ease-out 0.8s both'
            }}
          >
            <img 
              src="/RM.jpeg" 
              alt="Retail ERP Dashboard" 
              className="w-full h-auto"
              style={{ 
                borderRadius: '16px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                maxWidth: '800px'
              }}
            />
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

function BusinessModelSection() {
  return (
    <section className="w-full bg-[#f3f6fb] py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[34px] md:text-[40px] font-semibold text-gray-900">
            Built for Every Retail Business Model
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Whether you run a single boutique or a multi-chain retail empire, our software adapts to your workflow.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">

          {/* Multi-Chain Retailers */}
          <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#1e3a8a] rounded-lg flex items-center justify-center mb-5">
              <Store className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 whitespace-nowrap">Multi-Chain Retailers</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
              Centralized operations, multi-store visibility, and inventory analytics for complex retail environments.
            </p>
          </div>

          {/* E-commerce Stores */}
          <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#1e3a8a] rounded-lg flex items-center justify-center mb-5">
              <ShoppingCart className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 whitespace-nowrap">E-commerce Stores</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
              Online inventory management, order processing, and integration with marketplaces and shipping platforms.
            </p>
          </div>

          {/* Boutiques & Specialty Stores */}
          <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#1e3a8a] rounded-lg flex items-center justify-center mb-5">
              <Package className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 whitespace-nowrap">Boutiques & Specialty Stores</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
              Fast POS, customer management, and specialized inventory for boutique retail operations.
            </p>
          </div>

          {/* HR Consultancy Firms */}
          <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#1e3a8a] rounded-lg flex items-center justify-center mb-5">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 whitespace-nowrap">HR Consultancy Firms</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
              Workforce management, payroll processing, and recruitment solutions for scaling retail networks.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="w-full bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            The Old Way vs.{" "}
            <span className="text-blue-600">The Modern Retail Way</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Stop losing sales to operational chaos. Upgrade to a system that works as flawlessly as your retail business.
          </p>
        </div>

        {/* Comparison Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden shadow-sm">

          {/* LEFT - Modern Retail */}
          <div className="bg-gradient-to-b from-[#1e5eff] to-[#0d3b75] text-white p-10">
            <h3 className="text-lg font-semibold mb-6 tracking-wide">
              MODERN RETAIL ERP
            </h3>

            <ul className="space-y-5 text-sm">
              {[
                "Real-time, accurate inventory tracking",
                "Integrated POS and online sales channels",
                "Automated reordering and stock alerts",
                "Centralized customer management",
                "Complete sales analytics and reporting",
                "Multi-store inventory synchronization",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="bg-white text-blue-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
                    ✓
                  </span>
                  <span className="opacity-90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT - Traditional */}
          <div className="bg-white p-10">
            <h3 className="text-lg font-semibold mb-6 text-gray-900 tracking-wide">
              TRADITIONAL METHODS
            </h3>

            <ul className="space-y-5 text-sm text-gray-600">
              {[
                "Manual inventory leads to stockouts and overstocking",
                "Disconnected POS and online systems",
                "No real-time visibility across stores",
                "Limited customer insights and tracking",
                "Manual reporting and data entry errors",
                "Siloed operations across locations",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="bg-gray-200 text-gray-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
                    ✕
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("operations");

  const operations = [
    ["Point of Sale (POS)", "Fast, reliable POS system with barcode scanning, multiple payment methods, and receipt printing.", ShoppingCart],
    ["Inventory Management", "Real-time stock tracking, automated reordering, and multi-location inventory control.", Package],
    ["Customer Management", "Complete customer profiles, purchase history, loyalty programs, and targeted marketing.", Users],
    ["Supplier Management", "Vendor relationships, purchase orders, and automated procurement workflows.", Building2],
    ["Multi-Store Operations", "Manage multiple retail locations from a single dashboard with centralized control.", Store],
    ["E-commerce Integration", "Seamless integration with online stores, marketplaces, and shipping platforms.", Globe],
    ["Reporting & Analytics", "Sales reports, inventory analytics, customer insights, and business intelligence.", BarChart3],
    ["Mobile App Support", "Access your retail operations on-the-go with our mobile management app.", Smartphone],
  ];

  const financial = [
    ["Sales & Revenue Tracking", "Complete sales tracking, revenue analysis, and performance metrics across all channels.", Receipt],
    ["Financial Control", "Expense management, profit analysis, and comprehensive financial reporting.", TrendingUp],
    ["Tax Management", "Automated tax calculations, multi-tax support, and compliance reporting.", FileText],
    ["Payroll Integration", "Staff scheduling, payroll processing, and performance management.", Users],
    ["Cost Analysis", "Detailed cost tracking, margin analysis, and profitability insights.", BarChart3],
    ["Budget Planning", "Annual budgeting, forecast planning, and financial goal tracking.", Database],
    ["Audit Trails", "Complete transaction history, audit logs, and compliance documentation.", Shield],
    ["Payment Processing", "Multiple payment gateways, secure transactions, and automated reconciliation.", CreditCard],
  ];

  const data = activeTab === "operations" ? operations : financial;

  return (
    <section className="w-full bg-[#f8fafc] py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Powerful Features for Every Retail Operation
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Stop losing efficiency to operational chaos. Upgrade to a system that works flawlessly.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="bg-gray-200 rounded-full p-1 flex">
            <button
              onClick={() => setActiveTab("operations")}
              className={`px-6 py-2 text-sm rounded-full transition ${
                activeTab === "operations"
                  ? "bg-white text-blue-600 shadow"
                  : "text-gray-500"
              }`}
            >
              Operations & Sales
            </button>

            <button
              onClick={() => setActiveTab("financial")}
              className={`px-6 py-2 text-sm rounded-full transition ${
                activeTab === "financial"
                  ? "bg-white text-blue-600 shadow"
                  : "text-gray-500"
              }`}
            >
              Financial & Analytics
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map(([itemTitle, itemDesc, itemIcon], i) => {
            const Title = itemTitle as string;
            const Desc = itemDesc as string;
            const Icon = itemIcon as any;
            return (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start gap-4">

                  {/* ICON */}
                  <div className="w-10 h-10 bg-blue-50 flex items-center justify-center rounded-lg">
                    {React.createElement(Icon, { className: "w-5 h-5 text-blue-600" })}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 whitespace-nowrap truncate" title={Title}>{Title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{Desc}</p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

function FeaturesGridSection() {
  const features = [
    {
      icon: "🛍️",
      title: "POINT OF SALE",
      desc: "Advanced POS system with barcode scanning, multiple payment options, and instant receipt generation.",
    },
    {
      icon: "📦",
      title: "INVENTORY CONTROL",
      desc: "Real-time stock tracking, automated reordering, and multi-location inventory management.",
    },
    {
      icon: "👥",
      title: "CUSTOMER CRM",
      desc: "Complete customer relationship management with loyalty programs and purchase history.",
    },
    {
      icon: "📊",
      title: "SALES ANALYTICS",
      desc: "Comprehensive sales reporting, trend analysis, and business intelligence dashboard.",
    },
    {
      icon: "🏪",
      title: "MULTI-STORE SUPPORT",
      desc: "Manage multiple retail locations from a single centralized platform.",
    },
    {
      icon: "🌐",
      title: "E-COMMERCE INTEGRATION",
      desc: "Seamless integration with online stores and marketplace platforms.",
    },
  ];

  return (
    <section className="w-full bg-[#f3f6fb] py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[34px] md:text-[40px] font-semibold text-gray-900">
            Everything you need to run a RETAIL EMPIRE
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            A complete suite of tools engineered for the unique complexities of the retail industry.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition hover:-translate-y-1"
            >
              {/* ICON BOX */}
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <span className="text-blue-600 text-xl">
                  {item.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[14px] font-semibold text-gray-900 tracking-wide mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-[14px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function FeatureHighlightSection() {
  return (
    <section className="w-full bg-[#f3f6fb] py-24 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT - Dashboard */}
        <div className="relative flex justify-center">

          {/* Background Glow */}
          <div className="absolute w-[90%] h-[90%] bg-gradient-to-r from-blue-200 to-indigo-200 rounded-3xl blur-3xl opacity-40"></div>

          {/* Main Image */}
          <img
            src="/Dashboard.png"
            alt="Dashboard"
            className="relative rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] w-full max-w-[500px]"
          />

          {/* Floating Badge */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#0d3b75] text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3">
            <span className="text-lg">📈</span>
            <div>
              <p className="text-xs opacity-80">Insight</p>
              <p className="text-sm font-medium">45% Sales Growth</p>
            </div>
          </div>

        </div>

        {/* RIGHT - Content */}
        <div>

          {/* Label */}
          <p className="text-xs tracking-widest text-gray-500 mb-3">
            FEATURES
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 leading-snug">
            Best Retail Management Software in India
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-[15px] leading-relaxed">
            Managing a retail business requires precision. From tracking inventory to managing customer relationships, generic retail systems fall short.
            <br /><br />
            Our Retail ERP is engineered from the ground up to be the ultimate retail management solution. Whether you run a single boutique or a multi-city retail chain, our cloud-based platform ensures your data is secure, accessible, and actionable.
            <br /><br />
            Features like integrated POS, inventory management, and customer CRM make our software the preferred choice for modern retailers looking to scale.
          </p>

        </div>

      </div>
    </section>
  );
}

function CTAFAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Is your retail software suitable for small boutiques?",
      a: "Yes, our software scales from single boutiques to large multi-chain retail stores with flexible modules and pricing.",
    },
    { q: "Does it support e-commerce integration?", a: "" },
    { q: "What about multi-store inventory management?", a: "" },
    { q: "Can it handle multiple payment methods?", a: "" },
    { q: "Is training and support included?", a: "" },
  ];

  return (
    <section className="w-full">

      {/* CTA SECTION */}
      <div className="w-full bg-gradient-to-r from-[#0d3b75] to-[#1e5eff] py-20 px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Ready to Modernize Your Retail Operations?
          </h2>

          <p className="text-blue-100 mb-8">
            Join leading retailers who have increased their sales by 45% with our Retail ERP.
          </p>

          <button className="bg-white text-[#0d3b75] px-6 py-3 rounded-md font-medium shadow hover:shadow-lg transition">
            Request Demo
          </button>

        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="w-full bg-[#f3f6fb] py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Frequently Asked Questions
            </h3>

            <p className="text-gray-500 mb-6">
              Have any questions about our retail management system? You're in the right place.
            </p>

            <button className="bg-[#0d3b75] text-white px-5 py-2 rounded-md text-sm">
              VIEW ALL FAQ
            </button>
          </div>

          {/* RIGHT SIDE (Accordion) */}
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="border-b border-gray-300 pb-4"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === i ? -1 : i)
                  }
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="text-gray-800 font-medium">
                    {item.q}
                  </span>
                  <span className="text-xl">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>

                {openIndex === i && item.a && (
                  <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
