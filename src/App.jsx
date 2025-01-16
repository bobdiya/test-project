import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Cart from './pages/Cart';
import { CarProvider } from './context/CarContext';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <CarProvider>
      <CartProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartProvider>
    </CarProvider>
  );
};

export default App;
