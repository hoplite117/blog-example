import React from 'react';
import Posts from './Posts';

const Main = () => {
    return (
        <div>
            {console.log(user ? user : "Not authenticated")}
            <Posts />
        </div>
    )
}
export default Main;