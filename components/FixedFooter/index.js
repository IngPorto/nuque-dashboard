/**
 * Barra inferior para búsquedas y desplegue de información complementaria y 
 * relacionada la interfaz que se muestra en el momento
 */
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import ToggleOn from '@material-ui/icons/ToggleOn';

class FixedFooter extends React.Component{
    render(){
        let isPlaygorund = this.props.initalState.visibilidadPlayground
        const servicio = isPlaygorund && this.props.initalState.servicios[this.props.initalState.servicioActualmenteSeleccionado]
        return(
            <div 
                className="FixedFooter" 
                style={{
                    display: 'flex'
                }}>
                <div className="contenedorBuscadorProyectos">
                    <Search className="" style={{
                        float: 'left',
                        color: '#4f4f4f',
                        width: '15%',
                        marginTop: '21px'
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
                {
                    isPlaygorund &&
                    <div style={{
                        display: 'flex'
                    }}>
                        <div className={"Toggle "+ servicio.toggle}>
                            <ToggleOn style={{
                                float: 'right',
                                height: '40px',
                                width: '40px',
                                padding: '7px',
                                cursor: 'pointer' }}
                            />
                        </div> 
                        <p 
                            className="textoEnLinea resetText textoPerfilServicio font-roboto-regular"
                            style={{
                                margin: 'auto',
                            }}
                        >
                            { servicio.toggle == 'ToggleOn' ? "En línea" : "Apagado" }
                        </p>
                        <p 
                            className="font-roboto-regular"
                            style={{
                                padding: '0 7px 0 47px',
                                margin: 'auto',
                                color: '#6b6b6b',
                                fontSize: '13px'
                            }}>
                                Acceso: 
                        </p>
                        <p className="font-roboto-regular"
                            style={{
                                margin: 'auto',
                                fontSize: '13px'

                            }}>
                            <a href={"./"+servicio.rutaDeAcceso} target="_blank">
                            { 
                                "/"+servicio.rutaDeAcceso  
                            }
                            </a>
                        </p>
                    </div>
                }
                <style jsx>{`   
                    .FixedFooter {
                        width: 100vw;
                        height: 55px;
                        position: fixed;
                        bottom: 0;
                        background-color: #ebedf1;
                        border-top-style: solid;
                        border-top-color: rgba(0, 0, 0, 0.1);;
                        border-top-width: 1px;
                    }
                    .contenedorBuscadorProyectos {
                        width: 178px;
                        margin-bottom: 5px;
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
                `}</style>
            </div>
        )
    }
}
export default FixedFooter