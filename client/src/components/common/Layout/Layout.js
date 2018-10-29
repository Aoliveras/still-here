import React from 'react';
import Navbar from '../Navbar/Navbar';

export default ({ children, currentUser }) => {
    return (
        <div className="ui container">
            <Navbar currentUser={currentUser}/>
            <div className="ui container">
                { children }
            </div>
        </div>
    )
};