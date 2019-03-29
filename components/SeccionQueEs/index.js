import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class main_SeccionQueEs extends React.Component{
    render(){
        return(
            <div className="SeccionQueEs">
                <div className="contenido">
                    <Grid item lg={12}>
                        <Grid container>
                            <Grid item xs={9} style={{
                                margin:'0 auto'
                            }}>
                                <div className="tituloSeccion">
                                    <Typography variant="h5" style={{
                                        width: 'fit-content',
                                        margin: '0 auto'
                                    }}>
                                        ¿Qué es &nbsp;
                                        <img 
                                            src="/static/logo_nuque_basic.svg"
                                            style= {{
                                                width: '80px',
                                                position: 'relative',
                                                top: '7px',
                                                right: '5px'
                                            }}
                                        />
                                        ?
                                    </Typography>
                                </div>
                                <div className="descripcionSeccion">
                                    <Typography variant="body1">
                                        Es una plataforma de programación visual para crear servicios web. Desarrollar software requiere concer uno o varios lenguajes de programación, en <span className="nuqueEnTexto">nuque</span> solo requires de lógica.
                                    </Typography>
                                </div>
                            </ Grid>
                            { /* Separador de descipción */ }
                            <Grid item style={{
                                margin:'0 auto'
                            }}>
                                <div className="seccionDescripcion">
                                    <div className="descripcioItem">
                                        <img src="/static/facil_icon.svg" alt="" />
                                        <Typography variant="h5" style={{
                                            margin: '15px 0',
                                            fontWeight: '350'
                                        }}>
                                            Fácil
                                        </Typography>
                                        <Typography variant="body1">
                                            Entorno de desarrollo a partir de formas, colores y tamaños.
                                        </Typography>
                                    </div>
                                    <div className="descripcioItem">
                                        <img src="/static/universal_icon.svg" alt="" />
                                        <Typography variant="h5" style={{
                                            margin: '15px 0',
                                            fontWeight: '350'
                                        }}>
                                            Universal
                                        </Typography>
                                        <Typography variant="body1">
                                            Integra un lenguaje de programación visual en el que hasta un niño puede crear programas.
                                        </Typography>
                                    </div>
                                    <div className="descripcioItem">
                                        <img src="/static/funcional_icon.svg" alt="" />
                                        <Typography variant="h5" style={{
                                            margin: '15px 0',
                                            fontWeight: '350'
                                        }}>
                                            Funcional
                                        </Typography>
                                        <Typography variant="body1">
                                            Los proyectos desarrollados son 100% operativos y transparentes para las demás capas de una aplicacioón web.
                                        </Typography>
                                    </div>
                                </div>
                            </Grid>
                        </ Grid>
                    </Grid>
                </div>
                <style jsx>{`
                    .SeccionQueEs {
                        width: 100%;
                        height: 500px;
                    }
                    .contenido {
                        width: fit-content;
                        margin: 0 auto;
                    }
                    .SeccionQueEs *::selection {
                        background-color: #79FFE1;
                        color: #000;
                    }
                    .tituloSeccion {
                        font-size: 1.7rem;
                        font-weight: 450;
                    }
                    .descripcionSeccion {
                        margin-top: 20px;
                    }
                    .nuqueEnTexto {
                        color: #008c91;
                        font-weight: 500;
                    }
                    .seccionDescripcion {
                        margin: 40px auto;
                    }
                    .descripcioItem {
                        width: 200px;
                        text-align: center;
                        float: left;
                        margin: 0 15px;
                    }
                    .descripcioItem img{
                        height: 100px;
                    }
                `}</style>
            </div>
        )
    }
}

export default main_SeccionQueEs