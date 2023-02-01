import React, { useState } from "react";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm.jsx";
import PostList from "./Components/PostList/PostList.jsx"; 
import './App.css'

function App() {
  const [posts, setPost] = useState([
    { name: "Joseph Oliveira", post: "Charlie Day, bird law!" },
  ]);

  function newPosts(post) {
    let newPosts = [...posts, post];
    setPost(newPosts);
  }

  return (
    <div>
      <header className="container-fluid border-box">
        <h3 style={{margin: '1em'}}>Social
        <large className="text-muted">Feed</large></h3>
      </header>
      <div className="flex-container  border-box flex-wrap ">
        <CreatePostForm addNewPostProp={newPosts} />
      </div>
      <div className="flex-container  flex-wrap border-box">
        <PostList newPosts={posts} />
      </div>
    </div>
  );
}

export default App;
