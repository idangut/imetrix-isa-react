import "./login.scss";

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">LOGIN</span>
            <form className="loginForm">
                <label>Email</label>
                <input type="text" className="loginInput" placeholder="Enter your email ..." />
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="Enter your password ..." />
                <button className="loginButton">LOGIN</button>
            </form>
            <button className="loginRegisterButton">REGISTER</button>
        </div>
    );
}
