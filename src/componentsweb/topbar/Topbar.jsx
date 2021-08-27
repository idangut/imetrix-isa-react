import "./topbar.scss";
import logo from "../../assets/imgi/iMetrix_logoweb_positivo.png";
import {LinkedIn, YouTube, PermIdentity} from "@material-ui/icons";
import {Link} from "react-router-dom";

export default function Topbar() {
    return (
        <div className="topbar" id="topbarid">
            <div className="wrapper">
                <div className="left">
                    <a href="#introid">
                        <img className="logo" src={logo} alt={""}/>
                    </a>
                </div>
                <div className="right">
                    <div className="itemContainer">
                        <Link className="itemContainer" to="/blog">
                            <li className="span">Blog</li>
                        </Link>
                    </div>
                    <div className="itemContainer">
                        <a href="#contactid" className="span">iMetrix</a>
                    </div>
                    <div className="itemContainer">
                        <a href="#servicesid" className="span">Soluciones</a>
                    </div>
                    <div className="itemContainer">
                            <PermIdentity className="icon"/>
                            <span className="span">Iniciar Sesión</span>
                    </div>
                    <div className="itemContainer">
                            <LinkedIn className="icon"/>
                    </div>
                    <div className="itemContainer">
                            <YouTube className="icon"/>
                    </div>    
                </div>
            </div>
        </div>
    )
}
