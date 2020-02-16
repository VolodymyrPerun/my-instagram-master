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
                <div className="post">
                    <User src="https://images.pexels.com/photos/25758/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                          alt="man"
                          name="Oldman"
                          min/>
                    <img src={this.props.src} alt={this.props.alt}/>
                    <div className="post__name">
                        some account
                    </div>
                    <div className="post__descr">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.
                    </div>
                </div>
            )
        });
    }

    render() {
        return (
            <div className='left'>
                {/*<Post*/}
                {/*    src="https://images.pexels.com/photos/3224155/pexels-photo-3224155.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"*/}
                {/*    alt="nyk"/>*/}
                {/*<Post*/}
                {/*    src="https://images.pexels.com/photos/3597087/pexels-photo-3597087.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"*/}
                {/*    alt="flw"/>*/}
            </div>
        )
    }
}
