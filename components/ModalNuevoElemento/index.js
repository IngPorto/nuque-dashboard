/**
 * Modal genérico que genera un formulario de Título y Descripción
 */
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default class index_ModalNuevoElemento extends React.Component {
    constructor(props){
        super(props)
        this.inputTextNombre = React.createRef()
        this.textArealDescripcion = React.createRef()
    }

    /**
     * Este funcion solo es para evitar el 
     */
    evitarFormLoad = (event) =>{
        event.preventDefault();
        this.props.handleClickAceptar()
        this.props.cerrarModal()
    }

    capturarRelInputTextNombre = (ref) =>{
        this.inputTextNombre = ref
    }

    capturarRelTextArealDescripcion = (ref) =>{
        this.textArealDescripcion = ref
    }

    trasladarDatosModal = () => {
        this.props.handleClickAceptar(this.inputTextNombre.value, this.textArealDescripcion.value)
    }

    render(){
        return (
            <div className="modalNuevoElemento">
                <div className="contenidoModal">
                    <buttom onClick={ this.props.cerrarModal }>
                        <span className="botonCerrarVentana" >
                            &times;
                        </span>
                    </buttom>
                    <form 
                        className="form"    
                        onSubmit={ this.evitarFormLoad }
                    >
                        <Typography variant="body1" style={{
                                color:'#393939',
                                fontSize: '12pt',
                                fontWeight: '400',
                                marginTop: '20px',
                            }}>
                            { this.props.textoLabel_1 }
                        </Typography>
                        <input 
                            type="text" 
                            className="inputNombre"
                            ref={ this.capturarRelInputTextNombre }
                        />
                        <Typography variant="body1" style={{
                                color:'#393939',
                                fontSize: '12pt',
                                fontWeight: '400',
                                marginTop: '5px',
                            }}>
                            { this.props.textoLabel_2 }
                        </Typography>
                        <textarea 
                            id="textAreaModal"
                            type="text"
                            multiline
                            cols="53"
                            rows="3"
                            ref={ this.capturarRelTextArealDescripcion }
                            className="textAreaModal"
                        />
                        <Button 
                            className="btnAceptarModal" 
                            variant="contained" 
                            color="primary" 
                            onClick={ this.trasladarDatosModal }
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
                    onClick={ this.props.cerrarModal }
                >
                </div>
                <style jsx>{`
                    .form {
                        text-align: left;
                    }
                    .inputNombre {
                        height: 21px;
                        width: 97%;
                        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
                    }
                    .contenidoModal {
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
                    .btnAceptarModal {
                        float: right;
                    }
                    #textAreaModal {
                        resize: none;
                        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
                    }
                `}</style>
            </div>
        )
    }
}