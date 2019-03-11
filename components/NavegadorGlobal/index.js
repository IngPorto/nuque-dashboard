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
                    src="/static/nav_brand.png"
                    style={{
                        width: 'fit-content',
                        float: 'left'
                    }}
                />
                <Typography 
                    className="nombreMarca"
                    variant="body1"
                    style={{
                        width: 'fit-content',
                        float: 'left'
                    }}
                >
                    Nuque
                </Typography>
                <Typography 
                    className="vesion"
                    variant="body2"
                    style={{
                        width: 'fit-content',
                        float: 'left'
                    }}
                >
                    beta
                </Typography>
                <div className="botoneraNav">
                    <Button className="">Acerca del proyecto</Button>
                    <Button className="">Contacto</Button>
                    <Button className="">Investigación</Button>
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
                    }
                    .botoneraNav {
                        width: fit-content;
                        float: right;
                    }
                `}</style>
            </div>
        )
    }
}

export default main_NavegadorGlobal