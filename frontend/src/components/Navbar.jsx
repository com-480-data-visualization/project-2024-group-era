import logo from '../assets/conservation.png';
import { navItems, title } from '../constants/index';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenuOpen);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({ top: 0, behavior: 'auto' });

            requestAnimationFrame(() => {
                const topOffset = element.getBoundingClientRect().top;
                const scrollToPosition = topOffset + window.pageYOffset - 180;
                window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
            });

            toggleMobileMenu(); // Close mobile menu after clicking on a link
        }
    };

    return (
    <nav className="sticky top-0 z-50 py-4 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="px-10 flex items-center justify-between lg:text-sm">
            <div className='flex justify-center items items-center cursor-pointer' onClick={() => scrollToSection('home')}>
                <img src={logo} alt="logo" className="w-8 h-8 mr-3" />
                <span className="text-lg tracking-tight">{title}</span>
            </div>
            <div>
                <ul className='hidden lg:flex space-x-12'>
                    {navItems.map((item, index) => (
                        <li key={index} className='text-neutral-100 hover:text-green-600 cursor-pointer'>
                            <a href={`#${item.href}`} onClick={() => scrollToSection(item.href)}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="lg:hidden md:flex flex-col justify-end">
                <button onClick={toggleMobileMenu}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>
        </div>
        
        {mobileMenuOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                <ul className='space-y-5'>
                    {navItems.map((item, index) => (
                        <li key={index} className='py-4 cursor-pointer'>
                            <a href={`#${item.href}`} onClick={() => scrollToSection(item.href)}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </nav>
    );
};

export default Navbar;
