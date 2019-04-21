
export default class extends React.Component {
    constructor(props){
        super(props)
        this.textModalDescripcionProyecto = React.createRef()
    }

    componentDidMount(){
        this.textModalDescripcionProyecto.value = this.props.initalState.proyectos[0].descripcion
        console.log("Did mount Modal descripcion proyecto")
    }
    
    handleClickModalDescripcionProyectol = (event) =>{
        event.preventDefault();
        this.props.addCambiarDescripcionProyecto(this.textModalDescripcionProyecto.value)
        this.props.handleClickEditarDescripcion()
        // validar la descripción
        // guardar la descipción, cerrar ventana
        // si no válida, mostrar mensaje de error
        console.log("Click event: Editar descripcion")
    }
    
    capturarRelModalDescripcionProyecto = (rel) =>{
        this.textModalDescripcionProyecto = rel
    }
    
    render(){
        return (
            <div className="modalDescripcionProyecto">
                <form onSubmit={ this.handleClickModalDescripcionProyectol }>
                    <p>Escribe una descripción para el proyecto</p>
                    <input
                        id="inputModalDescripcionProyecto"
                        multiline
                        rowsMax="4"
                        ref={ this.capturarRelModalDescripcionProyecto }
                        className="inputModalDescripcionProyecto"
                    />
                    <button className="btnAceptarModalDescripcionProyecto">
                        Aceptar
                    </button>
                    <p>{ "Mensaje de error " }</p>
                </form>
            </div>
        )
    }
}