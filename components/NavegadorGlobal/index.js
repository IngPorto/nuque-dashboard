/**
 * Archivo container (no puro)
 */
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class main_NavegadorGlobal extends React.Component{
    render(){
        return (
            <div className="NavegadorGlobal">
                <img 
                    className="logoNav" 
                    src="/static/logo_nuque_basic.svg"
                    style={{
                        width: '40px',
                        float: 'left'
                    }}
                />
                <Typography 
                    className="vesion"
                    variant="body2"
                    style={{
                        width: 'fit-content',
                        float: 'left',
                        color: '#ec7b7b'
                    }}
                >
                    beta
                </Typography>
                <div className="botoneraNav">
                    <Typography variant="body2">
                        <a className="enlace_menu_principal">Acerca del proyecto</a>
                    </Typography>
                    <Typography variant="body2">
                        <a className="enlace_menu_principal">Contacto</a>
                    </Typography>
                    <Typography variant="body2">
                        <a className="enlace_menu_principal">Investigación</a>
                    </Typography>
                    <Button 
                        className="accederBtn" 
                        variant="contained" 
                        color="primary" 
                        style={
                            {
                                color:'white', 
                                background:'#2196f3'
                            }
                        }>
                        Acceder
                    </Button>
                </div>

                <style jsx>{`
                    .NavegadorGlobal {
                        width: 100%;
                        margin: 0 50px;
                    }
                    .botoneraNav {
                        width: fit-content;
                        float: right;
                    }
                    .enlace_menu_principal::selection {
                        background-color: #79FFE1;
                        color: #000;
                    }
                    .enlace_menu_principal {
                        text-decoration: none;
                        margin: 0 5px;
                    }
                    .enlace_menu_principal:hover {
                        color: #4CA9B1;
                        cursor: pointer;
                    }
                `}</style>
            </div>
        )
    }
}

export default main_NavegadorGlobal