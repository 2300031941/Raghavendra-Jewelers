import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (item) => {
    setFavorites(prevFavorites => {
      if (!prevFavorites.find(fav => fav.id === item.id)) {
        return [...prevFavorites, item];
      }
      return prevFavorites;
    });
  };

  const removeFromFavorites = (id) => {
    setFavorites(prevFavorites => prevFavorites.filter(item => item.id !== id));
  };

  const isFavorite = (id) => {
    return favorites.some(item => item.id === id);
  };

  return (
    <FavoritesContext.Provider value={{
      favorites,
      addToFavorites,
      removeFromFavorites,
      isFavorite
    }}>
      {children}
    </FavoritesContext.Provider>
  );
};