import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactButtons from './components/ContactButtons';
import HomePage from './pages/HomePage';
import PropertyPage from './pages/PropertyPage';
import BuyPage from './pages/BuyPage';
import RentPage from './pages/RentPage';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/property/:id" element={<PropertyPage />} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/rent" element={<RentPage />} />
      </Routes>
      <Footer />
      <ContactButtons />
      <Analytics />
    </div>
  );
}

export default App;
