import React, { useState } from "react";

const CreatePostForm = (props) => {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");

  const handleCreate = (e) => {
    e.preventDefault();
    alert(`${name} 
        Post Created!`);
    let newEntry = {
      name: name,
      post: post,
    };
    props.addNewPostProp(newEntry);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePost = (e) => {
    setPost(e.target.value);
  };

  return (
    <form className="border2 col-6" onSubmit={handleCreate}>
      <div className=" post-info ">
        <div >
          <label>Name</label>
          <input type="text" value={name} onChange={handleName} />
        </div>
        <div>
          <label htmlFor="">Post</label>
          <textarea type="text" value={post} onChange={handlePost} />
        </div>
        <div className="create-button">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ "margin-top": "1em" }}
          >
            Create
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreatePostForm;
