import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser }) => {
    return (
        <div className="column">
        <nav className="ui inverted teal menu">
                <Link className="item" to="/">stillhere.co</Link>
                {/* <Link className="item" to="/blog">Blog</Link> */}
                <Link className="teal item" to="/help">Help Center</Link>
                {currentUser
                    ? (
                        <div className="right menu">
                            <Link className="item" to="/chat">Chat</Link>
                            {/* <Menu.item as={Link} to></Menu.item> */}
                            <Link className="item" to="/profile">{currentUser.userName}</Link>
                            <Link className="teal item" to="/logout">Logout</Link>
                        </div>
                    )
                    : (
                        <div className="right menu">
                        <Link className="teal item" to="/login">Login</Link>
                        <Link className="teal item" to="/signup">Signup</Link>
                        </div>
                    )
                }
        </nav>
        </div>
    )
};
