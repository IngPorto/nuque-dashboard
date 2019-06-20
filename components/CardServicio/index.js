/**
 * Elemento que contiene la presentación de los servicios en forma de carta
 * en el panel de servicio del dashboard
 */
import Widgets from '@material-ui/icons/Widgets';
import ToggleOn from '@material-ui/icons/ToggleOn';
import ToggleOff from '@material-ui/icons/ToggleOff';
import BubbleChart from '@material-ui/icons/BubbleChart';
import MoreVert from '@material-ui/icons/MoreVert';
import FileCopy from '@material-ui/icons/FileCopy';
import LowPriority  from '@material-ui/icons/LowPriority';
import Create from '@material-ui/icons/Create';
import Delete from '@material-ui/icons/Delete';

export default class index_CardServicio extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            visibilidadSubMenuPerfilServicio: false
        }
    }

    handleClickSubMenuPerfilServicio = () =>{
        this.setState( 
            {
                ...this.state,
                visibilidadSubMenuPerfilServicio: !this.state.visibilidadSubMenuPerfilServicio
            }
        )
        //this.props.addCambiarVisibilidadSMPS(!this.props.initalState.visibilidadSubMenuPerfilServicio)
        //console.log (this.props)
    }

    handleClickNombreServicio = event => {
        this.props.addVisibilidadPlayground( !this.props.initalState.visibilidadPlayground )
        this.props.addCambiarServicioActualmenteSeleccionado(event.currentTarget.id)
    }

    render(){
        const servicio = this.props.initalState.servicios[this.props.servicio]
        // console.log(this.props.servicio)
        return (
            <div className="CardServicio" key={ servicio.id }>
                <div className="perfilDeServicio">
                    <div className="headerPerfilDeServicio">
                        <Widgets style={{
                            color: '#2f2f2f',
                            float: 'left'
                        }} />
                        <p 
                            className="resetText tituloPerfilServicio font-roboto-regular"
                            onClick= { this.handleClickNombreServicio }
                            id= { servicio.id }
                        >
                            { servicio.nombre }
                        </p>
                        <MoreVert 
                            style={{
                                float: 'right',
                                color: '#2f2f2f',
                                width: '23px',
                                cursor: 'pointer' 
                            }}
                            onClick= { this.handleClickSubMenuPerfilServicio }
                        />
                        <p className="textoEnLinea resetText textoPerfilServicio font-roboto-regular">{ servicio.toggle == 'ToggleOn' ? "En línea" : "Apagado" }</p>
                        <div className={"Toggle "+ servicio.toggle}>
                            <ToggleOn style={{
                                float: 'right',
                                height: '40px',
                                width: '40px',
                                position: 'relative',
                                top: '-8px',
                                cursor: 'pointer' }}
                            />
                        </div>                                            
                    </div>
                    <div className="bodyPerfilDeServicio">
                        <p className="resetText textoPerfilServicio font-roboto-regular">Acceso: { servicio.rutaDeAcceso }</p>
                        <p className="resetText textoPerfilServicio font-roboto-regular">Código: { servicio.id } </p>
                        <p className="resetText textoPerfilServicio font-roboto-regular">Protocolo: POST, REST</p>
                        <p className="resetText textoPerfilServicio font-roboto-regular">Formato: JSON</p>
                    </div>
                    <div className="footerPerfilDeServicio">
                        <p className="resetText textoPerfilServicio font-roboto-regular">Creado el { servicio.fechaCreacion }</p>
                    </div>
                    { 
                        this.state.visibilidadSubMenuPerfilServicio && 
                    
                    <div className="SubMenuPerfilServicio">
                        <div className="marcoSubMenu">
                            <div className="SubMenuPerfilServicioOpcion">
                                <FileCopy style={{
                                    float: 'left',
                                    width: '15px',
                                    marginLeft: '12px'
                                }}/>
                                <p className="textoOpcionServicio resetText font-roboto-regular">
                                    Duplicar
                                </p>
                            </div>
                            <div className="SubMenuPerfilServicioOpcion">
                                <LowPriority style={{
                                    float: 'left',
                                    width: '15px',
                                    marginLeft: '12px'
                                }}/>
                                <p className="textoOpcionServicio resetText font-roboto-regular">
                                    Mover de proyecto
                                </p>
                            </div>
                            <div className="SubMenuPerfilServicioOpcion">
                                <Create style={{
                                    float: 'left',
                                    width: '15px',
                                    marginLeft: '12px'
                                }}/>
                                <p className="textoOpcionServicio resetText font-roboto-regular">
                                    Modificar
                                </p>
                            </div>
                            <div className="SubMenuPerfilServicioOpcion">
                                <Delete style={{
                                    float: 'left',
                                    width: '15px',
                                    marginLeft: '12px'
                                }}/>
                                <p className="textoOpcionServicio resetText font-roboto-regular">
                                    Eliminar
                                </p>
                            </div>
                        </div>
                    </div>
                    }
                </div>
                <style jsx>{`
                    .resetText {
                        margin: 0;
                        padding: 0;
                    }
                    .perfilDeServicio {
                        width: 341px;
                        height: 116px;
                        margin-right: 26px;
                        margin-bottom: 33px;
                        padding: 15px;
                    }
                    .btnNuevoServicio, .perfilDeServicio{
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
                    
                    .headerPerfilDeServicio {
                        float: left;
                        width: 100%;
                    }
                    .bodyPerfilDeServicio {
                        width: 100%;
                        height: fit-content;
                        float: left;
                    }
                    .footerPerfilDeServicio {
                        width: 100%;
                        float: right;
                        text-align: right;
                    }
                    .tituloPerfilServicio {
                        color: #005da7;
                        font-size: 0.879rem;
                        cursor: pointer;
                        float: left;
                        width: 200px;
                        margin: 3px 0 0 5px;
                    }
                    .tituloPerfilServicio:active {
                        color: #082c49;
                        outline: -webkit-focus-ring-color auto 5px;
                    }
                    .textoPerfilServicio {
                        font-size: 0.76rem;
                        color: #525f68;
                    }
                    .Toggle {
                        float: left;
                        width: fit-content;
                    }
                    .ToggleOn {
                        color: green;
                    }
                    .ToggleOff {
                        color: #b4b4b4;
                        transform: rotate(180deg);
                        height: 23px;
                    }
                    .textoEnLinea {
                        float: right;
                        width: fit-content;
                        margin-top: 3px;
                    }

                    .SubMenuPerfilServicio {
                        width: 147px;
                        height: 121px;
                        -webkit-box-shadow: -2px 3px 10px -6px rgba(0,0,0,0.75);
                        -moz-box-shadow: -2px 3px 10px -6px rgba(0,0,0,0.75);
                        box-shadow: -2px 3px 10px -6px rgba(0,0,0,0.75);
                        background-color: white;
                        position: relative;
                        left: 200px;
                        top: 30px;
                    }
                    .marcoSubMenu {
                        position: absolute;
                        overflow: hidden;
                        width: 100%;
                        padding-top: 10px;
                    }
                    .SubMenuPerfilServicioOpcion {
                        height: fit-content;
                        width: 100%;
                        width: 100%;
                        height: 27px;
                    }
                    .SubMenuPerfilServicioOpcion:hover{
                        background-color: #005da7;
                        color: white;
                        cursor: pointer;
                    }
                    .textoOpcionServicio {
                        float: left;
                        margin: 5px;
                        font-size: 0.8rem;
                    }
                `}</style>
            </div>
        )
    }
}