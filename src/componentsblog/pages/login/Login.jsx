import "./login.scss";
import Topbar from "../../topbar/Topbar";
import { Link } from "react-router-dom";


export default function Login() {
    return (
        <div className="login">
            <Topbar/>
            <span className="loginTitle">LOGIN</span>
            <form className="loginForm">
                <label>Email</label>
                <input type="text" className="loginInput" placeholder="Enter your email ..." />
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="Enter your password ..." />
                <button className="loginButton">LOGIN</button>
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/blog/register">REGISTER</Link>    
            </button>
        </div>
    );
}
