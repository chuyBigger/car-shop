import React, {Component} from "react";
import Title from "./Title";

const styles = {
    detallesCarro: {
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgba(0,0,0,0.3)',
        borderRadius: '5px',
        width: '300px',
        right: 50,
        color: '#0a283e',
    },
    ul: {
        margin: '10px',
        padding: 0
    },
    producto: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 15px',
        borderBottom: '1px solid #ccc',
       
    },
    title: {
        color: '#0a283e',
        padding: '10px 15px',
    },
    cubic: {
        borderRadius: '5px',
        backgroundColor: '#359a2c',
        color: '#fff',
        padding: '5px 10px',
    }
}

class DetallesCarro extends Component {
    state = { hoveredIndex: null };
    render() {
        const { carro } = this.props
        return(
            <div style={styles.detallesCarro}>
                <h3 style={styles.title}>Tus Compras</h3>
                <ul style={styles.ul}>
                    {carro.map((x, index) => 
                        <li key={x.id}
                        style={{
                            ...styles.producto,
                            backgroundColor: this.state.hoveredIndex === index ? "#e0f7fa" : "transparent"
                        }}
                        onMouseEnter={() => this.setState({ hoveredIndex: index })}
                        onMouseLeave={() => this.setState({ hoveredIndex: null })} 
                        >
                            
                            <img alt={x.nombre} src={x.img }  width='50' height='32' />
                            {x.nombre}  <span style={styles.cubic}>{x.cantidad}</span>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default DetallesCarro


