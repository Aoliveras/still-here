import React from 'react';
import { Link } from 'react-router-dom';


export default () => {
    return (
        <div className="ui center aligned container" style={{ marginTop: "100px" }}>
      <div className="ui segment stacked">
          <div className="ui container content" style={{ padding: "25px" }}>
          <div className='ui huge header' style={{ marginTop: "25px", fontSize: "65px" }}>Still Here.</div>
          <h1 style={{ fontSize: "35px", marginTop: "45px" }}>
            When you need someone who understands.
          </h1>
          <h1 style={{ fontSize: "35px"}}>
            When you need a little help from a friend.
            </h1>
          <h1 style={{ fontSize: "35px"}}>
            When you need to share your story.
          </h1>
            <Link to="/login" className="ui fade animated inverted primary button" style={{ marginTop: "45px", marginBottom: "15px" }}>
              <div className='visible content'>Existing User Login</div>
              <div className='hidden content'>We missed you</div>
            </Link>

            <div class='ui horizontal divider'>Or</div>

            <Link to="/signup" className="ui fade animated teal button" style={{ marginTop: "15px" }}>
              <div className='visible content'>Come Join us</div>
              <div className='hidden content'>We're here for you</div>
            </Link>
            </div>
        </div>
        </div>
        )
};