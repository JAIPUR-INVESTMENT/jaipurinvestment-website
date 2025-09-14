import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PropertyDetails from '../components/PropertyDetails';
import { useProperties } from '../hooks/useProperties';

const PropertyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getPropertyById, loading } = useProperties();

  if (loading) {
    return <div className="text-center py-20">Loading property details...</div>;
  }

  const property = getPropertyById(id || '');

  if (!property) {
    return <div className="text-center py-20">Property not found.</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/"
          className="inline-flex items-center text-blue-900 font-semibold hover:text-yellow-600 transition-colors duration-300 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all properties
        </Link>
        <PropertyDetails property={property} />
      </div>
    </div>
  );
};

export default PropertyPage;
