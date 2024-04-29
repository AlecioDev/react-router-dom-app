import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Contact extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h1>Contato</h1>
        <Link to="/Home"><button className="buttondois">Voltar para Home</button></Link>
        <p>Desenvolvedor: Gabriel Alecio Geteski Almeida</p>
        <p>Email: aleciorpo@gmail.com</p>
      </div>
    );
  };
}

export default Contact;
