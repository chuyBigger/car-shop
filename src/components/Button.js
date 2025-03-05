import React, {Component} from "react";

const styles = {
    button: {
        backgroundColor: '#0a283e',
        color: '#fff',
        border: 'none',
        padding: '15px 20px',
        borderRadius: '5px',
        cursor: 'pointer'
    }
}
class Button extends Component {
    render() {
        return(
            <button style={styles.button} {...this.props}>
                Agregar al carrito
            </button>
        )
    }
}

export default Button