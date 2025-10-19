import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '../utils/data';

const Shop = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800"
        >
          Our Collections
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Link to={`/shop/${category.id}`}>
                <div className="h-64 bg-gradient-to-br from-gold to-dark-gold flex items-center justify-center">
                  <span className="text-white text-8xl">
                    {category.id === 'rings' && '💍'}
                    {category.id === 'chains' && '⛓️'}
                    {category.id === 'earrings' && '👂'}
                    {category.id === 'bangles' && '💍'}
                    {category.id === 'necklaces' && '📿'}
                    {category.id === 'bracelets' && '🪬'}
                  </span>
                </div>
                <div className="p-6 text-center">
                  <h2 className="text-2xl font-semibold mb-2 text-gray-800">{category.name}</h2>
                  <p className="text-gray-600 mb-4">
                    Discover our exquisite collection of {category.name.toLowerCase()}
                  </p>
                  <span className="inline-block bg-gold text-white px-6 py-2 rounded-full font-medium hover:bg-dark-gold transition-colors duration-200">
                    Shop {category.name}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Can't Find What You're Looking For?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our expert craftsmen can create custom jewelry pieces tailored to your preferences.
            Contact us to discuss your unique design requirements.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-dark-gold transition-colors duration-200"
          >
            Contact Us for Custom Orders
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Shop;