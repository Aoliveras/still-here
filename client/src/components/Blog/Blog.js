import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class Blog extends Component {
    state = {
        posts:[]
    }

    async componentDidMount() {
        let res = await Axios.get('/posts');
        let { posts } = res.data;
        console.log(posts);
        this.setState({ posts });

    }
    render() {
        let { posts } = this.setState;
        console.log(posts);
    return (
        <div className="ui center aligned container" style={{ marginTop: "45px" }}>
          <h1>Penny for your thoughts?</h1>
          <h3>Sharing your thoughts can be healing for you and others.</h3>
          <Link to='/createPost' className="ui button primary">Create a post</Link>
        </div>
    )
    }
}

export default Blog