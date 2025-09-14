import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Home } from 'lucide-react';
import IRSIcon from '../assets/irs.png';

const SearchForm = () => {
  const [searchType, setSearchType] = useState('buy');
  const [propertyType, setPropertyType] = useState('ALL');
  const navigate = useNavigate();

  const handleSearch = () => {
    const path = searchType === 'buy' ? '/buy' : '/rent';
    navigate(`${path}?type=${propertyType}`);
  };

  return (
    <section className="relative z-10 pt-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          {/* Search Type Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1 flex">
              {['buy', 'rent'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSearchType(type)}
                  className={`px-8 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                    searchType === type
                      ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-blue-900'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Search Form */}
          <div className="flex justify-center md:space-x-4 mb-6 flex-col md:flex-row gap-4">
            <div className="relative">
              <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                className="w-full pl-10 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 appearance-none"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option value="ALL">ALL</option>
                <option value="Warehouse">Warehouse</option>
                <option value="Plot | Land">Plot | Land</option>
                <option value="Farmhouse">Farmhouse</option>
                <option value="Flat">Flat</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="w-full md:w-auto mx-auto flex items-center justify-center px-12 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-xl hover:from-yellow-600 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <Search className="w-5 h-5 mr-2" />
            Search Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchForm;

{/*
          <div className="relative">
              <img src={IRSIcon} alt="IRS Icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                className="w-full pl-10 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 appearance-none"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option value="">Price Range</option>
                <option value="0-500000">₹0 - ₹5,00,000</option>
                <option value="500000-5000000">₹5,00,000 - ₹50,00,000</option>
                <option value="5000000-50000000">₹50,00,000 - ₹5,00,00,000</option>
                <option value="50000000+">₹5,00,00,000+</option>
              </select>
            </div>
*/}

