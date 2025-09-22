import React from 'react';
import { createPortal } from 'react-dom';
import { WhatsAppIcon, PhoneIcon } from './Icons';

const FloatingButtons: React.FC = () => {
    const portalRoot = document.getElementById('floating-buttons-root');

    if (!portalRoot) {
        return null;
    }

    return createPortal(
        <div 
            className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4"
        >
            <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="bg-accent-gold text-primary-navy p-4 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-110"
            >
                <WhatsAppIcon className="w-8 h-8" />
            </a>
            <a
                href="tel:+911234567890"
                aria-label="Call Us Now"
                className="bg-accent-gold text-primary-navy p-4 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-110"
            >
                <PhoneIcon className="w-8 h-8" />
            </a>
        </div>,
        portalRoot
    );
};

export default FloatingButtons;