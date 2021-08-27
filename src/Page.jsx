import Topbar from "./componentsweb/topbar/Topbar";
import Intro from "./componentsweb/intro/Intro";
import Solutions from "./componentsweb/solutions/Solutions";
import Contact from "./componentsweb/contact/Contact";
import Services from "./componentsweb/services/Services";
import Insight from "./componentsweb/insight/Insight";
import Clients from "./componentsweb/clients/Clients";
import "./page.scss";

function Page() {
    return (
      <div className="page"> 
        <Topbar/>
            <div className="sections"><Intro/></div>
            <div className="solutions"><Solutions/></div>
            <div className="contact"><Contact/></div>
            <div className="services"><Services/></div>
            <div className="insight"><Insight/></div>
            <div className="clients"><Clients/></div>
      </div>
    );
  }
  
  export default Page;