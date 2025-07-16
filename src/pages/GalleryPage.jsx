import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const GalleryPage = () => {
  return (
    <div className="bg-brand-light py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary">Visual Stories</h2>
          <p className="mt-4 text-lg text-gray-600">A glimpse into the world of The Gourmet Vista.</p>
        </div>
        <div className="columns-2 md:columns-3 gap-4">
          {GALLERY_IMAGES.map((src, index) => (
            <img 
              key={index} 
              src={src} 
              alt={`Gallery image ${index + 1}`} 
              className="mb-4 w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 break-inside-avoid"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage; 