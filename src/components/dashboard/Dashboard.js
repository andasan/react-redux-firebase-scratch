import React from 'react';
import Notification from "./Notifications";
import PostList from "../pages/PostList";
import { connect } from "react-redux";

const Dashboard = ({posts}) => {
    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <PostList postList={posts} />
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notification />

                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        posts : state.post.posts
    }
}

export default connect(mapStateToProps)(Dashboard);