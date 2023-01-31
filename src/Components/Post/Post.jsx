import React, { useState } from "react";
import { Collapse } from "bootstrap";


const Post = (props) => {

    const [likeStatus, setLikedStatus] = useState(false);
    const [dislikedStatus, setDislikedStatus] = useState(false);

    function hitLike(){
        setLikedStatus(!likeStatus);
        if(dislikedStatus){setDislikedStatus(false);}
    }

    function hitDislike(){
        setDislikedStatus(!dislikedStatus);
        if(likeStatus){setLikedStatus(false);}
    }


  return (
    <div>
      <h3>{props.post.name}</h3>
      <p>{props.post.post}</p>
      <div>
        <button className={"btn px-1 : btn-lg " + (likeStatus ? "-fill text-primary" : "")} onClick={()=> hitLike()}>Like</button>
        <button className={"btn px-1 : btn-lg " + (dislikedStatus ? "-fill text-primary" : "")} onClick={()=> hitDislike()}>Dislike</button>
        
      </div>
    </div>
  );
};

export default Post;
