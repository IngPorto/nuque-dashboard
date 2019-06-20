/**
 * Barra inferior para búsquedas y desplegue de información complementaria y 
 * relacionada la interfaz que se muestra en el momento
 */
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';

class FixedFooter extends React.Component{
    render(){
        return(
            <div className="FixedFooter">
                <div className="contenedorBuscadorProyectos">
                    <Search className="" style={{
                        float: 'left',
                        color: '#4f4f4f',
                        width: '15%',
                        marginTop: '27px'
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
                `}</style>
            </div>
        )
    }
}
export default FixedFooter