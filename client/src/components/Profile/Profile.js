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
            <div className="ui container" style={{ marginTop: "45px" }}>
                {/* <div className="ui three column grid"> */}
                    <div className="column">
                    <div className='ui fluid card'>
                        <div className='content'>
                            <div className='header'>First Post</div>
                        </div>
                        <div className='content'>
                            <div className='description'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, hic optio labore a quod aperiam molestiae quas, officia ex accusantium facere, dignissimos officiis non! Necessitatibus accusantium facere hic vero saepe!
                            </div>
                        </div>
                        <div className='extra content'>
                            <i aria-hidden='true' className='user icon' />{currentUser.userName}
                        </div>
                    </div>
                </div>
                </div>
                <div className="column">
                <div className='ui fluid card'>
                    <div className='content'>
                        <div className='header'>Second Post</div>
                    </div>
                    <div className='content'>
                        <div className='description'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, hic optio labore a quod aperiam molestiae quas, officia ex accusantium facere, dignissimos officiis non! Necessitatibus accusantium facere hic vero saepe!
                        </div>
                    </div>
                    <div className='extra content'>
                        <i aria-hidden='true' className='user icon' />{currentUser.userName}
                    </div>
                </div>
                </div>
                <div className="column">
                <div className='ui fluid card'>
                    <div className='content'>
                        <div className='header'>Thirst Post</div>
                    </div>
                    <div className='content'>
                        <div className='description'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, hic optio labore a quod aperiam molestiae quas, officia ex accusantium facere, dignissimos officiis non! Necessitatibus accusantium facere hic vero saepe!
                        </div>
                    </div>
                    <div className='extra content'>
                        <i aria-hidden='true' className='user icon' />{currentUser.userName}
                    </div>
                {/* </div> */}
                </div>
            </div>
        </div>
    )
}