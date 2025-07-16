import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-brand-light">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">The Gourmet Vista</h3>
            <p className="text-sm text-stone-300">Experience Culinary Excellence.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-stone-300">123 Vista Lane, Skyline City, 90210</p>
            <p className="text-sm text-stone-300 mt-1">contact@thegourmetvista.com</p>
            <p className="text-sm text-stone-300 mt-1">(555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="text-stone-300 hover:text-brand-primary transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-stone-300 hover:text-brand-primary transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-stone-300 hover:text-brand-primary transition-colors duration-300">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-stone-400">&copy; {new Date().getFullYear()} The Gourmet Vista. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 