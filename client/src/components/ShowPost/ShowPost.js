import React, {Component} from 'react';
import httpClient from '../../utilities/httpClient';
//import { Link } from 'react-router-dom';


//make stateful

//define state var of post to null

//use component did mount 
    //fetch post using httpclient

class ShowPost extends Component {

    state = {
        post: null
    }

    async componentDidMount() {
        let { id } = this.props.match.params;
        let res = await httpClient({ url: `/posts/${id}`, method: "GET" });
        // console.log(res);
        debugger
        this.setState({ post: res.data.payload });


        // console.log(id)
    }

    render() {
        let { post } = this.state;
        if (!post) return <div></div>
        return (
            <div className="ui center aligned container">
                <h1>{post.title}</h1>
            </div>
        )
    }
}

export default ShowPost
