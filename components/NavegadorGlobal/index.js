/**
 * Archivo container (no puro)
 */
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

/**
 * Forma de agragar estilos en material-ui y evitar 
 * ponerlos in-line
 */
const styles = theme => ({
    nuqueNavTitle: {
        color: '#333'
    },
    betaTextField: {
        color: '#f44336'
    }
})

class main_NavegadorGlobal extends React.Component{
    render(){
        const {classes} = this.props

        return (
            <div>
                <img src="/static/nav_brand.png"/>
                <Typography 
                    className={classes.nuqueNavTitle}
                    variant="body1">
                    Nuque
                </Typography>
                <Typography 
                    className={classes.betaTextField}
                    variant="body2">
                    beta
                </Typography>
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

                <style jsx>{`
                    
                `}</style>
            </div>
        )
    }
}

export default withStyles(styles)(main_NavegadorGlobal)