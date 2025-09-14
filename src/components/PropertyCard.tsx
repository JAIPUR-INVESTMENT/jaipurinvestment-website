import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Star, Compass, Eye, Play } from 'lucide-react';
import { Property } from '../hooks/useProperties';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  // This state is no longer needed for the main image display,
  // but we can keep it for the dot indicators if you like.
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Note: The nextImage and prevImage functions are no longer needed
  // for the scroll functionality but can be kept if you want the buttons
  // to work on desktop. For a pure scroll experience, they can be removed.

  return (
    <Link to={`/property/${property.id}`} className="block group">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-yellow-200 transform hover:-translate-y-2">
        {/* --- MODIFIED SECTION START --- */}
        <div className="relative overflow-hidden h-64">
          {/* 1. Scrollable Image Container */}
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide h-full">
            {property.photos.map((photo, index) => (
              <div key={index} className="w-full flex-shrink-0 snap-center">
                <img
                  src={photo}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>

          {/* 2. Responsive Image Navigation Buttons (Hidden on mobile) */}
          {property.photos.length > 1 && (
            <>
              <button
                // onClick={prevImage} // This can be re-enabled for desktop functionality
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:block"
              >
                ←
              </button>
              <button
                // onClick={nextImage} // This can be re-enabled for desktop functionality
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:block"
              >
                →
              </button>

              {/* Image Indicators (optional, can be removed) */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {property.photos.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      // This logic needs to be updated if you want indicators with scrolling
                      // For now, it will only show the first dot as active.
                      index === 0 ? 'bg-yellow-500' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        {/* --- MODIFIED SECTION END --- */}

          {/* Premium Badge */}
          {property.premium && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center shadow-lg">
              <Star className="w-3 h-3 mr-1 fill-current" />
              NO BROKERAGE
            </div>
          )}

          {/* Featured Overlay */}
          {property.featured && (
            <div className="absolute bottom-4 left-4 bg-blue-900/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold">
              FEATURED
            </div>
          )}

          {/* Video Icon */}
          {property.videos.length > 0 && (
            <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white p-2 rounded-full">
              <Play className="w-4 h-4 fill-current" />
            </div>
          )}
        </div>

        {/* Property Details */}
        <div className="p-6">
          {/* Price */}
          <div className="text-2xl font-bold text-blue-900 mb-2">
            {property.price}
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-900 transition-colors duration-300">
            {property.title}
          </h3>

          {/* Location */}
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="w-4 h-4 mr-2 text-yellow-600" />
            <span className="text-sm">{property.location.address}</span>
          </div>

          {/* Property Specifications */}
          <div className="grid grid-cols-2 gap-4 mb-4 text-xs text-gray-600">
            <div className="flex items-center">
              <Compass className="w-3 h-3 mr-1 text-blue-900" />
              <span>Direction: {property.direction}</span>
            </div>
            <div className="flex items-center">
              <Eye className="w-3 h-3 mr-1 text-blue-900" />
              <span>Facing: {property.face}</span>
            </div>
            <div className="col-span-2 flex items-center">
              <Square className="w-3 h-3 mr-1 text-blue-900" />
              <span>Plot: {property.sidePlane}</span>
            </div>
          </div>

          {/* Property Features */}
          <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1 text-blue-900" />
              <span>{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1 text-blue-900" />
              <span>{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center">
              <Square className="w-4 h-4 mr-1 text-blue-900" />
              <span>{property.area} sq ft</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {property.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
