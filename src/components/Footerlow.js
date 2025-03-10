import React, {Component} from "react";

const styles = {
    footer: {
        backgroundColor: '#0a283e',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '200px',
        width: '100%',
        position: 'absolute',
        bottom: '0',
        left: '0'
    },
    a: {
        color: '#fff',
        textDecoration: 'none',
    }
}

class Footer extends Component {
    render() {
        return(
            <div style={styles.footer}>
                <h2>Todos Los Derechos Reservados CopyRigth 2022-2025</h2>
                <h3>Desarrollado por: <a style={styles.a} href="https://www.linkedin.com/in/jesus-medina-casas/" target="_blank">Jesus Medina Casas</a></h3>
                <h3>logo</h3>
            </div>
        )
    }
}
export default Footer