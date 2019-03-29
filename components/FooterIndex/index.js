/**
 * 
 */
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class main_FooterIndex extends React.Component{
    render(){
        return (
            <div className="FooterIndex">
                <Grid item lg={12}>
                    <div className="fechaFooter">
                        <Typography variant="body1" style={{
                            margin: '15px 0',
                            fontWeight: '350',
                            color: 'white'
                        }}>
                            · 2019 ·
                        </Typography>
                    </div>
                </Grid>
                <style jsx>{`
                    .FooterIndex {
                        width: 100%;
                        height: 50px;
                        background-color: #474747;
                    }
                    .fechaFooter {
                        width: fit-content;
                        margin: 0 auto;
                    }
                `}</style>
            </div>
        )
    }
}

export default main_FooterIndex