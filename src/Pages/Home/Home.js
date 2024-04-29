import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      showData: false 
    };
  }

  componentDidMount() {
    
    this.getDataFromFirestore();
  }

  getDataFromFirestore = async () => {
    try {
      const querySnapshot = await firebase.firestore().collection('users').get();
      const userData = [];
      querySnapshot.forEach((doc) => {
        console.log('Dados do Firestore:', doc.data()); 
        userData.push({
          id: doc.id,
          email: doc.data().email, 
          name: doc.data().name, 
          lastName: doc.data().lastName, 
          dataNasc: doc.data().dataNasc 
        });
      });
      this.setState({ userData });
    } catch (error) {
      console.error('Erro ao obter dados do Firestore:', error);
    }
  };
  

  handleShowData = () => {
    this.setState({ showData: true });
  };

  handleClearData = () => {
    this.setState({ userData: [], showData: false });
  };

  handleLogout = () => {
    firebase.auth().signOut().then(() => {
      
      window.location.href = '/Login';
    }).catch((error) => {
      console.error('Erro ao fazer logout:', error);
    });
  };

  render() {
    return (
      <div className='footer'>
        <h1>Bem-vindo à página Home!</h1>
        <Link to="/Contact"><button className="buttondois">Contato</button></Link>
        <Link to="/About"><button className="buttondois">Sobre</button></Link>
   
        <button className="buttondois" onClick={this.handleShowData}>Mostrar Dados</button>
 
        <button className="buttondois" onClick={this.handleClearData}>Limpar Dados</button>
 
        <button className="buttondois" onClick={this.handleLogout}>Logout</button>
        {this.state.showData && (
          <div>
            <h2>Dados do Firestore:</h2>
            <ul>
              {this.state.userData.map((user, index) => (
                <li key={user.id}> 
                  <strong>Email:</strong> {user.email}<br />
                  <strong>Nome:</strong> {user.name}<br />
                  <strong>Sobrenome:</strong> {user.lastName}<br />
                  <strong>Data de Nascimento:</strong> {user.dataNasc}
                  {index < this.state.userData.length - 1 && <hr />}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
  
}

export default Home;
