// FIX: Replaced placeholder content with a complete React component for displaying event packages. This component outlines different service tiers in a clear, comparable format, helping potential clients understand the offerings.
import React from 'react';
import type { EventPackage } from '../types';

const packages: EventPackage[] = [
    {
        name: 'The Essential',
        description: 'Our foundational package for elegant and intimate gatherings.',
        features: ['Venue Access (4 hours)', 'Standard Seating & Tables', 'Basic Sound System', 'On-site Coordinator'],
    },
    {
        name: 'The Signature',
        description: 'Our most popular choice, offering a perfect balance of services for a memorable event.',
        features: ['Full Day Venue Access', 'Premium Seating & Linens', 'Custom Lighting', 'Catering Consultation'],
    },
    {
        name: 'The Grand',
        description: 'An all-inclusive, luxury experience for the most spectacular celebrations.',
        features: ['Exclusive Weekend Access', 'Designer Decor & Florals', 'Gourmet Multi-course Meal', 'Live Entertainment Booking'],
    },
];


const Packages: React.FC = () => {
    return (
        <section id="packages" className="py-20 bg-secondary-slate">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-accent-gold font-bold">Our Event Packages</h2>
                    <p className="text-lg text-text-medium mt-4 max-w-3xl mx-auto">Simplified packages to help you start planning. Each can be fully customized to your needs.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <div key={index} className="border border-accent-gold/20 rounded-lg p-8 text-center flex flex-col bg-primary-navy shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
                            <h3 className="text-2xl font-serif text-accent-gold mb-2">{pkg.name}</h3>
                            <p className="text-text-medium mb-6 flex-grow">{pkg.description}</p>
                            <ul className="space-y-3 text-left mb-8 text-text-light">
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center">
                                         <svg className="w-5 h-5 text-accent-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <a href="#contact" className="mt-auto bg-accent-gold text-primary-navy font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300">
                                Get a Quote
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Packages;