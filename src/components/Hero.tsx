import React from 'react';
import banner from '../assets/banner.jpeg';

const Hero = () => {
  return (
    <section className="relative bg-primary-dark h-[67vw] sm:h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Banner Image */}
      <img src={banner} alt="Discover Your Dream Home" className="absolute inset-0 w-full h-full object-contain sm:object-cover" />
    </section>
  );
};

export default Hero;
