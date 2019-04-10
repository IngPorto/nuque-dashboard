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

 export default class extends React.Component {
    render(){
        return (
            <div className="mainContainerDashboard">
                <div >
                    { /* Icono, botón nuevo proyecto, tus proyectos, buscador */}
                    <BarraLateral />
                    <AreaPrincipalDashboard>
                        { /* Nombre del usuario , buscador de servicios */}
                        <MenuGlobal />
                        { /* Descripción del proyecto, botón importar servicio */}
                        <MenuDeOpcionesDeProyecto />
                        { /* 1. botón nuevo servicio, crea tu primer servicio. 2. todos los servcios */}
                        <PanelDeServicios />
                    </AreaPrincipalDashboard>
                </div>
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