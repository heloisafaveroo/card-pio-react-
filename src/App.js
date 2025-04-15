// src/App.js
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import './index.css'; // Import the main index.css for global styles
import './styles.css'; // Import the provided styles.css
import data from './data';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <main>
        <MenuSection title="Entradas" items={data.entradas} />
        <MenuSection title="Pratos Principais" items={data.pratosPrincipais} />
        <MenuSection title="Sobremesas" items={data.sobremesas} />
        <MenuSection title="Bebidas" items={data.bebidas} />
      </main>
      <Footer />
    </div>
  );
}

export default App;