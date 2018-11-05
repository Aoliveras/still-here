import React from 'react';

export default ({ currentUser }) => {
    return (
        <div>
        {currentUser
            ? (
        <div className="ui center aligned container text">
                    <div className="ui segment raised" style={{ marginTop: "100px" }}>
                        <h1 style={{ fontSize: "45px" }}>Community Chat</h1>
                        <div className="ui segment teal stacked" style={{ padding: "45px" }}>
                            <h1 style={{ marginTop: "-15px", marginBottom: "35px" }}>Start chatting with your friends!</h1>
                            <div class='ui placeholder'>
                                <div class='ui placeholder'>
                                    <div class='image header'>
                                    <div class='line medium' />
                                    <div class='line full' />
                                    </div>
                                    <div class='paragraph'>
                                    <div class='line full' />
                                    <div class='line medium' />
                                    </div>
                                    <div class='paragraph'>
                                    <div class='line full' />
                                    <div class='line medium' />
                                    </div>
                                    <div class='image header'>
                                    <div class='line medium' />
                                    <div class='line full' />
                                    </div>
                                    <div class='paragraph'>
                                    <div class='line full' />
                                    <div class='line medium' />
                                    </div>
                                    <div class='paragraph'>
                                    <div class='line full' />
                                    <div class='line medium' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='ui clearing segment'>
                        <div className="ui clearing teal segment">
                        <button class='ui right floated teal button'>
                            Send
                        </button>
                        </div>
                        </div>
                    </div>
                </div>
            )
            : (
                <div className="ui center aligned container text">
                    <div className="ui segment raised" style={{ marginTop: "100px" }}>
                        <h1>Community Chat</h1>
                        <div className="ui segment teal stacked" style={{ padding: "45px" }}>
                            <h1>You must be logged in to view this chat room.</h1>
                            <div class='ui placeholder'>
                                <div class='ui placeholder'>
                                    <div class='image header'>
                                    <div class='line medium' />
                                    <div class='line full' />
                                    </div>
                                    <div class='paragraph'>
                                    <div class='line full' />
                                    <div class='line medium' />
                                    </div>
                                    <div class='paragraph'>
                                    <div class='line full' />
                                    <div class='line medium' />
                                    </div>
                                    <div class='image header'>
                                    <div class='line medium' />
                                    <div class='line full' />
                                    </div>
                                    <div class='paragraph'>
                                    <div class='line full' />
                                    <div class='line medium' />
                                    </div>
                                    <div class='paragraph'>
                                    <div class='line full' />
                                    <div class='line medium' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='ui clearing segment'>
                        <div className="ui clearing teal segment">
                        <button className='ui right floated teal button'>
                            Send
                        </button>
                        </div>
                        </div>
                    </div>
                </div>
            )
        }
        </div>
     )
}