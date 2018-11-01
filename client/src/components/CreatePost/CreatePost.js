import React, {Component} from 'react';
import axios from 'axios';

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
        let { title, body } = this.state;
        e.preventDefault();

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