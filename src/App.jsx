import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './AppRouter';
import Navbar from './components/Navbar';
import { LanguageProvider } from './i18n/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
