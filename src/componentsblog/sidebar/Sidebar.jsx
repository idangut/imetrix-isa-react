import "./sidebar.scss";
import aboutImg from "../../assets/imgi/3-solucion-voice.jpg";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src={aboutImg} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ut sapiente voluptatum, deleniti suscipit, est nesciunt iste enim perferendis voluptas error?</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-linkedin"></i>
                    <i className="sidebarIcon fab fa-youtube"></i>
                </div>
            </div>
        </div>
    )
}
