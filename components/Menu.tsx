import React, { useState } from 'react';

interface MenuItem {
  category: string;
  items: string[];
}

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('vegetarian');

  const menuCategories: MenuItem[] = [
    {
      category: 'vegetarian',
      items: [
        'Paneer Butter Masala',
        'Dal Makhani',
        'Chole Bhature',
        'Aloo Gobi',
        'Mixed Vegetable Curry',
        'Rajma Curry',
        'Palak Paneer',
        'Baingan Bhartha',
        'Jeera Rice',
        'Butter Naan',
        'Roti/Chapati',
        'Raita',
        'Pickle & Papad',
        'Gulab Jamun',
        'Rasmalai'
      ]
    },
    {
      category: 'non-vegetarian',
      items: [
        'Butter Chicken',
        'Chicken Biryani',
        'Mutton Curry',
        'Fish Curry (Bengali Style)',
        'Chicken Tikka Masala',
        'Seekh Kebab',
        'Tandoori Chicken',
        'Prawn Curry',
        'Egg Curry',
        'Chicken Dum Biryani',
        'Mutton Biryani',
        'Fish Fry',
        'Basmati Rice',
        'Naan/Roti',
        'Ice Cream'
      ]
    },
    {
      category: 'chinese',
      items: [
        'Veg/Chicken Manchurian',
        'Hakka Noodles',
        'Fried Rice',
        'Chilli Chicken',
        'Sweet & Sour Vegetables',
        'Spring Rolls',
        'Veg/Chicken Momos',
        'Schezwan Fried Rice',
        'Honey Chilli Potato',
        'Hot & Sour Soup',
        'Chicken 65',
        'Paneer Chilli',
        'Veg Balls Curry',
        'Chicken Lollipop',
        'Ice Cream'
      ]
    },
    {
      category: 'south-indian',
      items: [
        'Sambar Rice',
        'Rasam Rice',
        'Dosa with Chutney',
        'Idli Sambar',
        'Vada Sambar',
        'Coconut Rice',
        'Lemon Rice',
        'Curd Rice',
        'Vegetable Upma',
        'Medu Vada',
        'Uttapam',
        'Filter Coffee',
        'Coconut Chutney',
        'Tomato Chutney',
        'Payasam'
      ]
    }
  ];

  const currentMenu = menuCategories.find(menu => menu.category === activeCategory);

  return (
    <section id="menu" className="py-32 bg-gradient-to-b from-secondary-slate to-primary-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-gold/3 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            <span className="text-gradient">Catering</span> <span className="text-text-light">Menu</span>
          </h2>
          <p className="text-xl text-text-medium mt-6 max-w-4xl mx-auto leading-relaxed">
            Savor the finest culinary experiences with our diverse menu options, crafted by expert chefs using fresh ingredients.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-gold to-yellow-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Menu Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {menuCategories.map((menu) => (
            <button
              key={menu.category}
              onClick={() => setActiveCategory(menu.category)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-500 transform hover:scale-105 capitalize ${
                activeCategory === menu.category
                  ? 'bg-gradient-to-r from-accent-gold to-yellow-500 text-primary-navy shadow-lg'
                  : 'glass-morphism text-text-light hover:text-accent-gold border border-accent-gold/20 hover:border-accent-gold/60'
              }`}
            >
              {menu.category.replace('-', ' ')} Cuisine
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="max-w-6xl mx-auto">
          <div className="glass-morphism rounded-3xl p-8 md:p-12 border border-accent-gold/20">
            <h3 className="text-3xl md:text-4xl font-serif text-gradient text-center mb-12 capitalize">
              {activeCategory.replace('-', ' ')} Menu
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentMenu?.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-secondary-slate/50 rounded-xl hover:bg-secondary-slate/70 transition-all duration-300 group"
                >
                  <div className="w-3 h-3 bg-accent-gold rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-text-light text-lg group-hover:text-accent-gold transition-colors duration-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-text-medium mb-6 text-lg">
                All menu items can be customized according to your preferences and dietary requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-accent-gold to-yellow-500 text-primary-navy font-bold py-4 px-8 rounded-full hover:from-yellow-500 hover:to-accent-gold transition-all duration-500 transform hover:scale-105"
                >
                  Customize Menu
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center border-2 border-accent-gold text-accent-gold font-bold py-4 px-8 rounded-full hover:bg-accent-gold hover:text-primary-navy transition-all duration-500"
                >
                  View Packages
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-accent-gold to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-text-light mb-2">Fresh Preparation</h4>
            <p className="text-text-medium">All dishes prepared fresh on the day of your event</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-accent-gold to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-text-light mb-2">Quality Assured</h4>
            <p className="text-text-medium">Premium ingredients sourced from trusted suppliers</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-accent-gold to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-text-light mb-2">Expert Chefs</h4>
            <p className="text-text-medium">Experienced culinary team with decades of expertise</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;