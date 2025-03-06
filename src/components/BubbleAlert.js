import React, {Component} from "react";

const styles = {
    bubbleAlert: {
        backgroundColor: '#ff5252',
        color: '#fff',
        borderRadius: '15px',
        padding: '2px 10px',
        fontSize: '0.9em',
        position: 'absolute',
    }
}

class BubbleAlert extends Component {
    getNumber(n) {
        if (!n) { return '' }
        return n > 9 ? '9+' : n
        }
    
    render() {
        const { value } = this.props
        return(
            <span style={styles.bubbleAlert}>
                {this.getNumber(value)}
            </span>
        )
    }
} 

export default BubbleAlert