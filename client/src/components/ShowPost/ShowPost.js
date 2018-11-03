import React, {Component} from 'react';
import httpClient from '../../utilities/httpClient';
import { Link } from 'react-router-dom';


class ShowPost extends Component {

    state = {
        post: null
    }

    async componentDidMount() {
        let { id } = this.props.match.params;
        let res = await httpClient({ url: `/posts/${id}`, method: "GET" });
        // console.log(res);
        this.setState({ post: res.data.payload });


        // console.log(id)
    }

    render() {
        let { post } = this.state;
        if (!post) return <div></div>
        return (
            <div className="ui center aligned container" style={{ marginTop: "45px" }}>
                <h1>Your Post</h1>
                <hr/>
                <div className="ui container" style={{ border: "1px solid black", borderRadius: "25px", marginTop: "45px", padding: "25px" }}>
                    <h2>"{post.title}"</h2>
                    <hr/>
                    <p style={{ fontSize: "20px" }}>{post.body}</p>
                    <hr/>
                    <Link to="/profile" className="ui primary button" style={{ marginTop: "25px" }}>Back to Profile</Link>
                </div>
            </div>
        )
    }
}

export default ShowPost
