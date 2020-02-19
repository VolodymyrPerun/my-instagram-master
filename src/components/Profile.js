import React from 'react';
import User from "./User";
import {Palette} from "./Palette";

export const Profile = () => {
    return (
        <div className="container profile">
            <>
                <User
                    src="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt="man"
                    name="Scott"/>
                    <Palette/>
            </>

        </div>
    );
}
