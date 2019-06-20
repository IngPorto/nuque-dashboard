/**
 * Aquí se integra con Blockly
 */
import Head from 'next/head';
import Typography from '@material-ui/core/Typography';
import Save from '@material-ui/icons/Save';

class Playground extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        /*
        let workspace = Blockly.inject(
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
        );
        //workspace.clear();
        */
        //console.log(workspace)
        //console.log(Blockly)
    }

    handleMigaDePanRegresarAPanelDeServicios = () => {
        this.props.addVisibilidadPlayground( false )
    }

    render(){
        const nombreServicio = this.props.initalState.servicios[this.props.initalState.servicioActualmenteSeleccionado].nombre
        const nombreProyecto = this.props.initalState.proyectos[this.props.initalState.proyectoActualmenteSeleccionado].nombre
        return(
            <div className="playground">
                <div className="MenuDeOpcionesDeServicio">
                    <div style={{
                        height: 'fit-content',
                        width: '450px',
                        overflow: 'hidden',
                        margin: 'auto 0'
                    }}>
                        <Typography onClick={ this.handleMigaDePanRegresarAPanelDeServicios } variant="body1" noWrap="true" style={{
                            height: 'fit-content',
                            width: 'fit-content',
                            color: '#3f6ba9',
                            textDecoration: 'underline',
                            float: 'left',
                            cursor: 'pointer'
                        }}>
                            {
                                nombreProyecto
                            }
                        </Typography>
                        <Typography variant="body1" noWrap="true" style={{
                            height: 'fit-content',
                            width: 'fit-content',
                            color: '#3f6ba9',
                            float: 'left'
                        }}>
                            {
                                ' > ' + nombreServicio
                            }
                        </Typography>
                    </div>
                    <button 
                        className="btnGuardarWorkspace"
                        onClick={ this.props.handleGuardarWorkspace }
                    >
                        <Save style={{
                            color:'white',
                            float:'left',
                            height: '20px',
                            marginLeft: '5px'
                        }}/>
                        <Typography variant="body1" style={{
                            color:'white',
                            fontSize: '10pt',
                            height: 'fit-content',
                            float:'left'
                        }}>
                            Guardar
                        </Typography>
                    </button>
                </div>

                <div>
                    <div ref="blocklyDiv" id="blocklyDiv" style={{ height: 'calc(100vh - 125px)', width: '100vw - 175px)'}}></div>
                </div>

                <xml id="toolbox" style={{display: 'none'}}>
                    <category name="Lógica" colour="%{BKY_LOGIC_HUE}">
                    <block type="controls_if"></block>
                    <block type="logic_compare"></block>
                    <block type="logic_operation"></block>
                    <block type="logic_negate"></block>
                    <block type="logic_boolean"></block>
                    <block type="logic_null"></block>
                    <block type="logic_ternary"></block>
                    </category>
                    <category name="Ciclos" colour="%{BKY_LOOPS_HUE}">
                    <block type="controls_repeat_ext">
                        <value name="TIMES">
                        <shadow type="math_number">
                            <field name="NUM">10</field>
                        </shadow>
                        </value>
                    </block>
                    <block type="controls_whileUntil"></block>
                    <block type="controls_for">
                        <value name="FROM">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                        </value>
                        <value name="TO">
                        <shadow type="math_number">
                            <field name="NUM">10</field>
                        </shadow>
                        </value>
                        <value name="BY">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                        </value>
                    </block>
                    <block type="controls_forEach"></block>
                    <block type="controls_flow_statements"></block>
                    </category>
                    <category name="Matemáticas" colour="%{BKY_MATH_HUE}">
                    <block type="math_number">
                        <field name="NUM">123</field>
                    </block>
                    <block type="math_arithmetic">
                        <value name="A">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                        </value>
                        <value name="B">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                        </value>
                    </block>
                    <block type="math_single">
                        <value name="NUM">
                        <shadow type="math_number">
                            <field name="NUM">9</field>
                        </shadow>
                        </value>
                    </block>
                    <block type="math_trig">
                        <value name="NUM">
                        <shadow type="math_number">
                            <field name="NUM">45</field>
                        </shadow>
                        </value>
                    </block>
                    <block type="math_constant"></block>
                    <block type="math_number_property">
                        <value name="NUMBER_TO_CHECK">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                        </value>
                    </block>
                    <block type="math_round">
                        <value name="NUM">
                        <shadow type="math_number">
                            <field name="NUM">3.1</field>
                        </shadow>
                        </value>
                    </block>
                    <block type="math_on_list"></block>
                    <block type="math_modulo">
                        <value name="DIVIDEND">
                        <shadow type="math_number">
                            <field name="NUM">64</field>
                        </shadow>
                        </value>
                        <value name="DIVISOR">
                        <shadow type="math_number">
                            <field name="NUM">10</field>
                        </shadow>
                        </value>
                    </block>
                    <block type="math_constrain">
                        <value name="VALUE">
                        <shadow type="math_number">
                            <field name="NUM">50</field>
                        </shadow>
                        </value>
                        <value name="LOW">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                        </value>
                        <value name="HIGH">
                        <shadow type="math_number">
                            <field name="NUM">100</field>
                        </shadow>
                        </value>
                    </block>
                    <block type="math_random_int">
                        <value name="FROM">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                        </value>
                        <value name="TO">
                        <shadow type="math_number">
                            <field name="NUM">100</field>
                        </shadow>
                        </value>
                    </block>
                    <block type="math_random_float"></block>
                    <block type="math_atan2">
                        <value name="X">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                        </value>
                        <value name="Y">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                        </value>
                    </block>
                    </category>
                    <category name="Texto" colour="%{BKY_TEXTS_HUE}">
                    <block type="console_log"></block>
                    <block type="text"></block>
                    <block type="text_join"></block>
                    <block type="text_append">
                        <value name="TEXT">
                        <shadow type="text"></shadow>
                        </value>
                    </block>
                    <block type="text_length">
                        <value name="VALUE">
                        <shadow type="text">
                            <field name="TEXT">abc</field>
                        </shadow>
                        </value>
                    </block>
                    <block type="text_isEmpty">
                        <value name="VALUE">
                        <shadow type="text">
                            <field name="TEXT"></field>
                        </shadow>
                        </value>
                    </block>
                    <block type="text_indexOf">
                        <value name="VALUE">
                        <block type="variables_get">
                            <field name="VAR">{'Texto'}</field>
                        </block>
                        </value>
                        <value name="FIND">
                        <shadow type="text">
                            <field name="TEXT">abc</field>
                        </shadow>
                        </value>
                    </block>
                    <block type="text_charAt">
                        <value name="VALUE">
                        <block type="variables_get">
                            <field name="VAR">{'Texto'}</field>
                        </block>
                        </value>
                    </block>
                    <block type="text_getSubstring">
                        <value name="STRING">
                        <block type="variables_get">
                            <field name="VAR">{'Texto'}</field>
                        </block>
                        </value>
                    </block>
                    <block type="text_changeCase">
                        <value name="TEXT">
                        <shadow type="text">
                            <field name="TEXT">abc</field>
                        </shadow>
                        </value>
                    </block>
                    <block type="text_trim">
                        <value name="TEXT">
                        <shadow type="text">
                            <field name="TEXT">abc</field>
                        </shadow>
                        </value>
                    </block>
                    <block type="text_print">
                        <value name="TEXT">
                        <shadow type="text">
                            <field name="TEXT">abc</field>
                        </shadow>
                        </value>
                    </block>
                    <block type="text_prompt_ext">
                        <value name="TEXT">
                        <shadow type="text">
                            <field name="TEXT">abc</field>
                        </shadow>
                        </value>
                    </block>
                    </category>
                    <category name="Listas" colour="%{BKY_LISTS_HUE}">
                    <block type="lists_create_with">
                        <mutation items="0"></mutation>
                    </block>
                    <block type="lists_create_with"></block>
                    <block type="lists_repeat">
                        <value name="NUM">
                        <shadow type="math_number">
                            <field name="NUM">5</field>
                        </shadow>
                        </value>
                    </block>
                    <block type="lists_length"></block>
                    <block type="lists_isEmpty"></block>
                    <block type="lists_indexOf">
                        <value name="VALUE">
                        <block type="variables_get">
                            <field name="VAR">{'Lista'}</field>
                        </block>
                        </value>
                    </block>
                    <block type="lists_getIndex">
                        <value name="VALUE">
                        <block type="variables_get">
                            <field name="VAR">{'Lista'}</field>
                        </block>
                        </value>
                    </block>
                    <block type="lists_setIndex">
                        <value name="LIST">
                        <block type="variables_get">
                            <field name="VAR">{'Lista'}</field>
                        </block>
                        </value>
                    </block>
                    <block type="lists_getSublist">
                        <value name="LIST">
                        <block type="variables_get">
                            <field name="VAR">{'Lista'}</field>
                        </block>
                        </value>
                    </block>
                    <block type="lists_split">
                        <value name="DELIM">
                        <shadow type="text">
                            <field name="TEXT">,</field>
                        </shadow>
                        </value>
                    </block>
                    <block type="lists_sort"></block>
                    </category>
                    <sep></sep>
                    <category name="Variables" colour="%{BKY_VARIABLES_HUE}" custom="VARIABLE"></category>
                    <category name="Funciones" colour="%{BKY_PROCEDURES_HUE}" custom="PROCEDURE"></category>
                </xml>

                <style jsx>{`
                    #blocklyDiv {
                        display: block;
                    }
                    .MenuDeOpcionesDeServicio {
                        display: flex;
                        justify-content: space-between;
                        padding: 0 16px;
                        position: relative;
                        top: -4px;
                    }
                    .btnGuardarWorkspace {
                        width: 100px;
                        height: 30px;
                        background-color: #3955ff;
                        color: white;
                        border: none;
                    }
                    .btnGuardarWorkspace:hover {
                        cursor: pointer;
                        background: #000000;
                    }
                    .btnGuardarWorkspace:active {
                        position:relative;
                        top:1px;
                    }
                `}</style>
            </div>
        )
    }
}
export default Playground