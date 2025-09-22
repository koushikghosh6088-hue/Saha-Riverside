
import React from 'react';

const EventCard: React.FC<{ title: string; description: string; image: string }> = ({ title, description, image }) => (
    <div className="bg-secondary-slate rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 group hover:shadow-2xl hover:shadow-accent-gold/10">
        <div className="relative h-56">
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300"></div>
            <h3 className="absolute bottom-4 left-4 text-text-light text-3xl font-serif">{title}</h3>
        </div>
        <div className="p-6">
            <p className="text-text-medium">{description}</p>
        </div>
    </div>
);

const Events: React.FC = () => {
    const eventTypes = [
        {
            title: "Weddings",
            description: "From traditional Hindu ceremonies to grand receptions, we create magical beginnings by the sacred Ganges.",
            image: "weddings.webp"
        },
        {
            title: "Corporate Events",
            description: "Inspire your team with our sophisticated spaces, perfect for conferences, product launches, and awards ceremonies.",
            image: "halls.webp"
        },
        {
            title: "Cultural Celebrations",
            description: "Host vibrant festivals, musical concerts, and community gatherings in a setting that honors every tradition.",
            image: "style.jpg"
        }
    ];

    return (
        <section id="events" className="py-20 bg-secondary-slate">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-accent-gold font-bold">A Spectrum of Celebrations</h2>
                    <p className="text-lg text-text-medium mt-4 max-w-3xl mx-auto">Whatever the occasion, we provide the perfect stage for your unforgettable moments.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {eventTypes.map((event, index) => (
                        <EventCard key={index} {...event} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;