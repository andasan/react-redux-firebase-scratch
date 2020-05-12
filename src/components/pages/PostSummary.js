import React from 'react';
import { Link } from 'react-router-dom';

const PostSummary = (props) => {
    return (
        <div className="card z-depth-0 post-summary">
            <div className="card-content grey-text text-darken-3">
                <Link className="card-title" to={{
                    pathname: `blog/${props.id}`,
                    state: props
                }}>{props.title}</Link>
                <p>Posted by the NN</p>
                <p className="grey-text">3/3/2020</p>
            </div>
        </div>
    );
};

export default PostSummary;