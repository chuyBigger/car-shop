import React, {Component} from "react";
import BubbleAlert from './BubbleAlert'
import DetallesCarro from './DetallesCarro'

const styles = {
    carro: {
        backgroundColor: '#359a2c',
        color: '#fff',
        border: 'none',
        padding: '12px 25px',
        borderRadius: '5px',
        cursor: 'pointer',
       
    },
    bubble: {
        position: 'relative',
        left: 3,
        top: 30,

    }
}

class Carro extends Component {
    render() {
        const { carro, esCarroVisible, mostrarCarro } = this.props
        const cantidad = carro.reduce( (acc, el) => acc + el.cantidad, 0)
        return(
            <div>
                <span style={styles.bubble}>
                    {cantidad !== 0 
                        ? <BubbleAlert value={cantidad} /> 
                        : null}
                    
                </span>
                <button onClick={mostrarCarro} style={styles.carro}>
                Carro
                </button>
                <DetallesCarro carro={carro}/>
            </div>
            
        )
    }
}

export default Carro