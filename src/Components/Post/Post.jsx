import React, { useState } from "react";
import { Collapse } from "bootstrap";
import './Post.css'




const Post = (props) => {

    const [likeStatus, setLikedStatus] = useState(false);
    const [dislikedStatus, setDislikedStatus] = useState(false);

    function hitLike(){
        setLikedStatus(!likeStatus);
        
    }

    function hitDislike(){
        setDislikedStatus(!dislikedStatus);
        
    }


  return (
    <div className="post-border post-info border2 ">
      <h3>{props.post.name}</h3>
      <p>{props.post.post}</p>
      <div className="create-button">
        <button className={"btn px-1  btn-lg " + (likeStatus ? "-fill text-primary" : "")} onClick={()=> hitLike()}>Like</button>
        <button className={"btn px-1  btn-lg " + (dislikedStatus ? "-fill text-primary" : "")} onClick={()=> hitDislike()}>Dislike</button>
        
      </div>
    </div>
  );
};

export default Post;
