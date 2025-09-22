
import React from 'react';
import type { ServicePackage, AddonService } from '../types';
import { FlowerIcon, CameraIcon, MusicIcon, UtensilsIcon } from './Icons';

const PackageCard: React.FC<ServicePackage & { index: number }> = ({ name, description, features, index }) => {
    return (
        <div className={`group relative border-2 border-accent-gold/30 glass-morphism rounded-2xl p-8 flex flex-col h-full hover:border-accent-gold/60 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden`}>
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating decoration */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-accent-gold/20 rounded-full blur-sm group-hover:bg-accent-gold/40 transition-colors duration-500"></div>
            
            <div className="relative z-10">
                <h3 className={`text-3xl md:text-4xl font-serif text-gradient mb-6 group-hover:scale-105 transition-transform duration-300`}>{name}</h3>
                <p className="text-text-medium mb-8 flex-grow leading-relaxed text-lg">{description}</p>
                
                <ul className="space-y-4 mb-10">
                    {features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-text-light group-hover:text-text-light transition-colors duration-300">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-accent-gold to-yellow-500 mr-4 mt-0.5 flex-shrink-0 flex items-center justify-center shadow-lg">
                                <svg className="w-3 h-3 text-primary-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <span className="text-lg">{feature}</span>
                        </li>
                    ))}
                </ul>
                
                <a 
                    href="#contact" 
                    className={`mt-auto block text-center bg-gradient-to-r from-accent-gold to-yellow-500 text-primary-navy font-bold py-4 px-8 rounded-full hover:from-yellow-500 hover:to-accent-gold transition-all duration-500 transform hover:scale-105 shine-effect group-hover:shadow-2xl`}
                >
                    Book Now
                </a>
            </div>
        </div>
    );
};

const Services: React.FC = () => {
    const packages: ServicePackage[] = [
        { name: '"Wedding Paradise"', description: 'Complete wedding celebration package with traditional ceremonies, premium decorations, and multi-cuisine feast for your special day.', features: ['Grand Wedding Hall (500 guests)', 'Bridal Suite & Groom Room', 'Traditional Mandap Setup', 'Multi-Cuisine Buffet', 'Professional Photography', 'Wedding Coordinator'] },
        { name: '"Corporate Elite"', description: 'Professional corporate event package perfect for conferences, seminars, product launches, and business celebrations.', features: ['Conference Hall with A/V Setup', 'Business Lunch/Dinner', 'Welcome Reception', 'Parking for 200+ Cars', 'Wi-Fi & Technical Support', 'Event Manager'] },
        { name: '"Celebration Special"', description: 'Perfect package for birthdays, anniversaries, religious ceremonies, and family gatherings with personalized services.', features: ['Flexible Hall Options', 'Custom Decoration Themes', 'Live Music & DJ', 'Special Occasion Cake', 'Kids Play Area', 'Photography Package'] },
    ];
    
    const addons: AddonService[] = [
        { name: 'Premium Catering', icon: UtensilsIcon },
        { name: 'Event Photography', icon: CameraIcon },
        { name: 'Sound & Lighting', icon: MusicIcon },
        { name: 'Floral Decoration', icon: FlowerIcon },
    ];

    return (
        <section id="services" className="py-32 bg-secondary-slate relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-accent-gold/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-gold/3 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                        <span className="text-gradient">Banquet</span> <span className="text-text-light">Packages</span>
                    </h2>
                    <p className="text-xl text-text-medium mt-6 max-w-4xl mx-auto leading-relaxed">
                        Choose from our comprehensive event packages designed to make your celebration memorable and hassle-free.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-accent-gold to-yellow-500 mx-auto mt-8 rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
                    {packages.map((pkg, index) => <PackageCard key={index} index={index} {...pkg} />)}
                </div>

                <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-serif text-gradient mb-12">Additional Services</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {addons.map((addon, index) => (
                            <div key={addon.name} className="text-center group cursor-pointer">
                                <div className="relative bg-gradient-to-br from-secondary-slate to-primary-navy rounded-2xl w-28 h-28 flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl border border-accent-gold/20 group-hover:border-accent-gold/60">
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <addon.icon className="w-12 h-12 text-accent-gold group-hover:text-yellow-400 transition-all duration-500 relative z-10" />
                                    
                                    {/* Floating dots */}
                                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent-gold/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 floating-animation"></div>
                                </div>
                                <p className="font-semibold text-text-light text-lg group-hover:text-accent-gold transition-colors duration-300">{addon.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;