/**
 * index/dashboard
 * 
 * Panel principal, el cual se visualiza una vez 
 * el usuario inicia sesión. En este panel se 
 * listan todos los proyectos creados por el usuario
 */
import BarraLateral from "../components/BarraLateral";
import MenuGlobal from "../components/MenuGlobal";
import MenuDeOpcionesDeProyecto from "../components/MenuDeOpcionesDeProyecto";
import PanelDeServicios from "../components/PanelDeServicios";
import AreaPrincipalDashboard from "../components/AreaPrincipalDashboard";

import { bindActionCreators } from 'redux'
import { 
    addCambiarVisibilidadSMPS, 
    addCambiarDescripcionProyecto, 
    addCambiarVisibilidadMDP, 
    addCambiarProyectoActualmenteSeleccionado
} from '../store'
import { connect } from 'react-redux'

 class Dashboard extends React.Component {
    
    static getInitialProps ({ store , x }) {
        //store.dispatch(addCambiarVisibilidadSMPS())
        //console.log( x )
        return {  }
    }

    hand = () => {
        console.log(this.props.addCambiarVisibilidadSMPS(!this.props.initalState.visibilidadSubMenuPerfilServicio))
    }

    render(){
        //const { store } = this.props
        //console.log("estado A: "+this.props.initalState.visibilidadSubMenuPerfilServicio)
        //console.log("estado B: "+this.props.initalState.visibilidadSubMenuPerfilServicio)

        return (
            <div className="mainContainerDashboard">
                <BarraLateral />
                <AreaPrincipalDashboard>
                    <MenuGlobal />
                    <MenuDeOpcionesDeProyecto {...this.props}/>
                    <PanelDeServicios {...this.props}/>
                </AreaPrincipalDashboard>
                <style jsx global>{`
                    @font-face {
                        font-family: 'Roboto-thin';
                        src: url(static/fonts/Roboto-Thin.ttf);
                    }
                    @font-face {
                        font-family: 'Roboto-light';
                        src: url(static/fonts/Roboto-Light.ttf);
                    }
                    @font-face {
                        font-family: 'Roboto-regular';
                        src: url(static/fonts/Roboto-Regular.ttf);
                    }
                    @font-face {
                        font-family: 'Roboto-medium';
                        src: url(static/fonts/Roboto-Medium.ttf);
                    }
                    @font-face {
                        font-family: 'Roboto-bold';
                        src: url(static/fonts/Roboto-Bold.ttf);
                    }
                    @font-face {
                        font-family: 'Roboto-black';
                        src: url(static/fonts/Roboto-Black.ttf);
                    }
                    body {
                        margin: 0;
                        padding: 0;
                    }
                    .mainContainerDashboard {
                        width: 100%;
                    }
                    .font-roboto-thin {
                        font-family: 'Roboto-thin', sans-serif;
                    }
                    .font-roboto-light {
                        font-family: 'Roboto-light', sans-serif;
                    }
                    .font-roboto-regular {
                        font-family: 'Roboto-regular', sans-serif;
                    }
                    .font-roboto-medium {
                        font-family: 'Roboto-medium', sans-serif;
                    }
                    .font-roboto-bold {
                        font-family: 'Roboto-bold', sans-serif;
                    }
                    .font-roboto-black {
                        font-family: 'Roboto-black', sans-serif;
                    }
                `}</style>
            </div>
        )
    }
 }

function mapStateToProps(state, props){
    console.log(state)
    return {
        initalState: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCambiarVisibilidadSMPS:  bindActionCreators(addCambiarVisibilidadSMPS, dispatch),
        addCambiarDescripcionProyecto:  bindActionCreators(addCambiarDescripcionProyecto, dispatch),
        addCambiarVisibilidadMDP:  bindActionCreators(addCambiarVisibilidadMDP, dispatch),
        addCambiarProyectoActualmenteSeleccionado:  bindActionCreators(addCambiarProyectoActualmenteSeleccionado, dispatch)
    }
}

 export default  connect( mapStateToProps, mapDispatchToProps )(Dashboard)