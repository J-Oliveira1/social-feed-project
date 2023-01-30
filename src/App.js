import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost.jsx';

function App() {

  const [entries, setEntries] = useState([])

  return (
    <div>
      <h3>Social Feed</h3>
      <CreatePost/>


    </div>
  );
}

export default App;
