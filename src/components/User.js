import React from "react";
import {Link} from "react-router-dom";

const User = (props) => {
    const {min, src, alt, name} = props;
    return (
        <Link to="#" className={min ? "user min" : "user"}>
            <img src={src} alt={alt}/>
            <div>{name}</div>
        </Link>
    )
}

export default User;
