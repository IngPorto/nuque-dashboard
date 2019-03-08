/**
 * Landing page
 */
import NavegadorGlobal from '../components/NavegadorGlobal'
export default class extends React.Component {
    render(){
        return <div>
            <NavegadorGlobal />
            hola
            {
                /*
                <Portada />
                <SeccionQueEs />
                <SeccionComoFunciona />
                <SeccionEquipo />
                <SeccionContacto />
                */
            }

            <style jsx global>{`
                
            `}</style>
        </div>
    }
}