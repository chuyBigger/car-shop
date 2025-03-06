import React, { Component } from "react";
import Button from './Button'

const styles = {
    producto: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        jeustifyContent: 'end',
        padding: '16px',
        marginBottom: '16px',
        border: 'none',
        boxShadow: '0 5px 5px rgba(0,0,0,0.1)',
        width: '15%',
        borderRadius: '5px',
        cursor: 'pointer',
    },

    img: {
        width: '100%'
    }
}

class Producto extends Component {
    render() {
        const { producto, agregarAlCarro } = this.props
        return(
            <div key={producto.id} style={styles.producto}>
                < img style={styles.img} alt={producto.nombre} src={producto.img}  />
                <h3>{producto.nombre}</h3>
                <p>{producto.precio}</p>
                <Button onClick={ () => agregarAlCarro(producto)}>
                    Agregar al carro
                </Button>
            </div>
        )
    }
}

export default Producto