import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import httpClient from '../../utilities/httpClient';

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: null,
            posts: []//hold posts in state and then pass a prop to post components??
        }
    }

    async componentDidMount() {
        let res = await httpClient({ url: `/api/users/${this.props.currentUser._id}`, method: "GET" });
        this.setState({ user: res.data.user });
    }

    handleShow = (e) => {
        e.preventDefault();
        console.log(e.target);
    }

    handleDelete = async (e) => {
        e.preventDefault();
        let id = e.target.id;
        let res = await httpClient({ url: `posts/${id}`, method: "DELETE" })
        console.log(res);
        //this.setState({ user: res.data.user });
        //console.log(res);
        //this.props.onDeleteSuccess();
        //this.props.history.push('/profile');
    }

    render() {
        let { user } = this.state;
        // let {handleDelete, handleShow} = this;
        //let {currentUser} = this.props;
        if (!user) return <div></div>
    return (
        <div>
            <div className="ui center aligned container" style={{ marginTop: "45px" }}>
                <h1>{user.userName}'s profile</h1>
                <h3>Current Location: {user.location}</h3>
                <h3>Looking for: {user.lookingFor}</h3>
                <Link to='/createPost' className="ui green button">Create a post</Link>
                <Link to='/editProfile' className="ui button primary">Edit Profile</Link>
                <Link to='/deleteProfile' className="ui red button">Delete Profile</Link>
            </div>
            <div className="ui center aligned container" style={{ marginTop: "45px" }}>
                <div className="ui three column grid">
                {/* <div className="column"> */}
                    {user.posts.length > 0
                    ? user.posts.map(p => {
                        return <div className="column">
                                    <div key={p._id} className='ui card' style={{ margin: "25px 25px 25px 0" }}>
                                    <div className='content'>
                                        <div className='header'>{p.title}</div>
                                    </div>
                                    <div className='content'>
                                        <div className='description'>
                                            {p.body}
                                        </div>
                                    </div>
                                    <div className='extra content'>

                                        {/* <button  id={p._id} onClick={(e) => {handleShow(e)}} className="ui primary button">Show</button> */}
                                        {/* <button id={p._id} onClick={handleDelete} className="ui red button">Delete</button> */}
                                        <i aria-hidden='true' className='user icon' />{user.userName}
                                    </div>
                                </div>
                            </div>
                        })
                        : <h1>Nothing to see here...</h1>}
                </div>
            </div>
        </div>
        )
    }
}


export default Profile