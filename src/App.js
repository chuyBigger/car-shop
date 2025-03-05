import React, { Component } from "react";
import Productos from './components/Productos';

class App extends Component {
  state = {
    productos: [
      {nombre: 'Tomate', precio: 1, img: '/productos/tomate.jpeg' },
      {nombre: 'Lechuga', precio: 2, img: '/productos/lechuga.jpeg' },
      {nombre: 'Papa', precio: 3, img:'/productos/papa.jpeg' },
      {nombre: 'Cebolla', precio: 4, img : '/productos/cebolla.jpeg' },
      {nombre: 'Zanahoria', precio: 5, img: '/productos/zanahoria.jpeg' },
    ]
  }
  render(){
    return (
      <div className="App">
        <Productos
          agregarAlCarro={() => console.log('No hace nada') }
          productos={this.state.productos}
        />
      </div>
    );
  }
}

export default App;
