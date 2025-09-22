import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from './Icons';

const Location: React.FC = () => {
    return (
        <section id="location" className="py-20 bg-secondary-slate">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-accent-gold font-bold">Visit Our Venue</h2>
                    <p className="text-lg text-text-medium mt-4 max-w-3xl mx-auto">Located on the serene banks of the river, Saha Riverside Banquet offers easy accessibility with ample parking and beautiful surroundings for your special occasions.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="rounded-lg overflow-hidden shadow-2xl">
                         <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.183492024987!2d88.36389501495955!3d22.57264608518309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027602f5a8c2a3%3A0x1e3b6c2faf6f9c9b!2sHowrah%20Bridge!5e0!3m2!1sen!2sin!4v1678886442657!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps Location of Saha Riverside Banquet"
                            className="grayscale contrast-125"
                        ></iframe>
                    </div>
                     <div className="space-y-8">
                        <div className="bg-gradient-to-br from-primary-navy/20 to-secondary-slate/40 backdrop-blur-sm rounded-xl p-6 border border-accent-gold/20">
                            <div className="flex items-start mb-4">
                                <MapPinIcon className="w-8 h-8 text-accent-gold mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-text-light mb-2">Our Address</h3>
                                    <p className="text-text-medium leading-relaxed">123 Riverside Drive<br/>Howrah, West Bengal 711101<br/>India</p>
                                    <div className="mt-3">
                                        <p className="text-sm text-text-medium opacity-80">• 10 minutes from Howrah Railway Station</p>
                                        <p className="text-sm text-text-medium opacity-80">• 25 minutes from Netaji Subhash Chandra Bose Airport</p>
                                        <p className="text-sm text-text-medium opacity-80">• Ample parking for 200+ vehicles</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-primary-navy/20 to-secondary-slate/40 backdrop-blur-sm rounded-xl p-6 border border-accent-gold/20">
                                <div className="flex items-start">
                                    <PhoneIcon className="w-6 h-6 text-accent-gold mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-bold text-text-light mb-2">Contact Numbers</h3>
                                        <a href="tel:+911234567890" className="block text-text-medium hover:text-accent-gold transition-colors mb-1">+91 123 456 7890</a>
                                        <a href="tel:+911234567891" className="block text-text-medium hover:text-accent-gold transition-colors text-sm opacity-80">+91 123 456 7891 (Events)</a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-primary-navy/20 to-secondary-slate/40 backdrop-blur-sm rounded-xl p-6 border border-accent-gold/20">
                                <div className="flex items-start">
                                    <MailIcon className="w-6 h-6 text-accent-gold mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-bold text-text-light mb-2">Email Us</h3>
                                        <a href="mailto:events@sahariverside.com" className="block text-text-medium hover:text-accent-gold transition-colors mb-1">events@sahariverside.com</a>
                                        <a href="mailto:info@sahariverside.com" className="block text-text-medium hover:text-accent-gold transition-colors text-sm opacity-80">info@sahariverside.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-primary-navy/20 to-secondary-slate/40 backdrop-blur-sm rounded-xl p-6 border border-accent-gold/20">
                            <div className="flex items-start">
                                <ClockIcon className="w-6 h-6 text-accent-gold mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg font-bold text-text-light mb-3">Operating Hours</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p className="text-text-medium"><span className="font-semibold">Venue Visits:</span></p>
                                            <p className="text-text-medium opacity-80">Monday - Sunday: 9:00 AM - 8:00 PM</p>
                                        </div>
                                        <div>
                                            <p className="text-text-medium"><span className="font-semibold">Event Bookings:</span></p>
                                            <p className="text-text-medium opacity-80">24/7 by appointment</p>
                                        </div>
                                    </div>
                                    <div className="mt-3 pt-3 border-t border-accent-gold/20">
                                        <p className="text-xs text-text-medium opacity-70">For urgent inquiries outside office hours, please call our emergency contact.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <a href="https://maps.google.com/?q=123+Riverside+Drive+Howrah" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-gold to-yellow-500 text-primary-navy font-semibold rounded-lg hover:from-yellow-500 hover:to-accent-gold transition-all duration-300 transform hover:scale-105 shadow-lg">
                                <MapPinIcon className="w-5 h-5 mr-2" />
                                Get Directions to Saha Riverside
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;