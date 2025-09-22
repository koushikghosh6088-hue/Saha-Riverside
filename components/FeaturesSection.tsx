// FIX: Replaced placeholder content with a complete React component to highlight key features of the venue. This section uses an alternating image and text layout to effectively communicate the main selling points and break up the page visually.
import React from 'react';
import { Feature } from '../types';

const features: Feature[] = [
    {
        title: "Exquisite Catering",
        highlight: "A Feast for the Senses",
        description: "Our in-house culinary team crafts bespoke menus, from traditional delicacies to international cuisine, ensuring every dish is a masterpiece.",
        imageUrl: "catering.webp",
    },
    {
        title: "Scenic Photography",
        highlight: "Capture Every Moment",
        description: "With the majestic Ganges as your backdrop and numerous picturesque spots, your event photos will be nothing short of breathtaking.",
        imageUrl: "scene.webp",

    },
    {
        title: "Bespoke Decor",
        highlight: "Your Vision, Our Creation",
        description: "Our expert decorators work with you to transform our spaces into your dream setting, paying attention to every detail.",
        imageUrl: "decor.webp",
    },
    {
        title: "Seamless Service",
        highlight: "Hospitality at its Finest",
        description: "Our dedicated team ensures every aspect of your event runs smoothly, offering warm, professional service to you and your guests.",
        imageUrl: "service.jpg",
    },
];

const FeaturesSection: React.FC = () => {
    return (
        <section id="features" className="py-20 bg-primary-navy">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-accent-gold font-bold">Why Choose The Riverside?</h2>
                    <p className="text-lg text-text-medium mt-4 max-w-3xl mx-auto">We go beyond just a venue, offering a complete experience that makes your celebration truly special.</p>
                </div>
                <div className="space-y-20">
                    {features.map((feature, index) => (
                        <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
                            <div className={` ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                                <img src={feature.imageUrl} alt={feature.title} className="rounded-lg shadow-2xl object-cover w-full h-96" />
                            </div>
                            <div className={` ${index % 2 !== 0 ? 'md:col-start-1' : ''}`}>
                                <p className="text-accent-gold font-bold mb-2">{feature.highlight}</p>
                                <h3 className="text-4xl font-serif text-text-light mb-4">{feature.title}</h3>
                                <p className="text-text-medium text-lg">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;