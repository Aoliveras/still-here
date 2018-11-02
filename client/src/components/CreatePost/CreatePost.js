import React, {Component} from 'react';
import httpClient from '../../utilities/httpClient';

class CreatePost extends Component {
    state = {
        title: "",
        body: ""
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let { title, body } = this.state;
        let credentials = { title, body };

        let user = await httpClient({data: credentials, url: "/posts", method: "POST"});
        this.setState({ title: "", body: "" });
        if (user) {
            //console.log(user)
            this.props.onPostSuccess();
            this.props.history.push('/profile')
        }
    }

    render() {
        let {handleChange, handleSubmit} = this;
        let {currentUser} = this.props;
        return(
            <div>
                <div className="ui center aligned container" style={{ marginTop: "45px" }}>
                    <h1>{currentUser.userName} Create a new post</h1>
                    <form className='ui form' onSubmit={handleSubmit} >
                        <div className="field">
                            <label>Title: </label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Post name?"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="field">
                            <label>Body: </label>
                            <input
                                type="text"
                                name="body"
                                placeholder="JohnnyGreenwood@abc123.com"
                                onChange={handleChange}
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

export default CreatePost