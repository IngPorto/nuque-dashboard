/**
 * 1. botón nuevo servicio, crea tu primer servicio. 2. todos los servcios
 */
import Add from '@material-ui/icons/Add';
import CardServicio from '../CardServicio';
import ModalNuevoElemento from '../ModalNuevoElemento';

class index_PanelDeServicios extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            modalNuevoServicio: false
        }
    }
    
    componentWillMount(){
    }

    handleModalNuevoServicio = () => {
        this.setState({
            ...this.state,
            modalNuevoServicio: !this.state.modalNuevoServicio
        })
    }

    crearNuevoServicio = (nombre, descripcion) => {
        this.props.addCrearNuevoServicio( nombre, descripcion, this.props.initalState.proyectoActualmenteSeleccionado )
        this.handleModalNuevoServicio()
    }

    render(){
        // Como el primer render trae datos vacíos en el initial state, solo uso el initial state cuando el tipo de dato sea un numero y no vacío
        const servicios = typeof this.props.initalState.proyectoActualmenteSeleccionado == 'number' && this.props.initalState.proyectos[this.props.initalState.proyectoActualmenteSeleccionado].servicios 
        //console.log("Proyecto seleccionado: " + this.props.initalState.proyectoActualmenteSeleccionado)
        //const servicios = null;
        console.log(servicios)

        return(
            <div className="PanelDeServicios">
                <div className="contenedorCentralPanelDeServicios">
                    <div className="contenedorBtnNuevoServicio">
                        <button 
                            className="btnNuevoServicio"
                            onClick= { this.handleModalNuevoServicio }
                        >
                            <Add style={{
                            }}/>
                        </button>
                        <p className="textoNuevoServicio font-roboto-regular">Nuevo servicio</p>
                    </div>
                    <div className="carrilDePerfilesDeServicio">
                        { 
                            // Si el servicio existe hago renderizo, sino, no 
                            servicios &&
                            servicios.map(servicio =>{
                                return(
                                    <CardServicio 
                                        {...this.props}  
                                        servicio = {servicio}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                {
                    this.state.modalNuevoServicio &&
                    <ModalNuevoElemento 
                        { ...this.props }
                        handleClickAceptar = { this.crearNuevoServicio }
                        cerrarModal = { this.handleModalNuevoServicio }
                        textoLabel_1 = "Nombre del servicio"
                        textoLabel_2 = "Descripción del servicio"
                    />
                }
                <style jsx>{`
                    .PanelDeServicios {
                        float: left;
                        width: 100%;
                        height: fit-content;
                    }
                    .contenedorCentralPanelDeServicios {
                        margin: 33px 50px;
                    }
                    .contenedorBtnNuevoServicio {
                        margin: 0;
                        padding: 0;
                        font-size: 0.8rem;
                        color: rgba(0,0,0,0.87);
                        width: fit-content;
                        float: left;
                        margin-right: 26px;
                    }
                    .btnNuevoServicio {
                        height: 100px;
                        width: 90px;
                        float: left;
                        color: #b0b3b7;
                        float: initial;
                        cursor: pointer;
                    }
                    .btnNuevoServicio {
                        -moz-box-shadow:inset 0px 1px 3px 0px #f0f0f0;
                        -webkit-box-shadow:inset 0px 1px 3px 0px #f0f0f0;
                        box-shadow:inset 0px 1px 3px 0px #f0f0f0;
                        background-color:transparent;
                        -moz-border-radius:5px;
                        -webkit-border-radius:5px;
                        border-radius:5px;
                        border:1px solid #cfd4d9;
                        display:inline-block;
                        text-decoration:none;
                        text-shadow:0px -1px 0px #ffffff;
                    }
                    .btnNuevoServicio:hover {
                        background-color:transparent;
                    }
                    .btnNuevoServicio:active {
                        position:relative;
                        top:1px;
                    }
                    .textoNuevoServicio {
                        width: fit-content;
                        margin: 5px auto 0 auto;
                        padding: 0;
                    }
                `}</style>
            </div>
        )
    }
}

export default index_PanelDeServicios