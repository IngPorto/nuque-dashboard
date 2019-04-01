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

 export default class extends React.Component {
    render(){
        return (
            <div className="mainContainerDashboard">
                <div >
                    { /* Icono, botón nuevo proyecto, tus proyectos, buscador */}
                    <BarraLateral />
                    { /* Nombre del usuario , buscador de servicios */}
                    <MenuGlobal />
                    { /* Descripción del proyecto, botón importar servicio */}
                    <MenuDeOpcionesDeProyecto />
                    { /* 1. botón nuevo servicio, crea tu primer servicio. 2. todos los servcios */}
                    <PanelDeServicios />
                </div>
                <style jsx>{`
                    .mainContainerDashboard {
                        width: 100%;
                    }
                `}</style>
            </div>
        )
    }
 }