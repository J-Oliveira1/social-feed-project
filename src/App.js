import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm.jsx';
import PostList from './Components/PostList/PostList.jsx';


function App() {

  const [post, setPost] = useState([{name: 'Joseph Oliveira', post: 'Charlie Day, bird law!'}]);

  function addNewPost(post) {
    let newPosts = [post, ...post];
    setPost(newPosts);
  }

  return (
    <div>
      <h3>SocialFeed</h3>
      <CreatePostForm addNewPostProp={addNewPost}/>
      <PostList post={post}/>
    </div>

  );
}

export default App;
