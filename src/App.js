import React, { Component } from 'react';

import './App.css';
import Login from  './Login/Login'

class App extends Component {

  titulo = 'VipCode'
 
  render() {
    return (
      <div>
        <div>
          <h1 className="titulo">{this.titulo}</h1>
        </div>
      <Login 
      acc={this.target.value}
      password={this.target.value}/>
      </div>
    );
  }
}

export default App;
