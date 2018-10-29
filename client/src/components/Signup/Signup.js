import React, {Component} from 'react';
import httpClient from '../../utilities/httpClient'

class Signup extends Component {
    state = {
        userName: "",
        email: "",
        password: "",
        location: "",
        lookingFor: ""
    }

    render() {
        return(
        <div className="ui center aligned container" style={{ marginTop: "45px" }}>
                <h1>Sign up.</h1>
                <h3>Sign up form will go here.</h3>
            </div>
        )
    }
}

export default Signup;