import React, { Component } from "react";
import Button from './Button'

const styles = {
    producto: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px',
        marginBottom: '16px',
        border: 'none',
        boxShadow: '0 5px 5px rgba(0,0,0,0.1)',
        width: '15%',
        borderRadius: '5px',
        cursor: 'pointer',
        textAlign: 'center',
    },

    img: {
        maxWidth: '100%',  // La imagen no será más ancha que su contenedor
        maxWidth: '100%',  // La imagen no será más ancha que su contenedor
        maxHeight: '180px', // La imagen no será más alta que este valor
        display: 'block',  // Evita problemas con alineación
        margin: 'auto',    // Centra la imagen si es más pequeña
        objectFit: 'contain' // Muestra toda la imagen sin recortarla    }
    }
    
}

class Producto extends Component {
    render() {
        const { producto, agregarAlCarro } = this.props
        return(
            <div key={producto.id} style={styles.producto}>
                < img style={styles.img} alt={producto.nombre} src={producto.img}  />
                <h3>{producto.nombre}</h3>
                <p>{'$ '}{producto.precio}</p>
                <Button onClick={ () => agregarAlCarro(producto)}>
                    Agregar al carro
                </Button>
            </div>
        )
    }
}

export default Producto