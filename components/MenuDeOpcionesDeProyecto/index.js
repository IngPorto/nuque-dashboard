/**
 * Descripción del proyecto, botón importar servicio
 */
import Create from '@material-ui/icons/Create';
import MoveToInbox from '@material-ui/icons/MoveToInbox';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import ModalDescripcionProyecto from '../ModalDescripcionProyecto';

class index_MenuDeOpcionesDeProyecto extends React.Component {
    constructor(props){
        super(props)
        
    }
    
    componentWillMount(){
    }

    handleClickImportarServicio = () =>{
        console.log("Click event: Importar servicio")
    }

    handleClickEditarDescripcion = () =>{
        this.props.addCambiarVisibilidadMDP(!this.props.initalState.visibilidadModalDescripcionProyecto)
        console.log("Click event: Editar descripcion")
    }

    render(){ 
        return(
            <div className="MenuDeOpcionesDeProyecto">
                <div className="contenedorDescripcionProyecto">
                    <button 
                        className="btnEditarDescripcion"
                        onClick= { this.handleClickEditarDescripcion }
                    >
                        <Create className="" />
                    </button>
                    <p className="textoDescripcionProyecto font-roboto-regular">{ this.props.initalState.proyectos[0].descripcion }</p>
                    <button 
                        className="btnImportarServicio"
                        onClick= { this.handleClickImportarServicio }
                    >
                        <MoveToInbox 
                            className="" 
                            style={{
                                float: 'left',
                                margin: '3px'
                            }}
                        /> 
                        <p>Importar servicio</p>
                    </button>
                </div>
                { /* <div className="contenedorBtnImportarServicio">
                    
                    </div> */ }
                <div className="contenedorTituloTusServicios">
                    <Typography variant="body1" style={{
                            color:'#393939',
                            fontSize: '10pt',
                            fontWeight: '500',
                            float: 'left',
                            marginLeft: '15px'
                        }}>
                        Tus servicios
                    </Typography>
                </div>
                {
                    this.props.initalState.visibilidadModalDescripcionProyecto &&
                    <ModalDescripcionProyecto 
                        { ...this.props}
                        handleClickEditarDescripcion= { this.handleClickEditarDescripcion }
                    />
                }
                <style jsx>{`
                    .MenuDeOpcionesDeProyecto {
                        width: 100%;
                    }
                    .contenedorDescripcionProyecto {
                        width: 100%;
                        height: 70px;
                        float: left;
                        padding-left: 19px;
                    }
                    .textoDescripcionProyecto{
                        float: left;
                        font-size: 0.875rem;
                        color: rgba(0, 0, 0, 0.87);
                        margin: 10px 0 0 10px;
                    }

                    .btnImportarServicio{
                        float: right;
                        margin-right: 38px;
                    }

                    .contenedorBtnImportarServicio {
                        width: 29%;
                        float: right;
                    }
                    .contenedorTituloTusServicios {
                        width: 100%;
                        float: left;
                    }
                    .btnEditarDescripcion {
                        height: 35px;
                        width: 36px;
                        float: left;
                    }
                    .btnEditarDescripcion, 
                    .btnImportarServicio, 
                    .btnAceptarModalDescripcionProyecto {
                        -moz-box-shadow:inset 0px 1px 3px 0px #f0f0f0;
                        -webkit-box-shadow:inset 0px 1px 3px 0px #f0f0f0;
                        box-shadow:inset 0px 1px 3px 0px #f0f0f0;
                        background-color:transparent;
                        -moz-border-radius:5px;
                        -webkit-border-radius:5px;
                        border-radius:5px;
                        border:1px solid #cfd4d9;
                        display:inline-block;
                        cursor:pointer;
                        color:#2f2f2f;
                        text-decoration:none;
                        text-shadow:0px -1px 0px #ffffff;
                    }
                    .btnEditarDescripcion:hover, .btnImportarServicio:hover {
                        background-color:transparent;
                    }
                    .btnEditarDescripcion:active, 
                    .btnImportarServicio:active,
                    .btnAceptarModalDescripcionProyecto:active {
                        position:relative;
                        top:1px;
                    }
                    .btnImportarServicio p {
                        float: left;
                        margin: 8px;
                    }
                    .btnAceptarModalDescripcionProyecto {
                        padding: 10px 20px;
                    }
                    .inputModalDescripcionProyecto {

                    }
                `}</style>
            </div>
        )
    }
}
export default  index_MenuDeOpcionesDeProyecto