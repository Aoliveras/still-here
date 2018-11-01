import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser }) => {
    return (
        <div>
            <div className="ui center aligned container" style={{ marginTop: "45px" }}>
                <h1>{currentUser.userName}'s profile</h1>
                <h3>Current Location: {currentUser.location}</h3>
                <h3>Looking for: {currentUser.lookingFor}</h3>
                <Link to='/editProfile' className="ui button primary">Edit Profile</Link>
            </div>
            <div className="ui center aligned container" style={{ marginTop: "45px" }}>
                {/* <div className="ui three column grid"> */}
                <div className="column">
                    {currentUser.posts.length > 0
                    ? currentUser.posts.map(p => {
                        return <div key={p._id} className='ui card'>
                                    <div className='content'>
                                        <div className='header'>{p.title}</div>
                                    </div>
                                    <div className='content'>
                                        <div className='description'>
                                            {p.body}
                                        </div>
                                    </div>
                                    <div className='extra content'>
                                        <i aria-hidden='true' className='user icon' />{currentUser.userName}
                                    </div>
                                </div>
                        })
                        : <h1>Nothing to see here...</h1>}
                </div>
            </div>
        </div>
    )
}