import React from 'react';
// import { STAFF_MEMBERS, PARTNERS } from '../constants';
import { KITCHEN_STAFF, MANAGEMENT_STAFF, SUPPORT_STAFF, PARTNERS } from '../constants';

const StaffCard = ({ member }) => (
  <div className="text-center">
    <img src={member.image} alt={member.name} className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg mb-4" />
    <h4 className="text-xl font-bold font-serif text-brand-secondary">{member.name}</h4>
    <p className="text-brand-primary font-semibold mb-2">{member.role}</p>
    <p className="text-gray-600 text-sm">{member.bio}</p>
  </div>
);

const AboutPage = () => {
  return (
    <div className="bg-brand-light py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary">Our Story</h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Founded on the belief that dining is more than just a meal, The Gourmet Vista is a celebration of artistry, flavor, and connection. Our philosophy is simple: use the finest, locally-sourced ingredients to create dishes that are both innovative and comforting.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Nestled above the city, we offer a sanctuary where guests can escape the everyday and savor moments of pure culinary delight. Every detail, from our elegant decor to our impeccable service, is designed to create a truly memorable experience.
            </p>
          </div>
          <div className="w-full h-96 rounded-lg shadow-xl overflow-hidden">
            <img src="https://picsum.photos/id/1018/800/600" alt="Restaurant ambiance" className="w-full h-full object-cover" />
          </div>
        </section>

        <section className="text-center">
          {/* <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary">Meet The Team</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">The heart and soul of our restaurant, dedicated to making your visit perfect.</p> */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary">Meet The Kitchen Team</h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* {STAFF_MEMBERS.map(member => <StaffCard key={member.id} member={member} />)} */}
            {KITCHEN_STAFF.map(member => <StaffCard key={member.id} member={member} />)}
          </div>
        </div>

        <div className="text-center mt-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary">Meet The Front of House Staff Team</h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* {STAFF_MEMBERS.map(member => <StaffCard key={member.id} member={member} />)} */}
            {MANAGEMENT_STAFF.map(member => <StaffCard key={member.id} member={member} />)}
          </div>
        </div>

        <div className="text-center mt-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary">Meet The Support Team</h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* {STAFF_MEMBERS.map(member => <StaffCard key={member.id} member={member} />)} */}
            {SUPPORT_STAFF.map(member => <StaffCard key={member.id} member={member} />)}
          </div>
        </div>
        </section>


        <section className="mt-24 pt-16 border-t border-gray-200 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary">Our Valued Partners</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We are proud to partner with the finest local artisans, farmers, and purveyors who share our commitment to quality and sustainability. Their dedication is the secret behind our freshest ingredients.
          </p>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {PARTNERS.map(partner => (
              <a key={partner.id} href={partner.website} target="_blank" rel="noopener noreferrer" title={partner.name} className="flex justify-center items-center p-2 transform transition-transform duration-300 hover:scale-105">
                  <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out" 
                  />
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage; 