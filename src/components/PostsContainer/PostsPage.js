//Complete the necessary code in this file

import React from "react";
import Post from "./Post";
import "./Posts.css";

import dummyData from "/Users/Clancy Baker/Desktop/lambdawork/React-Components-Insta-Clone/src/dummy-data.js";
// import data

const PostsPage = () => {
  return (
    <div className="posts-container-wrapper">
      {dummyData.map((post, i) => (
        <Post post={post} key={i} />
      ))}
    </div>
  );
};

export default PostsPage;
