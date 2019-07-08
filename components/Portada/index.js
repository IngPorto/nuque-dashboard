/**
 * 
 */
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Link from 'next/link';

class main_Portada extends React.Component{
    render(){
        return (
            <div className="Portada" style={{
                textAlign: 'center',
            }}>
                <div className="puzzleRight"></div>
                <div className="puzzleLeft"></div>
                <Grid item lg={12}>
                    <Grid container>
                        <Grid item xs={6} style={{
                            margin:'0 auto'
                        }}>
                            <Typography variant="h3" style={{
                                color:'white',
                                fontSize: '30pt',
                                margin: '70px 0 18px 0'
                            }}>
                                Construye, diseña y despliega
                            </Typography>
                            <Typography variant="body1" style={{
                                color:'white',
                                marginBottom: '25px'
                            }}>
                                Servicios web en un lenguaje sencillo. No requieres aprender un nuevo lenguaje de programación, lo puedes lograr con tus habilidades lógicas.
                            </Typography>
                            <Link href="/dashboard">
                                <Button 
                                    className="accederBtn" 
                                    variant="contained" 
                                    color="primary" 
                                    style={
                                        {
                                            color:'white', 
                                            background:'#d85232',
                                            borderRadius: '0px',
                                            padding: '12px 30px'
                                        }
                                    }>
                                    Empieza gratis
                                    <KeyboardArrowRight />
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>

                <style jsx>{`
                    .Portada {
                        width: 100%;
                        height: 370px;
                        background: #0099b0; /* Old browsers */
                        background: linear-gradient(45deg, #0099b0, #69b893); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                    }
                    .puzzleRight {
                        background-image: url("static/puzzleRight.png");
                        background-size: 203px;
                        background-repeat: no-repeat;
                        opacity: 0.3;
                        height: 345px;
                        width: 210px;
                        position: absolute;
                    }
                    .puzzleLeft {
                        background-image: url("static/puzzleLeft.png");
                        background-size: 203px;
                        background-repeat: no-repeat;
                        opacity: 0.3;
                        height: 345px;
                        width: 210px;
                        position: absolute;
                        right: 0%;
                    }
                `}</style>
            </div>
        )
    }
}

export default main_Portada