import "./insight.scss";
import icontext3 from "../../assets/imgi/3-solucion-icon-text.png";
import vector6 from "../../assets/imgi/6-text-analytics-vector.png";


export default function Insight() {
    return (
        <div className="insight">
                 <div className="container">
                        <div className="home-section home-feature mx-auto pt-5 text-center">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-12 col-md-6 text-left mr-5">
                                <img style={{"height":"2.5cm","paddingRight":"16cm"}} className="icon" src={icontext3} alt="" />
                                <h2 style={{"color":"orange", "font-weight":"700","textAlign":"left","height":"50px"}} className="mt-3">ISA Customer Insights:</h2>
                                <p style={{"justifyItems":"left","color":"white","textAlign":"left"}} ><span style={{"color":"orange"}}>iSA</span> Customer Insights potencia los análisis de ISA extrayendo información valiosa para monitorear y mejorar la experiencia de sus clientes, en aspectos relacionados con la marca, el producto, problemas en el servicio, objeciones en la venta, patrones de comportamiento o fraude, emociones, entre otros</p>
                                </div>
                                <div className="col-12 col-md-6">
                                <img style={{"height":"9cm"}} src={vector6} alt=""/>
                                </div>
                            </div>
                        </div>
                </div>
        </div>
    )
}
