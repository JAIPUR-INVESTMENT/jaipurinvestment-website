import React from 'react';
import { useProperties } from '../hooks/useProperties';
import PropertyCard from './PropertyCard';
import { Link } from 'react-router-dom';

const FeaturedProperties = () => {
  const { properties, loading } = useProperties();

  // Filter for featured properties that are for sale (not for rent)
  const featuredBuyProperties = properties.filter(
    (p) => p.featured && p.transactionType !== 'Rental'
  );

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Featured
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent ml-3">
                Properties
              </span>
            </h2>
          </div>

          {/* Loading Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                <div className="h-64 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="flex justify-between mb-4">
                    <div className="h-4 bg-gray-200 rounded w-16"></div>
                    <div className="h-4 bg-gray-200 rounded w-16"></div>
                    <div className="h-4 bg-gray-200 rounded w-16"></div>
                  </div>
                  <div className="flex space-x-3">
                    <div className="flex-1 h-10 bg-gray-200 rounded"></div>
                    <div className="w-24 h-10 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Featured
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent ml-3">
              Properties
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked selection of premium properties that define luxury living
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredBuyProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* View All Properties Button */}
        <div className="text-center">
          <Link to="/buy">
            <button className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-12 py-4 rounded-xl font-semibold hover:from-blue-800 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
              View All Properties for Sale
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
