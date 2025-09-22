import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        event_type: 'Wedding',
        date: '',
        guests: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simply show the thank you message without sending an email
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <section id="contact" className="py-32 bg-gradient-to-b from-primary-navy to-secondary-slate relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-gold/3 rounded-full blur-3xl"></div>
                
                <div className="container mx-auto px-6 text-center relative z-10">
                    <div className="max-w-2xl mx-auto glass-morphism p-12 rounded-3xl">
                        <div className="w-20 h-20 bg-gradient-to-r from-accent-gold to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-8 pulse-glow">
                            <svg className="w-10 h-10 text-primary-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif text-gradient font-bold mb-6">Thank You!</h2>
                        <p className="text-xl text-text-medium leading-relaxed">Your inquiry has been received. Our team will get back to you shortly to discuss your dream event.</p>
                        <button 
                            onClick={() => setIsSubmitted(false)}
                            className="mt-8 bg-gradient-to-r from-accent-gold to-yellow-500 text-primary-navy font-bold py-3 px-8 rounded-full hover:from-yellow-500 hover:to-accent-gold transition-all duration-500 transform hover:scale-105"
                        >
                            Send Another Inquiry
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-32 bg-gradient-to-b from-primary-navy to-secondary-slate relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-gold/3 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                        <span className="text-gradient">Book Your</span> <span className="text-text-light">Event Today</span>
                    </h2>
                    <p className="text-xl text-text-medium mt-6 max-w-4xl mx-auto leading-relaxed">
                        Ready to host your special event? Fill out the form below and our event specialists will contact you within 24 hours with a customized quote.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-accent-gold to-yellow-500 mx-auto mt-8 rounded-full"></div>
                </div>
                
                <div className="max-w-4xl mx-auto glass-morphism p-8 md:p-12 rounded-3xl shadow-2xl border border-accent-gold/20">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="group">
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Full Name" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    required 
                                    className="w-full p-4 bg-secondary-slate/50 border border-accent-gold/20 text-text-light rounded-xl focus:ring-2 focus:ring-accent-gold focus:border-accent-gold focus:outline-none transition-all duration-300 group-hover:border-accent-gold/40" 
                                />
                            </div>
                            <div className="group">
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email Address" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    required 
                                    className="w-full p-4 bg-secondary-slate/50 border border-accent-gold/20 text-text-light rounded-xl focus:ring-2 focus:ring-accent-gold focus:border-accent-gold focus:outline-none transition-all duration-300 group-hover:border-accent-gold/40" 
                                />
                            </div>
                            <div className="group">
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    placeholder="Phone Number" 
                                    value={formData.phone} 
                                    onChange={handleChange} 
                                    required 
                                    className="w-full p-4 bg-secondary-slate/50 border border-accent-gold/20 text-text-light rounded-xl focus:ring-2 focus:ring-accent-gold focus:border-accent-gold focus:outline-none transition-all duration-300 group-hover:border-accent-gold/40" 
                                />
                            </div>
                            <div className="group">
                                <select 
                                    name="event_type" 
                                    value={formData.event_type} 
                                    onChange={handleChange} 
                                    className="w-full p-4 bg-secondary-slate/50 border border-accent-gold/20 text-text-light rounded-xl focus:ring-2 focus:ring-accent-gold focus:border-accent-gold focus:outline-none transition-all duration-300 group-hover:border-accent-gold/40"
                                >
                                    <option>Wedding</option>
                                    <option>Reception</option>
                                    <option>Corporate Event</option>
                                    <option>Birthday Party</option>
                                    <option>Anniversary</option>
                                    <option>Religious Ceremony</option>
                                    <option>Conference</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="group">
                                <input 
                                    type="date" 
                                    name="date" 
                                    value={formData.date} 
                                    onChange={handleChange} 
                                    required 
                                    className="w-full p-4 bg-secondary-slate/50 border border-accent-gold/20 text-text-light rounded-xl focus:ring-2 focus:ring-accent-gold focus:border-accent-gold focus:outline-none transition-all duration-300 group-hover:border-accent-gold/40" 
                                />
                            </div>
                            <div className="group">
                                <input 
                                    type="number" 
                                    name="guests" 
                                    placeholder="Estimated Guests" 
                                    value={formData.guests} 
                                    onChange={handleChange} 
                                    required 
                                    className="w-full p-4 bg-secondary-slate/50 border border-accent-gold/20 text-text-light rounded-xl focus:ring-2 focus:ring-accent-gold focus:border-accent-gold focus:outline-none transition-all duration-300 group-hover:border-accent-gold/40" 
                                />
                            </div>
                        </div>
                        
                        <div className="group mb-8">
                            <textarea 
                                name="message" 
                                placeholder="Tell us more about your event..." 
                                value={formData.message} 
                                onChange={handleChange} 
                                rows={5} 
                                required 
                                className="w-full p-4 bg-secondary-slate/50 border border-accent-gold/20 text-text-light rounded-xl focus:ring-2 focus:ring-accent-gold focus:border-accent-gold focus:outline-none transition-all duration-300 group-hover:border-accent-gold/40 resize-none"
                            ></textarea>
                        </div>
                        
                        <div className="text-center">
                            <button 
                                type="submit" 
                                className="bg-gradient-to-r from-accent-gold to-yellow-500 text-primary-navy font-bold py-4 px-12 rounded-full text-lg hover:from-yellow-500 hover:to-accent-gold transition-all duration-500 transform hover:scale-105 shine-effect pulse-glow"
                            >
                                Request Quote
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;