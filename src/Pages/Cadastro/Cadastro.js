import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase.js';
import '../../App.css';

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [senha, setSenha] = useState('');
  const [dataNasc, setdataNasc] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      await firebase.auth().createUserWithEmailAndPassword(email, senha);
   
      await firebase.firestore().collection('users').add({ email, name, lastName, dataNasc });
      setSuccessMessage('Dados gravados com sucesso!');
      setEmail('');
      setName('');
      setLastName('');
      setSenha('');
      setdataNasc('');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error.message);
      setSuccessMessage('');
    }
  };

  return (
    <div className='footer'>
      <h1>Cadastro</h1>
      {successMessage && <p>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label className='label'>
          E-mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className='label'>
          Nome:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className='label'>
          Sobrenome:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label className='label'>
          Senha:
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </label>
        <label className='label'>
          Data de Nascimento:
          <input
            type="date"
            value={dataNasc}
            onChange={(e) => setdataNasc(e.target.value)}
          />
        </label>
        <button className="buttondois" type="submit">Cadastrar</button>
      </form>

    <h1>Login</h1>
    <label>
    <Link to="/Login"><button className="buttondois">Login</button></Link>
    </label>

    
    </div>
  );
};

export default Cadastro;