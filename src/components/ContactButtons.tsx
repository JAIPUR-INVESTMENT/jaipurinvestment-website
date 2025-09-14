import React from 'react';
import { Mail } from 'lucide-react';
import WhatsAppIcon from '../assets/WhatsApp.svg';

const ContactButtons = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+917850055313';
    const message = 'Hello! I am interested in your premium properties. Could you please provide more information?';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleMailClick = () => {
    const mailtoUrl = 'mailto:jaipurinvestment29@gmail.com';
    window.location.href = mailtoUrl;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
        <button
            onClick={handleMailClick}
            className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group"
            aria-label="Contact us via Email"
        >
            <Mail className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute right-full mr-4 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
            </div>
        </button>
      <button
        onClick={handleWhatsAppClick}
        className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Contact us on WhatsApp"
      >
        <img src={WhatsAppIcon} alt="WhatsApp" className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        <div className="absolute right-full mr-4 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat with us on WhatsApp
          <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
        </div>
      </button>
    </div>
  );
};

export default ContactButtons;
