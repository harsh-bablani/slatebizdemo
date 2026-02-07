import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0">
            <div className="text-xl font-bold text-blue-600 whitespace-nowrap">
              SlateBiz Softwares
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about')
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About
            </Link>

            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isProductsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  <Link
                    to="/xjewel-erp"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <div className="font-medium">xJewel ERP</div>
                    <div className="text-xs text-gray-500 mt-1">Jewellery Management</div>
                  </Link>
                  <Link
                    to="/xcura-hms"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <div className="font-medium">xCura HMS</div>
                    <div className="text-xs text-gray-500 mt-1">Hospital Management</div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/blogs"
              className={`text-sm font-medium transition-colors ${
                isActive('/blogs')
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Blogs
            </Link>

            <Link
              to="/#contact"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname !== '/') {
                  window.location.href = '/#contact';
                } else {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact
            </Link>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <Link
              to="/about"
              className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="py-2">
              <div className="text-sm font-medium text-gray-700 mb-2">Products</div>
              <Link
                to="/xjewel-erp"
                className="block pl-4 py-2 text-sm text-gray-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                xJewel ERP
              </Link>
              <Link
                to="/xcura-hms"
                className="block pl-4 py-2 text-sm text-gray-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                xCura HMS
              </Link>
            </div>
            <Link
              to="/blogs"
              className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </Link>
            <a
              href="#contact"
              className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
