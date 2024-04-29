import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class NotFound extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h1>Página não encontrada</h1>
        <p>Desculpe, a página que você está procurando não existe.</p>
        <Link to="/"><button>Página Inicial</button></Link>
      </div>
    );
  };
}

  export default NotFound;
