import "./write.scss";
import Topbar from "../../topbar/Topbar";

export default function Write() {
    return (
        <div className="write">
            <Topbar/>
            <img className="writeImg" src="https://airwallpaper.com/wp-content/uploads/wall003/4k-Gaming-Wallpaper-Computer-scaled.jpg" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon far fa-plus-square"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button> 
            </form>
        </div>
    )
}
