/**
 * 
 */
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class main_SeccionEquipo extends React.Component{
    render(){
        return (
            <div className="SeccionEquipo">
                <div className="SeccionEquipoImagenFondo"></div>
                <div>
                    <Grid item lg={12}>
                        <Typography variant="h5" style={{
                            width:'fit-content',
                            margin: '40px auto 90px auto'
                        }}>
                            Equipo
                        </Typography>
                        <div className="equipoItem">
                            <img className="imgIntegrante" src="static/david_porto.jpg" alt="" />
                            <div className="seccionDescripcionEquipo">
                                <Typography variant="h5" style={{
                                    width:'fit-content'
                                }}>
                                    David Portocarrero Caicedo
                                </Typography>
                                <Typography variant="caption" style={{
                                    width:'fit-content'
                                }}>
                                    @ingporto
                                </Typography>
                                <Typography variant="body1" style={{
                                    width:'fit-content'
                                }}>
                                    Ingeniero de Multimedia, Especialista en Ingeniería de Software y candidato a Master en Ingeniería de Software.
                                </Typography>
                            </div>
                        </div>
                        {/* separador */}
                        <div className="equipoItem">
                            <img className="imgIntegrante" src="static/user_icon_med.svg" alt="" />
                            <div className="seccionDescripcionEquipo">
                                <Typography variant="h5" style={{
                                    width:'fit-content'
                                }}>
                                    Simena Dinas
                                </Typography>
                                <Typography variant="caption" style={{
                                    width:'fit-content'
                                }}>
                                    @dsimena
                                </Typography>
                                <Typography variant="body1" style={{
                                    width:'fit-content'
                                }}>
                                    Ingeniera en Sistemas y Doctora en Ingeniería.
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                </div>
                <style jsx>{`
                    .SeccionEquipo {
                        width: 100%;
                        height: 500px;
                        background-color: #f5f5f5;
                    }
                    .seccionDescripcionEquipo {
                        width: 500px;
                        float: left;
                        margin-left: 40px;
                    }
                    .equipoItem{
                        width: fit-content;
                        height: 100px;
                        margin: 30px auto;
                    }
                    .imgIntegrante{
                        clip-path: circle(50px at center);
                        float: left;
                        height: 100px;
                    }
                    .SeccionEquipoImagenFondo {
                        background-image: url("static/bg.png");
                        opacity: 0.05;
                        background-repeat: no-repeat;
                        background-size: 1000px;
                        height: 430px;
                        width: 100%;
                        position: absolute;
                        top: 1460px;
                    }
                `}</style>
            </div>
        )
    }
}

export default main_SeccionEquipo