import "./services.scss";
import vectorimg from "../../assets/imgi/5-speech-analytics-vector.png"
import iconvoice from "../../assets/imgi/3-solucion-icon-voice.png"
import tituloimg from "../../assets/imgi/5-speech-analytics-titulo.png"
import speechicon from "../../assets/imgi/5-speech-analytics-icon-1.png";
import iconAnalytics from "../../assets/imgi/5-speech-analytics-icon-2.png";
import iconAnalytics3 from "../../assets/imgi/5-speech-analytics-icon-3.png";
import iconAnalytics4 from "../../assets/imgi/5-speech-analytics-icon-4.png";
import iconAnalytics5 from "../../assets/imgi/5-speech-analytics-icon-5.png";
import iconAnalytics6 from "../../assets/imgi/5-speech-analytics-icon-6.png";
import iconAnalytics7 from "../../assets/imgi/5-speech-analytics-icon-7.png";
import iconAnalytics8 from "../../assets/imgi/5-speech-analytics-icon-8.png";
import iconAnalytics9 from "../../assets/imgi/5-speech-analytics-icon-9.png";
import iconAnalytics10 from "../../assets/imgi/5-speech-analytics-icon-10.png";
import iconAnalytics11 from "../../assets/imgi/5-speech-analytics-icon-11.png";
import iconAnalytics12 from "../../assets/imgi/5-speech-analytics-icon-12.png";
import iconAnalytics13 from "../../assets/imgi/5-speech-analytics-icon-13.png";
import iconAnalytics14 from "../../assets/imgi/5-speech-analytics-icon-14.png";


