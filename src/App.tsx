import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import XJewelERP from './pages/XJewelERP';
import XCuraHMS from './pages/XCuraHMS';
import XRetailERP from './pages/XRetailERP';
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/xjewel-erp" element={<XJewelERP />} />
            <Route path="/xcurabiz-hms" element={<XCuraHMS />} />
            <Route path="/xretail-erp" element={<XRetailERP />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
