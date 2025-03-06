import React, { Component } from "react";
import Productos from './components/Productos';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import Title from './components/Title';
import Carro from "./components/Carro";

class App extends Component {
  state = {
    productos: [
      {id:1, nombre: 'Tomate', precio: 1, img: '/productos/tomate.jpeg' },
      {id:2, nombre: 'Lechuga', precio: 2, img: '/productos/lechuga.jpeg' },
      {id:3, nombre: 'Papa', precio: 3, img:'/productos/papa.jpeg' },
      {id:4, nombre: 'Cebolla', precio: 4, img : '/productos/cebolla.jpeg' },
      {id:5, nombre: 'Zanahoria', precio: 5, img: '/productos/zanahoria.jpeg' },
    ],
    Carro: [
      // {id:1, nombre: 'Tomate', precio: 1, img: '/productos/tomate.jpeg', cantidad: 1 },
    ]
  }
  agregarAlCarro = (producto) => {
    return this.setState({
      Carro: this.state.Carro.concat({
        ...producto,
        cantidad: 1
      })
    })
  }

  render(){
    console.log(this.state.Carro)
    return (
      <div className="App">
        <Navbar />
        <Layout>
          <Title/>
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
        
      </div>
    );
  }
}

export default App;
