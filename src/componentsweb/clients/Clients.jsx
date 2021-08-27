import "./clients.scss";
import {Carousel, Card} from 'react-bootstrap';
import igsimg from "../../assets/imgi/igs.png";
import menteimg from "../../assets/imgi/7-cliente-mente-logo_footer.png";
import serfincoimg from "../../assets/imgi/7-cliente-ultraserfinco-logo_footer.png";
import identimg from "../../assets/imgi/IDENTIANPNG.png";
import imetriximg from "../../assets/imgl/7-logotipo-iMetrix-footer.png";
import partnerimg from "../../assets/imgi/7-partner-footer.png";
import miembroimg from "../../assets/imgi/MiembroANDI.png";
import {LinkedIn, YouTube} from "@material-ui/icons";



export default function Clients() {
    return (
        <div className="clients" id="clientsid">
            <div className="container">
                <Card className="tarjeta">
                    <Card.Body>
                        <div className="wrapper">
                            <p className="texto" >Nuestros Clientes</p>
                            <Carousel controls={false} fade={true} touch={true}>
                                <Carousel.Item interval={2000}>
                                    <img className="imagen" src={igsimg} alt=""/>
                                    <img className="imagen" src={menteimg} alt=""/>
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img style={{"height":"70px"}} src={serfincoimg} alt=""/>
                                    <img style={{"height":"70px","marginLeft":"20px"}} src={identimg} alt=""/>
                                </Carousel.Item>  
                            </Carousel>     
                        </div>
                    </Card.Body>
                </Card>
            </div>

            <div className="imagecontainer">
                <img src={imetriximg} alt=""/> 
            </div>
         
            <div className="px-4 row align-items-end">
                    <div className="col-12 col-lg-4 social-block text-left">
                        <h3 style={{"marginLeft":"3cm","font-size":"20px", "fontWeight":"600","height":"35px"}} >REDES SOCIALES</h3>
                            <p style={{"marginLeft":"3cm"}} className="mt-4 mb-3">Encuéntrenos en las<br /> siguientes plataformas</p>
                            <LinkedIn style={{"marginLeft":"3.5cm", "font-size":"40px"}} className="icon"/>
                            <YouTube style={{"marginLeft":"0.5cm", "font-size":"40px"}} className="icon"/>
                    </div>
                    <div className="col-lg-8 mt-2 row">
                                <div className="col-12 col-sm-4 mt-4">
                                    <h4 style={{"fontWeight":"600","paddingLeft":"0.3cm","height":"30px"}} className="mb-0">Partner</h4>
                                    <img  src={partnerimg} alt=""/>
                                </div>
                                <div className="col-12 col-sm-4 mt-4">
                                    <h4 style={{"fontWeight":"600","paddingLeft":"0.3cm","height":"30px"}} className="mb-0">Miembros</h4>
                                    <img style={{"height":"100px"}} src={miembroimg} alt="" />
                                    <small className="d-block"></small>
                                </div>
                                <div style={{"paddingRight":"5cm"}} className="col-12 col-sm-4 mt-4 text-left address-block">
                                    <h4 style={{"fontSize":"15px","fontWeight":"700","height":"20px"}} >iMetrix SAS </h4>
                                    <span style={{"paddingRight":"4cm"}}>Cra 7 #73-55 piso 8</span>  
                                    <span> Bogota, Colombia </span>  
                                    <span style={{"cursor":"pointer"}} click="openWp()"> WA +57 316 5776309</span>
                                </div>        
                    </div>
                   
                </div>
            
            <div className="bottomcontainer">
            <div className="copyright text-center">
                <hr></hr>
                <h6 style={{"paddingTop":"0.5cm", "height":"70px"}} >Copyright © 2020 <b>iMetrix SAS</b></h6>
            </div>
            </div>
          
        </div>
    )
}
