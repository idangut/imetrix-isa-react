import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";
import { Button } from "react-bootstrap"; 

export default function Intro() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, { 
            showCursor: false,
            backDelay: 1500,
            backSpeed: 150,
            typeSpeed: 100, 
            strings: ['Analítica de Voz', 'Analítica de Texto','Voice to insight'] })
    },[])

    return (
        <div className="intro" id="introid">
            <div className="left">
                <div className="wrapper">
                    <div className="home-principal mx-auto pt-5 text-center">
                    <span ref={textRef} className="span"></span>
                        <div className="col-12 col-sm-12 block-text text-left">
                            <h2 style={{"textAlign":"left","height":"150px","paddingTop":"8px"}} className="h2">Somos una compañía de analítica y estrategia de datos; usamos la inteligencia artificial y big data para crear soluciones de valor para la empresas.</h2>
                        </div>
                        <div className="botones">
                            <Button className="boton1" style={{"height":"45px","width":"170px","fontWeight":"bold","fontSize":"20px"}} variant="secondary">EMPEZAR</Button>
                            <a href="#contactid">
                                <Button className="boton2" style={{"marginLeft":"5px","height":"45px","width":"220px","fontWeight":"bold","fontSize":"20px"}} variant="light">CONOCER MÁS</Button>
                            </a> 
                        </div>            
                    </div>
                </div>
            </div>
        </div>
                
        
    )
}
