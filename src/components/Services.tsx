import React from 'react';
import { Home, Key, TrendingUp, Shield, Users, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Property Acquisition',
      description: 'Expert guidance in finding and acquiring premium properties that match your exact requirements and investment goals.',
      features: ['Market Analysis', 'Property Valuation', 'Negotiation Support']
    },
    {
      icon: Key,
      title: 'Luxury Rentals',
      description: 'Comprehensive rental services for high-end properties with white-glove property management and tenant screening.',
      features: ['Tenant Screening', 'Property Management', '24/7 Support']
    },
    {
      icon: TrendingUp,
      title: 'Investment Advisory',
      description: 'Strategic investment advice and market insights to maximize your real estate portfolio returns and growth.',
      features: ['Portfolio Analysis', 'Market Insights', 'ROI Optimization']
    },
    {
      icon: Shield,
      title: 'Legal Support',
      description: 'Complete legal assistance for all property transactions, ensuring seamless and secure real estate deals.',
      features: ['Contract Review', 'Due Diligence', 'Closing Support']
    },
    {
      icon: Users,
      title: 'Personal Concierge',
      description: 'Dedicated personal service to handle every aspect of your property journey with attention to detail.',
      features: ['Personal Agent', 'Custom Tours', 'Priority Service']
    },
    {
      icon: Award,
      title: 'Exclusive Access',
      description: 'Access to off-market properties and exclusive listings not available to the general public.',
      features: ['Private Listings', 'Early Access', 'VIP Treatment']
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = '+917850055313';
    const message = 'Hello! I am interested in scheduling a consultation to find my perfect property.';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 border-2 border-yellow-400 rotate-45 transform"></div>
        <div className="absolute top-40 right-20 w-32 h-32 border-2 border-yellow-400 rotate-12 transform"></div>
        <div className="absolute bottom-40 left-32 w-28 h-28 border-2 border-yellow-400 rotate-45 transform"></div>
        <div className="absolute bottom-20 right-10 w-36 h-36 border-2 border-yellow-400 rotate-12 transform"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Premium
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent ml-3">
              Services
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Unparalleled expertise and personalized service for discerning clients
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-yellow-200 transform hover:-translate-y-2"
            >
              {/* Service Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <a href="#" className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors duration-300 text-sm uppercase tracking-wider">
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Find Your Perfect Property?
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Contact our premium service team for personalized assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-yellow-600 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
