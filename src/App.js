import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm.jsx';
import PostList from './Components/PostList/PostList.jsx';



function App() {

  const [posts, setPost] = useState([{name: 'Joseph Oliveira', post: 'Charlie Day, bird law!'}]);

  function newPosts(post) {
    let newPosts = [post, ...posts];
    setPost(newPosts);
  }

  return (
    <div>
      <h3>SocialFeed</h3>
      <CreatePostForm addNewPostProp={newPosts}/>
      <PostList newPosts={posts}/>
    </div>

  );
}

export default App;
