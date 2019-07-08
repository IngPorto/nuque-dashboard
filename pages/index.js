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
import Head from 'next/head'

export default class extends React.Component {
    render(){
        return <div className="mainContainerIndex">
            <Head>
                <title>Nuque</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <script src="/static/blockly/blockly_compressed.js"></script>
                <script src="/static/blockly/blocks_compressed.js"></script>
                <script src="/static/blockly/msg/js/es.js"></script> 
                <script src="/static/blockly/javascript_compressed.js"></script>
                <link rel="stylesheet" href="/static/css/animate.min.css" />
            </Head>

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