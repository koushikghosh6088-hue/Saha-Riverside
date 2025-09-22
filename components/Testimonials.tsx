import React from 'react';
import { StarIcon } from './Icons';

const Testimonials: React.FC = () => {
    const testimonials = [
        {
            id: 1,
            name: "Priya & Rahul Sharma",
            event: "Wedding Reception",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
            rating: 5,
            text: "Saha Riverside made our dream wedding come true! The riverside view was breathtaking, and the staff went above and beyond to ensure every detail was perfect. Our guests are still talking about the beautiful ambiance and delicious food."
        },
        {
            id: 2,
            name: "Rajesh Kumar",
            event: "Corporate Annual Meeting",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
            rating: 5,
            text: "Outstanding venue for our company's annual conference. The Grand Celebration Hall accommodated all 500 attendees comfortably. Professional service, excellent AV equipment, and the catering was top-notch. Highly recommended for corporate events."
        },
        {
            id: 3,
            name: "Meera Patel",
            event: "Golden Anniversary",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
            rating: 5,
            text: "Celebrated our parents' 50th anniversary here and it was magical. The riverside garden setting was perfect for our family gathering. The team helped us plan every detail, and the food was exceptional. Thank you for making it so special!"
        },
        {
            id: 4,
            name: "Amit Singh",
            event: "Birthday Celebration",
            image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face",
            rating: 5,
            text: "Fantastic experience hosting my wife's surprise birthday party. The staff was incredibly helpful in keeping everything secret until the big reveal. Beautiful decoration, amazing food, and the riverside view made it unforgettable."
        },
        {
            id: 5,
            name: "Dr. Sunita Roy",
            event: "Medical Conference",
            image: "https://images.unsplash.com/photo-1559548331-f9cb98001426?w=100&h=100&fit=crop&crop=face",
            rating: 5,
            text: "Perfect venue for our medical symposium. The Corporate Conference Hall had all the modern amenities we needed. Excellent sound system, comfortable seating, and the catering team provided healthy, delicious meals for all attendees."
        },
        {
            id: 6,
            name: "Ananya & Vikram",
            event: "Engagement Ceremony",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
            rating: 5,
            text: "Our engagement ceremony was absolutely beautiful! The Riverside Garden Hall was the perfect size for our intimate celebration. The team helped with decorations and the catering was delicious. Couldn't have asked for a better venue."
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-secondary-slate via-primary-navy to-secondary-slate">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-accent-gold font-bold mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg text-text-medium max-w-3xl mx-auto">
                        Don't just take our word for it. Here's what our satisfied clients have to say about their memorable events at Saha Riverside Banquet.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-gradient-to-br from-primary-navy/30 to-secondary-slate/50 backdrop-blur-sm rounded-xl p-6 border border-accent-gold/20 hover:border-accent-gold/40 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            {/* Rating Stars */}
                            <div className="flex items-center mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <StarIcon key={i} className="w-5 h-5 text-accent-gold" />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-text-medium mb-6 leading-relaxed italic">
                                "{testimonial.text}"
                            </p>

                            {/* Client Info */}
                            <div className="flex items-center">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-accent-gold/30 mr-4"
                                />
                                <div>
                                    <h4 className="text-text-light font-semibold">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-accent-gold text-sm">
                                        {testimonial.event}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-accent-gold/10 to-yellow-500/10 rounded-xl p-8 border border-accent-gold/20">
                        <h3 className="text-2xl font-serif text-text-light mb-4">
                            Ready to Create Your Own Memorable Event?
                        </h3>
                        <p className="text-text-medium mb-6 max-w-2xl mx-auto">
                            Join our growing list of satisfied clients and let us help you create an unforgettable experience for your special occasion.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-accent-gold to-yellow-500 text-primary-navy font-semibold rounded-lg hover:from-yellow-500 hover:to-accent-gold transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Book Your Event Today
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;