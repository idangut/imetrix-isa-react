import "./blog.scss";
import Topbar from "./componentsblog/topbar/Topbar";
//import Home from "./componentsblog/pages/home/Home";
//import Single from "./componentsblog/pages/Single/Single";
//import Write from "./componentsblog/pages/write/Write";
//import Settings from "./componentsblog/pages/settings/Settings";
//import Login from "./componentsblog/pages/login/Login";
import Register from "./componentsblog/pages/register/Register";

function Blog() {
    return (
  
      <div className="blog">
        <Topbar />
        <div className="section"><Register/></div>
        
      </div>
  
    );
  }
  
  export default Blog;