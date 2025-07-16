import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('https://picsum.photos/id/1015/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-extrabold tracking-tight leading-tight mb-4">
          Culinary Excellence, Breathtaking Views
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light">
          Indulge in an unforgettable dining experience where exquisite flavors meet stunning cityscapes.
        </p>
        <Link
          to="/menu"
          className="bg-brand-primary text-white font-bold py-3 px-8 rounded-full text-lg uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
        >
          Explore Our Menu
        </Link>
      </div>
    </div>
  );
};

export default HomePage; 