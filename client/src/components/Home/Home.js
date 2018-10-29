import React from 'react';
import { Link } from 'react-router-dom';


export default () => {
    return (
        <div className="ui center aligned container" style={{ marginTop: "45px" }}>
          <div className='ui huge header'>Still Here.</div>
          <p style={{ fontSize: "25px" }}>When you need someone who understands. <br/>
            When you need to share your story. <br/>
            When you need a little help from a friend. 
          </p>
          <button className='ui button'>
            <Link className="nav-link" to="/signup">Join us</Link>
          </button>
        </div>
        )
};