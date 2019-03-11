/**
 * Landing page
 */
import NavegadorGlobal from '../components/NavegadorGlobal'
import Portada from '../components/Portada'
import SeccionQueEs from '../components/SeccionQueEs'

import Grid from '@material-ui/core/Grid';

export default class extends React.Component {
    render(){
        return <div>
            <Grid container spacing={0} >
                <NavegadorGlobal />
                <Portada />
                <SeccionQueEs />
                {
                    /*
                    <SeccionComoFunciona />
                    <SeccionEquipo />
                    <SeccionContacto />
                    */
                }
            </Grid>

            <style jsx global>{`
                
            `}</style>
        </div>
    }
}