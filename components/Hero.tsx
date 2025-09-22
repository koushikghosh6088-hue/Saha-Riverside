// Enhanced Hero section for banquet hall without complex animations
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center text-text-light overflow-hidden">
            {/* Enhanced gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-primary-navy/50 to-black/80 z-10"></div>
            
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                poster="https://picsum.photos/1920/1080?random=hero"
            >
                <source src="hero-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-6 text-gradient">
                    Saha Riverside Banquet
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl mb-10 max-w-4xl mx-auto text-text-medium leading-relaxed">
                    Premier venue for weddings, corporate events, and special celebrations. Experience luxury dining and impeccable service by the sacred Ganges.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="#contact"
                        className="inline-block bg-gradient-to-r from-accent-gold to-yellow-500 text-primary-navy font-bold py-4 px-12 rounded-full text-lg hover:from-yellow-500 hover:to-accent-gold transition-all duration-500 transform hover:scale-105 shine-effect"
                    >
                        Book Your Event
                    </a>
                    <a
                        href="#venues"
                        className="inline-block border-2 border-accent-gold text-accent-gold font-bold py-4 px-12 rounded-full text-lg hover:bg-accent-gold hover:text-primary-navy transition-all duration-500"
                    >
                        View Venues
                    </a>
                </div>
                
                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-accent-gold rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-accent-gold rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;