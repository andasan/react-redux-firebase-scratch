import React from 'react';
import PostSummary from './PostSummary';

const PostList = ({postList}) => {
    return (
        <div className="post-list section">
            {postList && postList.map(post => (
                <PostSummary key={post.id} eachPost={post} />
            ))}
        </div>
    );
};

export default PostList;