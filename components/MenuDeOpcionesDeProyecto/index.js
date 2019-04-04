/**
 * Descripción del proyecto, botón importar servicio
 */
import Create from '@material-ui/icons/Create';
import MoveToInbox from '@material-ui/icons/MoveToInbox';
import Typography from '@material-ui/core/Typography';

class index_MenuDeOpcionesDeProyecto extends React.Component {
    render(){
        return(
            <div className="MenuDeOpcionesDeProyecto">
                <div>
                    <button className="btnEditarDescripcion"><Create /></button>
                </div>
                { 'Nueva descripción del proyecto' }
                <div>
                    <button className=""><MoveToInbox /> Importar servicio</button>
                </div>
                <Typography variant="body1" style={{
                        color:'#393939',
                        fontSize: '10pt',
                        fontWeight: '500',
                        float: 'left',
                        marginLeft: '15px'
                    }}>
                    Tus servicios
                </Typography>
                <style jsx>{`
                    .MenuDeOpcionesDeProyecto {
                        width: 100%;
                    }
                    .btnEditarDescripcion {
                        height: 30px;
                        width: 30px;
                        border: #cfd4d9;
                        text-align: center;
                        color: #2f2f2f;
                    }
                `}</style>
            </div>
        )
    }
}
export default index_MenuDeOpcionesDeProyecto