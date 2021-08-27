import "./contact.scss";
import textIcon from "../../assets/imgi/4-icon-message-form.png"
import React from 'react';
import {Button, Modal} from 'react-bootstrap';

class Contact extends React.Component {

    constructor(){
        super()
        this.state={
          show:false,
          show2:false
        }
      }
      handleModal(){
        this.setState({show: !this.state.show})
      }
      handleModal2(){
          this.setState({show2: !this.state.show2})
      }

         render(){
            return (
                <div className="contact" id="contactid">
                    <img className="image" src={textIcon} alt="" />
                        <h3 className="text">Contáctenos y obtenga la máxima eficiencia</h3>
                            <div className="formulario">
                                <form className="row g-3 needs-validation" noValidate>
                                    <div className="col-md-5">
                                        <input type="text" className="form-control" id="validationCustom01" placeholder="Nombre" required></input> 
                                    </div>
                                    <div className="col-md-5">
                                            <input type="text" className="form-control" id="validationCustom02" placeholder="Empresa" required></input> 
                                    </div>
                                    <div className="col-md-5">
                                        <input type="text" className="form-control" id="validationCustom03" placeholder="Teléfono" required></input> 
                                    </div>
                                    <div className="col-md-5">
                                        <input type="text" className="form-control" id="validationCustom04" placeholder="Email" required></input>
                                    </div>
                                    <div className="col-md-5">
                                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Mensaje" rows="3"></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
                                    <label  className="form-check-label" for="invalidCheck">
                                        <p className="p" style={{"textAlign":"center","paddingTop":"10px"}}>Acepto las <Button style={{"textDecoration":"none"}} onClick={()=>{this.handleModal()}} variant="link">políticas de privacidad</Button> y <Button style={{"textDecoration":"none"}} onClick={()=>{this.handleModal2()}} variant="link">tratamiento de datos.</Button></p> 
                                    </label>
                                    <div className="invalid-feedback">
                                        Debes aceptar las políticas de privacidad y tratamiento de datos
                                    </div>
                            </div>
                            <div className="boton">
                                <button style={{"color":"white"}} type="button" className="btn btn-warning">Enviar</button>
                            </div> 
                                    <Modal show={this.state.show}>
                                        <Modal.Title style={{"paddingTop":"18px"}}>
                                            <b style={{"fontSize":"18px","marginLeft":"20px"}}>Política de Privacidad</b> 
                                        </Modal.Title>
                                        <Modal.Header>
                                            <p style={{"marginLeft":"4px"}} >La presente Política de Privacidad establece los términos en que IMETRIX SAS usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento.</p> 
                                        </Modal.Header>
                                        <Modal.Body>
                                            <b style={{"color":"orange"}} >Información que es recogida</b>
                                            <p>Nuestro sitio web podrá recoger información personal, por ejemplo: nombre, información de contacto como su dirección de correo. Así mismo cuando sea necesario podrá ser requerida información específica para procesar algún servicio o facturación.</p>
                                            <br />
                                            <b style={{"color":"orange"}} >Uso de la información recogida</b>
                                            <p>Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, y dar a conocer nuestros productos y servicios.  Es posible que sean enviados correos electrónicos a la dirección que usted proporcione y podrán ser cancelados en cualquier momento.</p>
                                            <p>IMETRIX SAS está altamente comprometido para cumplir con el compromiso de mantener su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado.</p>
                                            <br />
                                            <b style={{"color":"orange"}}>Cookies</b>
                                            <p>Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse en su equipo, al aceptar dicho fichero se crea y la cookie sirve entonces para tener información respecto al tráfico web.</p>
                                            <p>Nuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas y su frecuencia. Esta información es empleada únicamente para análisis estadístico y después la información se elimina de forma permanente. Usted puede eliminar las cookies.</p>
                                            <br />
                                            <b style={{"color":"orange"}}>Enlaces a Terceros</b>
                                            <p>Este sitio web no contiene enlaces a otros sitios. Una vez que usted abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos responsables de los términos o privacidad ni de la protección de sus datos en esos otros sitios terceros.</p>
                                            <br />
                                            <b style={{"color":"orange"}}>Control de su información personal</b>
                                            <p>En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web. Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial.</p>
                                            <p>IMETRIX SAS se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento, por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios.</p>
                                        </Modal.Body>
                                        <Modal.Footer style={{"justifyContent":"center"}}>
                                            <Button style={{"color":"white"}} variant="btn btn-warning" onClick={()=>{this.handleModal()}}>ACEPTAR</Button>
                                        </Modal.Footer>
                                    </Modal>

                                    <Modal show={this.state.show2}>
                                        <Modal.Title style={{"paddingTop":"18px"}}>
                                            <b style={{"fontSize":"18px","marginLeft":"20px"}}>Tratamiento de Datos</b> 
                                        </Modal.Title>
                                        <Modal.Body style={{"marginLeft":"6px"}}>
                                            <b style={{"color":"orange"}}>La protección de sus datos es fundamental para nosotros</b>
                                            <br /><br />
                                            <p>En cumplimiento de los previsto en los artículos 15 y 20 de la Constitución Política y conforme a la Ley 1581 de 2012 y al Decreto 1377 de 2013, IMETRIX SAS,  en adelante “IMETRIX”, adopta la siguiente política para tratamiento de datos personales y se considerada como Responsable y/o Encargada del tratamiento de datos personales que almacena y recolecta de sus usuarios en desarrollo de sus actividades comerciales, de ventas de sus productos y servicios; y requiere obtener su autorización para continuar con el tratamiento de sus datos personales conforme a la política de privacidad las cuales están disponibles en www.imetrix.com.co</p>
                                            <br />
                                            <p>Esta información suministrada podrá ser procesada, recolectada, almacenada, usada, circulada, suprimida, actualizada, transmitida y/o transferida de acuerdo y conforme a nuestras políticas de tratamiento y con el fin de continuar desarrollando nuestros servicios para mantenerlo informado acerca nuestros productos y servicios.</p>
                                            <br />
                                            <p>IMETRIX, en los términos dispuestos por el artículo 10 del decreto 1377 de 2013 queda autorizada de manera expresa e inequívoca para mantener y manejar su información, a no ser que usted le manifieste lo contrario de manera directa, expresa o inequívoca,  por escrito, a la dirección de correo electrónico dispuesta para tal efecto soporte@imetrix.com.co o llamando a la línea de atención 57 1 3138336.</p>
                                        </Modal.Body>
                                        <Modal.Footer style={{"justifyContent":"center"}}>
                                            <Button style={{"color":"white"}} variant="btn btn-warning" onClick={()=>{this.handleModal2()}}>ACEPTAR</Button>
                                        </Modal.Footer>
                                    </Modal>
                </div>
                                    
            );
         }   
    }

    export default Contact;

