import React, { Component } from "react";
import Productos from './components/Productos';
import Layout from './components/Layout';
import Navbar from './components/Navbar';

import Title from './components/Title';

import Footerlow from "./components/Footerlow";

class App extends Component {
  state = {
    productos: [
      {id:1, nombre: 'Tomate', precio: 15, img: '/productos/tomate.jpeg' },
      {id:2, nombre: 'Lechuga', precio: 23, img: '/productos/lechuga.jpeg' },
      {id:3, nombre: 'Papa', precio: 29, img:'/productos/papa.jpeg' },
      {id:4, nombre: 'Cebolla', precio: 18, img : '/productos/cebolla.jpeg' },
      {id:5, nombre: 'Zanahoria', precio: 14, img: '/productos/zanahoria.jpeg' },
    ],
    carro: [],
    escarroVisible: false
  }
  
  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if(carro.find(x => x.id === producto.id)){
      const newCarro = carro.map(x => x.id === producto.id
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x
      )
      return this.setState({ carro: newCarro})
    }

    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1
      })
    })
  }

  mostrarCarro = () => {
    if (!this.state.carro.length){
        return
      }
    
    this.setState({ escarroVisible: !this.state.escarroVisible})
  }

  render(){ 
    const {escarroVisible} = this.state
    return (
      <div className="App">
        <Navbar 
          carro={this.state.carro} 
          escarroVisible={escarroVisible} 
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          <Title/>
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
        <Footerlow/>
        
      </div>
    );
  }
}

export default App;
