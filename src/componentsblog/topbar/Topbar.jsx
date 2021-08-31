import "./topbar.scss";
import {Link} from "react-router-dom";

export default function Topbar() {
    return (
        <div className="topBar">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-linkedin"></i>
            <i className="topIcon fab fa-youtube"></i>
            </div>
            <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
            </div>
            <div className="topRight">
                <Link className="rightList" to="/">
                    <li className="rightListItem">iMETRIX</li>
                </Link>
                <img className="topImg" src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_640.png" alt="" />
                <i className="topSearchIcon fas fa-search"></i>
              
            </div>
        </div>
    )
}