export default function Services() {
    return (
        <div className="services" id="servicesid">
            <div class="home-waves" id="feature">
                <div className="container">
                        <div className="home-section home-feature mx-auto pt-5 text-center">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-12 col-md-6 text-left mr-5">
                                <img style={{"height":"2.5cm","paddingRight":"16cm"}} className="icon" src={iconvoice} alt="" />
                                <h2 style={{"color":"orange", "font-weight":"700", "textAlign":"left","height":"110px"}} className="mt-3">iMetrix Speech <br /> Analytics - iSA</h2>
                                <p style={{"textAlign":"left"}} ><span style={{"color":"orange"}}>iSA</span> transcribe llamadas e interpreta conversaciones habladas y chats en forma masiva y en poco tiempo; permite automatizar el proceso de auditoria de calidad de las reglas comerciales de sus agentes con los clientes.</p>
                                <p style={{"textAlign":"left"}} className="mt-3">Es una solución para empresas con negociaciones telefónicas grabadas, televentas, call centers o centros de contacto.</p>
                                </div>
                                <div className="col-12 col-md-6">
                                <img style={{"height":"8cm","paddingRight":"40px"}} src={vectorimg} alt=""/>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="home-section home-feature mx-auto pt-4 text-center">
                    <div className="titulocontainer">
                        <img src={tituloimg} alt=""/>
                    </div>
                 <div className="container2">
                 <div className="feature-card col d-flex">
                    <div className="card mb-4" style={{"max-width": "980px", "alignItems":"center"}} >
                        <div  className="row g-0">
                            <div style={{"background":"rgb(207, 207, 207)"}} className="cardbody">
                            <div className="col-md-8">
                                <div className="card-body">
                                <span style={{"paddingLeft":"8cm", "color":"orange"}}>1</span>
                                <h3 style={{"color":"rgb(105, 105, 105)","font-weight":"600","paddingLeft":"8cm","height":"35px"}} className="card-text">Recolección</h3>
                                <p style={{"paddingLeft":"8cm", "font-size":"18px","font-weight":"500"}} className="card-text"><small class="text-muted">Centros de contacto generan archivos de voz y texto y guardan conversaciones con sus clientes</small></p>
                                </div>
                            </div>
                            </div>
                            <div style={{"paddingLeft":"1cm"}} className="col-md-12">
                                <img src={speechicon} className="img-fluid rounded-start" alt=""/>
                                <img src={speechicon} className="img-fluid rounded-start" alt=""/>
                                <img src={speechicon} className="img-fluid rounded-start" alt=""/>
                                <img src={speechicon} className="img-fluid rounded-start" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                </div>   
                <div className="container2">
                <div className="feature-card col d-flex">
                    <div className="card mb-4" style={{"max-width": "980px", "alignItems":"center"}} >
                        <div  className="row g-0">
                            <div style={{"background":"rgb(150, 150, 150)"}} className="cardbody">
                            <div className="col-md-8">
                                <div className="card-body">
                                <span style={{"paddingLeft":"8cm", "color":"orange"}}>2</span>
                                <h3 style={{"color":"white","font-weight":"600","paddingLeft":"8cm","height":"35px"}} className="card-text">Procesamiento</h3>
                                <p style={{"paddingLeft":"8cm", "font-size":"18px","font-weight":"500", "color":"rgb(209, 207, 207)"}} className="card-text"><span style={{"color":"orange"}}>ISA</span> procesa el 100% de las llamadas e identifica los parámetros de voz y el contenido hablado por los agentes con sus clientes</p>
                                </div>
                            </div>
                            </div>
                            <div className="feature-card row d-flex">
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <img src={iconAnalytics} className="img-fluid rounded-start" alt=""/>
                                    <h4 style={{"font-size":"15px","color":"orange","paddingTop":"0.5cm","height":"40px"}}>Conversaciones de Voz</h4>
                                    <p className="card-text">Audios de llamadas guardadas con autorización del cliente</p>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <img src={iconAnalytics3} className="img-fluid rounded-start" alt=""/>
                                    <h4 style={{"font-size":"15px","color":"orange","paddingTop":"0.5cm","height":"40px"}}>iSA Text to Voice</h4>
                                    <p className="card-text">ISA convierte todas las llamadas de voz a texto</p>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <img src={iconAnalytics4} className="img-fluid rounded-start" alt=""/>
                                    <h4 style={{"font-size":"15px","color":"orange","paddingTop":"0.5cm","height":"40px"}}>Reglas Comerciales</h4>
                                    <p className="card-text">Cuenta con un algoritmo de comparación para la comprobación de cada regla comercial analizada</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="container2">
                <div className="feature-card col d-flex">
                    <div className="card mb-4" style={{"max-width": "980px", "alignItems":"center"}} >
                        <div  className="row g-0">
                            <div style={{"background":"rgb(97, 95, 95)"}} className="cardbody">
                            <div className="col-md-8">
                                <div className="card-body">
                                <span style={{"paddingLeft":"8cm", "color":"orange"}}>3</span>
                                <h3 style={{"color":"orange","font-weight":"600","paddingLeft":"8cm","height":"35px"}} className="card-text">Análisis</h3>
                                <p style={{"paddingLeft":"8cm", "font-size":"18px","font-weight":"500", "color":"rgb(209, 207, 207)"}} className="card-text">Cada Regla comercial genera una métrica analizable y dentro del modelo de <span style={{"color":"orange"}}>ISA</span></p>
                                </div>
                            </div>
                            </div>
                            <div className="feature-card row flex">
                            <div className="card-content text-center col-16 col-sm-16 col-md-4 col-lg-8 row">
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <img src={iconAnalytics5} alt=""/>
                                    <h4 style={{"font-size":"15px","color":"orange","paddingTop":"0.5cm","height":"40px"}}>Identificación</h4>
                                    <p className="card-text">del Gestor o Analista</p>
                                </div>
                                <div className="col-16 col-sm-6 col-md-6 col-lg-4">
                                    <img src={iconAnalytics6} alt=""/>
                                    <h4 style={{"font-size":"15px","color":"orange","paddingTop":"0.5cm","height":"40px"}}>Tipo de Operación</h4>
                                    <p className="card-text">Compra / Venta</p>
                                </div>
                                <div className="col-16 col-sm-6 col-md-6 col-lg-4">
                                    <img src={iconAnalytics7} alt=""/>
                                    <h4 style={{"font-size":"15px","color":"orange","paddingTop":"0.5cm","height":"40px"}}>Cantidad</h4>
                                    <p className="card-text">Valor Nominal</p>
                                </div>
                                <div className="col-16 col-sm-6 col-md-6 col-lg-4">
                                    <img src={iconAnalytics8} alt=""/>
                                    <h4 style={{"font-size":"15px","color":"orange","paddingTop":"0.5cm","height":"40px"}}>Tipo de Orden</h4>
                                    <p className="card-text">Límite / Condicional / Mercado</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="container2">
                <div className="feature-card col d-flex">
                    <div className="card mb-4" style={{"max-width": "980px", "alignItems":"center"}} >
                        <div  className="row g-0">
                            <div style={{"background":"orange"}} className="cardbody">
                            <div className="col-md-8">
                                <div className="card-body">
                                <span style={{"paddingLeft":"8cm", "color":"black"}}>4</span>
                                <h3 style={{"color":"black","font-weight":"600","paddingLeft":"8cm","height":"35px"}} className="card-text">Resultados</h3>
                                <p style={{"paddingLeft":"8cm", "font-size":"18px","font-weight":"500", "color":"white"}} className="card-text"><span style={{"color":"black"}}>ISA</span> verifica cada llamada convertida en texto, identifica las reglas comerciales y perfilamiento básico del agente</p>
                                </div>
                            </div>
                            </div>
                            <div style={{"paddingLeft":"1cm"}} className="card-content text-center col-16 col-sm-16 col-md-4 col-lg-12 row">
                                <div className="col-16 col-sm-6 col-md-6 col-lg-4">
                                    <img style={{"paddingTop":"0.5cm"}} src={iconAnalytics9} alt=""/>
                                    <p style={{"paddingTop":"0.4cm","font-weight":"600"}} className="card-text">Emociones</p>
                                </div>
                                <div className="col-16 col-sm-6 col-md-6 col-lg-4">
                                    <img style={{"paddingTop":"0.5cm"}} src={iconAnalytics10} alt=""/>
                                    <p style={{"paddingTop":"0.4cm","font-weight":"600"}} className="card-text">Patrones de Comportamiento</p>
                                </div>
                                <div className="col-16 col-sm-6 col-md-6 col-lg-4">
                                    <img style={{"paddingTop":"0.5cm"}} src={iconAnalytics11} alt=""/>
                                    <p style={{"paddingTop":"0.4cm","font-weight":"600"}} className="card-text">Predicción de Riesgo</p>
                                </div>
                                <div className="col-16 col-sm-6 col-md-6 col-lg-4">
                                    <img style={{"paddingTop":"0.5cm"}} src={iconAnalytics12} alt=""/>
                                    <p style={{"paddingTop":"0.4cm","font-weight":"600"}} className="card-text">Problemas en el servicio</p>
                                </div>
                                <div className="col-16 col-sm-6 col-md-6 col-lg-4">
                                    <img style={{"paddingTop":"0.5cm"}} src={iconAnalytics13} alt=""/>
                                    <p style={{"paddingTop":"0.4cm","font-weight":"600"}} className="card-text">Preferencias del cliente</p>
                                </div>
                                <div className="col-16 col-sm-6 col-md-6 col-lg-4">
                                    <img style={{"paddingTop":"0.5cm"}} src={iconAnalytics14} alt=""/>
                                    <p style={{"paddingTop":"0.4cm","font-weight":"600"}} className="card-text">Mensajes de marca</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>   
            </div>
                    
        </div>
        
    )
}
