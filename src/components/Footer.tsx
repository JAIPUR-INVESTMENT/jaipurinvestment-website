import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+917850055313';
    const message = 'Hello! I am interested in your premium properties. Could you please provide more information?';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const quickLinks = [
    { name: 'Buy Properties', href: '#' },
    { name: 'Rent Properties', href: '#' },
    { name: 'Post Property', href: 'https://forms.gle/bpQpfiCrdkQFfCSN8', target: '_blank' },
    { name: 'Investment Advisory', href: '#', onClick: handleWhatsAppClick, target: '_blank' }
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pb-24 md:pb-0">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-6">
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
                JAIPUR INVESTMENT
              </div>
              <p className="text-blue-100 leading-relaxed mb-6 max-w-md">
                Your premier destination for luxury real estate. We specialize in exclusive properties
                that define elegance, comfort, and sophistication for discerning clients worldwide.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Headquarters</div>
                  <div className="text-blue-100 text-sm">VKI Road Number 17, Jaipur</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">24/7 Premium Line</div>
                  <div className="text-blue-100 text-sm">+917850055313</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">VIP Support</div>
                  <div className="text-blue-100 text-sm">jaipurinvestment29@gmail.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.target || '_self'}
                    onClick={link.onClick}
                    className="text-blue-100 hover:text-yellow-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-400">Company</h3>
            <ul className="space-y-3">
              {['Luxury Rentals', 'Exclusive Listings', 'Property Valuation', 'Legal Support', 'Concierge Service', 'Investment Planning'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-blue-100 hover:text-yellow-400 transition-colors duration-300 text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-blue-700 bg-blue-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            {/* Copyright */}
            <div className="text-blue-200 text-sm mb-4 md:mb-0 text-center md:text-left md:mr-auto">
              © 2025 Jaipur Investment. All rights reserved. | <a target='_blank' href="/PrivacyPolicy.html" className="underline hover:text-yellow-400">Privacy Policy</a> | <a href="#" className="underline hover:text-yellow-400">Terms of Service</a>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/share/16rcEDD6z5/' },
                { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/jaipurinvestment_29' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  target='_blank'
                  href={href}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-blue-200 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
