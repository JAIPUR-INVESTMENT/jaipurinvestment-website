import { useState, useEffect } from 'react';
import propertiesData from '../data/properties.json';
import buyPropertiesData from '../data/buy.json';
import rentPropertiesData from '../data/rent.json';

export interface Property {
  id: string;
  title: string;
  price: string;
  location: {
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  direction: string;
  face: string;
  sidePlane: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  photos: string[];
  videos: string[];
  featured: boolean;
  premium: boolean;
  description: string;
  amenities: string[];
  propertyType: string;
  furnishing: string;
  parking: string;
  floor: string;
  totalFloors: string;
  age: string;
  possession: string;
  transactionType: string;
  overlooking: string;
  waterAvailability: string;
  statusOfElectricity: string;
  features: {
    security: string[];
    amenities: string[];
    connectivity: string[];
    lifestyle: string[];
  };
  priceDetails: {
    basePrice: string;
    pricePerSqFt: string;
    bookingAmount: string;
    maintenanceCharges: string;
    totalPrice: string;
  };
  loanDetails: {
    loanAvailable: boolean;
    bankApproved: boolean;
    emiStarts: string;
  };
}

export const useProperties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const allProperties = [
        ...propertiesData.properties,
        ...buyPropertiesData.properties,
        ...rentPropertiesData.properties,
      ];

      const uniqueProperties = allProperties.filter(
        (property, index, self) =>
          index === self.findIndex((p) => p.id === property.id)
      );

      setProperties(uniqueProperties as unknown as Property[]);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getPropertyById = (id: string): Property | undefined => {
    return properties.find(property => property.id === id);
  };

  const getFeaturedProperties = (): Property[] => {
    return properties.filter(property => property.featured);
  };

  const getPremiumProperties = (): Property[] => {
    return properties.filter(property => property.premium);
  };

  return {
    properties,
    loading,
    getPropertyById,
    getFeaturedProperties,
    getPremiumProperties
  };
};
