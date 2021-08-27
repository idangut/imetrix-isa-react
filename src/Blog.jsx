import "./blog.scss";
import Topbar from "./componentsblog/topbar/Topbar";
import Home from "./componentsblog/pages/home/Home";
import Single from "./componentsblog/pages/Single/Single";

function Blog() {
    return (
  
      <div className="blog">
        <Topbar />
        <div className="section"><Single/></div>
        
      </div>
  
    );
  }
  
  export default Blog;