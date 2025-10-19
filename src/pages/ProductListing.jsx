import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../utils/data';
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';

const ProductListing = () => {
  const { categoryId } = useParams();
  const { addToCart } = useCart();
  const { addToFavorites, isFavorite } = useFavorites();

  const categoryProducts = products[categoryId] || [];
  const categoryName = categoryId.charAt(0).toUpperCase() + categoryId.slice(1);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleToggleFavorite = (product) => {
    addToFavorites(product);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            {categoryName}
          </h1>
          <p className="text-center text-gray-600 text-lg">
            Discover our exquisite collection of {categoryName.toLowerCase()}
          </p>
        </motion.div>

        {categoryProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <p className="text-gray-600 text-xl">No products found in this category.</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <Link to={`/product/${product.id}`}>
                  <div className="h-64 bg-gradient-to-br from-gold to-dark-gold flex items-center justify-center relative">
                    <span className="text-white text-8xl">
                      {categoryId === 'rings' && '💍'}
                      {categoryId === 'chains' && '⛓️'}
                      {categoryId === 'earrings' && '👂'}
                      {categoryId === 'bangles' && '💍'}
                      {categoryId === 'necklaces' && '📿'}
                      {categoryId === 'bracelets' && '🪬'}
                    </span>
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                    <button
                      onClick={() => handleToggleFavorite(product)}
                      className={`p-2 rounded-full transition-colors duration-200 ${
                        isFavorite(product.id)
                          ? 'text-red-500 bg-red-50'
                          : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                      }`}
                    >
                      <svg className="w-5 h-5" fill={isFavorite(product.id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                  <div className="text-sm text-gray-600 mb-3">
                    <p>Size: {product.size}</p>
                    <p>Weight: {product.weight}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gold">₹{product.price.toLocaleString()}</span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-gold text-white px-4 py-2 rounded-full font-medium hover:bg-dark-gold transition-colors duration-200"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/shop"
            className="inline-block bg-gray-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors duration-200"
          >
            ← Back to Categories
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductListing;