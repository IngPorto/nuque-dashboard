/**
 * Archivo container (no puro)
 */
import Grid from '@material-ui/core/Grid';

class main_LaptopScreenshot extends React.Component {
    render(){
        return (
            <div className="LaptopScreenshot">
                <Grid item lg={12}>
                    <Grid container>
                        <div className="contenedorImagen">
                            <img className="imagen" src="static/temp-mac-test.png" alt=""/>
                        </div>
                    </Grid>
                </Grid>
                <style jsx>{`
                    .LaptopScreenshot {
                        width: 100%;
                    }
                    .contenedorImagen{
                        width: 100%;
                        height: 500px;
                        text-align: center;
                    }
                    .imagen {
                        height: inherit;
                        position: relative;
                        top: -60px;
                    }
                `}</style>
            </div>
        )
    }
}

export default main_LaptopScreenshot;