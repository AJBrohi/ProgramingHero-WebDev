import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {cid} = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState({});
    
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${cid}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));
    },[cid]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${cid}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data));
    },[cid])
    return (
        <div>
            <h3>This is post detail {cid}</h3>
            <h1>Title: {post.title}</h1>
            <p>{post.body}</p>
            <p>Number of comments: {comments.length}</p>
            {
                comments.map(cmnt => <Comment comment={cmnt}></Comment>)
            }
        </div>
    );
};

export default PostDetail;