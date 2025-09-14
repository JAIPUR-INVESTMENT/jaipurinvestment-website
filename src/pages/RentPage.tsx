import React from 'react';
import { usePropertyData } from '../hooks/usePropertyData';
import PropertyCard from '../components/PropertyCard';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const RentPage: React.FC = () => {
  const { properties, loading } = usePropertyData('rent');
  const [searchParams] = useSearchParams();
  const propertyType = searchParams.get('type');

  const filteredProperties = propertyType && propertyType !== 'ALL'
    ? properties.filter(p => p.propertyType === propertyType)
    : properties;

  const pageTitle = propertyType && propertyType !== 'ALL'
    ? `${propertyType} for Rent`
    : 'Properties for Rent';

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center text-blue-900 font-semibold hover:text-yellow-600 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all properties
        </Link>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            {pageTitle}
          </h2>
        </div>
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                <div className="h-64 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RentPage;
