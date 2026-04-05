import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const location = useLocation();

  const isContact = location.pathname === '/contact';
  const isAbout = location.pathname === '/about';
  const isBlueHeader = isAbout || isContact;

  const headerBgClass = isBlueHeader
    ? "bg-[#166C96] border-none shadow-none"
    : "bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800";

  const navTextClass = isBlueHeader
    ? "text-white hover:text-white/80"
    : "text-gray-800 dark:text-gray-200 hover:text-indigo-600";

  const btnClass = isBlueHeader
    ? "bg-white text-[#166C96] hover:bg-gray-50 shadow-sm"
    : "bg-[#5c6ee1] text-white hover:bg-[#4a58b8] shadow-sm";

  return (
    <header className={`${headerBgClass} sticky top-0 z-50 transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Left Navigation Items */}
          <nav className="hidden md:flex items-center space-x-10">
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                className={`flex items-center space-x-1 text-[13px] font-medium transition-colors tracking-widest uppercase ${navTextClass}`}
              >
                <Link
                  to="/products"
                  className={navTextClass}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsProductsDropdownOpen(!isProductsDropdownOpen);
                  }}
                >
                  Products
                </Link>
                <ChevronDown className={`w-4 h-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isProductsDropdownOpen && (
                <div className={`absolute top-full left-0 mt-2 w-64 rounded-lg shadow-lg border ${isBlueHeader ? 'bg-white border-gray-200' : 'bg-white border-gray-200'} z-50`}>
                  <div className="py-2">
                    <Link
                      to="/xjewel-erp"
                      className={`block px-4 py-2 text-sm ${isBlueHeader ? 'text-gray-800 hover:bg-gray-100' : 'text-gray-800 hover:bg-gray-100'} transition-colors`}
                      onClick={() => setIsProductsDropdownOpen(false)}
                    >
                      Jewelry Management Software
                    </Link>
                    <Link
                      to="/xcurabiz-hms"
                      className={`block px-4 py-2 text-sm ${isBlueHeader ? 'text-gray-800 hover:bg-gray-100' : 'text-gray-800 hover:bg-gray-100'} transition-colors`}
                      onClick={() => setIsProductsDropdownOpen(false)}
                    >
                      Hospital Management Software
                    </Link>
                    <Link
                      to="/xretail-erp"
                      className={`block px-4 py-2 text-sm ${isBlueHeader ? 'text-gray-800 hover:bg-gray-100' : 'text-gray-800 hover:bg-gray-100'} transition-colors`}
                      onClick={() => setIsProductsDropdownOpen(false)}
                    >
                      Retail Management Software
                    </Link>
                    <Link
                      to="/products"
                      className={`block px-4 py-2 text-sm font-medium ${isBlueHeader ? 'text-blue-600 hover:bg-gray-100' : 'text-blue-600 hover:bg-gray-100'} transition-colors`}
                      onClick={() => setIsProductsDropdownOpen(false)}
                    >
                      Get Customised Erp System
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/services"
              className={`text-[13px] font-medium transition-colors tracking-widest uppercase ${navTextClass}`}
            >
              Services
            </Link>

            <Link
              to="/about"
              className={`text-[13px] font-medium transition-colors tracking-widest uppercase ${navTextClass}`}
            >
              About Us
            </Link>
          </nav>

          {/* Right Navigation Items */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link
              to="/blogs"
              className={`text-[13px] font-medium transition-colors tracking-widest uppercase ${navTextClass}`}
            >
              Blogs
            </Link>

            <Link
              to="/contact"
              className={`text-[13px] font-medium transition-colors tracking-widest uppercase ${navTextClass}`}
            >
              Contact
            </Link>

            <Link
              to="/"
              className={`text-[13px] font-medium transition-colors tracking-widest uppercase ${navTextClass}`}
            >
              Home
            </Link>

            <Link
              to="/demo"
              className={`flex items-center justify-center px-6 py-[10px] text-[13px] font-semibold rounded-md transition-colors tracking-widest uppercase ${btnClass}`}
            >
              Book A Demo
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center justify-between w-full">
            <Link
              to="/"
              className={`text-[13px] font-medium transition-colors tracking-widest uppercase ${navTextClass}`}
            >
              Home
            </Link>
            <div className="flex items-center space-x-4">
              <button
                className={`p-2 transition-colors ${navTextClass}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t ${isBlueHeader ? 'border-white/20' : 'border-gray-100 dark:border-gray-800'}`}>
            <div className="space-y-4">
              <Link
                to="/products"
                className={`block px-4 text-[13px] font-medium tracking-widest uppercase ${navTextClass}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>

              <Link
                to="/services"
                className={`block px-4 text-[13px] font-medium tracking-widest uppercase ${navTextClass}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>

              <Link
                to="/about"
                className={`block px-4 text-[13px] font-medium tracking-widest uppercase ${navTextClass}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>

              <Link
                to="/blogs"
                className={`block px-4 text-[13px] font-medium tracking-widest uppercase ${navTextClass}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>

              <Link
                to="/contact"
                className={`block px-4 text-[13px] font-medium tracking-widest uppercase ${navTextClass}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <Link
                to="/"
                className={`block px-4 text-[13px] font-medium tracking-widest uppercase ${navTextClass}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              <div className="px-4 pt-4">
                <Link
                  to="/demo"
                  className={`block w-full text-center px-6 py-3 text-[13px] font-semibold rounded-md transition-colors tracking-widest uppercase ${btnClass}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book A Demo
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
