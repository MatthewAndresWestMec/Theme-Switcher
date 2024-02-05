import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';
import { ContextAPI } from './Theme/ThemeContext';

function App() {
  return (
    <ContextAPI>
      <Navbar />
      <Header />
      <MainContent />
      <Footer />
    </ContextAPI>
  );
}

export default App;
