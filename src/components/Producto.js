import React, { Component } from "react";

const styles = {
    producto: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgba(0,0,0,0.1)',
        width: '13%',
        padding: '10px 15px',
        borderRadius: '5px',
        margin: '10px 15px'
    },

    img: {
        width: '100%'
    }
}

class Producto extends Component {
    render() {
        const { producto } = this.props
        return(
            <div style={styles.producto}>
                < img style={styles.img} alt={producto.nombre} src={producto.img}  />
                <h3>{producto.nombre}</h3>
                <p>{producto.precio}</p>
                <button onClick={this.props.agregarAlCarro}>Agregar al carro</button>
            </div>
        )
    }
}

export default Producto