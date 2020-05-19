import React from 'react';
import Notification from "./Notifications";
import PostList from "../pages/PostList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

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
    console.log(state.firestore.ordered.posts);
    return{
        posts : state.firestore.ordered.posts
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'posts'
    }])
)(Dashboard);