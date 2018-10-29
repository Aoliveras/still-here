import React from 'react';
import { Link } from 'react-router-dom';
//import './Navbar.css';

export default ({ currentUser }) => {
    return (
        <div className="column">
        <nav className="ui menu">
                <Link className="item" to="/">stillHere.co</Link>
                <Link className="item" to="/chat">Chat</Link>
                <Link className="item" to="/blog">Blog</Link>
                <Link className="item" to="/help">Help Center</Link>
                {currentUser
                    ? (
                        <div className="right menu">
                            <span className="item">{currentUser.name}</span>
                            <Link className="item" to="/logout">Logout</Link>
                        </div>
                    )
                    : (
                        <div className="right menu">

                        <Link className="item" to="/login">Login</Link>
                        <Link className="item" to="/signup">Signup</Link>
                        </div>
                    )
                }
        </nav>
        </div>
    )
};
