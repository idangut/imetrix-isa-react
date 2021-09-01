import "./topbar.scss";
import {Link} from "react-router-dom";

export default function Topbar() {

    const user = false;

    return (
        <div className="topBar">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-linkedin"></i>
            <i className="topIcon fab fa-youtube"></i>
            </div>
            <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"> <Link className="link" to="/blog/home">HOME</Link> </li>
                <li className="topListItem"> <Link className="link" to="/blog/home">ABOUT</Link> </li>
                <li className="topListItem"> <Link className="link" to="/blog/home">CONTACT</Link> </li>
                <li className="topListItem"> <Link className="link" to="/blog/write">WRITE</Link> </li>
                <li className="topListItem"> {user && "LOGOUT"} </li>
            </ul>
            </div>
            <div className="topRight">
            {
                user ? (
                    <img className="topImg" src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_640.png" alt="" />
                ) : (
                    <ul className="topList">
                        <li className="topListItem"><Link className="link" to="/blog/login">LOGIN</Link> </li>
                        <li className="topListItem"><Link className="link" to="/blog/register">REGISTER</Link> </li>
                    </ul>
                )
            }
            <Link className="rightList" to="/">
                    <li  className="rightListItem">iMETRIX</li>
            </Link>  
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
