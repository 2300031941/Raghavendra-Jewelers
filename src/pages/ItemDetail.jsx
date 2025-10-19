import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../utils/data';
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';

const ItemDetail = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const { addToFavorites, isFavorite } = useFavorites();

  // Find the product across all categories
  let product = null;
  let categoryId = null;
  for (const [catId, catProducts] of Object.entries(products)) {
    const found = catProducts.find(p => p.id === parseInt(productId));
    if (found) {
      product = found;
      categoryId = catId;
      break;
    }
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold hover:text-dark-gold font-medium">
            ← Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleToggleFavorite = () => {
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
          <Link
            to={`/shop/${categoryId}`}
            className="text-gold hover:text-dark-gold font-medium mb-4 inline-block"
          >
            ← Back to {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="h-96 bg-gradient-to-br from-gold to-dark-gold rounded-lg flex items-center justify-center">
              <span className="text-white text-9xl">
                {categoryId === 'rings' && '💍'}
                {categoryId === 'chains' && '⛓️'}
                {categoryId === 'earrings' && '👂'}
                {categoryId === 'bangles' && '💍'}
                {categoryId === 'necklaces' && '📿'}
                {categoryId === 'bracelets' && '🪬'}
              </span>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="flex justify-between items-start mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{product.name}</h1>
              <button
                onClick={handleToggleFavorite}
                className={`p-3 rounded-full transition-colors duration-200 ${
                  isFavorite(product.id)
                    ? 'text-red-500 bg-red-50'
                    : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                }`}
              >
                <svg className="w-6 h-6" fill={isFavorite(product.id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-bold text-gold">₹{product.price.toLocaleString()}</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-1">Size</h3>
                <p className="text-gray-600">{product.size}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-1">Weight</h3>
                <p className="text-gray-600">{product.weight}</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-semibold text-gray-800 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToCart}
                className="flex-1 bg-gold text-white py-3 px-6 rounded-full font-semibold hover:bg-dark-gold transition-colors duration-200"
              >
                Add to Cart
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleToggleFavorite}
                className={`py-3 px-6 rounded-full font-semibold border-2 transition-colors duration-200 ${
                  isFavorite(product.id)
                    ? 'border-red-500 text-red-500 bg-red-50'
                    : 'border-gold text-gold hover:bg-gold hover:text-white'
                }`}
              >
                {isFavorite(product.id) ? '❤️ Added to Favorites' : '🤍 Add to Favorites'}
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Related Products Suggestion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Love this piece?</h2>
          <p className="text-gray-600 mb-6">
            Check out more {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)} in our collection
          </p>
          <Link
            to={`/shop/${categoryId}`}
            className="inline-block bg-gray-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors duration-200"
          >
            View More {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ItemDetail;