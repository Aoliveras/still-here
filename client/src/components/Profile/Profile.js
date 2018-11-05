import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import httpClient from '../../utilities/httpClient';

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: null,
        }
    }

    async componentDidMount() {
        let res = await httpClient({ url: `/api/users/${this.props.currentUser._id}`, method: "GET" });
        this.setState({ user: res.data.user });
    }


    handleDelete = async (e, id) => {
        e.preventDefault();
        let res = await httpClient({ url: `posts/${id}`, method: "DELETE" })
        console.log(res);
        this.setState({ user: res.data.user });
    }

    render() {
        let { user } = this.state;
        let {handleDelete} = this;
        // let {currentUser} = this.props;
        if (!user) return <div></div>
    return (
        <div>
            <div className="ui center aligned segment raised" style={{ marginTop: "45px", padding: "25px", border: "1px solid lightgrey", borderRadius: "5px" }}>
                <div className="ui container text">
                <div className="ui segment">
                <div className="ui teal segment stacked">                
                    <i className='ui huge user icon'></i>
                    <h1>{user.userName}'s profile</h1>

                </div>
                </div>
                </div>
                <h3>Current Location: {user.location}</h3>
                <h3>Looking for: {user.lookingFor}</h3>
                <div className="ui section divider"></div>
                <Link to='/createPost' className="ui green  button">Create a post</Link>
                <Link to='/editProfile' className="ui teal  button">Edit Profile</Link>
                <Link to='/deleteProfile' className="ui red inverted tertiary button">Delete Profile</Link>
            </div>
            <div className="ui center aligned container" style={{ marginTop: "45px" }}>
                <div className="ui three column grid">
                {/* <div className="column"> */}
                    {user.posts.length > 0
                    ? user.posts.map(p => {
                        return <div key={p._id} className="ui column">
                                    <div className='ui card' style={{ margin: "25px 25px 25px 0" }}>
                                        <div className='content'>
                                            <div className='header'>{p.title}</div>
                                        </div>
                                        <div className='content'>
                                            <div className='description'>
                                                {p.body}
                                            </div>
                                        </div>
                                        <div className='extra content'>

                                            <Link to={`/showPost/${p._id}`}className="ui teal button">Show</Link>
                                            <button onClick={(e)=>handleDelete(e, p._id)} className="ui red inverted tertiary button">Delete</button>
                                            {/* <i aria-hidden='true' className='user icon' />{user.userName} */}
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