import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class DeleteProfile extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        let { currentUser, onLogout } = this.props;
        let id = currentUser._id;
        Axios.delete(`/api/users/${id}`);
        onLogout();
        this.props.history.push('/')
    }
    render() {
        let {handleSubmit} = this;

    return (
        <div className="ui aligned center container">
            <h1>Are you sure you want to delete your profile? All information and posts will be lost without ability to bring them back.</h1>
            <Link to='/profile' className="ui green button">No, Go back to profile!</Link>
            <form onSubmit={handleSubmit}>
                <button className="ui red button">Yes, delete profile!</button>
            </form>
        </div>
        )
    }
}

export default DeleteProfile