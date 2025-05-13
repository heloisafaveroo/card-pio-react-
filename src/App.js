import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MenuSection from './components/MenuSection';
import './index.css';
import './styles.css';
import data from './data';

// Importa o componente Footer dinamicamente
const Footer = lazy(() => import('./components/Footer'));

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
      <Suspense fallback={<div>Carregando o rodapé...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;