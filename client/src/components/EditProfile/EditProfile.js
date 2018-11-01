import React, {Component} from 'react';
import httpClient from '../../utilities/httpClient';
class EditProfile extends Component {

    constructor(props){
        super(props)
        let { userName, email, password, location, lookingFor } = props.currentUser
        this.state = {
            userName: userName || "",
            email: email || "",
            password: password || "",
            location: location || "",
            lookingFor: lookingFor || ""
        }
    }


    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        //hit my postman patch method for users
        let { userName, email, password, location, lookingFor } = this.state;
        let credentials = { userName, email, password, location, lookingFor }
        let user = await httpClient.authenticate(credentials, `/api/users/${this.props.currentUser._id}`, "PATCH");
        this.setState({ userName: "", email: "", password: "", location: "", lookingFor: "" });
        console.log(user);
        if (user) {
            this.props.onEditSuccess();
            this.props.history.push('/profile');
        }
    }

    render() {
        let { userName, email, password, location, lookingFor } = this.state;
        let { handleChange, handleSubmit } = this;
        return(
            <div>
                <div className="ui center aligned container" style={{ marginTop: "45px" }}>
                    <h1>Edit Profile</h1>
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
                                placeholder="johnny@radiohead123.com"
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
                        <div className="field">
                            <input className='ui button' type="submit"/>
                        </div>
                        </form>
                </div>
            </div>
            )
        }
}

export default EditProfile;