import "./register.scss";
import Topbar from "../../topbar/Topbar";
import { Link } from "react-router-dom";


export default function Register() {
    return (
        <div className="register">
            <Topbar/>
            <span className="registerTitle">REGISTER</span>
            <form className="registerForm">
                <label>Username</label>
                <input type="text" className="registerInput" placeholder="Enter your username ..." />
                <label>Email</label>
                <input type="text" className="registerInput" placeholder="Enter your email ..." />
                <label>Password</label>
                <input type="password" className="registerInput" placeholder="Enter your password ..." />
                <button className="registerButton">REGISTER</button>
            </form>
            <button className="registerLoginButton">
                <Link className="link" to="/blog/login">LOGIN</Link>
            </button>
        </div>
    );
}
