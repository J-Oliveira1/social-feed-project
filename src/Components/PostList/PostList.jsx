import React, { useState } from "react";
import Post from "../Post/Post.jsx";

const PostList = (props) => {
  let posts = props.newPosts.map((post) => {
    return <Post post={post} />;
  });
  return <div>{posts}</div>;
};

export default PostList;
