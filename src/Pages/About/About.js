import React, {Component} from 'react';
import { Link } from "react-router-dom";

class About extends Component{
  constructor(props){
    super(props);
  }

  render (){
    return (
      <div>
        <h1>Sobre</h1>
        <Link to="/Home"><button className="buttondois">Voltar para Home</button></Link>
        <p>Linguagem: JavaScript</p>
        <p>Bibliotecas: React, React Router Dom</p>
        <p>Versões: 17.0.2, 6.2.1</p>
      </div>
    );
  };
}

export default About;
