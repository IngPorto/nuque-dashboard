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

        //:::::::::::::::::Construyo mis propios bloques:::::::::::::::::::
        //______Web_______
        /**
         * Console.log
         */
        Blockly.Blocks['console_log'] = {
            init: function() {
                this.appendValueInput("NAME")
                    .setCheck(null)
                    .appendField("Mostrar en consola");
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setColour(160);
                this.setTooltip("Permite imprimir por consola del servidor.");
                this.setHelpUrl("");
            }
        };
        Blockly.JavaScript['console_log'] = function(block) {
            var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
            // TODO: Assemble JavaScript into code variable.
            var code = 'console.log(' + value_name + ');';
            return code;
        };

        /**
         * Params request
         */
        Blockly.Blocks['parametro_get'] = {
            init: function() {
              this.appendDummyInput()
                  .appendField("Parámetro de entrada")
                  .appendField(new Blockly.FieldTextInput("nombre"), "NAME");
              this.setOutput(true, null);
              this.setColour(300);
           this.setTooltip("Acceso a el parámetro de entrada disponible en la URL y retorna el valor asignado");
           this.setHelpUrl("https://support.google.com/google-ads/answer/6277564?hl=es-419");
            }
        };
        Blockly.JavaScript['parametro_get'] = function(block) {
            var text_name = block.getFieldValue('NAME');
            // TODO: Assemble JavaScript into code variable.
            var code = 'req.query.'+text_name;
            // TODO: Change ORDER_NONE to the correct strength.
            return [code, Blockly.JavaScript.ORDER_ATOMIC];
        };
        /**
         * IP request
         */
        Blockly.Blocks['request_ip'] = {
            init: function() {
              this.appendDummyInput()
                  .appendField("IP del cliente");
              this.setOutput(true, null);
              this.setColour(300);
           this.setTooltip("Dirección IP de la solicitud");
           this.setHelpUrl("https://expressjs.com/es/api.html#req.ip");
            }
        };
        Blockly.JavaScript['request_ip'] = function(block) {
            // TODO: Assemble JavaScript into code variable.
            var code = 'req.ip;\n';
            // TODO: Change ORDER_NONE to the correct strength.
            return [code, Blockly.JavaScript.ORDER_NONE];
          };
        /**
         * Content-Type request acepted
         */
        Blockly.Blocks['request_content_type'] = {
            init: function() {
              this.appendDummyInput()
                  .appendField("Tipo de parámetro de entrada  aceptado")
                  .appendField(new Blockly.FieldDropdown([["html","html"], ["json","json"], ["xml","xml"], ["text/plain","text/plain"], ["text/csv","text/csv"]]), "NAME");
              this.setPreviousStatement(true, null);
              this.setNextStatement(true, null);
              this.setColour(300);
           this.setTooltip("Verifica el tipo de contenido proveniente en la consulta HTTP.");
           this.setHelpUrl("https://developer.mozilla.org/es/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Lista_completa_de_tipos_MIME");
            }
          };
        Blockly.JavaScript['request_content_type'] = function(block) {
            var dropdown_name = block.getFieldValue('NAME');
            // TODO: Assemble JavaScript into code variable.
            var code = 'req.accepts(\''+ dropdown_name +'\');\n';
            return code;
          };
        /**
         * Send response
         */
        Blockly.Blocks['response_send'] = {
            init: function() {
              this.appendValueInput("NAME")
                  .setCheck(null)
                  .appendField("Responder con");
              this.setPreviousStatement(true, null);
              this.setNextStatement(true, null);
              this.setColour(300);
           this.setTooltip("Enviar una respuesta HTTP");
           this.setHelpUrl("https://expressjs.com/es/api.html#res.send");
            }
          };
        Blockly.JavaScript['response_send'] = function(block) {
            var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
            // TODO: Assemble JavaScript into code variable.
            var code = 'res.send('+ value_name +');\n';
            return code;
          };
        /**
         * Redirect response
         */
        Blockly.Blocks['response_redirect'] = {
            init: function() {
              this.appendValueInput("NAME")
                  .setCheck(null)
                  .appendField("Ir a la URL");
              this.setPreviousStatement(true, null);
              this.setColour(300);
           this.setTooltip("Redireccionar a una URL específica con un status \"302 Found\" por defecto");
           this.setHelpUrl("https://expressjs.com/es/api.html#res.redirect");
            }
          };
        Blockly.JavaScript['response_redirect'] = function(block) {
            var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
            // TODO: Assemble JavaScript into code variable.
            var code = 'res.redirect('+ value_name +');\n';
            return code;
          };
        /**
         * Status response
         */
        Blockly.Blocks['response_status'] = {
            init: function() {
              this.appendDummyInput()
                  .appendField("Estado de la petición")
                  .appendField(new Blockly.FieldDropdown([["200","200"], ["302","302"], ["400","400"], ["404","404"]]), "NAME");
              this.setPreviousStatement(true, null);
              this.setNextStatement(true, null);
              this.setColour(300);
           this.setTooltip("Asignar el estado HTTP de la petición");
           this.setHelpUrl("https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml");
            }
        };
        Blockly.JavaScript['response_status'] = function(block) {
            var dropdown_name = block.getFieldValue('NAME');
            // TODO: Assemble JavaScript into code variable.
            var code = 'res.status('+ dropdown_name +');\n';
            return code;
        };
        /**
         * Content-Type response
         */
        Blockly.Blocks['response_content_type'] = {
            init: function() {
              this.appendDummyInput()
                  .appendField("Tipo de respuesta")
                  .appendField(new Blockly.FieldDropdown([["html","html"], ["json","json"], ["xml","xml"], ["text/plain","text/plain"], ["text/csv","text/csv"]]), "NAME");
              this.setPreviousStatement(true, null);
              this.setNextStatement(true, null);
              this.setColour(300);
           this.setTooltip("Asignar tipo de contenido en la cabecera HTTP de la respuesta.");
           this.setHelpUrl("https://developer.mozilla.org/es/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Lista_completa_de_tipos_MIME");
            }
          };
        Blockly.JavaScript['response_content_type'] = function(block) {
            var dropdown_name = block.getFieldValue('NAME');
            // TODO: Assemble JavaScript into code variable.
            var code = 'res.type(\''+ dropdown_name +'\');\n';
            return code;
          };
        
        // ___________Objects____________
        /**
         * Create object
         */
        Blockly.Blocks['object_create'] = {
            init: function() {
              this.appendDummyInput()
                  .appendField("un nuevo objeto vacío");
              this.setOutput(true, null); //"Object");
              this.setColour(300);
           this.setTooltip("Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor");
           this.setHelpUrl("https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Trabajando_con_objectos");
            }
          };
        Blockly.JavaScript['object_create'] = function(block) {
            // TODO: Assemble JavaScript into code variable.
            var code = '{}';
            // TODO: Change ORDER_NONE to the correct strength.
            return [code, Blockly.JavaScript.ORDER_ATOMIC];
          };
        /**
         * Object Length
         */
        Blockly.Blocks['object_length'] = {
            init: function() {
              this.appendValueInput("NAME")
                  .setCheck("Object")
                  .appendField("tamaño del objeto");
              this.setOutput(true, "Number");
              this.setColour(300);
           this.setTooltip("Entrega la cantidad de hijos directos tiene el objeto");
            }
          };
          Blockly.JavaScript['object_length'] = function(block) {
            var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
            // TODO: Assemble JavaScript into code variable.
            var code = 'Object.keys('+ value_name +').length';
            // TODO: Change ORDER_NONE to the correct strength.
            return [code, Blockly.JavaScript.ORDER_NONE];
          };
        /**
         * Set value y key
         */
        Blockly.Blocks['object_key_value'] = {
            init: function() {
              this.appendDummyInput()
                  .appendField("Asignar al objeto")
                  .appendField(new Blockly.FieldVariable("mi_objeto"), "OBJETO");
              this.appendValueInput("CLAVE")
                  .setCheck(["String", "Number"])
                  .appendField("la clave");
              this.appendValueInput("VALOR")
                  .setCheck(null)
                  .appendField("y el valor");
              this.setInputsInline(true);
              this.setPreviousStatement(true, null);
              this.setNextStatement(true, null);
              this.setColour(300);
           this.setTooltip("Asignar un nuevo elemento al objeto");
           this.setHelpUrl("https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Trabajando_con_objectos");
            }
          };
        Blockly.JavaScript['object_key_value'] = function(block) {
            var variable_objeto = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJETO'), Blockly.Variables.NAME_TYPE);
            var value_clave = Blockly.JavaScript.valueToCode(block, 'CLAVE', Blockly.JavaScript.ORDER_ATOMIC);
            var value_valor = Blockly.JavaScript.valueToCode(block, 'VALOR', Blockly.JavaScript.ORDER_ATOMIC);
            // TODO: Assemble JavaScript into code variable.
            //value_clave = value_clave.replace("'","");

            var code = variable_objeto + '[' + value_clave + '] = ' + value_valor +';\n';
            return code;
          };
        /**
         * Get value from object
         */
        Blockly.Blocks['object_get_value'] = {
            init: function() {
              this.appendDummyInput()
                  .appendField("Obtener del objeto ")
                  .appendField(new Blockly.FieldVariable("mi_objeto"), "OBJETO");
              this.appendValueInput("CLAVE")
                  .setCheck(["String", "Number"])
                  .appendField("el valor con la clave");
              this.setInputsInline(true);
              this.setPreviousStatement(true, null);
              this.setNextStatement(true, null);
              this.setColour(300);
           this.setTooltip("Obtener el valor con una clave de un objeto");
           this.setHelpUrl("https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Trabajando_con_objectos");
            }
          };
        Blockly.JavaScript['object_get_value'] = function(block) {
            var variable_objeto = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJETO'), Blockly.Variables.NAME_TYPE);
            var value_clave = Blockly.JavaScript.valueToCode(block, 'CLAVE', Blockly.JavaScript.ORDER_ATOMIC);
            // TODO: Assemble JavaScript into code variable.
            var code = variable_objeto + '.'+ value_clave +';\n';
            return code;
          };

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
                    {
                        this.props.visibilidadGifCarga &&
                        <img className="gif_carga" src="/static/micro_load.gif" />
                    }
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
                    <div ref="blocklyDiv" id="blocklyDiv" style={{ height: 'calc(100vh - 154px)', width: '100vw - 175px)'}}></div>
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
                    <category name="Objetos" colour="300">
                        <block type="object_create"></block>
                        <block type="object_key_value"></block>
                        <block type="object_get_value"></block>
                        <block type="object_length"></block>
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
                    <sep></sep>
                    <category name="Web" colour="300">
                        <block type="parametro_get"></block>
                        <block type="request_ip"></block>
                        <block type="request_content_type"></block>
                        <block type="response_send"></block>
                        <block type="response_redirect"></block>
                        <block type="response_status"></block>
                        <block type="response_content_type"></block>
                    </category>
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
                    .gif_carga {
                        height: 47px;
                        position: absolute;
                        top: -9px;
                        right: 102px;
                        opacity: 0.5;
                    }
                `}</style>
            </div>
        )
    }
}
export default Playground