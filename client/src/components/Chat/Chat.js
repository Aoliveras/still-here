import React from 'react';

export default ({ currentUser }) => {
    return (
        <div>
        {currentUser
            ? (
        <div className="ui center aligned container" style={{ marginTop: "45px" }}>
          <h1>Here to chat.</h1>
          <h3>Chat with friends who know what you're going through.</h3>
        </div>
            )
            : (
                <div className="ui center aligned container">
                    <h1>You must be logged in to view this chat room.</h1>
                </div>
            )
        }
        </div>
    )
}