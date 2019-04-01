/**
 * Landing page
 */
import NavegadorGlobal from '../components/NavegadorGlobal'
import Portada from '../components/Portada'
import LaptopScreenshot from '../components/LaptopScreenshot'
import SeccionQueEs from '../components/SeccionQueEs'
import SeccionEquipo from '../components/SeccionEquipo'
import FooterIndex from '../components/FooterIndex'

// Material-ui components
import Grid from '@material-ui/core/Grid';

export default class extends React.Component {
    render(){
        return <div className="mainContainerIndex">
            <Grid container spacing={0} >
                <NavegadorGlobal />
                <Portada />
                <LaptopScreenshot />
                <SeccionQueEs />
                <SeccionEquipo />
                <FooterIndex />
                {
                    /*
                    <SeccionComoFunciona />
                    <SeccionContacto />
                    */
                }
            </Grid>

            <style jsx global>{`
                body {
                    margin:0;
                }
                /*
                .mainContainerIndex{
                    width: 1200px;
                }
                */
            `}</style>
        </div>
    }
}