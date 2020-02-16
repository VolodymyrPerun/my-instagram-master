import React, {Component} from "react";
import Post from "./Post";
import InstaService from '../services/instaService'
import User from "./User";

export default class Posts extends Component {
    InstaService = new InstaService();
    state = {
        posts: [],
        error: false
    };

    componentDidMount() {
        this.updatePosts();
    }

    updatePosts() {
        this.InstaService.getAllPosts()
            .then(this.onPostsLoaded)
            .catch(this.onError);
    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts: posts,
            error: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    static renderItems (arr) {
        return arr.map(item => {
            const {name, altname, photo, src, alt, desc, id} = item;

            return (
                <div key={id} className="post">
                    <User src={photo}
                          alt={altname}
                          name={name}
                          min/>
                    <img src={src} alt={alt}/>
                    <div className="post__name">
                        {name}
                    </div>
                    <div className="post__descr">
                        {desc}
                    </div>
                </div>
            )
        });
    }

    render() {
        return (
            <div className='left'>
                <User/>
            </div>
        )
    }
}
