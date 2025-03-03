import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Ejemplo de rutas futuras: */}
      {/* <Route path="/portfolio" element={<Portfolio />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
};