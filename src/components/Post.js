import React, {Component} from "react";
import User from "./User";

export default class Post extends Component {

    render() {
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
    }
}
