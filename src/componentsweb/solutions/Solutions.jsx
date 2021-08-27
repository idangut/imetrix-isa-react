import "./solutions.scss";
import voiceimg from "../../assets/imgi/3-solucion-voice.jpg"
import textimg from "../../assets/imgi/3-solucion-text.jpg"
import iconimage from "../../assets/imgi/3-solucion-icon-voice.png"
import icontext from "../../assets/imgi/3-solucion-icon-text.png"

export default function Solutions() {
    return (
        <div className="solutions" id="solutionsid">
            <div clasName="container">
                <div style={{"margin-top": "100px"}}  className="row justify-content-center">
                    <div className="col-md-3">
                        <div className="card">
                            <img src={voiceimg} alt=""/>
                                {/*<svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95">
                                    <polygon points="-30,95 583,95 583,65"></polygon>
                                    </svg> */} 
                                <div style={{"background":"rgb(87, 83, 83)"}} className="card-body">
                                    <img style ={{"height":"50px","paddingLeft":"125px"}} src={iconimage} alt=""/>
                                        <h1 style={{"color":"white","font-weight":"600","height":"110px","textAlign":"center"}} className="card-title">iMetrix Speech Analytics</h1>
                                        <p style={{"color":"orange","textAlign":"center"}} className="card-subtitle">Analítica de voz y texto</p>
                                </div>   
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src={textimg} alt=""/>
                                {/*   <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95">
                                <polygon points="-30,95 583,95 583,65"></polygon>
                                </svg>*/} 
                            <div style={{"background":"rgb(87, 83, 83)"}} className="card-body">
                                <img style ={{"height":"50px","paddingLeft":"120px"}} src={icontext} alt=""/>
                                    <h1 style={{"color":"white","font-weight":"600","height":"110px","textAlign":"center"}} className="card-title">Customer Insights</h1>
                                    <p style={{"color":"orange","textAlign":"center"}} className="card-subtitle">Analítica de negocio</p>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
