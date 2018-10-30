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
        // Send data
        let user = await httpClient.authenticate({ email, password }, "/api/users/authenticate");
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
        <div className="ui center aligned container" style={{ marginTop: "45px" }}>
                <h1>Log in.</h1>
                <form className='ui form' onSubmit={handleSubmit} >
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
                <div className="field">
                    <input className='ui button' type="submit"/>
                </div>
                </form>
            </div>
        )
    }
};

export default Login;