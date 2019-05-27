/**
 * Icono, botón nuevo proyecto, tus proyectos, buscador
 */
import TextField from '@material-ui/core/TextField';
import Add from '@material-ui/icons/Add';
import Layers from '@material-ui/icons/Layers';
import Search from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import ModalNuevoElemento from '../ModalNuevoElemento';

class index_BarraLateral extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            modalNuevoProyecto: false
        }
    }

    componentDidMount() {
    }

    handleModalNuevoProyecto = () => {
        this.setState({
            ...this.state,
            modalNuevoProyecto: !this.state.modalNuevoProyecto
        })
    }

    handleCambiarProyectoActualmenteSeleccionado = event => {
        this.props.addCambiarProyectoActualmenteSeleccionado( parseInt(event.currentTarget.id) )
        //console.log(event.currentTarget.id)
    }

    crearNuevoProyecto = (nombre, descripcion) => {
        event.preventDefault();
        // validar nombre*, si está disponible y si tiene más de tres caracteres
        // crear proyecto en el state
        this.props.addCrearNuevoProyecto( nombre, descripcion )
        this.handleModalNuevoProyecto()
    }

    render(){
        return (
            <div className="BarraLateral">
                <div className="barraSuperiorAdorno"></div>
                <div className="contenedorLogo">
                    <img className="logoFondoAzul" src="static/logo_nuque_bg_blue.svg" alt="" />
                    <p className="betaTexto font-roboto-regular">beta</p>
                </div>
                <button 
                    className="btnNuevoProyecto"
                    onClick={ this.handleModalNuevoProyecto }
                >
                    <Add className="" style={{
                        float:'left'
                    }}/>
                    <Typography variant="body1" style={{
                        color:'white',
                        fontSize: '11pt',
                        height: 'fit-content',
                        marginTop: '2px'
                    }}>
                        Nuevo proyecto
                    </Typography>
                </button>
                <hr style={{
                    opacity: '0.3'
                }}/>
                <div className="tituloTusProyectos">
                    <Typography variant="body1" style={{
                            color:'#393939',
                            fontSize: '10pt',
                            fontWeight: '500',
                            float: 'left',
                            marginLeft: '15px'
                        }}>
                            Tus proyectos
                    </Typography>
                </div>

                <div className="contenedorDeProyectos">
                    {
                        this.props.initalState.proyectos.map( (proyecto, index) => {
                            return (
                                <button
                                    className={ index == this.props.initalState.proyectoActualmenteSeleccionado ? "seleccionadoItemProyecto":"itemProyecto"} 
                                    id={ index }
                                    onClick = { this.handleCambiarProyectoActualmenteSeleccionado }
                                >
                                    <Layers className="" style={{
                                        float: 'left',
                                        marginLeft: '10px',
                                        marginRight: '5px'
                                    }}/>
                                    <p>
                                        { proyecto.nombre }
                                    </p>
                                    <div className="ff"></div>
                                    <div className="fx"></div>
                                </button>
                            )
                        })
                    }
                </div>
                <div>
                    <div className="contenedorBuscadorProyectos">
                        <Search className="" style={{
                            float: 'left',
                            color: '#4f4f4f',
                            width: '15%',
                            marginTop: '27px'
                        }}/>
                        <TextField 
                            id="input-with-icon-grid" 
                            className="buscadorProyectos" 
                            label="Buscar proyecto" 
                            style= {{
                                width: '80%'
                            }}
                        />
                    </div>                    
                </div>
                {
                    this.state.modalNuevoProyecto &&
                    <ModalNuevoElemento 
                        { ...this.props }
                        handleClickAceptar = { this.crearNuevoProyecto }
                        cerrarModal = { this.handleModalNuevoProyecto }
                        textoLabel_1 = "Nombre del proyecto"
                        textoLabel_2 = "Descripción del proyecto"
                    />
                }
                <style jsx>{`
                    .BarraLateral {
                        width: 178px;
                        background-color: #ebedf1;
                        height: -webkit-fill-available;
                        float: left;
                        text-align: center;
                    }
                    .barraSuperiorAdorno {
                        height: 8px;
                        width: 100%;
                        background-color: #3f6ba9;
                    }
                    .contenedorLogo {
                        width: 100%;
                        height: fit-content;
                        text-align: center;
                        position: relative;
                        top: -8px;
                    }
                    .logoFondoAzul {
                        width: 87px;
                        margin: 0 auto;
                    }
                    .betaTexto {
                        color: #e55430;
                        font-size: 0.9em;
                        width: fit-content;
                        position: relative;
                        top: -40px;
                        left: 140px;
                    }
                    .btnNuevoProyecto {
                        width: 160px;
                        height: 42px;
                        background-color: #e55430;
                        color: white;
                        border: none;
                    }
                    .btnNuevoProyecto:hover {
                        cursor: pointer;
                        background: #f25b36;
                    }
                    .btnNuevoProyecto:active {
                        position:relative;
                        top:1px;
                    }
                    .tituloTusProyectos {
                        width: 100%;
                        height: 33px;
                    }
                    .itemProyecto {
                        height: 33px;
                        color: #2f2f2f;
                        text-align: left;
                        height: 41px;
                        padding: 0;
                        padding-top: 8px;
                        border: none;
                        background: #ebedf1;
                        width: 100%;
                    }
                    .itemProyecto:hover {
                        background: #f0f8ff;
                        cursor: pointer;
                    }
                    .itemProyecto p {
                        font-weight: 400;
                        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
                        line-height: 1.46429em;
                        font-size: 8pt;
                        height: fit-content;
                        margin-top: 4px;
                        overflow: hidden;
                        white-space: nowrap;
                        color: #333;
                        user-select: none;
                    }
                    .ff {
                        height: 29px;
                        width: 12px;
                        position: relative;
                        top: -30px;
                        float: right;
                        filter: blur(3px);
                        background: #ebedf1;
                    }
                    .fx {
                        height: 41px;
                        width: 4px;
                        position: relative;
                        top: -37px;
                        float: right;
                        right: -12px;
                        background: #ebedf1;
                    }
                    .contenedorBuscadorProyectos {
                        width: 178px;
                        position: absolute;
                        bottom: 0;
                        margin-bottom: 5px;
                    }
                    .seleccionadoItemProyecto {
                        background: #404954;
                        color: white;
                        height: 41px;
                        padding: 0;
                        padding-top: 8px;
                        border: none;
                        text-align: left;
                        width: 100%;
                    }
                    .seleccionadoItemProyecto:hover {
                        background: #545d69;
                        cursor: pointer;
                    }
                    .seleccionadoItemProyecto p {
                        font-weight: 400;
                        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
                        line-height: 1.46429em;
                        font-size: 8pt;
                        height: fit-content;
                        margin-top: 4px;
                        overflow: hidden;
                        white-space: nowrap;
                        user-select: none;
                    }
                    .seleccionadoItemProyecto .ff {
                        height: 36px;
                        width: 12px;
                        position: relative;
                        top: -34px;
                        float: right;
                        filter: blur(1px);
                        background: #404954;
                    }
                    .seleccionadoItemProyecto .fx {
                        height: 41px;
                        width: 4px;
                        position: relative;
                        top: -37px;
                        float: right;
                        right: -12px;
                        background: #e55430;
                    }
                `}</style>
            </div>
        )
    }
}

export default index_BarraLateral