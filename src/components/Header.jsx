import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const linkClass = "font-medium tracking-wider uppercase text-sm transition-colors duration-300";
  const activeLinkClass = "text-brand-primary";
  const inactiveLinkClass = "text-white hover:text-brand-primary";
  const scrolledInactiveLinkClass = "text-brand-secondary hover:text-brand-primary";

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className={`text-2xl font-serif font-bold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-brand-secondary' : 'text-white'}`}>
          The Gourmet Vista
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeLinkClass : (isScrolled ? scrolledInactiveLinkClass : inactiveLinkClass)}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={isScrolled ? 'text-brand-secondary' : 'text-white'}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white mt-4">
          <nav className="flex flex-col items-center space-y-4 py-6">
             {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg ${linkClass} ${isActive ? 'text-brand-primary' : 'text-brand-secondary hover:text-brand-primary'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 