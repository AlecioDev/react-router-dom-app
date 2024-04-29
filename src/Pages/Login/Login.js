import React, { useState } from 'react';
import firebase from '../../Firebase.js';
import { Link } from 'react-router-dom';
import '../../App.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      await firebase.auth().signInWithEmailAndPassword(email, password);
      window.location.href = '/Home'; 
    } catch (error) {
      console.error('Erro ao fazer login:', error.message);
      setErrorMessage('Usuário não cadastrado');
    }
  };

  return (
    <div className='footer'>
      <h1>Login</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label className='label'>
          E-mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className='label'>
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button className="buttondois" type="submit">Entrar</button>
      </form>
      <Link to="/"><button className="buttondois">Fazer Cadastro</button></Link>
    </div>
  );
};

export default Login;

