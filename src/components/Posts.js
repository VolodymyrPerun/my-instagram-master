import React, {Component} from "react";
import Post from "./Post";
import InstaService from '../services/instaService'

export default class Posts extends Component {
    InstaService = new InstaService();

    render() {
        return (
            <div className='left'>
                <Post
                    src="https://images.pexels.com/photos/3224155/pexels-photo-3224155.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt="nyk"/>
                <Post
                    src="https://images.pexels.com/photos/3597087/pexels-photo-3597087.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt="flw"/>
            </div>
        )
    }
}
