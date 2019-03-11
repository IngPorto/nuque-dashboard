/**
 * 
 */
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

class main_Portada extends React.Component{
    render(){
        return (
            <div className="Portada">
                <Grid item lg={12}>
                    <Card className="card">
                        <Grid container >
                            <Grid item xs={6}>
                                <div className="details">
                                <Grid container >
                                    <Grid item>
                                        <CardContent className="content">
                                            <Typography variant="body1">
                                                Construye, diseña y despliega
                                            </Typography>
                                            <Typography variant="body1">
                                                Servicios web en un lenguaje sencillo.
                                            </Typography>
                                        </CardContent >
                                    </Grid>
                                    <Grid item>
                                        <div>
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
                                                Empieza gratis
                                                <KeyboardArrowRight />
                                            </Button>
                                        </div>
                                    </Grid>
                                </Grid>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <CardMedia 
                                    className="cover"
                                    image="/static/img_portada.jpg" 
                                    title="Imagen aluciva al entorno de desarrollo" 
                                    style={{
                                        height: '150px'
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>

                <style jsx>{`
                    .Portada {
                        width: 100%;
                    }
                `}</style>
            </div>
        )
    }
}

export default main_Portada