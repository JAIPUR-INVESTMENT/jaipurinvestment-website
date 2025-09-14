import React, { useState } from 'react';
import { Property } from '../hooks/useProperties';
import {
  MapPin, Bed, Bath, Square, Star, Compass, Eye, Play, X,
  ChevronLeft, ChevronRight, Car, Building, Calendar, Key,
  Droplets, Shield, Wifi, Dumbbell, TreePine, ShoppingBag, Phone,
  Mail, MessageCircle, Share2, Calculator, CreditCard
} from 'lucide-react';

interface PropertyDetailsProps {
  property: Property;
}
import ji from '../assets/ji.jpeg'; // Added import for ji.jpeg

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ property }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showImageGallery, setShowImageGallery] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.photos.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.photos.length) % property.photos.length);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+917850055313';
    const message = `Hello! I am interested in ${property.title} (ID: ${property.id}). Could you please provide more information?`;
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleShare = async () => {
    const shareData = {
      title: property.title,
      text: `Check out this amazing property: ${property.title}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback for browsers that do not support the Web Share API
        await navigator.clipboard.writeText(window.location.href);
        alert('Property link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing property:', error);
      alert('Could not share property.');
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'amenities', label: 'Amenities', icon: Star },
    { id: 'pricing', label: 'Pricing', icon: Calculator },
    { id: 'location', label: 'Location', icon: MapPin }
  ];

  return (
    <div className="bg-white rounded-2xl max-w-7xl w-full overflow-hidden flex flex-col shadow-2xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6 flex justify-between items-center">
        <div className="flex-1">
          <div className="flex items-center space-x-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-bold">{property.title}</h2>
            {property.premium && (
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                <Star className="w-3 h-3 mr-1 fill-current" />
                NO BROKERAGE
              </div>
            )}
          </div>
          <div className="flex items-center space-x-6 text-blue-100">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-yellow-400" />
              <span>{property.location.address}</span>
            </div>
            <div className="text-sm">ID: {property.id}</div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="text-3xl font-bold text-yellow-400">{property.price}</div>
            <div className="text-sm text-blue-200">{property.priceDetails.pricePerSqFt}/sq ft</div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="relative mb-8">
              <div className="relative h-96 rounded-xl overflow-hidden">
                <img
                  src={property.photos[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => setShowImageGallery(true)}
                />

                {/* Navigation Arrows */}
                {property.photos.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Actions */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button
                    onClick={handleShare}
                    className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-300"
                  >
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Video Indicator */}
                {property.videos.length > 0 && (
                  <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-2 rounded-full flex items-center">
                    <Play className="w-4 h-4 mr-2 fill-current" />
                    <span className="text-sm">Virtual Tour Available</span>
                  </div>
                )}
              </div>

              {/* Thumbnail Strip */}
              {property.photos.length > 1 && (
                <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
                  {property.photos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`${property.title} ${index + 1}`}
                      className={`w-20 h-20 object-cover rounded-lg cursor-pointer transition-all duration-300 flex-shrink-0 ${
                        index === currentImageIndex ? 'ring-2 ring-yellow-500' : 'opacity-70 hover:opacity-100'
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Tabs Navigation */}
            <div className="border-b border-gray-200 mb-8">
              <div className="flex space-x-8 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-semibold transition-all duration-300 whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-yellow-500 text-yellow-600'
                        : 'border-transparent text-gray-600 hover:text-blue-900'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="space-y-8">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  {/* Property Description */}
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Property Description</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {property.description}
                    </p>
                  </div>

                  {/* Key Specifications */}
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-6">Key Specifications</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
                        <Bed className="w-8 h-8 text-blue-900 mx-auto mb-3" />
                        <div className="text-2xl font-bold text-blue-900">{property.bedrooms}</div>
                        <div className="text-sm text-gray-600">Bedrooms</div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
                        <Bath className="w-8 h-8 text-blue-900 mx-auto mb-3" />
                        <div className="text-2xl font-bold text-blue-900">{property.bathrooms}</div>
                        <div className="text-sm text-gray-600">Bathrooms</div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
                        <Square className="w-8 h-8 text-blue-900 mx-auto mb-3" />
                        <div className="text-2xl font-bold text-blue-900">{property.area}</div>
                        <div className="text-sm text-gray-600">Sq Ft</div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
                        <Car className="w-8 h-8 text-blue-900 mx-auto mb-3" />
                        <div className="text-2xl font-bold text-blue-900">{property.parking.split(' ')[0]}</div>
                        <div className="text-sm text-gray-600">Parking</div>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Specifications */}
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-6">Detailed Specifications</h3>
                    <div className="bg-gray-50 rounded-xl p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600 flex items-center">
                              <Building className="w-4 h-4 mr-2" />
                              Property Type
                            </span>
                            <span className="font-semibold text-blue-900">{property.propertyType}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600 flex items-center">
                              <Key className="w-4 h-4 mr-2" />
                              Furnishing
                            </span>
                            <span className="font-semibold text-blue-900">{property.furnishing}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600 flex items-center">
                              <Car className="w-4 h-4 mr-2" />
                              Parking
                            </span>
                            <span className="font-semibold text-blue-900">{property.parking}</span>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600 flex items-center">
                              <Building className="w-4 h-4 mr-2" />
                              Floor
                            </span>
                            <span className="font-semibold text-blue-900">{property.floor}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600 flex items-center">
                              <Calendar className="w-4 h-4 mr-2" />
                              Age
                            </span>
                            <span className="font-semibold text-blue-900">{property.age}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600 flex items-center">
                              <Key className="w-4 h-4 mr-2" />
                              Possession
                            </span>
                            <span className="font-semibold text-blue-900">{property.possession}</span>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600 flex items-center">
                              <Compass className="w-4 h-4 mr-2" />
                              Direction
                            </span>
                            <span className="font-semibold text-blue-900">{property.direction}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600 flex items-center">
                              <Eye className="w-4 h-4 mr-2" />
                              Facing
                            </span>
                            <span className="font-semibold text-blue-900">{property.face}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600 flex items-center">
                              <Square className="w-4 h-4 mr-2" />
                              Plot Type
                            </span>
                            <span className="font-semibold text-blue-900">{property.sidePlane}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-6">Additional Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 rounded-xl p-6">
                        <h4 className="font-semibold text-blue-900 mb-4 flex items-center">
                          <Droplets className="w-5 h-5 mr-2" />
                          Utilities & Services
                        </h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Water Supply</span>
                            <span className="font-medium text-blue-900">{property.waterAvailability}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Power Backup</span>
                            <span className="font-medium text-blue-900">{property.statusOfElectricity}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Overlooking</span>
                            <span className="font-medium text-blue-900">{property.overlooking}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-yellow-50 rounded-xl p-6">
                        <h4 className="font-semibold text-blue-900 mb-4 flex items-center">
                          <Building className="w-5 h-5 mr-2" />
                          Property Status
                        </h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Transaction Type</span>
                            <span className="font-medium text-blue-900">{property.transactionType}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Total Floors</span>
                            <span className="font-medium text-blue-900">{property.totalFloors}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Possession Status</span>
                            <span className="font-medium text-blue-900">{property.possession}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Amenities Tab */}
              {activeTab === 'amenities' && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Security Features */}
                    <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6">
                      <h4 className="font-bold text-blue-900 mb-4 flex items-center">
                        <Shield className="w-5 h-5 mr-2 text-red-600" />
                        Security Features
                      </h4>
                      <div className="space-y-2">
                        {property.features.security.map((feature, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Lifestyle Amenities */}
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                      <h4 className="font-bold text-blue-900 mb-4 flex items-center">
                        <Dumbbell className="w-5 h-5 mr-2 text-green-600" />
                        Lifestyle Amenities
                      </h4>
                      <div className="space-y-2">
                        {property.features.amenities.map((amenity, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            <span className="text-gray-700">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Connectivity */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                      <h4 className="font-bold text-blue-900 mb-4 flex items-center">
                        <Wifi className="w-5 h-5 mr-2 text-blue-600" />
                        Connectivity
                      </h4>
                      <div className="space-y-2">
                        {property.features.connectivity.map((connection, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            <span className="text-gray-700">{connection}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Nearby Lifestyle */}
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                      <h4 className="font-bold text-blue-900 mb-4 flex items-center">
                        <ShoppingBag className="w-5 h-5 mr-2 text-purple-600" />
                        Nearby Lifestyle
                      </h4>
                      <div className="space-y-2">
                        {property.features.lifestyle.map((lifestyle, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                            <span className="text-gray-700">{lifestyle}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Pricing Tab */}
              {activeTab === 'pricing' && (
                <div className="space-y-8">
                  {/* Price Breakdown */}
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                      <Calculator className="w-5 h-5 mr-2" />
                      Price Breakdown
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-yellow-200">
                        <span className="text-gray-700">Base Price</span>
                        <span className="text-xl font-bold text-blue-900">{property.priceDetails.basePrice}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-yellow-200">
                        <span className="text-gray-700">Price per Sq Ft</span>
                        <span className="font-semibold text-blue-900">{property.priceDetails.pricePerSqFt}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-yellow-200">
                        <span className="text-gray-700">Booking Amount</span>
                        <span className="font-semibold text-blue-900">{property.priceDetails.bookingAmount}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-yellow-200">
                        <span className="text-gray-700">Maintenance Charges</span>
                        <span className="font-semibold text-blue-900">{property.priceDetails.maintenanceCharges}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 rounded-lg">
                        <span className="font-semibold">Total Price</span>
                        <span className="text-2xl font-bold">{property.priceDetails.totalPrice}</span>
                      </div>
                    </div>
                  </div>

                  {/* Loan Information */}
                  {property.loanDetails.loanAvailable && (
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                        <CreditCard className="w-5 h-5 mr-2" />
                        Loan Information
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">Home Loan Available</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">Bank Approved Project</span>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-green-200">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700">EMI Starts From</span>
                            <span className="text-xl font-bold text-green-600">{property.loanDetails.emiStarts}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Location Tab */}
              {activeTab === 'location' && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-6">Location Details</h3>
                    <div className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-center mb-4">
                        <MapPin className="w-5 h-5 text-yellow-600 mr-2" />
                        <span className="text-lg font-semibold text-blue-900">{property.location.address}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Latitude:</span>
                          <span className="ml-2 font-medium text-blue-900">{property.location.coordinates.lat}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Longitude:</span>
                          <span className="ml-2 font-medium text-blue-900">{property.location.coordinates.lng}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Map Placeholder */}
                  <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p>Interactive Map</p>
                      <p className="text-sm">Location: {property.location.address}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Agent Card */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-xl p-6 sticky top-24">
              <h4 className="font-bold mb-6 text-yellow-400">Contact Premium Agent</h4>

              {/* Agent Info */}
              <div className="text-center mb-6">
                <img src={ji} alt="JAIPUR INVESTMENT" className="w-20 h-20 rounded-full object-cover mx-auto mb-4" />
                <div className="font-bold text-lg">JAIPUR INVESTMENT</div>
                <div className="text-blue-200 text-sm">Premium Property Specialist</div>
                <div className="text-blue-200 text-xs mt-1">Licensed Real Estate Broker</div>
              </div>

              {/* Contact Details */}
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-blue-200 flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Phone
                  </span>
                  <a href='tel:+917850055313'>
                  <span className="font-medium">+917850055313</span>
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-200 flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </span>
                  <a href='mailto:jaipurinvestment29@gmail.com'>
                  <span className="font-medium text-xs">jaipurinvestment29@gmail.com</span>
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Chat
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            {/* Quick Actions             <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-blue-900 mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 text-sm">
                  Calculate EMI
                </button>
                <button className="w-full border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 text-sm">
                  Compare Properties
                </button>
                <button className="w-full border border-gray-300 text-gray-700 hover:bg-gray-100 py-2 px-4 rounded-lg font-medium transition-all duration-300 text-sm">
                  Save Property
                </button>
              </div>
            </div>
*/}


            {/* Property Stats */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6">
              <h4 className="font-bold text-blue-900 mb-4">Property Insights</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Views Today</span>
                  <span className="font-semibold text-blue-900">127</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Interested Buyers</span>
                  <span className="font-semibold text-blue-900">23</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Listed Since</span>
                  <span className="font-semibold text-blue-900">15 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Image Gallery Modal */}
      {showImageGallery && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={() => setShowImageGallery(false)}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="relative max-w-5xl w-full">
            <img
              src={property.photos[currentImageIndex]}
              alt={property.title}
              className="w-full h-auto max-h-[80vh] object-contain"
            />

            {property.photos.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-lg">
              {currentImageIndex + 1} / {property.photos.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;
