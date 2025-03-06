import React, {Component} from "react";
import Logo from './Logo'
import Carro from './Carro'

const styles = {
    navbar: {
        backgroundColor: '#0a283e',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        height: '100px',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0 8%',
        boxShadow: '0 2px 3px rgba(0,0,0,0.1)'

    }
}

class Navbar extends Component {
    render() {
        return(
            <nav style={styles.navbar}>

                <Logo/>
                <Carro/>
            </nav>
        )
    }
}

export default Navbar