// FIX: Replaced placeholder content with a complete React component for a reusable parallax section. This decorative component enhances visual appeal by creating a depth effect as the user scrolls, and can be used as a transition between content sections.
import React from 'react';

interface ParallaxSectionProps {
    imageUrl: string;
    title: string;
    subtitle: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ imageUrl, title, subtitle }) => {
    return (
        <div
            className="relative py-32 md:py-48 bg-cover bg-center bg-fixed bg-primary-navy"
            style={{ 
                backgroundImage: `url(${imageUrl})`,
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-primary-navy/40 to-black/60"></div>
            <div className="relative container mx-auto px-6 text-center text-white z-10">
                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">{title}</h2>
                <p className="text-xl md:text-2xl">{subtitle}</p>
            </div>
        </div>
    );
};

export default ParallaxSection;