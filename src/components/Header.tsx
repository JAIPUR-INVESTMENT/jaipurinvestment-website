import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import logo from '../../logo.jpeg';

const Header = () => {
  return (
    <header className="bg-primary-dark sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-20">
          {/* Left Section: Contact Info (Desktop Only) */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden md:flex items-center space-x-6">
            <a href="tel:+917850055313" className="flex items-center text-accent-gold hover:text-yellow-400 transition-colors duration-300 text-sm">
              <Phone className="w-4 h-4 mr-2" />
              +917850055313
            </a>
            <a href="mailto:jaipurinvestment29@gmail.com" className="flex items-center text-accent-gold hover:text-yellow-400 transition-colors duration-300 text-sm">
              <Mail className="w-4 h-4 mr-2" />
              jaipurinvestment29@gmail.com
            </a>
          </div>

          {/* Center Section: Logo */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Jaipur Investment Logo" className="h-16" />
            </Link>
          </div>

          {/* Right Section: CTA Button */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            {/* CTA Button for desktop*/}
            <div className="hidden md:block">
                <a href='https://forms.gle/bpQpfiCrdkQFfCSN8' target='_blank'>
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-xl px-5 py-2.5 transition-all duration-300">
                Post Property
              </button>
              </a>
            </div>
            {/* CTA Button for mobile*/}
            <div className="md:hidden">
              <a href='https://forms.gle/bpQpfiCrdkQFfCSN8' target='_blank'>
                <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-xl px-4 py-2 text-sm transition-all duration-300">
                  Post Property
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* Running Banner */}
      <div className="bg-banner-bg text-banner-text text-lg py-2 overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee flex-shrink-0 flex items-center">
            <span className="mx-4 font-bold from-yellow-500 to-yellow-600">NO BROKERAGE   TRUSTED PROPERTIES!!</span>
            <span className="mx-4 font-bold from-yellow-500 to-yellow-600">NO BROKERAGE   TRUSTED PROPERTIES!!</span>
            <span className="mx-4 font-bold from-yellow-500 to-yellow-600">NO BROKERAGE   TRUSTED PROPERTIES!!</span>
            <span className="mx-4 font-bold from-yellow-500 to-yellow-600">NO BROKERAGE   TRUSTED PROPERTIES!!</span>
        </div>
        <div className="animate-marquee flex-shrink-0 flex items-center" aria-hidden="true">
            <span className="mx-4 font-bold">NO BROKERAGE       TRUSTED PROPERTIES!!</span>
            <span className="mx-4 font-bold">NO BROKERAGE       TRUSTED PROPERTIES!!</span>
            <span className="mx-4 font-bold">NO BROKERAGE       TRUSTED PROPERTIES!!</span>
            <span className="mx-4 font-bold">NO BROKERAGE       TRUSTED PROPERTIES!!</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
