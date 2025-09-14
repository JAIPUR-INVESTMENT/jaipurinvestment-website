import { useState, useEffect } from 'react';
import { Property } from './useProperties';
import buyPropertiesData from '../data/buy.json';
import rentPropertiesData from '../data/rent.json';

export const usePropertyData = (type: 'buy' | 'rent') => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProperties = () => {
      try {
        if (type === 'buy') {
          setProperties(buyPropertiesData.properties as unknown as Property[]);
        } else {
          setProperties(rentPropertiesData.properties as unknown as Property[]);
        }
      } catch (error) {
        console.error(`Failed to load ${type} properties:`, error);
      } finally {
        setLoading(false);
      }
    };

    // Using a timeout to simulate network loading if needed, but primarily to ensure state updates correctly
    const timer = setTimeout(loadProperties, 100);

    return () => clearTimeout(timer);
  }, [type]);

  return { properties, loading };
};
