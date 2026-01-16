import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import clsx from 'clsx';

import logo from '../assets/fiscalio-png-logo.png';

const Navbar: React.FC = () => {
    // ... existing hooks
    const { language, toggleLanguage, t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollTo = (id: string) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    const navLinks = [
        { name: t('الرئيسية', 'Accueil'), action: () => handleScrollTo('hero') },
        { name: t('الباقات', 'Tarifs'), action: () => handleScrollTo('pricing') },
        { name: t('احجز مقعدك', 'Réserver'), to: '/register' },
    ];

    return (
        <nav
            className={clsx(
                'fixed top-0 w-full z-50 transition-all duration-300 rtl:text-right ltr:text-left',
                scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
            )}
        >
            <div className="container mx-auto px-6 relative flex items-center justify-between">
                {/* Logo (Left) */}
                <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-blue-900 tracking-tight z-20">
                    <img src={logo} alt="Fiscalio Logo" className="h-10 w-auto" />
                    Fiscalio
                </Link>

                {/* Desktop Menu - Centered Absolutely */}
                <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-auto justify-center">
                    {navLinks.map((link, index) => (
                        link.to ? (
                            <Link
                                key={index}
                                to={link.to}
                                className="text-gray-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap"
                            >
                                {link.name}
                            </Link>
                        ) : (
                            <button
                                key={index}
                                onClick={link.action}
                                className="text-gray-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap"
                            >
                                {link.name}
                            </button>
                        )
                    ))}
                </div>

                {/* Right Side: Language Switcher + Mobile Toggle */}
                <div className="flex items-center gap-4 z-20">
                    {/* Language Switcher */}
                    <button
                        onClick={toggleLanguage}
                        className="hidden md:flex items-center space-x-2 rtl:space-x-reverse text-blue-900 font-semibold border border-blue-100 px-3 py-1.5 rounded-full hover:bg-blue-50 transition-colors"
                    >
                        <Globe size={18} />
                        <span>{language === 'ar' ? 'Français' : 'العربية'}</span>
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg absolute w-full left-0 top-full flex flex-col items-center py-6 space-y-4 animate-in slide-in-from-top-5">
                    {navLinks.map((link, index) => (
                        link.to ? (
                            <Link
                                key={index}
                                to={link.to}
                                className="text-lg text-gray-800 font-medium hover:text-blue-600"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ) : (
                            <button
                                key={index}
                                onClick={link.action}
                                className="text-lg text-gray-800 font-medium hover:text-blue-600"
                            >
                                {link.name}
                            </button>
                        )
                    ))}
                    <button
                        onClick={() => {
                            toggleLanguage();
                            setIsOpen(false);
                        }}
                        className="flex items-center space-x-2 rtl:space-x-reverse text-blue-900 font-bold mt-4"
                    >
                        <Globe size={20} />
                        <span>{language === 'ar' ? 'Français' : 'العربية'}</span>
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
