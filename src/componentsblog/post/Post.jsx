import "./post.scss";



export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://www.connectcounsellingsociety.ca/wp-content/uploads/2015/08/4.jpg" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet</span> 
                <span className="postDate">1 Hour Ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero enim, unde quod maxime ducimus quis voluptatum, dicta nobis, quo animi veniam rerum molestiae eum. Eveniet illum numquam suscipit repellendus laborum?</p>
        </div>
    )
}
