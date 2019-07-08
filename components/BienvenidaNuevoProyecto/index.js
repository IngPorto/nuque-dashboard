/**
 * 
 */
import Layers from '@material-ui/icons/Layers';
import Typography from '@material-ui/core/Typography';
import Add from '@material-ui/icons/Add';
import {Animated} from "react-animated-css";

class index_BienvenidaNuevoProyecto extends React.Component {

    crearNuevoProyecto = (nombre, descripcion) => {
        event.preventDefault();
        // validar nombre*, si está disponible y si tiene más de tres caracteres
        // crear proyecto en el state
        this.props.addCrearNuevoProyecto( nombre, descripcion )

        this.props.addCambiarProyectoActualmenteSeleccionado( parseInt(this.props.initalState.proyectos.length) - 1 )
        this.props.addVisibilidadPlayground( false )

        this.handleModalNuevoProyecto()
    }

    render(){
        return(
            <div className="BienvenidaNuevoProyecto">
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'wrap column',
                        justifyContent: 'center',
                        textAlign: 'center'
                    }}>
                    <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
                        <Layers
                            style={{
                                fontSize: '100px',
                                margin: 'auto',
                                color: '#cecbcb'
                            }}/>
                    </Animated>
                    <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
                        <p className="tituloBienvenido font-roboto-regular ">Bienvenido</p>
                    </Animated>
                    <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
                        <p className="mensajeBienvenido font-roboto-regular">Inicia creando tu propio proyecto y explora las diferentes funcionalidades que te ofrece <span className="nuqueEnTexto">nuque</span>.</p>
                    </Animated>
                </div>
                <style jsx>{`
                    .tituloBienvenido{
                        font-size: 30px;
                        color: #555;
                        margin: 0;
                    }
                    .mensajeBienvenido {
                        font-size: 16px;
                        color: #555;
                    }
                    .nuqueEnTexto {
                        color: #008c91;
                    }
                `}</style>
            </div>
        )
    }
}

export default index_BienvenidaNuevoProyecto;