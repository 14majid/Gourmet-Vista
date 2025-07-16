import React from 'react';
import { MENU_ITEMS } from '../constants';

const ShowcaseDish = ({ dish }) => (
  <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-xl overflow-hidden my-12">
    <img src={dish.image} alt={dish.name} className="w-full md:w-1/2 h-64 md:h-auto object-cover" />
    <div className="p-8 md:p-12 w-full md:w-1/2">
      <h3 className="font-serif text-3xl font-bold text-brand-secondary mb-3">{dish.name}</h3>
      <p className="text-gray-600 mb-4">{dish.description}</p>
      <span className="text-2xl font-semibold text-brand-primary">{dish.price}</span>
    </div>
  </div>
);

const RegularDish = ({ dish }) => (
  <div className="py-4 border-b border-gray-200">
    <div className="flex justify-between items-start">
      <div>
        <h4 className="text-lg font-semibold text-brand-secondary">{dish.name}</h4>
        <p className="text-sm text-gray-500 mt-1">{dish.description}</p>
      </div>
      <span className="text-lg font-semibold text-brand-primary ml-4 whitespace-nowrap">{dish.price}</span>
    </div>
  </div>
);

const MenuPage = () => {
  const showcaseDishes = MENU_ITEMS.filter(item => item.showcase);
  const appetizers = MENU_ITEMS.filter(item => item.category === 'Appetizer' && !item.showcase);
  const mainCourses = MENU_ITEMS.filter(item => item.category === 'Main Course' && !item.showcase);
  const desserts = MENU_ITEMS.filter(item => item.category === 'Dessert' && !item.showcase);
  const drinks = MENU_ITEMS.filter(item => item.category === 'Drink' && !item.showcase);

  return (
    <div className="bg-brand-light py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary">Our Menu</h2>
          <p className="mt-4 text-lg text-gray-600">A symphony of flavors crafted with passion</p>
        </div>

        <section className="mt-16">
          <h3 className="text-3xl font-serif font-bold text-center text-brand-secondary mb-4">Chef's Showcase</h3>
          {showcaseDishes.map(dish => <ShowcaseDish key={dish.id} dish={dish} />)}
        </section>

        <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          <div>
            <h3 className="text-3xl font-serif font-bold text-brand-secondary mb-6 border-b-2 border-brand-primary pb-2">Appetizers</h3>
            {appetizers.map(dish => <RegularDish key={dish.id} dish={dish} />)}
          </div>
          <div>
            <h3 className="text-3xl font-serif font-bold text-brand-secondary mb-6 border-b-2 border-brand-primary pb-2">Main Courses</h3>
            {mainCourses.map(dish => <RegularDish key={dish.id} dish={dish} />)}
          </div>
          <div>
            <h3 className="text-3xl font-serif font-bold text-brand-secondary mb-6 border-b-2 border-brand-primary pb-2">Desserts</h3>
            {desserts.map(dish => <RegularDish key={dish.id} dish={dish} />)}
          </div>
          <div>
            <h3 className="text-3xl font-serif font-bold text-brand-secondary mb-6 border-b-2 border-brand-primary pb-2">Drinks</h3>
            {drinks.map(dish => <RegularDish key={dish.id} dish={dish} />)}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MenuPage; 