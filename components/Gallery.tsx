// FIX: Simplified Gallery section with basic animations to fix scrolling visibility issues
import React, { useState } from 'react';
import type { GalleryImage } from '../types';

const galleryImages: GalleryImage[] = [
    { id: 1, category: 'food', src: 'https://picsum.photos/600/400?random=g1', alt: 'Delicious catering' },
    { id: 2, category: 'vibe', src: 'https://picsum.photos/600/400?random=g2', alt: 'Event atmosphere' },
    { id: 3, category: 'owner', src: 'https://picsum.photos/600/400?random=g3', alt: 'Venue owner' },
    { id: 4, category: 'street', src: 'https://picsum.photos/600/400?random=g4', alt: 'Street view' },
    { id: 5, category: 'food', src: 'https://picsum.photos/600/400?random=g5', alt: 'Gourmet dish' },
    { id: 6, category: 'vibe', src: 'https://picsum.photos/600/400?random=g6', alt: 'Wedding decoration' },
    { id: 7, category: 'vibe', src: 'https://picsum.photos/600/400?random=g7', alt: 'Night event' },
    { id: 8, category: 'food', src: 'https://picsum.photos/600/400?random=g8', alt: 'Dessert table' },
];

const categories = [
    { key: 'all', label: 'All', icon: '∞' },
    { key: 'food', label: 'Cuisine', icon: '🍽️' },
    { key: 'vibe', label: 'Ambiance', icon: '✨' },
    { key: 'owner', label: 'Team', icon: '👥' },
    { key: 'street', label: 'Venue', icon: '🏛️' }
];

const Gallery: React.FC = () => {
    const [filter, setFilter] = useState('all');

    const filteredImages = filter === 'all'
        ? galleryImages
        : galleryImages.filter(image => image.category === filter);

    return (
        <section id="gallery" className="py-32 bg-gradient-to-b from-secondary-slate via-primary-navy to-secondary-slate relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-gold/3 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                        <span className="text-gradient">Visual</span> <span className="text-text-light">Stories</span>
                    </h2>
                    <p className="text-xl text-text-medium mt-6 max-w-4xl mx-auto leading-relaxed">
                        A glimpse into the beautiful moments and stunning details from events at The Riverside.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-accent-gold to-yellow-500 mx-auto mt-8 rounded-full"></div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map(category => (
                        <button
                            key={category.key}
                            onClick={() => setFilter(category.key)}
                            className={`group relative px-6 py-3 rounded-full font-semibold transition-all duration-500 transform hover:scale-105 ${filter === category.key 
                                ? 'bg-gradient-to-r from-accent-gold to-yellow-500 text-primary-navy shadow-lg' 
                                : 'glass-morphism text-text-light hover:text-accent-gold border border-accent-gold/20 hover:border-accent-gold/60'
                            }`}
                        >
                            <span className="flex items-center gap-2 text-lg">
                                <span className="text-xl">{category.icon}</span>
                                {category.label}
                            </span>
                            {filter !== category.key && (
                                <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            )}
                        </button>
                    ))}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredImages.map((image, index) => (
                        <div 
                            key={image.id} 
                            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                        >
                            <div className="relative overflow-hidden">
                                <img 
                                    src={image.src} 
                                    alt={image.alt} 
                                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700" 
                                />
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                
                                {/* Content overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-white font-semibold text-lg mb-2">{image.alt}</h3>
                                    <p className="text-accent-gold text-sm capitalize">{image.category}</p>
                                </div>
                                
                                {/* Floating decoration */}
                                <div className="absolute top-4 right-4 w-8 h-8 bg-accent-gold/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                                    <svg className="w-4 h-4 text-primary-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {filteredImages.length === 0 && (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">🎨</div>
                        <p className="text-text-medium text-xl">No images found for this category.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Gallery;