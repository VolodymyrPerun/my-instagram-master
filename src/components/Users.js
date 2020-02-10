import React from "react";
import User from "./User";

const Users = (props) => {
    return (
        <div className="right">
            <User src="https://images.pexels.com/photos/25758/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt="man"
                  name="Oldman"
                  />
            <div className="users__block">
                <User
                    src="https://images.pexels.com/photos/25758/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt="man"
                    name="Oldman"
                    min/>
                <User
                    src="https://images.pexels.com/photos/25758/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt="man"
                    name="Oldman"
                    min/>
                <User
                    src="https://images.pexels.com/photos/25758/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt="man"
                    name="Oldman"
                    min/>
                <User
                    src="https://images.pexels.com/photos/25758/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt="man"
                    name="Oldman"
                    min/>
            </div>
        </div>
    )
}

export default Users;
