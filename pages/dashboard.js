/**
 * index/dashboard
 * 
 * Panel principal, el cual se visualiza una vez 
 * el usuario inicia sesión. En este panel se 
 * listan todos los proyectos creados por el usuario
 */
import BarraLateral from "../components/BarraLateral";
import MenuGlobal from "../components/MenuGlobal";
import MenuDeOpcionesDeProyecto from "../components/MenuDeOpcionesDeProyecto";
import PanelDeServicios from "../components/PanelDeServicios";
import AreaPrincipalDashboard from "../components/AreaPrincipalDashboard";
import FixedFooter from "../components/FixedFooter";
import Playground from "../components/Playground";
import BienvenidaNuevoProyecto from "../components/BienvenidaNuevoProyecto";

import { bindActionCreators } from 'redux'
import { 
    addCambiarVisibilidadSMPS, 
    addCambiarDescripcionProyecto, 
    addCambiarVisibilidadMDP, 
    addCambiarProyectoActualmenteSeleccionado,
    addCrearNuevoProyecto,
    addCrearNuevoServicio,
    addVisibilidadPlayground,
    addCambiarServicioActualmenteSeleccionado
} from '../store'
import { connect } from 'react-redux'
import Head from 'next/head'

let workspace;

 class Dashboard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            visibilidadGifCarga: false
        }
    }
    
    static getInitialProps ({ store , x }) {
        //store.dispatch(addCambiarVisibilidadSMPS())
        //console.log( x )
        return {  }
    }

    componentWillMount(){
        // si existe un proyecto lo selecciono el como default o 0 en el panel de servicios
        if (this.props.initalState.proyectos.length > 0){
            this.props.addCambiarProyectoActualmenteSeleccionado( 0 )
        }else {
            this.props.addCambiarProyectoActualmenteSeleccionado('')
        }
    }

    componentDidMount(){
        let guardar = this.handleGuardarWorkspace;
        // Keyboard Shortcuts
        /*
        document.onkeyup = function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (e.ctrlKey && e.which == 83) {
                guardar();
            }
        }
        */

        
        document.addEventListener("keydown", function(e) {
            //e.preventDefault();
            //e.stopPropagation();
            if (e.ctrlKey && e.which == 83) {
                e.preventDefault();
                guardar();
            }
        }, false);
        
    }

    componentDidUpdate(){
        if(this.props.initalState.visibilidadPlayground){
            workspace = Blockly.inject(
                'blocklyDiv', 
                {
                    toolbox: document.getElementById('toolbox'),
                    grid:
                        {
                            spacing: 20,
                            length: 3,
                            colour: '#ccc',
                            snap: true
                        },
                    zoom:
                        {
                            controls: true,
                            wheel: true,
                            startScale: 1.0,
                            maxScale: 3,
                            minScale: 0.3,
                            scaleSpeed: 1.2
                        },
                    scrollbars: true,
                    trashcan: true
                },
            )
            
            if( this.props.initalState.servicioActualmenteSeleccionado != '' ){
                this.handleCargarWorkspace()
                //console.log("Hay un servicio seleccionado")
            }
        }
        //console.log(workspace)
        //console.log(Blockly)
    }

    handleCrearServicioEnElServer = async () => {
        const res = await fetch(
            './createServiceDirectory', 
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "filename" : this.props.initalState.servicioActualmenteSeleccionado + ".xml",
                    "projectCode" : this.props.initalState.proyectos[parseInt(this.props.initalState.proyectoActualmenteSeleccionado)].id,
                    "serviceCode" : this.props.initalState.servicioActualmenteSeleccionado
                })
            })
    }

    handleGuardarWorkspace = async () => {
        //var code = Blockly.JavaScript.workspaceToCode(workspace);
        //var file = new Blob([code], {type: "application/javascript"});
        //var code =  Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(Blockly.mainWorkspace));
        var code_xml =  Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(Blockly.mainWorkspace))
        var code_js = Blockly.JavaScript.workspaceToCode(Blockly.mainWorkspace);
        //Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(response.workspace), Blockly.mainWorkspace);
        
        //const _temp_handleDesplegarServicioComoJs = this.handleDesplegarServicioComoJs();

        this.setState({...this.state, visibilidadGifCarga:true})
        Promise.all([
            fetch(
                './saveService', 
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ 
                        "workspace" : code_xml,
                        "filename" : this.props.initalState.servicioActualmenteSeleccionado + ".xml",
                        "projectCode" : this.props.initalState.proyectos[parseInt(this.props.initalState.proyectoActualmenteSeleccionado)].id,
                        "serviceCode" : this.props.initalState.servicioActualmenteSeleccionado
                    })
                }),
            fetch(
                './deployService', 
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ 
                        "workspace" : code_js,
                        "filename" : this.props.initalState.servicioActualmenteSeleccionado + ".js",
                        "projectCode" : this.props.initalState.proyectos[parseInt(this.props.initalState.proyectoActualmenteSeleccionado)].id,
                        "serviceCode" : this.props.initalState.servicioActualmenteSeleccionado
                    })
                })
        ]).then(() => this.setState({...this.state, visibilidadGifCarga:false}))
        /*
        .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
        .then(([data1, data2]) => this.setState({
            recentInfo: data1, 
            alltimeInfo: data2
        }));
        */

        /*
        const res = await fetch(
            'http://localhost:3000/saveService', 
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    "workspace" : code,
                    "filename" : this.props.initalState.servicioActualmenteSeleccionado + ".xml",
                    "projectCode" : this.props.initalState.proyectos[parseInt(this.props.initalState.proyectoActualmenteSeleccionado)].id,
                    "serviceCode" : this.props.initalState.servicioActualmenteSeleccionado
                })
            }).then(function(response) {
                //return response.json();
                //_temp_handleDesplegarServicioComoJs()
            })
            .catch(function(err) {
                console.error(err);
            });
        */
    }    

    // Usar el método Fetch() para hacer llamados al servidor
    handleCargarWorkspace = async () => {
        //Blockly.mainWorkspace.clear()
        // var js = Blockly.JavaScript.codeToWorkspace( /* Fetch to file */ )
        
        //const _temp_handleDesplegarServicioComoJs = this.handleDesplegarServicioComoJs;
        const res = await fetch(
            './loadService', 
            {
                method: 'POST',
                headers: {
                    'Accept':'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "filename" : this.props.initalState.servicioActualmenteSeleccionado + ".xml",
                    "projectCode" : this.props.initalState.proyectos[parseInt(this.props.initalState.proyectoActualmenteSeleccionado)].id,
                    "serviceCode" : this.props.initalState.servicioActualmenteSeleccionado
                })
            }).then(function(response) {
                //return response.json();
                //var xml = Blockly.Xml.textToDom( response.workspace )
                //Blockly.Xml.domToWorkspace(xml , Blockly.mainWorkspace)

                //Blockly.JavaScript.codeToWorkspace(response.workspace , Blockly.mainWorkspace);
                
                //var parser = new DOMParser();
                //var xmlDoc = parser.parseFromString(data.workspace,"text/xml");
                
               //return response.json()
               return response.json()
            }).then(function(data) {
                //console.log(data.workspace)
                console.log(data)
                Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(data.workspace), Blockly.mainWorkspace);
                // this.handleDesplegarServicioComoJs()
                //_temp_handleDesplegarServicioComoJs()
            })
            .catch(function(err) {
                console.error(err);
            });
        /*
        const res = await fetch(
            'http://localhost:3000/loadService', 
            {
                method: 'POST',
                body: 'hola'
            })
        */
        //var xml = Blockly.Xml.textToDom( /* Fetch to file */ )
        //Blockly.Xml.domToWorkspace(xml , Blockly.mainWorkspace)
    }

    handleDesplegarServicioComoJs = async () => {
        var code = Blockly.JavaScript.workspaceToCode(Blockly.mainWorkspace);

        const res = await fetch(
            './deployService', 
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    "workspace" : code,
                    "filename" : this.props.initalState.servicioActualmenteSeleccionado + ".js",
                    "projectCode" : this.props.initalState.proyectos[parseInt(this.props.initalState.proyectoActualmenteSeleccionado)].id,
                    "serviceCode" : this.props.initalState.servicioActualmenteSeleccionado
                })
            }).then(function(response) {
                //return response.json();
            })
            .catch(function(err) {
                console.error(err);
            });
    }

    handleDescargarCodigoFuente = () => {
        var code = Blockly.JavaScript.workspaceToCode(workspace);
        var file = new Blob([code], {type: "application/javascript"});
        var a = document.createElement("a");
        var url = window.URL.createObjectURL(file);
        a.href = url;
        a.download = this.props.initalState.servicioActualmenteSeleccionado;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0);
    }

    hand = () => {
        console.log(this.props.addCambiarVisibilidadSMPS(!this.props.initalState.visibilidadSubMenuPerfilServicio))
    }

    render(){
        //const { store } = this.props
        //console.log("estado A: "+this.props.initalState.visibilidadSubMenuPerfilServicio)
        //console.log("estado B: "+this.props.initalState.visibilidadSubMenuPerfilServicio)

        return (
            <div className="mainContainerDashboard">
                <Head>
                    <title>Dashboard | Nuque</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <script src="/static/blockly/blockly_compressed.js"></script>
                    <script src="/static/blockly/blocks_compressed.js"></script>
                    <script src="/static/blockly/msg/js/es.js"></script> 
                    <script src="/static/blockly/javascript_compressed.js"></script>
                    <link rel="stylesheet" href="/static/css/animate.min.css" />
                </Head>

                <BarraLateral {...this.props} className="fadeInDown"/>
                <AreaPrincipalDashboard>
                    <MenuGlobal />
                    {
                        typeof this.props.initalState.proyectoActualmenteSeleccionado != 'number' ? 
                            <BienvenidaNuevoProyecto {...this.props} />
                        :
                            this.props.initalState.visibilidadPlayground ?
                            /* Playground */ 
                            <Playground 
                                {...this.props}
                                handleGuardarWorkspace= { this.handleGuardarWorkspace }
                                visibilidadGifCarga = { this.state.visibilidadGifCarga }
                            /> 
                            : 
                            <div>
                                <MenuDeOpcionesDeProyecto {...this.props}/>
                                <PanelDeServicios 
                                    {...this.props}
                                    handleCrearServicioEnElServer = { this.handleCrearServicioEnElServer }
                                />
                            </div>
                        
                            
                    }
                </AreaPrincipalDashboard>
                <FixedFooter 
                    {...this.props}
                />
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
    //console.log(state)
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
        addCrearNuevoServicio:  bindActionCreators(addCrearNuevoServicio, dispatch),
        addVisibilidadPlayground: bindActionCreators(addVisibilidadPlayground, dispatch),
        addCambiarServicioActualmenteSeleccionado:  bindActionCreators(addCambiarServicioActualmenteSeleccionado, dispatch) 
    }
}

 export default  connect( mapStateToProps, mapDispatchToProps )(Dashboard)