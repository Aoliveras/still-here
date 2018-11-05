import React, { Component } from 'react';
import httpClient from '../../utilities/httpClient';

class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let { email, password } = this.state;
        let credentials = { email, password };
        let user = await httpClient.authenticateLogin(credentials, "/api/users/authenticate");
        this.setState({ email: "", password: "" });
        if (user) {
            this.props.onLoginSuccess();
            this.props.history.push('/profile');
        } else {
            //create invalid credentials message
        }
    }

    render() {
        let { email, password } = this.state;
        let { handleChange, handleSubmit } = this;
        return (
            <div>
                <div className="ui center aligned container" style={{ marginTop: "45px" }}>
                        <h1 style={{ fontSize: "45px", marginBottom: "45px" }}>Log in</h1>
                </div>
                <div className="ui teal segment stacked">
                <div className="ui container text">
                    <form className='ui form' onSubmit={handleSubmit} style={{ marginTop: "65px" }}>
                    <div className="field">
                        <label>Email: </label>
                        <input
                            type="text"
                            name="email"
                            placeholder="JohnnyGreenwood@gmail.com"
                            onChange={handleChange}
                            value={email}
                            />
                    </div>
                    <div className="field">
                        <label>Password: </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Secret..."
                            onChange={handleChange}
                            value={password}
                            />
                    </div>
                    <div className="ui center aligned container">
                    <div className="field">
                        <button className='ui fade animated teal button' type="submit">
                            <div className='visible content'>Submit</div>
                            <div className='hidden content'>Come on in</div>
                        </button>
                    </div>
                    </div>
                    </form>
                </div>
                </div>
            </div>  
        )
    }
};

export default Login;