import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            error: null
        };
    }

    loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                const loadedPosts = data.map(post => new Post(post.id, post.title, post.body));
                this.setState({ posts: loadedPosts });
            })
            .catch(err => {
                this.setState({ error: err.message });
            });
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, info) {
        alert("An error occurred: " + error);
    }

    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h2>Blog Posts</h2>
                {this.state.posts.map(post => (
                    <div key={post.id} style={{ marginBottom: "20px", borderBottom: "1px solid #ccc" }}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
                {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
            </div>
        );
    }

}

export default Posts;
