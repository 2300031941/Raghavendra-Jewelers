import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { FavoritesProvider } from './contexts/FavoritesContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import ProductListing from './pages/ProductListing';
import ItemDetail from './pages/ItemDetail';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import Contact from './pages/Contact';

function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <Router basename="/Raghavendra-Jewelers">
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/:categoryId" element={<ProductListing />} />
                <Route path="/product/:productId" element={<ItemDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </Router>
      </FavoritesProvider>
    </CartProvider>
  );
}

export default App;
