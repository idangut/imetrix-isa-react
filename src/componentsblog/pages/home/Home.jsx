import Header from "../../header/Header"
import Posts from "../../posts/Posts"
import Sidebar from "../../sidebar/Sidebar"
import Topbar from "../../topbar/Topbar";
import "./home.scss"

export default function Home() {
    return (
        <>
            <Topbar/>
            <Header/>
            <div className="home">
            <Posts/>
            <Sidebar/>
            </div>
        </>
    )
}
