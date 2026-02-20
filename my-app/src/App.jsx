import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import AboutPage from './pages/AboutPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header companyName="WISHBONE+PARTNERS" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<div style={{ textAlign: 'center', padding: 100 }}><h1>404</h1><p>Page not found</p></div>} />
        </Routes>
        <Footer companyName="WISHBONE+PARTNERS" />
      </div>
    </BrowserRouter>
  );
}

export default App;