// FIX: Replaced placeholder content with a complete React component for the website header. This implementation includes a responsive navigation bar that adapts to screen size and changes appearance on scroll for better UX.
import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from './Icons';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const scroller = document.getElementById('root');
        if (!scroller) return;

        const handleScroll = () => {
            setIsScrolled(scroller.scrollTop > 10);
        };
        
        scroller.addEventListener('scroll', handleScroll);
        return () => scroller.removeEventListener('scroll', handleScroll);
    }, []);
    
    useEffect(() => {
      const mainContent = document.getElementById('root');
      if (isOpen) {
        mainContent?.classList.add('overflow-hidden');
      } else {
        mainContent?.classList.remove('overflow-hidden');
      }
    }, [isOpen]);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Halls', href: '#venues' },
        { name: 'Menu', href: '#menu' },
        { name: 'Packages', href: '#services' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Reviews', href: '#testimonials' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isOpen ? 'glass-morphism shadow-2xl' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <a href="#" className={`font-serif text-3xl font-bold transition-all duration-300 text-gradient hover:scale-105 transform`}>Saha Riverside Banquet</a>
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link, index) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                className={`text-lg font-medium transition-all duration-300 text-text-light hover:text-accent-gold hover:-translate-y-1 relative group`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-gold transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsOpen(!isOpen)} 
                            className={`text-text-light p-2 rounded-full transition-all duration-300 hover:bg-accent-gold/20 hover:scale-110`}
                        >
                            {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden glass-morphism border-t border-accent-gold/20">
                    <nav className="flex flex-col items-center space-y-6 py-8">
                         {navLinks.map((link, index) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                onClick={() => setIsOpen(false)} 
                                className="text-lg text-text-light hover:text-accent-gold transition-all duration-300 transform hover:scale-105"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;