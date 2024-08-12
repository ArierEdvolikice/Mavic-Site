import React, { useState, useEffect } from 'react';
import './App.css'; 
import imagemFundo01 from './Imagens/Imagem_Fundo_01.jpg';
import imagemFundo02 from './Imagens/Imagem_Fundo_02.jpg';
import imagemFundo03 from './Imagens/Imagem_Fundo_03.jpg';
import logoServ from './Imagens/logo_serv.png'
import imagem_sessao8 from './Imagens/sesao8.png'


function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { 
      image: `url(${imagemFundo01})`, 
      text: { title: 'Lorem ipsum dolor sit amet', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
    },
    { 
      image: `url(${imagemFundo02})`, 
      text: { title: 'Duis aute irure dolor in reprehenderit', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
    },
    { 
      image: `url(${imagemFundo03})`, 
      text: { title: 'Excepteur sint occaecat cupidatat', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
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
    const intervalId = setInterval(nextSlide, 10000);

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
        <h1>Mavic</h1>
      </div>
      <div className="contact-button">
        <button onClick={() => alert('Contato')}>contate-nos</button>
      </div>
    </div>

    <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
      <a href="#section1" onClick={toggleMenu}>Seção 1</a>
      <a href="#section2" onClick={toggleMenu}>Seção 2</a>
      <a href="#section3" onClick={toggleMenu}>Seção 3</a>
      <a href="#section4" onClick={toggleMenu}>Seção 4</a>
      <a href="#section5" onClick={toggleMenu}>Seção 5</a>
      <a href="#section6" onClick={toggleMenu}>Seção 6</a>
      <a href="#section7" onClick={toggleMenu}>Seção 7</a>
      <a href="#section8" onClick={toggleMenu}>Seção 8</a>
      <a href="#section9" onClick={toggleMenu}>Seção 9</a>
      <a href="#section10" onClick={toggleMenu}>Seção 10</a>
      <a href="#section11" onClick={toggleMenu}>Seção 11</a>
      <a href="#section12" onClick={toggleMenu}>Seção 12</a>
      <a href="#section13" onClick={toggleMenu}>Seção 13</a>

      
    </div>

    <div className="slide-controls">
  {slides.map((_, index) => (
    <div
      key={index}
      className={`dot ${currentSlide === index ? 'active' : ''}`}
      onClick={() => setCurrentSlide(index)}
    ></div>
  ))}
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
    <p>ERICK GATÃO E BONITÃO</p>
  </div>

  <div id="section5" className="section section2">
    <h1>Seção 5</h1>
    <p>Conteúdo da segunda seção.</p>
  </div>

  <div id="section6" className="section section3">
    <h1>Seção 6</h1>
    <p>Conteúdo da terceira seção.</p>
  </div>

  <div id="section7" className="section section4">
    <h1>Seção 7</h1>
    <p>Modular - (D3)</p>
  </div>

  <div id="section8" className="section section8">
    <img className='logoMavicServ' src={logoServ}></img>
    <div className='sessao8Sub'>
      <div  className='sub1Secao8'>
      <img src={imagem_sessao8} style={{width: '50%'}}></img>

      </div>
      <div className='sub2Secao8'>
        <h1> Nossos Serviços </h1>
        <p>01 - manutenção - mobiliário corporativo</p>
        <p>• Manutenção corretiva e preventiva em cadeiras de escritório
          <br/> • Troca de peças 
          <br/>• Lavagem a seco 
          <br/>• Soldagem 
          <br/>• Pintura 
          <br/>• Estofamentos em tecido ou couro sintético.</p>
          <p>02 - venda - mobiliário corporativo</p>
          <p>• Cadeiras para diversos ambientes: Office, Coletivo e Colaborativo 
          <br/>• Mesas retas, de reunião, estações de trabalho 
          <br/>• Roupeiros de aço 
          <br/>• Armários</p>
      </div>
    </div>
  </div>

  <div id="section9" className="section section3">
    <h1>Seção 9</h1>
    <p>Clientes e Vídeo - (D1)</p>
  </div>

  <div id="section10" className="section section4">
    <h1>Seção 10</h1>
    <p>Clientes e Vídeo - (D1)</p>
  </div>

  <div id="section11" className="section section2">
    <h1>Seção 11</h1>
    <p>Testimoniais - (D2)</p>
  </div>

  <div id="section12" className="section section3">
    <h1>Seção 12</h1>
    <p>Postagens recentes - (D3) - PLUGIN ou ID</p>
  </div>

  <div id="section13" className="section section4">
    <h1>Seção 13</h1>
    <p>Footer</p>
  </div>
  
</div>
  );
}

export default App;
