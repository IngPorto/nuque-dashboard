import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class main_SeccionQueEs extends React.Component{
    render(){
        return(
            <div className="SeccionQueEs">
                <div className="contenido">
                    <Grid item lg={12}>
                        <Typography variant="body1">
                            ¿Qué es?
                        </Typography>
                        <img 
                            src="/static/logo_nuque_basic.svg"
                            style= {{
                                width: '50px'
                            }}
                        />
                    </Grid>
                </div>
                <style jsx>{`
                    .SeccionQueEs {
                        width: 100%;
                    }
                    .contenido {
                        width: fit-content;
                        margin: 0 auto;
                    }
                `}</style>
            </div>
        )
    }
}

export default main_SeccionQueEs