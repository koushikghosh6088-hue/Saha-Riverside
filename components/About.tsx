// Enhanced About section for banquet hall without complex animations
import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="pt-16 pb-32 bg-gradient-to-b from-secondary-slate to-primary-navy relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-gold/3 rounded-full blur-2xl"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-accent-gold/20 to-transparent rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                            <img 
                                src="front-gate.jpg" 
                                alt="Saha Riverside Banquet" 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                        
                        {/* Floating elements */}
                        <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center shadow-lg floating-animation">
                            <span className="text-primary-navy font-bold text-xl">★</span>
                        </div>
                        <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-accent-gold/80 rounded-full floating-animation" style={{ animationDelay: '2s' }}></div>
                    </div>
                    
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8">
                                <span className="text-gradient">Welcome to</span>
                                <br />
                                <span className="text-text-light">Saha Riverside Banquet</span>
                            </h2>
                            
                            <div className="space-y-6 text-lg leading-relaxed">
                                <p className="text-text-medium relative pl-6">
                                    <span className="absolute left-0 top-2 w-2 h-2 bg-accent-gold rounded-full"></span>
                                    Located on the serene banks of the holy Ganges, Saha Riverside Banquet is the premier venue for weddings, corporate events, and special celebrations. With over 20 years of experience in hospitality, we specialize in creating unforgettable moments.
                                </p>
                                
                                <p className="text-text-medium relative pl-6">
                                    <span className="absolute left-0 top-2 w-2 h-2 bg-accent-gold rounded-full"></span>
                                    Our state-of-the-art facilities include multiple banquet halls, outdoor gardens, premium catering services, and professional event management. From intimate gatherings of 50 to grand celebrations for 1000+ guests, we cater to all your needs.
                                </p>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div className="bg-accent-gold/10 p-4 rounded-lg">
                                <h3 className="text-2xl font-bold text-accent-gold mb-2">20+</h3>
                                <p className="text-text-medium">Years Experience</p>
                            </div>
                            <div className="bg-accent-gold/10 p-4 rounded-lg">
                                <h3 className="text-2xl font-bold text-accent-gold mb-2">1000+</h3>
                                <p className="text-text-medium">Events Hosted</p>
                            </div>
                            <div className="bg-accent-gold/10 p-4 rounded-lg">
                                <h3 className="text-2xl font-bold text-accent-gold mb-2">5</h3>
                                <p className="text-text-medium">Banquet Halls</p>
                            </div>
                            <div className="bg-accent-gold/10 p-4 rounded-lg">
                                <h3 className="text-2xl font-bold text-accent-gold mb-2">24/7</h3>
                                <p className="text-text-medium">Support</p>
                            </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a 
                                href="#venues" 
                                className="group inline-flex items-center bg-gradient-to-r from-accent-gold to-yellow-500 text-primary-navy font-bold py-4 px-8 rounded-full hover:from-yellow-500 hover:to-accent-gold transition-all duration-500 transform hover:scale-105 shine-effect"
                            >
                                View Our Halls
                                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                </svg>
                            </a>
                            
                            <a 
                                href="#contact" 
                                className="group inline-flex items-center border-2 border-accent-gold text-accent-gold font-bold py-4 px-8 rounded-full hover:bg-accent-gold hover:text-primary-navy transition-all duration-500 transform hover:scale-105"
                            >
                                Get Quote
                                <svg className="ml-2 w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;