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

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let { userName, email, password, location, lookingFor } = this.state;
        let credentials = { userName, email, password, location, lookingFor }
        let user = await httpClient.authenticate(credentials, "/api/users", "POST");
        this.setState({ userName: "", email: "", password: "", location: "", lookingFor: "" });
        if (user) {
            console.log(user)
            this.props.onSignupSuccess();
            this.props.history.push('/profile');
        }
    }

    render() {
        let { userName, email, password, location, lookingFor } = this.state;
        let { handleChange, handleSubmit } = this;
        return(
            <div>
                <div className="ui center aligned container" style={{ marginTop: "45px" }}>
                    <h1 className="center aligned" style={{ fontSize: "45px" }}>Sign up</h1>
                </div>
                <div className="ui container text" style={{ marginTop: "45px" }}>
                    <form className='ui form' onSubmit={handleSubmit} >
                        <div className="field">
                            <label>Name: </label>
                            <input 
                                type="text"
                                name="userName"
                                placeholder="Johnny Greenwood"
                                onChange={handleChange}
                                value={userName}
                            />
                        </div>
                        <div className="field">
                            <label>Email: </label>
                            <input 
                                type="text"
                                name="email"
                                placeholder="JohnnyGreenwood@abc123.com"
                                onChange={handleChange}
                                value={email}
                            />
                        </div>
                        <div className="field">
                            <label>Password:</label>
                            <input 
                            type="password"
                            name="password"
                            placeholder="Your password..."
                            onChange={handleChange}
                            value={password}
                            />
                        </div>
                        <div className="field">
                            <label>Location:</label>
                            <input
                                type="text"
                                name="location"
                                placeholder="What city are you in?"
                                onChange={handleChange}
                                value={location}
                            />
                        </div>
                        <div className="field">
                            <label>Services:</label>
                            <input
                                type="text"
                                name="lookingFor"
                                placeholder="What are you looking for?"
                                onChange={handleChange}
                                value={lookingFor}
                            />
                        </div>
                        <div className="ui center aligned container">
                            <div className="field">
                                <button className='ui fade animated teal button' type="submit">
                                    <div className='visible content'>Let's get started</div>
                                    <div className='hidden content'>Submit</div>
                                </button>
                            </div>
                        </div>
                        </form>
                </div>
            </div>
            )
        }
}

export default Signup;