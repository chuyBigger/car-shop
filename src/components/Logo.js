import React, {Component} from "react";

const styles = {
    logo: {
        fontweight: '700',
        fontSize: '2em',
        fontweight: 'bold',
        color: '#fff',
        
    }
}

class Logo extends Component {
    render() {
        return(
            <div style={styles.logo}>
                Shop
            </div>
        )
    }
}

export default Logo