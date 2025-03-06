import React, {Component} from "react";
import BubbleAlert from './BubbleAlert'

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
        const { carro } = this.props
        return(
            <div>
                <span style={styles.bubble}>
                    <BubbleAlert value={3} />
                </span>
                <button style={styles.carro}>
                Carro
                </button>
            </div>
            
        )
    }
}

export default Carro