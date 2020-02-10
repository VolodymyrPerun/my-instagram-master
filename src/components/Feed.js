import React from 'react';
import Posts from './Posts';
import User from './User';

export const Feed = () => {
    return (
        <div className="container feed">
            <Posts/>
            <User/>
        </div>
    );
}
