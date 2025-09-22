
import React from 'react';

const VenueCard: React.FC<{
    image: string;
    title: string;
    capacity: string;
    area: string;
    features: string[];
    pricing: string;
    align: 'left' | 'right';
}> = ({ image, title, capacity, area, features, pricing, align }) => {
    const isRightAligned = align === 'right';
    return (
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isRightAligned ? 'lg:grid-flow-col-dense' : ''}`}>
            <div className={`relative group ${isRightAligned ? 'lg:col-start-2' : ''}`}>
                <div className="absolute -inset-4 bg-gradient-to-r from-accent-gold/20 to-transparent rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img src={image} alt={title} className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 right-4 bg-accent-gold text-primary-navy px-3 py-1 rounded-full text-sm font-bold">
                        {pricing}
                    </div>
                </div>
            </div>
            <div className={`space-y-6 ${isRightAligned ? 'lg:col-start-1' : ''}`}>
                <div>
                    <h3 className="text-4xl md:text-5xl font-serif text-gradient font-bold mb-4">{title}</h3>
                    <div className="flex flex-wrap gap-4 mb-6">
                        <span className="bg-accent-gold/20 text-accent-gold px-4 py-2 rounded-full font-semibold">
                            👥 {capacity} Guests
                        </span>
                        <span className="bg-accent-gold/20 text-accent-gold px-4 py-2 rounded-full font-semibold">
                            🏢 {area}
                        </span>
                    </div>
                </div>
                
                <p className="text-text-medium text-lg leading-relaxed">
                    Experience luxury and elegance in this beautifully designed space, perfect for creating unforgettable moments. Our venue combines traditional charm with modern amenities.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center text-text-light">
                            <div className="w-2 h-2 bg-accent-gold rounded-full mr-3 flex-shrink-0"></div>
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a 
                        href="#contact" 
                        className="inline-flex items-center justify-center bg-gradient-to-r from-accent-gold to-yellow-500 text-primary-navy font-bold py-3 px-8 rounded-full hover:from-yellow-500 hover:to-accent-gold transition-all duration-500 transform hover:scale-105"
                    >
                        Book This Hall
                    </a>
                    <a 
                        href="#gallery" 
                        className="inline-flex items-center justify-center border-2 border-accent-gold text-accent-gold font-bold py-3 px-8 rounded-full hover:bg-accent-gold hover:text-primary-navy transition-all duration-500"
                    >
                        View Gallery
                    </a>
                </div>
            </div>
        </div>
    );
};

const Venues: React.FC = () => {
    return (
        <section id="venues" className="py-32 bg-gradient-to-b from-primary-navy to-secondary-slate relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-gold/3 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                        <span className="text-gradient">Our Banquet</span> <span className="text-text-light">Halls</span>
                    </h2>
                    <p className="text-xl text-text-medium mt-6 max-w-4xl mx-auto leading-relaxed">
                        Choose from our elegantly designed banquet halls, each offering unique features and ambiance for your special celebration.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-accent-gold to-yellow-500 mx-auto mt-8 rounded-full"></div>
                </div>
                
                <div className="space-y-32">
                    <VenueCard
                        image="area.webp"
                        title="Grand Celebration Hall"
                        capacity="800-1000"
                        area="12,000 sq ft"
                        pricing="Premium"
                        features={[
                            'Fully Air-Conditioned with Central AC',
                            'Professional Stage & Sound System', 
                            'LED Lighting with Color Options',
                            'Separate Bridal & Groom Rooms',
                            'Dedicated Catering Kitchen',
                            'VIP Parking Area'
                        ]}
                        align="left"
                    />
                    
                    <VenueCard
                        image="lawn.webp"
                        title="Riverside Garden Hall"
                        capacity="400-600"
                        area="8,000 sq ft + Garden"
                        pricing="Deluxe"
                        features={[
                            'Scenic Ganges River View',
                            'Indoor-Outdoor Flexibility',
                            'Beautiful Garden Area',
                            'Perfect for Photography',
                            'Natural Lighting Options',
                            'Intimate Setting'
                        ]}
                        align="right"
                    />
                    
                    <VenueCard
                        image="corridoor.webp"
                        title="Corporate Conference Hall"
                        capacity="200-300"
                        area="5,000 sq ft"
                        pricing="Standard"
                        features={[
                            'Business Meeting Setup',
                            'Projector & Audio Visual',
                            'High-Speed Wi-Fi',
                            'Executive Catering Options',
                            'Parking for 150+ Cars',
                            'Professional Ambiance'
                        ]}
                        align="left"
                    />
                </div>
                
                <div className="mt-32 text-center">
                    <h3 className="text-4xl md:text-5xl font-serif text-gradient mb-12">Premium Facilities</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        <div className="text-center group">
                            <div className="bg-gradient-to-br from-secondary-slate to-primary-navy rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl border border-accent-gold/20">
                                <svg className="w-10 h-10 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </div>
                            <p className="font-semibold text-text-light text-lg">Photography Zones</p>
                            <p className="text-text-medium text-sm mt-1">Dedicated photo areas</p>
                        </div>
                        
                        <div className="text-center group">
                            <div className="bg-gradient-to-br from-secondary-slate to-primary-navy rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl border border-accent-gold/20">
                                <svg className="w-10 h-10 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m4-8h1m-1 4h1m-1 4h1"></path>
                                </svg>
                            </div>
                            <p className="font-semibold text-text-light text-lg">Ample Parking</p>
                            <p className="text-text-medium text-sm mt-1">300+ car capacity</p>
                        </div>
                        
                        <div className="text-center group">
                            <div className="bg-gradient-to-br from-secondary-slate to-primary-navy rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl border border-accent-gold/20">
                                <svg className="w-10 h-10 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <p className="font-semibold text-text-light text-lg">Power Backup</p>
                            <p className="text-text-medium text-sm mt-1">100% backup guarantee</p>
                        </div>
                        
                        <div className="text-center group">
                            <div className="bg-gradient-to-br from-secondary-slate to-primary-navy rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl border border-accent-gold/20">
                                <svg className="w-10 h-10 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <p className="font-semibold text-text-light text-lg">Security</p>
                            <p className="text-text-medium text-sm mt-1">24x7 CCTV monitoring</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Venues;