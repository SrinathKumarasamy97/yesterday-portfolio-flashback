
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Stats />
      <FeaturedProducts />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
