import React from 'react';

function Navbar() {
  // Função para rolar até a seção com offset
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const navHeight = document.querySelector('nav').offsetHeight;
      const offset = headerHeight + navHeight;
      
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav>
      <ul>
        <li><button onClick={() => scrollToSection('entradas')}>Entradas</button></li>
        <li><button onClick={() => scrollToSection('pratos-principais')}>Pratos Principais</button></li>
        <li><button onClick={() => scrollToSection('sobremesas')}>Sobremesas</button></li>
        <li><button onClick={() => scrollToSection('Bebidas')}>Bebidas</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;