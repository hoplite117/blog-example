import React from 'react';

const Main = () => {
    return (
        <div>
            This is the main component
            {console.log(user ? user : "Not authenticated")}
        </div>
    )
}
export default Main;