import logo from '../assets/conservation.png';
import { navItems, title } from '../constants/index';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenu] = useState(false);

    const navigate = useNavigate();

    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenuOpen);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const topOffset = element.getBoundingClientRect().top;
            const scrollToPosition = topOffset + window.pageYOffset;
            window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });

            toggleMobileMenu(); // Close mobile menu after clicking on a link
        }
    };

    const isAnimalRoute = location.pathname.includes('animal');
    const isGameRoute = location.pathname.includes('game');

    const goToHome = () => {
        if (isAnimalRoute) {
            navigate('/project-2024-group-era/home');
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    return (
        <nav className="sticky top-0 left-0 right-0 z-50 py-4 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="px-10 flex items-center justify-between lg:text-sm">
                <div className='flex justify-center items items-center cursor-pointer' onClick={goToHome}>
                    <img src={logo} alt="logo" className="w-8 h-8 mr-3" />
                    <span className="text-lg tracking-tight">{title}</span>
                </div>
                {isAnimalRoute || isGameRoute ? ( // If the route contains "animal", render home button
                    <Link to="/project-2024-group-era/home" className="text-neutral-100 hover:text-green-600 hidden lg:flex space-x-12">
                        Home
                    </Link>
                ) : ( // Otherwise, render complete menu
                    <div>
                        <ul className='hidden lg:flex space-x-12'>
                            {navItems.map((item, index) => (
                                <li key={index} className='text-neutral-100 hover:text-green-600 duration-200 cursor-pointer'>
                                    <a href={`#${item.href}`} onClick={() => scrollToSection(item.href)}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleMobileMenu}>
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            
            {mobileMenuOpen && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                    <ul className='space-y-5'>
                        {isAnimalRoute ? (
                            <li className='py-4 cursor-pointer'>
                                <Link to="/" onClick={() => scrollToSection('home')}>Home</Link>
                            </li>
                        ) : (
                            navItems.map((item, index) => (
                                <li key={index} className='py-4 cursor-pointer'>
                                    <Link to={item.href} onClick={() => scrollToSection(item.href)}>{item.label}</Link>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            )}
        </nav>
    );
};
export default Navbar;
