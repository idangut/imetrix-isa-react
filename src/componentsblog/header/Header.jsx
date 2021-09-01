import './header.scss';
import backgroundImg from "../../assets/imgi/2-banner-principal.jpg";

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">iMETRIX</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src={backgroundImg} alt="" />
        </div>
    )
}
