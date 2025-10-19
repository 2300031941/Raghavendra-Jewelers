import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '../utils/data';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Welcome to <span className="text-gold">Raghavendra Jewelers</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Crafting exquisite jewelry with tradition, trust, and unparalleled craftsmanship since generations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/shop"
              className="bg-gold text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-dark-gold transition-colors duration-200 inline-block"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Featured Collections
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.slice(0, 6).map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-gold to-dark-gold flex items-center justify-center">
                  <span className="text-white text-6xl">💍</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{category.name}</h3>
                  <Link
                    to={`/shop/${category.id}`}
                    className="text-gold hover:text-dark-gold font-medium transition-colors duration-200"
                  >
                    Shop {category.name} →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Info */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            Visit Our Store
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-300">123 Jewelry Street<br />City, State 12345</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">info@raghavendrajewelers.com</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;