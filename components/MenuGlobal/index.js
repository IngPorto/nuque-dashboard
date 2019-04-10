/**
 * Nombre del usuario , buscador de servicios
 */
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';

class index_MenuGlobal extends React.Component {
    render(){
        return (
            <div className="MenuGlobal">
                <div className="contenedorOpcionesDeMenu">
                    {' '}
                </div>
                <div className="contenedorUsuarioMenu">
                    <Typography variant="body1" style={{
                        width:'fit-content',
                        float: 'left',
                        margin: '6px 10px'
                    }}>
                        David Portocarrero Caicedo
                    </Typography>
                    <img className="imgUserMenu" src="static/david_porto.jpg" alt="" />
                    <KeyboardArrowDown className="" style={{
                        color: '#8f8f8f'
                    }}/>
                </div>
                <div className="separadorMenuGlobal">
                    <hr style={{
                        opacity: '0.3',
                        width: '100%'
                    }}/>
                </div>
                <style jsx>{`
                    .MenuGlobal {
                        /* height: 34px; */
                        /*float: left;*/
                        width: 100%;
                        margin-top: 15px;
                    }
                    .contenedorOpcionesDeMenu {
                        width: fit-content;
                        height: fit-content;
                        float: left;
                    }
                    .contenedorUsuarioMenu {
                        width: fit-content;
                        float: right;
                        margin: 0 10px 10px 0;
                    }
                    .imgUserMenu {
                        height: 30px;
                        clip-path: circle(15px at center);
                    }
                    .separadorMenuGlobal {
                        width: 100%;
                    }
                `}</style>
            </div>
        )
    }
}
export default index_MenuGlobal