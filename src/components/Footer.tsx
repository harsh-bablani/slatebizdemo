import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-lg font-bold text-blue-400 mb-4">
              SlateBiz Softwares
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Leading enterprise software development company specializing in intelligent, scalable, and secure digital ecosystems.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-sm hover:text-blue-400 transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="text-sm hover:text-blue-400 transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/xjewel-erp" className="text-sm hover:text-blue-400 transition-colors">
                  xJewel ERP
                </Link>
              </li>
              <li>
                <Link to="/xcura-hms" className="text-sm hover:text-blue-400 transition-colors">
                  xCura HMS
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  DH-079, 1st Floor Ansal Sushant City -1, Kalwar Road, Jaipur, Rajasthan 303706, India
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">925737668</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">info@slatebiz.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} SlateBiz Softwares. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
