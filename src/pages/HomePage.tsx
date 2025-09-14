import React from 'react';
import Hero from '../components/Hero';
import FeaturedProperties from '../components/FeaturedProperties';
import Services from '../components/Services';
import SearchForm from '../components/SearchForm';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <SearchForm />
      <FeaturedProperties />
      <Services />
    </>
  );
};

export default HomePage;
