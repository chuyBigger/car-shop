import React, { Component } from "react";
import Producto from './Producto'

const styles = {
    productos: {
        padding: '0% 12%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    }
}

class Productos extends Component {
    render () {
        const { productos, agregarAlCarro } = this.props
        return(
            <div style={styles.productos}>
                {productos.map(producto =>
                    <Producto
                        agregarAlCarro={agregarAlCarro}
                        key={producto.name}
                        producto={producto}
                    />
                )}
            </div>
        )
    }
}

export default Productos