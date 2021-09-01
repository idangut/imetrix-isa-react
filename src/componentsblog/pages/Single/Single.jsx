import "./single.scss";
import Sidebar from "../../sidebar/Sidebar";
import SinglePost from "../../singlePost/SinglePost";
import Topbar from "../../topbar/Topbar";

export default function Single() {
    return (
        <div className="single">
            <Topbar/>
            <SinglePost/>
            <Sidebar/>
        </div>
    )
}
