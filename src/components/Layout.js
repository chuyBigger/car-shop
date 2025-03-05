import React, {Component} from "react";


const styles = {
    layout: {
        backgroundColor: '#fff',
        color: '#0a283e',
        display: 'flex',  
        alignItems: 'center',
        flexDirection: 'column',
        
    },
    container:{

        with: '80%',
        
    }
}

class Layout extends Component {
    render() {
        return(
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>  
                            
            </div>
        )
    }
}

export default Layout