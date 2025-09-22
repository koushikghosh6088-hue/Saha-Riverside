// FIX: Replaced placeholder content with a complete React component for the main app layout. This resolves module loading errors and provides the structure for the single-page application by importing and organizing all the feature components.
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Venues from './components/Venues';
import Events from './components/Events';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Location from './components/Location';
import Contact from './components/Contact';
import ParallaxSection from './components/ParallaxSection';
import FeaturesSection from './components/FeaturesSection';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <div className="bg-primary-navy text-text-light font-sans min-h-screen overflow-x-hidden max-w-full">
      <Header />
      <main className="relative bg-primary-navy -mt-1">
        <Hero />
        <About />
        <Venues />
        <Events />
        <ParallaxSection 
          imageUrl="https://images.unsplash.com/photo-1488866022504-f2584929ca5f?q=80&w=2062&auto=format&fit=crop"
          title="Unforgettable Moments"
          subtitle="Crafted with elegance, celebrated with joy."
        />
        <Gallery />
        <Menu />
        <Services />
        <FeaturesSection />
        <Testimonials />
        <FAQ />
        <Location />
        <Contact />
      </main>
      <FloatingButtons />
      <footer className="relative bg-gradient-to-b from-secondary-slate to-primary-navy py-16 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-accent-gold/3 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <h3 className="text-3xl font-serif text-gradient mb-4">Saha Riverside Banquet</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-accent-gold to-yellow-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            <a href="#about" className="text-text-medium hover:text-accent-gold transition-colors duration-300 font-medium">About</a>
            <a href="#venues" className="text-text-medium hover:text-accent-gold transition-colors duration-300 font-medium">Halls</a>
            <a href="#menu" className="text-text-medium hover:text-accent-gold transition-colors duration-300 font-medium">Menu</a>
            <a href="#services" className="text-text-medium hover:text-accent-gold transition-colors duration-300 font-medium">Packages</a>
            <a href="#gallery" className="text-text-medium hover:text-accent-gold transition-colors duration-300 font-medium">Gallery</a>
            <a href="#testimonials" className="text-text-medium hover:text-accent-gold transition-colors duration-300 font-medium">Reviews</a>
            <a href="#faq" className="text-text-medium hover:text-accent-gold transition-colors duration-300 font-medium">FAQ</a>
            <a href="#contact" className="text-text-medium hover:text-accent-gold transition-colors duration-300 font-medium">Contact</a>
          </div>
          
          <div className="border-t border-accent-gold/20 pt-8">
            <p className="text-text-medium mb-2">&copy; {new Date().getFullYear()} Saha Riverside Banquet. All Rights Reserved.</p>
            <p className="text-sm text-text-medium flex items-center justify-center">
              Creating unforgettable celebrations since 2000 
              <span className="mx-2 text-red-400 animate-pulse text-lg">❤️</span> 
              with love and dedication.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;