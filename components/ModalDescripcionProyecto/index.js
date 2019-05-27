import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class extends React.Component {
    constructor(props){
        super(props)
        this.textModalDescripcionProyecto = React.createRef()
    }

    componentDidMount(){
        this.textModalDescripcionProyecto.value = this.props.initalState.proyectos[this.props.initalState.proyectoActualmenteSeleccionado].descripcion
        console.log("Did mount Modal descripcion proyecto")
    }
    
    handleClickModalDescripcionProyectol = (event) =>{
        event.preventDefault();
        console.log("Proyecto ams: " + this.props.initalState.proyectoActualmenteSeleccionado)
        this.props.addCambiarDescripcionProyecto( this.props.initalState.proyectoActualmenteSeleccionado, this.textModalDescripcionProyecto.value)
        this.props.handleClickEditarDescripcion()
        // validar la descripción
        // guardar la descipción, cerrar ventana
        // si no válida, mostrar mensaje de error
        console.log("Click event: Editar descripcion")
    }
    
    capturarRelModalDescripcionProyecto = (ref) =>{
        this.textModalDescripcionProyecto = ref
    }
    
    render(){
        return (
            <div className="modalDescripcionProyecto">
                <div className="contenidoModalDescripcionProyecto">
                    <buttom onClick={ this.props.cerrarModalEditarDescripcion }>
                        <span className="botonCerrarVentana" >
                            &times;
                        </span>
                    </buttom>
                    <form onSubmit={ this.handleClickModalDescripcionProyectol }>
                        <Typography variant="body1" style={{
                                color:'#393939',
                                fontSize: '12pt',
                                fontWeight: '400',
                                marginBottom: '20px',
                            }}>
                            Escribe una descripción para el proyecto
                        </Typography>
                        <textarea 
                            id="inputModalDescripcionProyecto"
                            type="text"
                            cols="53"
                            rows="5"
                            ref={ this.capturarRelModalDescripcionProyecto }
                            className="inputModalDescripcionProyecto"
                        />
                        <Button 
                            className="btnAceptarModalDescripcionProyecto" 
                            variant="contained" 
                            color="primary" 
                            onClick={ this.handleClickModalDescripcionProyectol }
                            style={
                                {
                                    color:'white', 
                                    background:'#2196f3',
                                    borderRadius: '0px',
                                    padding: '7px 30px',
                                    marginRight: '8px',
                                    float: 'right'
                                }
                            }>
                            Aceptar
                        </Button>
                        <hr style={{
                            opacity: '0.3',
                            marginTop: '45px',
                            marginBottom: '0'
                        }}/>
                        <p>{ /*"Mensaje de error "*/ }</p>
                    </form>
                </div>
                <div 
                    className="backgroundFiller"
                    onClick={ this.props.cerrarModalEditarDescripcion }
                >
                </div>
                <style jsx>{`
                    .contenidoModalDescripcionProyecto {
                        position: fixed;
                        width: 400px;
                        height: 200px;
                        top: 30%;
                        left: calc(50vw - (200px + 15px));
                        border-style: solid;
                        border-width: 1px;
                        border-color: #cccccc;
                        border-radius: 0px;
                        padding: 15px;
                        background-color: white;
                        z-index: 9999;
                        
                        -webkit-box-shadow: 0px 2px 30px -15px rgba(0,0,0,0.41);
                        -moz-box-shadow: 0px 2px 30px -15px rgba(0,0,0,0.41);
                        box-shadow: 0px 2px 30px -15px rgba(0,0,0,0.41);
                    }

                    .botonCerrarVentana {
                        cursor: pointer;
                        position: absolute;
                        top: 0;
                        right: 0;
                        padding: .75rem 1.25rem;
                        color: inherit;
                        float: right;
                        font-size: 1.5rem;
                        font-weight: 700;
                        line-height: 1;
                        color: #000;
                        text-shadow: 0 1px 0 #fff;
                        opacity: .5;
                    }
                    .backgroundFiller {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                    }
                    .btnAceptarModalDescripcionProyecto {
                        float: right;
                    }
                    #inputModalDescripcionProyecto {
                        resize: none;
                        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
                    }
                `}</style>
            </div>
        )
    }
}