import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-brand-light py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary">Get In Touch</h2>
          <p className="mt-4 text-lg text-gray-600">We would love to host you. Book your table or reach out with any inquiries.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <h3 className="text-2xl font-serif font-bold text-brand-secondary mb-6">Contact Details</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-brand-primary mr-4 mt-1"/>
                <div>
                  <h4 className="font-semibold text-lg">Reservations</h4>
                  <p className="text-gray-600">For the best experience, please call us to book your table.</p>
                  <a href="tel:+15551234567" className="text-brand-primary hover:underline font-medium">(555) 123-4567</a>
                </div>
              </div>
               <div className="flex items-start">
                <Mail className="w-6 h-6 text-brand-primary mr-4 mt-1"/>
                <div>
                  <h4 className="font-semibold text-lg">General Inquiries</h4>
                  <a href="mailto:contact@thegourmetvista.com" className="text-brand-primary hover:underline font-medium">contact@thegourmetvista.com</a>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-brand-primary mr-4 mt-1"/>
                <div>
                  <h4 className="font-semibold text-lg">Business Hours</h4>
                  <p className="text-gray-600">Mon - Fri: 5:00 PM - 11:00 PM</p>
                  <p className="text-gray-600">Sat - Sun: 4:00 PM - 12:00 AM</p>
                </div>
              </div>
            </div>
             <div className="mt-8 pt-6 border-t border-gray-200">
               <h3 className="text-xl font-serif font-bold text-brand-secondary">Location</h3>
               <p className="mt-2 text-gray-600">123 Vista Lane, Skyline City, 90210</p>
            </div>
          </div>
          <div className="w-full h-96 md:h-full rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.089943486255!2d-122.4194154846816!3d37.77492957975904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c5c3619b5%3A0x334b342e4787a278!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1678886400000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 