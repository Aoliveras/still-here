import React from 'react';
import { Link } from 'react-router-dom';
//import './Navbar.css';

export default ({ currentUser }) => {
    return (
        <nav className="ui pointing menu">
            <div className="">
                <Link className="item" to="/">stillHere.co</Link>
                <Link className="item" to="#">Chat</Link>
                <Link className="item" to="#">Blog</Link>
                <Link className="item" to="#">Help Center</Link>
            </div>
            <div className="right menu">
                {currentUser
                    ? (
                        <span>
                            <span className="item">{currentUser.name}</span>
                            <Link className="item" to="#">Logout</Link>
                        </span>
                    )
                    : (
                        <span>
                        <Link className="item" to="#">Login</Link>
                        <Link className="item" to="#">Signup</Link>
                        </span>
                    )
                }
            </div>
        </nav>
    )
};
