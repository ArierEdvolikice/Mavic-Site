import React, { useState, useEffect } from 'react';
import './App.css'; 
import imagemFundo01 from './Imagens/Imagem_Fundo_01.jpg';
import imagemFundo02 from './Imagens/Imagem_Fundo_02.jpg';
import imagemFundo03 from './Imagens/Imagem_Fundo_03.jpg';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { 
      image: `url(${imagemFundo01})`, 
      text: { title: 'Título 1', description: 'Descrição 1' }
    },
    { 
      image: `url(${imagemFundo02})`, 
      text: { title: 'Título 2', description: 'Descrição 2' }
    },
    { 
      image: `url(${imagemFundo03})`, 
      text: { title: 'Título 3', description: 'Descrição 3' }
    }
  ];

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // Muda o slide a cada 5 segundos

    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
<div className="App">
  {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
  <div className="section section1">
    <div className="header">
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
      <div className="logo">
        <h1>Minha Logo</h1>
      </div>
      <div className="contact-button">
        <button onClick={() => alert('Contato')}>Contato</button>
      </div>
    </div>

    <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
      <a href="#section1" onClick={toggleMenu}>Seção 1</a>
      <a href="#section2" onClick={toggleMenu}>Seção 2</a>
      <a href="#section3" onClick={toggleMenu}>Seção 3</a>
      <a href="#section4" onClick={toggleMenu}>Seção 4</a>
    </div>

    <div className="slide-controls">
      <button onClick={prevSlide}>❮</button>
      <button onClick={nextSlide}>❯</button>
    </div>

    {slides.map((slide, index) => (
      <div
        key={index}
        className={`slide ${currentSlide === index ? 'active' : ''}`}
        style={{ backgroundImage: slide.image }}
      >
        <div className="slide-content">
          <h2>{slide.text.title}</h2>
          <p>{slide.text.description}</p>
        </div>
      </div>
    ))}
  </div>

  <div id="section2" className="section section2">
    <h1>Seção 2</h1>
    <p>Conteúdo da segunda seção.</p>
  </div>

  <div id="section3" className="section section3">
    <h1>Seção 3</h1>
    <p>Conteúdo da terceira seção.</p>
  </div>

  <div id="section4" className="section section4">
    <h1>Seção 4</h1>
    <p>Conteúdo da quarta seção.</p>
  </div>
</div>
  );
}

export default App;
