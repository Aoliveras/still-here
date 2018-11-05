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
        console.log(post)
        // let postDate = post.createdAt.to_date;
        if (!post) return <div></div>
        return (
            <div className="ui center aligned container text" style={{ marginTop: "45px", marginBottom: "100px" }}>
                <div className="ui card fluid">
                    <div className="content">
                        <div className="header">
                            <h1>"{post.title}"</h1>
                        </div>
                    </div>
                    <div className="content">
                        <p style={{ fontSize: "20px" }}>{post.body}</p>
                    </div>
                    <div className='extra content'>
                        <i aria-hidden='true' className='calendar large icon' />Created on: {post.createdAt.slice(0,10)}
                        <div className="ui divider"></div>
                        <Link to='/profile' className="ui fade animated teal button">
                            <div className='visible content'>Back to Profile</div>
                            <div className='hidden content'><i className='arrow left icon'></i> </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowPost
