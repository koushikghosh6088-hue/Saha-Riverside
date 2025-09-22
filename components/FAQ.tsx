import React, { useState } from 'react';
import { ChevronDownIcon } from './Icons';

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

const FAQ: React.FC = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqData: FAQItem[] = [
        {
            id: 1,
            question: "What is the booking process for Saha Riverside Banquet?",
            answer: "Our booking process is simple and straightforward. Contact us to check availability for your preferred date, visit our venue for a tour, choose your package, sign the contract with a 30% advance payment, and finalize details 2 weeks before your event. Our dedicated event coordinators will guide you through every step."
        },
        {
            id: 2,
            question: "What is included in your event packages?",
            answer: "Our packages include venue rental, tables and chairs setup, basic lighting and sound system, dedicated event coordinator, security services, and parking facilities. Catering, decoration, photography, and additional services can be customized based on your requirements and budget."
        },
        {
            id: 3,
            question: "Can we customize the menu according to our preferences?",
            answer: "Absolutely! We offer complete menu customization including vegetarian, non-vegetarian, Chinese, South Indian, Continental, and specialty cuisines. Our experienced chefs can accommodate dietary restrictions, religious preferences, and specific requests. We also provide live cooking stations and themed food counters."
        },
        {
            id: 4,
            question: "What are your cancellation and refund policies?",
            answer: "Cancellations made 6 months before the event receive 80% refund, 3 months before receive 50% refund, and 1 month before receive 25% refund. Cancellations within 15 days are non-refundable. Date changes are allowed once without penalty if done at least 3 months in advance, subject to availability."
        },
        {
            id: 5,
            question: "Do you provide decoration services?",
            answer: "Yes, we work with trusted decoration partners who specialize in various themes including traditional Indian, contemporary, floral arrangements, lighting setups, and custom backdrops. We can arrange everything from simple elegant setups to elaborate themed decorations based on your vision and budget."
        },
        {
            id: 6,
            question: "What audio-visual equipment is available?",
            answer: "We provide professional sound systems, wireless microphones, LED projectors, large screens, stage lighting, backdrop lighting, and power backup. For special requirements like live band setups, DJ equipment, or advanced lighting systems, we can arrange through our technical partners."
        },
        {
            id: 7,
            question: "Is parking available for guests?",
            answer: "Yes, we offer ample parking space for 200+ vehicles including cars, bikes, and special arrangements for VIP parking. Our parking area is well-lit, secure with CCTV surveillance, and managed by our security team. Valet parking services are also available on request."
        },
        {
            id: 8,
            question: "Can we bring our own caterers or vendors?",
            answer: "While we prefer working with our trusted catering partners for quality assurance, we do allow external caterers with prior approval. External vendors must meet our quality standards, provide necessary licenses, and follow our venue guidelines. Additional charges may apply for external vendor coordination."
        },
        {
            id: 9,
            question: "What are your operating hours and contact information?",
            answer: "We're open Monday through Sunday from 9:00 AM to 8:00 PM for venue visits and consultations. For events, we operate 24/7 with prior booking. You can reach us at +91 123 456 7890, email us at events@sahariverside.com, or visit us at 123 Riverside Drive, Howrah, West Bengal."
        },
        {
            id: 10,
            question: "Do you host multiple events simultaneously?",
            answer: "Our venue has three distinct halls that can accommodate multiple events simultaneously if needed. However, we ensure complete privacy and separate entrances for each event. For exclusive bookings of the entire venue, premium packages are available for larger celebrations."
        }
    ];

    const toggleFAQ = (id: number) => {
        setOpenFAQ(openFAQ === id ? null : id);
    };

    return (
        <section id="faq" className="py-20 bg-gradient-to-br from-primary-navy via-secondary-slate to-primary-navy relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/4 right-1/6 w-80 h-80 bg-accent-gold/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 left-1/5 w-64 h-64 bg-accent-gold/3 rounded-full blur-2xl"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-accent-gold font-bold mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-text-medium max-w-3xl mx-auto">
                        Find answers to commonly asked questions about our banquet hall services, booking process, and event management.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-accent-gold to-yellow-500 mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto">
                    {faqData.map((faq) => (
                        <div
                            key={faq.id}
                            className="bg-gradient-to-br from-primary-navy/40 to-secondary-slate/60 backdrop-blur-sm rounded-xl border border-accent-gold/20 mb-4 overflow-hidden hover:border-accent-gold/40 transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleFAQ(faq.id)}
                                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-accent-gold/5 transition-all duration-300 group"
                            >
                                <h3 className="text-lg font-semibold text-text-light group-hover:text-accent-gold transition-colors duration-300 pr-4">
                                    {faq.question}
                                </h3>
                                <ChevronDownIcon 
                                    className={`w-6 h-6 text-accent-gold transform transition-transform duration-300 flex-shrink-0 ${
                                        openFAQ === faq.id ? 'rotate-180' : ''
                                    }`} 
                                />
                            </button>
                            
                            {openFAQ === faq.id && (
                                <div className="px-6 pb-5 border-t border-accent-gold/20">
                                    <p className="text-text-medium leading-relaxed pt-4">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-accent-gold/10 to-yellow-500/10 rounded-xl p-8 border border-accent-gold/20 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-serif text-text-light mb-4">
                            Still Have Questions?
                        </h3>
                        <p className="text-text-medium mb-6">
                            Our friendly team is here to help you plan the perfect event. Get in touch with us for personalized assistance.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-accent-gold to-yellow-500 text-primary-navy font-semibold rounded-lg hover:from-yellow-500 hover:to-accent-gold transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                Contact Us
                            </a>
                            <a
                                href="tel:+911234567890"
                                className="inline-flex items-center justify-center px-6 py-3 border-2 border-accent-gold text-accent-gold font-semibold rounded-lg hover:bg-accent-gold hover:text-primary-navy transition-all duration-300"
                            >
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;