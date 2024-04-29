import React from 'react';
import Rotas from './Rotas';
import './App.css'

function App() {
  return (
      <div className="container">
        <div className="header">
          <h1>Sistema Controle de Acesso</h1>
        </div>
        <div className="content">
        <Rotas/>
        </div>
        <div className="footer">
          <p>&copy; 2024 AlecioDev: Aplicação React</p>
        </div>
      </div>
  );
}

export default App;
