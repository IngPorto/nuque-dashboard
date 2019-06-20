/**
 * Área del editor de código visual
 */

 import { bindActionCreators } from 'redux'
import { 
    addCambiarVisibilidadSMPS, 
    addCambiarDescripcionProyecto, 
    addCambiarVisibilidadMDP, 
    addCambiarProyectoActualmenteSeleccionado,
    addCrearNuevoProyecto,
    addCrearNuevoServicio
} from '../store'
import { connect } from 'react-redux'

class Playground extends React.Component{
    render(){
        return(
            <div className="playground">
                <div>Hi</div>
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
    return {
        initalState: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCambiarVisibilidadSMPS:  bindActionCreators(addCambiarVisibilidadSMPS, dispatch),
        addCambiarDescripcionProyecto:  bindActionCreators(addCambiarDescripcionProyecto, dispatch),
        addCambiarVisibilidadMDP:  bindActionCreators(addCambiarVisibilidadMDP, dispatch),
        addCambiarProyectoActualmenteSeleccionado:  bindActionCreators(addCambiarProyectoActualmenteSeleccionado, dispatch),
        addCrearNuevoProyecto:  bindActionCreators(addCrearNuevoProyecto, dispatch),
        addCrearNuevoServicio:  bindActionCreators(addCrearNuevoServicio, dispatch)
    }
}

export default  connect( mapStateToProps, mapDispatchToProps )(Playground)