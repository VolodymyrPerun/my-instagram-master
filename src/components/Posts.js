import React, {Component} from "react";
import Post from "./Post";

export default class Posts extends Component {
    render() {
        return (
            <div className='left'>
                <Post
                    src="https://images.pexels.com/photos/3224155/pexels-photo-3224155.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt="nyk"/>
                <Post
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTboVKwPKx2VUI1hT6tfSY7u4Q0fy2INH1UM1csRyp6qdeklQy_"
                    alt="flw"/>
            </div>
        )
    }
}
