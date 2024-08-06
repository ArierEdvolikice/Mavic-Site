import React from 'react';
import './App.css'; // Importando o CSS para a página

function App() {
  return (
    <div className="App">
      <nav className="navigation">
        <a href="#section1">Seção 1</a>
        <a href="#section2">Seção 2</a>
        <a href="#section3">Seção 3</a>
      </nav>
      
      <div id="section1" className="section section1">
        <h1>Seção 1</h1>
        <p>Conteúdo da primeira seção.</p>
      </div>
      
      <div id="section2" className="section section2">
        <h1>Seção 2</h1>
        <p>Conteúdo da segunda seção.</p>
      </div>
      
      <div id="section3" className="section section3">
        <h1>Seção 3</h1>
        <p>Conteúdo da terceira seção.</p>
      </div>
    </div>
  );
}

export default App;
