import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 130) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            className={`fixed bottom-8 right-8 z-50 p-5 bg-gray-800 text-white rounded-full transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            onClick={scrollToTop}
        >
            <ArrowUp size={24} />
        </button>
    );
};

export default ScrollToTopButton;
